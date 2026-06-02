'use client';

import { BarChart3, FileText, MessageSquare, Users } from 'lucide-react';
import { StatCard } from '@components/admin/StatCard';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-foreground/60">Welcome back! Here's your blog performance overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        <StatCard
          title="Total Posts"
          value="124"
          change="+12 this month"
          icon={FileText}
        />
        <StatCard
          title="Published"
          value="98"
          change="+5 this week"
          icon={BarChart3}
        />
        <StatCard
          title="Comments"
          value="342"
          change="+28 today"
          icon={MessageSquare}
        />
        <StatCard
          title="Active Users"
          value="1,245"
          change="+123 this month"
          icon={Users}
        />
      </div>

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Views Chart */}
        <div className="border border-border rounded-lg p-6 bg-card">
          <h2 className="text-lg font-semibold mb-4">Views Over Time</h2>
          <div className="h-64 flex items-end justify-center space-x-2">
            {[40, 60, 50, 80, 70, 90, 75].map((height, i) => (
              <div
                key={i}
                className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        {/* Engagement Chart */}
        <div className="border border-border rounded-lg p-6 bg-card">
          <h2 className="text-lg font-semibold mb-4">Engagement Metrics</h2>
          <div className="space-y-4">
            {[
              { label: 'Page Views', value: 4821, percentage: 80 },
              { label: 'Unique Visitors', value: 2543, percentage: 65 },
              { label: 'Comments', value: 1289, percentage: 45 },
              { label: 'Shares', value: 892, percentage: 35 },
            ].map((metric) => (
              <div key={metric.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{metric.label}</span>
                  <span className="text-sm text-foreground/60">{metric.value}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="border border-border rounded-lg p-6 bg-card">
        <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
        <div className="space-y-3">
          {[
            { title: 'Getting Started with Next.js', views: 234, status: 'Published' },
            { title: 'Advanced TypeScript Patterns', views: 189, status: 'Published' },
            { title: 'SEO Best Practices', views: 156, status: 'Draft' },
          ].map((post, i) => (
            <div key={i} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div>
                <p className="font-medium">{post.title}</p>
                <p className="text-sm text-foreground/60">{post.views} views</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  post.status === 'Published'
                    ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                    : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
                }`}
              >
                {post.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
