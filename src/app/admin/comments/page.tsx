'use client';

import { Check, X } from 'lucide-react';
import { DataTable } from '@components/admin/DataTable';

const comments = [
  { id: 1, author: 'John Doe', post: 'Getting Started with Next.js', status: 'PENDING', date: '2024-06-02' },
  { id: 2, author: 'Jane Smith', post: 'Advanced TypeScript Patterns', status: 'APPROVED', date: '2024-06-01' },
  { id: 3, author: 'Mike Johnson', post: 'SEO Best Practices', status: 'PENDING', date: '2024-05-31' },
];

const columns = [
  { key: 'author', label: 'Author', width: 'w-1/4' },
  { key: 'post', label: 'Post', width: 'w-1/3' },
  { key: 'status', label: 'Status', width: 'w-1/6' },
  { key: 'date', label: 'Date', width: 'w-1/6' },
  { key: 'actions', label: 'Actions', width: 'w-1/6' },
];

export default function CommentsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Comments</h1>
        <p className="text-foreground/60">Moderate and manage comments</p>
      </div>

      {/* Table */}
      <div className="border border-border rounded-lg bg-card overflow-hidden">
        <DataTable
          columns={columns}
          data={comments}
          renderCell={(item, key) => {
            if (key === 'status')
              return (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'APPROVED'
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
                  <button className="p-2 text-green-600 hover:bg-green-500/20 rounded transition-colors">
                    <Check className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-500/20 rounded transition-colors">
                    <X className="w-4 h-4" />
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
