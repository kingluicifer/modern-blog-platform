// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type Theme = 'light' | 'dark';

export interface UserPreferences {
  theme: Theme;
  notificationsEnabled: boolean;
  emailNotifications: boolean;
  fontSize: 'small' | 'medium' | 'large';
  lineHeight: 'tight' | 'normal' | 'relaxed';
}

export interface PostMetadata {
  views: number;
  likes: number;
  comments: number;
  shares: number;
  readingTime: number;
  readingLevel: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: string;
  twitterCard: string;
  canonicalUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    bio: string;
  };
  categories: Category[];
  tags: Tag[];
  publishedAt: Date;
  updatedAt: Date;
  readingTime: number;
  views: number;
  seo: SEOMetadata;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
  postCount?: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  postCount?: number;
}

export interface Author {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  socialLinks?: Record<string, string>;
  postCount?: number;
  followerCount?: number;
}

export interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: Date;
  likes: number;
  replies: Comment[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasMore: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
