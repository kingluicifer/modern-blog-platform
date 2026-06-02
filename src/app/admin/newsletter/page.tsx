'use client';

import { Mail, Send } from 'lucide-react';
import { StatCard } from '@components/admin/StatCard';

export default function NewsletterPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Newsletter</h1>
        <p className="text-foreground/60">Manage newsletter campaigns and subscribers</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Total Subscribers" value="2,543" change="+234 this month" icon={Mail} />
        <StatCard title="Active Campaigns" value="5" change="3 scheduled" icon={Send} />
        <StatCard title="Open Rate" value="34.2%" change="+2.1% this month" icon={Mail} />
      </div>

      {/* Recent Subscribers */}
      <div className="border border-border rounded-lg p-6 bg-card">
        <h2 className="text-lg font-semibold mb-4">Recent Subscribers</h2>
        <div className="space-y-3">
          {[
            { email: 'subscriber1@example.com', date: '2024-06-02', status: 'Verified' },
            { email: 'subscriber2@example.com', date: '2024-06-01', status: 'Pending' },
            { email: 'subscriber3@example.com', date: '2024-05-31', status: 'Verified' },
          ].map((sub, i) => (
            <div key={i} className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">{sub.email}</p>
                <p className="text-sm text-foreground/60">{sub.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                sub.status === 'Verified'
                  ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                  : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
              }`}>
                {sub.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
