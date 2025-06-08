import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MessageCircle } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    { name: "John D.", quote: "Crystal made tax season so easy! Everything was handled professionally and virtually. Highly recommend!", rating: 5 },
    { name: "Sarah P.", quote: "As a small business owner, taxes used to be a nightmare. C. Free Virtual Tax Services simplified everything. Great communication!", rating: 5 },
    { name: "Mike B.", quote: "Fast, efficient, and got me a great refund. The Intuit Link system was very secure and easy to use.", rating: 4 },
  ];

  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-12">
        <div className="inline-block p-3 bg-brand-java/20 rounded-full mb-4 mx-auto">
          <MessageCircle size={40} className="text-brand-java" />
        </div>
        <h1 className="text-4xl font-bold gradient-text">Client Success Stories</h1>
        <p className="text-xl text-description mt-2">Hear what our clients have to say about their experience.</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col justify-between hover:shadow-brand-java/20 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <CardTitle className="text-brand-java text-xl">{testimonial.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-main italic">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-description py-12">
        More testimonials coming soon! We value our clients' feedback.
      </p>
    </div>
  );
};

export default TestimonialsPage;