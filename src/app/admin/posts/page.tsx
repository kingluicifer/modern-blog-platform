'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { DataTable } from '@components/admin/DataTable';

const posts = [
  { id: 1, title: 'Getting Started with Next.js', author: 'John Doe', status: 'Published', views: 234, date: '2024-06-01' },
  { id: 2, title: 'Advanced TypeScript Patterns', author: 'Jane Smith', status: 'Draft', views: 0, date: '2024-05-31' },
  { id: 3, title: 'SEO Best Practices 2024', author: 'Mike Johnson', status: 'Published', views: 1203, date: '2024-05-30' },
];

const columns = [
  { key: 'title', label: 'Title', width: 'w-1/3' },
  { key: 'author', label: 'Author', width: 'w-1/5' },
  { key: 'status', label: 'Status', width: 'w-1/5' },
  { key: 'views', label: 'Views', width: 'w-1/6' },
  { key: 'actions', label: 'Actions', width: 'w-1/6' },
];

export default function PostsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Posts</h1>
          <p className="text-foreground/60">Manage your blog posts</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="w-5 h-5" />
          <span>New Post</span>
        </Link>
      </div>

      {/* Table */}
      <div className="border border-border rounded-lg bg-card overflow-hidden">
        <DataTable
          columns={columns}
          data={posts}
          currentPage={currentPage}
          totalPages={3}
          onPageChange={setCurrentPage}
          renderCell={(item, key) => {
            if (key === 'status')
              return (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Published'
                      ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                      : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
                  }`}
                >
                  {item.status}
                </span>
              );
            if (key === 'actions')
              return (
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-foreground/70 hover:text-foreground transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-foreground/70 hover:text-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            return item[key];
          }}
        />
      </div>
    </div>
  );
}
