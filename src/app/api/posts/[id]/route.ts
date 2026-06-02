import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@lib/prisma';

/**
 * GET /api/posts/:id - Get a single post
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: params.id },
      include: {
        author: true,
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
        comments: {
          where: { status: 'APPROVED' },
          include: { user: true },
        },
        analytics: true,
      },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Increment view count
    await prisma.postAnalytics.upsert({
      where: { postId: params.id },
      create: {
        postId: params.id,
        totalViews: 1,
      },
      update: {
        totalViews: { increment: 1 },
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: post,
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
 * PUT /api/posts/:id - Update a post
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const post = await prisma.post.update({
      where: { id: params.id },
      data: body,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Post updated successfully',
        data: post,
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
 * DELETE /api/posts/:id - Delete a post
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.post.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Post deleted successfully',
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
