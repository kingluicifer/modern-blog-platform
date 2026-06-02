'use client';

import { AdminSidebar } from '@components/admin/Sidebar';
import { AdminHeader } from '@components/admin/AdminHeader';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <AdminSidebar />
      <main className="ml-64 mt-16 p-6">{children}</main>
    </div>
  );
}
