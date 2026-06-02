'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { DataTable } from '@components/admin/DataTable';

const categories = [
  { id: 1, name: 'Technology', slug: 'technology', posts: 24, color: '#3B82F6' },
  { id: 2, name: 'Design', slug: 'design', posts: 18, color: '#10B981' },
  { id: 3, name: 'Business', slug: 'business', posts: 12, color: '#F59E0B' },
];

const columns = [
  { key: 'name', label: 'Name', width: 'w-1/3' },
  { key: 'slug', label: 'Slug', width: 'w-1/3' },
  { key: 'posts', label: 'Posts', width: 'w-1/6' },
  { key: 'actions', label: 'Actions', width: 'w-1/6' },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Categories</h1>
          <p className="text-foreground/60">Manage post categories</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
          <Plus className="w-5 h-5" />
          <span>New Category</span>
        </button>
      </div>

      {/* Table */}
      <div className="border border-border rounded-lg bg-card overflow-hidden">
        <DataTable
          columns={columns}
          data={categories}
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
