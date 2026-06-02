export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-foreground/60">Discover our latest articles and insights.</p>
        </div>

        {/* Placeholder */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border border-border rounded-lg p-4 h-64 bg-muted animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
