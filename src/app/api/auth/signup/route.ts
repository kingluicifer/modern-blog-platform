import { NextRequest, NextResponse } from 'next/server';
import { signUpSchema } from '@lib/validators';
import { createUser } from '@services/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = signUpSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', issues: validation.error.issues },
        { status: 400 }
      );
    }

    // Create user
    const user = await createUser(validation.data);

    return NextResponse.json(
      {
        success: true,
        message: 'User created successfully',
        data: {
          id: user.id,
          email: user.email,
          username: user.username,
        },
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
