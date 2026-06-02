'use client';

import { LucideIcon } from 'lucide-react';
import { cn } from '@lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  className,
}: StatCardProps) {
  const isPositive = change?.startsWith('+');

  return (
    <div className={cn('border border-border rounded-lg p-6 bg-card', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-foreground/60 mb-2">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {change && (
            <p
              className={cn(
                'text-sm mt-2',
                isPositive ? 'text-green-600' : 'text-red-600'
              )}
            >
              {change}
            </p>
          )}
        </div>
        <div className="p-2 rounded-lg bg-muted">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}
