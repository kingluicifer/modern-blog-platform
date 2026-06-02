import { z } from 'zod';

// Auth Validators
export const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  username: z.string().min(3, 'Username must be at least 3 characters').max(20),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().optional(),
});

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Post Validators
export const createPostSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(200),
  excerpt: z.string().max(500).optional(),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  slug: z.string().optional(),
  featuredImage: z.string().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'SCHEDULED', 'ARCHIVED']).default('DRAFT'),
  categories: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
  seoKeywords: z.string().optional(),
  allowComments: z.boolean().default(true),
});

// Category Validators
export const createCategorySchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  slug: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
  color: z.string().optional(),
});

// Tag Validators
export const createTagSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  slug: z.string().optional(),
  description: z.string().optional(),
  color: z.string().optional(),
});

// Comment Validators
export const createCommentSchema = z.object({
  content: z.string().min(1, 'Comment cannot be empty').max(1000),
  postId: z.string(),
  parentId: z.string().optional(),
});

// Newsletter Validators
export const subscribeNewsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  frequency: z.enum(['daily', 'weekly', 'monthly']).default('weekly'),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type CreatePostInput = z.infer<typeof createPostSchema>;
export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type CreateTagInput = z.infer<typeof createTagSchema>;
export type CreateCommentInput = z.infer<typeof createCommentSchema>;
export type SubscribeNewsletterInput = z.infer<typeof subscribeNewsletterSchema>;
