'use client';

import { Save } from 'lucide-react';
import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: 'Modern Blog Platform',
    siteDescription: 'Enterprise-grade blog platform',
    enableComments: true,
    enableNewsletter: true,
    enableAnalytics: true,
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-foreground/60">Manage your blog settings and configuration</p>
      </div>

      {/* Settings Form */}
      <div className="max-w-2xl space-y-6">
        {/* General Settings */}
        <div className="border border-border rounded-lg p-6 bg-card">
          <h2 className="text-lg font-semibold mb-4">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Site Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Site Description</label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
          </div>
        </div>

        {/* Feature Toggles */}
        <div className="border border-border rounded-lg p-6 bg-card">
          <h2 className="text-lg font-semibold mb-4">Features</h2>
          <div className="space-y-4">
            {[
              { key: 'enableComments', label: 'Enable Comments' },
              { key: 'enableNewsletter', label: 'Enable Newsletter' },
              { key: 'enableAnalytics', label: 'Enable Analytics' },
            ].map((feature) => (
              <label key={feature.key} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings[feature.key as keyof typeof settings] as boolean}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      [feature.key]: e.target.checked,
                    })
                  }
                  className="w-4 h-4 rounded border-border"
                />
                <span className="text-sm font-medium">{feature.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
          <Save className="w-5 h-5" />
          <span>Save Settings</span>
        </button>
      </div>
    </div>
  );
}
