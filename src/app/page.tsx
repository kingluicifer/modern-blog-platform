import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 lg:py-40">
        <div className="container">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-muted px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium">Welcome to Modern Blog Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Premium Content Publishing{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Redefined
              </span>
            </h1>

            <p className="text-xl text-foreground/60 text-balance mb-8 max-w-2xl mx-auto">
              Experience the next generation of blog platforms. Built for creators, optimized for
              readers, powered by cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Start Reading
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Lightning Fast',
                description: 'Built on Next.js with server components for optimal performance.',
              },
              {
                title: 'SEO Optimized',
                description: 'Enterprise-grade SEO features to rank higher in search results.',
              },
              {
                title: 'Beautiful Design',
                description: 'Modern, responsive design that works perfectly on all devices.',
              },
            ].map((feature, i) => (
              <div key={i} className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
