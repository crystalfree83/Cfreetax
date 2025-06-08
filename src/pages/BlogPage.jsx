import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rss } from 'lucide-react';

const BlogPage = () => {
  const categories = ["Tax Tips", "Small Business", "Earned Income Credit", "Pay by Refund", "Understanding W-2s"];
  
  const samplePosts = [
    { title: "Top 5 Tax Deductions You Might Be Missing", category: "Tax Tips", date: "2025-05-15", excerpt: "Learn about common deductions to maximize your refund..." },
    { title: "Understanding Your W-2 Form: A Simple Guide", category: "Understanding W-2s", date: "2025-05-10", excerpt: "Breaking down each box on your W-2 form..." },
    { title: "Is 'Pay by Refund' Right for You?", category: "Pay by Refund", date: "2025-05-05", excerpt: "Exploring the pros and cons of paying tax prep fees with your refund..." },
  ];

  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-12">
        <div className="inline-block p-3 bg-brand-java/20 rounded-full mb-4 mx-auto">
          <Rss size={40} className="text-brand-java" />
        </div>
        <h1 className="text-4xl font-bold gradient-text">Tax Insights & News</h1>
        <p className="text-xl text-description mt-2">Stay informed with our latest articles and tips.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-java">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category}>
                    <a href="#" className="text-main hover:text-brand-green transition-colors">{category}</a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </aside>

        <main className="md:col-span-3 space-y-8">
          {samplePosts.map((post, index) => (
            <Card key={index} className="hover:shadow-brand-java/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-brand-java text-2xl">{post.title}</CardTitle>
                <CardDescription className="text-description text-sm">
                  {post.date} | In: <a href="#" className="text-brand-java hover:underline">{post.category}</a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-main mb-4">{post.excerpt}</p>
                <a href="#" className="text-brand-green hover:underline font-semibold">Read More &rarr;</a>
              </CardContent>
            </Card>
          ))}
          <p className="text-center text-description py-8">
            More blog posts coming soon! This section will be updated regularly.
          </p>
        </main>
      </div>
    </div>
  );
};

export default BlogPage;