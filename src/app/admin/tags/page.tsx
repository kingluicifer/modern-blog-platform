'use client';

import { Plus, Edit2, Trash2 } from 'lucide-react';
import { DataTable } from '@components/admin/DataTable';

const tags = [
  { id: 1, name: 'React', slug: 'react', posts: 15 },
  { id: 2, name: 'TypeScript', slug: 'typescript', posts: 12 },
  { id: 3, name: 'Next.js', slug: 'nextjs', posts: 10 },
];

const columns = [
  { key: 'name', label: 'Name', width: 'w-1/3' },
  { key: 'slug', label: 'Slug', width: 'w-1/3' },
  { key: 'posts', label: 'Posts', width: 'w-1/6' },
  { key: 'actions', label: 'Actions', width: 'w-1/6' },
];

export default function TagsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Tags</h1>
          <p className="text-foreground/60">Manage post tags</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
          <Plus className="w-5 h-5" />
          <span>New Tag</span>
        </button>
      </div>

      {/* Table */}
      <div className="border border-border rounded-lg bg-card overflow-hidden">
        <DataTable
          columns={columns}
          data={tags}
          renderCell={(item, key) => {
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
