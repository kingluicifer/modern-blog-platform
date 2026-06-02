import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our mission and team.',
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-foreground/60">
            We are building the next generation of blog platforms.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert">
          <p>
            Modern Blog Platform is designed and built by a team of world-class engineers and
            designers dedicated to creating the best content publishing experience.
          </p>

          <h2>Our Mission</h2>
          <p>To empower creators with the tools they need to share their ideas with the world.</p>

          <h2>Our Values</h2>
          <ul>
            <li>Quality - We prioritize excellence in everything we do</li>
            <li>Innovation - We embrace cutting-edge technology</li>
            <li>Accessibility - We make our platform available to everyone</li>
            <li>Security - We protect our users' data with industry-leading practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
