import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authors',
  description: 'Meet our team of writers',
};

export default function AuthorsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Authors</h1>
          <p className="text-foreground/60">Discover talented writers and their works</p>
        </div>

        {/* Authors Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Author {i}</h3>
              <p className="text-foreground/60 text-sm mb-4">Full Stack Developer & Writer</p>
              <p className="text-sm text-foreground/50">12 articles • 2.3K followers</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
