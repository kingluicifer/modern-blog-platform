import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@lib/prisma';
import { createCommentSchema } from '@lib/validators';

/**
 * GET /api/comments - List comments
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const postId = searchParams.get('postId');
    const status = searchParams.get('status') || 'APPROVED';

    const comments = await prisma.comment.findMany({
      where: {
        ...(postId && { postId }),
        status,
      },
      include: {
        user: { select: { id: true, name: true, avatar: true } },
        replies: { include: { user: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      {
        success: true,
        data: comments,
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
 * POST /api/comments - Create a new comment
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = createCommentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', issues: validation.error.issues },
        { status: 400 }
      );
    }

    // Create comment
    const comment = await prisma.comment.create({
      data: {
        content: validation.data.content,
        postId: validation.data.postId,
        userId: 'user-id', // This should come from session
        parentId: validation.data.parentId,
        status: 'PENDING', // Comments require moderation by default
      },
      include: { user: true },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Comment created successfully',
        data: comment,
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
