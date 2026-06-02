// ============================================================================
// APPLICATION CONSTANTS
// ============================================================================

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Modern Blog Platform';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Enterprise-grade blog platform with SEO optimization';
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Pagination
export const POSTS_PER_PAGE = 12;
export const COMMENTS_PER_PAGE = 10;
export const SEARCH_RESULTS_PER_PAGE = 20;

// File Upload
export const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE || '5242880'); // 5MB
export const ALLOWED_UPLOAD_TYPES = (
  process.env.ALLOWED_UPLOAD_TYPES || 'image/jpeg,image/png,image/webp,application/pdf'
).split(',');

// Cache Duration (in seconds)
export const CACHE_DURATION = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  VERY_LONG: 86400, // 24 hours
  REVALIDATE_POSTS: 3600, // 1 hour for ISR
};

// Rate Limiting
export const RATE_LIMIT = {
  SEARCH: 30, // 30 requests
  SEARCH_WINDOW_MS: 60000, // per minute
  API: 100, // 100 requests
  API_WINDOW_MS: 60000, // per minute
  LOGIN: 5, // 5 attempts
  LOGIN_WINDOW_MS: 900000, // per 15 minutes
  COMMENT: 10, // 10 comments
  COMMENT_WINDOW_MS: 3600000, // per hour
};

// User Roles
export const USER_ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  AUTHOR: 'AUTHOR',
  MODERATOR: 'MODERATOR',
  USER: 'USER',
};

// Post Status
export const POST_STATUS = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  SCHEDULED: 'SCHEDULED',
  ARCHIVED: 'ARCHIVED',
};

// Comment Status
export const COMMENT_STATUS = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
};

// Sort Options
export const SORT_OPTIONS = {
  LATEST: 'latest',
  POPULAR: 'popular',
  TRENDING: 'trending',
  MOST_VIEWED: 'mostViewed',
  MOST_COMMENTED: 'mostCommented',
};

// ReadingTime Calculation
export const WORDS_PER_MINUTE = 200;

// SEO
export const SEO = {
  DEFAULT_TITLE: `${APP_NAME} - Premium Content Publishing Platform`,
  DEFAULT_DESCRIPTION: APP_DESCRIPTION,
  SITE_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  TWITTER_HANDLE: '@yourblog',
  OG_IMAGE_WIDTH: 1200,
  OG_IMAGE_HEIGHT: 630,
};

// Newsletter
export const NEWSLETTER_FREQUENCY = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
};

// Social Links
export const SOCIAL_PLATFORMS = ['twitter', 'github', 'linkedin', 'website', 'youtube', 'instagram'];

// Notification Types
export const NOTIFICATION_TYPES = {
  NEW_COMMENT: 'NEW_COMMENT',
  POST_PUBLISHED: 'POST_PUBLISHED',
  NEW_FOLLOWER: 'NEW_FOLLOWER',
  NEWSLETTER_SUBSCRIPTION: 'NEWSLETTER_SUBSCRIPTION',
  SYSTEM_ALERT: 'SYSTEM_ALERT',
};
