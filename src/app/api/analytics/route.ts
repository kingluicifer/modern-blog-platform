import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@lib/prisma';

/**
 * GET /api/analytics - Get analytics data
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const postId = searchParams.get('postId');
    const timeframe = searchParams.get('timeframe') || 'month'; // day, week, month, year

    if (postId) {
      // Get analytics for a specific post
      const analytics = await prisma.postAnalytics.findUnique({
        where: { postId },
      });

      return NextResponse.json(
        {
          success: true,
          data: analytics,
        },
        { status: 200 }
      );
    }

    // Get overall analytics
    const totalPosts = await prisma.post.count({ where: { status: 'PUBLISHED' } });
    const totalViews = await prisma.postAnalytics.aggregate({
      _sum: { totalViews: true },
    });
    const totalComments = await prisma.comment.count({ where: { status: 'APPROVED' } });
    const totalUsers = await prisma.user.count();

    return NextResponse.json(
      {
        success: true,
        data: {
          totalPosts,
          totalViews: totalViews._sum.totalViews || 0,
          totalComments,
          totalUsers,
        },
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
