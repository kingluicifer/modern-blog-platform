'use client';

import { useState } from 'react';
import { RichEditor } from '@components/admin/Editor';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [status, setStatus] = useState('DRAFT');

  const handleSave = async () => {
    // TODO: Save post logic
    console.log({ title, excerpt, content, slug, status });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/admin/posts" className="p-2 text-foreground/70 hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Create New Post</h1>
            <p className="text-foreground/60">Write and publish your content</p>
          </div>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          <Save className="w-5 h-5" />
          <span>Publish</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title..."
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium mb-2">Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief summary of your post..."
              rows={3}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium mb-2">Content</label>
            <RichEditor value={content} onChange={setContent} placeholder="Start writing your content..." />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold mb-4">Status</h3>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
              <option value="SCHEDULED">Scheduled</option>
            </select>
          </div>

          {/* Slug */}
          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold mb-4">Slug</h3>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="post-slug"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>

          {/* Categories */}
          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {['Technology', 'Design', 'Business'].map((cat) => (
                <label key={cat} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold mb-4">Tags</h3>
            <input
              type="text"
              placeholder="Add tags separated by commas"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
