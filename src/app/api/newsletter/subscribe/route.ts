import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@lib/prisma';
import { subscribeNewsletterSchema } from '@lib/validators';
import { v4 as uuidv4 } from 'uuid';

/**
 * POST /api/newsletter/subscribe - Subscribe to newsletter
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = subscribeNewsletterSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', issues: validation.error.issues },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existing = await prisma.newsletterSubscription.findUnique({
      where: { email: validation.data.email },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Already subscribed' },
        { status: 400 }
      );
    }

    // Create subscription
    const subscription = await prisma.newsletterSubscription.create({
      data: {
        email: validation.data.email,
        frequency: validation.data.frequency,
        unsubscribeToken: uuidv4(),
        verificationToken: uuidv4(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Subscribed successfully. Please check your email to verify.',
        data: { email: subscription.email },
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
