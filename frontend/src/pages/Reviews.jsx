import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Mallikarjun Hiremath",
      rating: 5,
      date: "2 months ago",
      text: "Sagar Electricals provides reliable and professional electrical services. Their team arrived on time and fixed our switchboard issue cleanly.",
    },
    {
      id: 2,
      name: "Akshay A",
      rating: 5,
      date: "3 weeks ago",
      text: "Good and timely services. Highly recommended for any emergency electrical work in Belagavi.",
    },
    {
      id: 3,
      name: "Priya S",
      rating: 5,
      date: "1 month ago",
      text: "Very professional and knowledgeable electricians. They rewired our entire office spacing with minimal disruption.",
    },
    {
      id: 4,
      name: "Ramesh Kumar",
      rating: 5,
      date: "4 months ago",
      text: "Affordable and transparent pricing. I called them at 2 AM for a power outage issue and they were here within 30 minutes! Truly 24/7 service.",
    }
  ];

  return (
    <div id="reviews" className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex gap-1 text-sagar-yellow bg-blue-50 px-4 py-2 rounded-full">
               {[1,2,3,4,5].map(i => <Star key={i} className="fill-current w-5 h-5"/>)}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-sagar-blue mb-4 tracking-tight">
            Customer Reviews
          </h1>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. See what our satisfied customers have to say about our 5.0 ⭐ services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-sagar-light p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-100 fill-current -z-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-1 text-sagar-yellow mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                  <div className="w-10 h-10 bg-sagar-blue text-white rounded-full flex items-center justify-center font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sagar-blue">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Reviews;
