import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@lib/prisma';
import { createTagSchema } from '@lib/validators';
import { slugify } from '@lib/utils';

/**
 * GET /api/tags - List all tags
 */
export async function GET(request: NextRequest) {
  try {
    const tags = await prisma.tag.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(
      {
        success: true,
        data: tags,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/tags - Create a new tag
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = createTagSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', issues: validation.error.issues },
        { status: 400 }
      );
    }

    const data = validation.data;
    const slug = data.slug || slugify(data.name);

    // Create tag
    const tag = await prisma.tag.create({
      data: {
        name: data.name,
        slug,
        description: data.description,
        color: data.color,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Tag created successfully',
        data: tag,
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
