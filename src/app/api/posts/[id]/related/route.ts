import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@lib/prisma';

/**
 * GET /api/posts/:id/related - Get related posts
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Get the main post with categories and tags
    const mainPost = await prisma.post.findUnique({
      where: { id: params.id },
      include: {
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
      },
    });

    if (!mainPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Get categories and tags
    const categoryIds = mainPost.categories.map((c) => c.category.id);
    const tagIds = mainPost.tags.map((t) => t.tag.id);

    // Find related posts by category or tags
    const relatedPosts = await prisma.post.findMany({
      where: {
        id: { not: params.id },
        status: 'PUBLISHED',
        OR: [
          {
            categories: {
              some: {
                categoryId: { in: categoryIds },
              },
            },
          },
          {
            tags: {
              some: {
                tagId: { in: tagIds },
              },
            },
          },
        ],
      },
      include: {
        author: { select: { id: true, name: true, avatar: true } },
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
      },
      take: 5,
      orderBy: { publishedAt: 'desc' },
    });

    return NextResponse.json(
      {
        success: true,
        data: relatedPosts,
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
