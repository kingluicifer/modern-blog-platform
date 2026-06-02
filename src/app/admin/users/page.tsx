'use client';

import { Plus, Edit2, Trash2 } from 'lucide-react';
import { DataTable } from '@components/admin/DataTable';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'AUTHOR', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'EDITOR', status: 'Active' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'USER', status: 'Inactive' },
];

const columns = [
  { key: 'name', label: 'Name', width: 'w-1/4' },
  { key: 'email', label: 'Email', width: 'w-1/3' },
  { key: 'role', label: 'Role', width: 'w-1/6' },
  { key: 'status', label: 'Status', width: 'w-1/6' },
  { key: 'actions', label: 'Actions', width: 'w-1/6' },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Users</h1>
          <p className="text-foreground/60">Manage platform users</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
          <Plus className="w-5 h-5" />
          <span>New User</span>
        </button>
      </div>

      {/* Table */}
      <div className="border border-border rounded-lg bg-card overflow-hidden">
        <DataTable
          columns={columns}
          data={users}
          renderCell={(item, key) => {
            if (key === 'role')
              return <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">{item.role}</span>;
            if (key === 'status')
              return (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Active'
                      ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                      : 'bg-gray-500/20 text-gray-700 dark:text-gray-400'
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
