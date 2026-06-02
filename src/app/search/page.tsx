'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    // TODO: Implement search logic
    setIsSearching(false);
  };

  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        {/* Search Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Search Articles</h1>
          <p className="text-foreground/60 mb-6">Find articles by title, content, or tags</p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-lg"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Results */}
        {isSearching ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <p className="mt-4 text-foreground/60">Searching...</p>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-4">
            {results.map((result) => (
              <div key={result.id} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{result.title}</h3>
                <p className="text-foreground/60 mb-4">{result.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-foreground/50">
                  <span>{result.author}</span>
                  <span>•</span>
                  <span>{result.date}</span>
                </div>
              </div>
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12">
            <p className="text-lg text-foreground/60">No results found for "{query}"</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
