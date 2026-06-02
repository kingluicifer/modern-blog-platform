import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Browse posts by category',
};

export default function CategoriesPage() {
  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Categories</h1>
          <p className="text-foreground/60">Explore articles organized by topic</p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {['Technology', 'Design', 'Business', 'Marketing', 'Development', 'SEO'].map((cat) => (
            <div
              key={cat}
              className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">{cat}</h3>
              <p className="text-foreground/60 text-sm mb-4">24 articles</p>
              <div className="h-2 bg-muted rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
