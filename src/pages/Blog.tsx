import React from 'react';
import { Calendar, User, ArrowRight, TrendingUp, Target, Users, BookOpen } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Ultimate Guide to Lead Scoring in 2025",
    excerpt: "Discover how AI-powered lead scoring can transform your sales process and increase conversion rates by up to 40%.",
    author: "Sarah Johnson",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Lead Management",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  const blogPosts = [
    {
      title: "5 Signs Your CRM Needs a Lead Management System",
      excerpt: "Learn the key indicators that show when it's time to upgrade your lead management process.",
      author: "Michael Chen",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "CRM Integration",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Automating Sales Follow-ups: Best Practices",
      excerpt: "Discover how to create effective automated workflows that nurture leads without losing the personal touch.",
      author: "Lisa Rodriguez",  
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Sales Automation",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "ROI Calculation for Lead Management Systems",
      excerpt: "A comprehensive guide to measuring and maximizing the return on investment from your iLMS implementation.",
      author: "David Kim",
      date: "January 8, 2025",
      readTime: "5 min read",
      category: "ROI & Analytics",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Pipeline Management: From Chaos to Clarity",
      excerpt: "Transform your sales pipeline with proven strategies for better visibility and forecasting accuracy.",
      author: "Jennifer Walsh",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "Pipeline Management",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "B2B Lead Generation Trends for 2025",
      excerpt: "Stay ahead of the curve with the latest trends and technologies shaping B2B lead generation.",
      author: "Robert Taylor",
      date: "January 3, 2025",
      readTime: "8 min read",
      category: "Lead Generation",
      image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Integration Success: Connecting Your Sales Stack",
      excerpt: "Learn how to seamlessly integrate your lead management system with existing tools and workflows.",
      author: "Amanda Foster",
      date: "December 30, 2024",
      readTime: "6 min read",
      category: "Integrations",
      image: "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const categories = [
    { name: "Lead Management", count: 12, icon: Target },
    { name: "Sales Automation", count: 8, icon: TrendingUp },
    { name: "CRM Integration", count: 6, icon: Users },
    { name: "ROI & Analytics", count: 5, icon: BookOpen }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              iLMS Insights &
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Best Practices</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay ahead with the latest insights, trends, and strategies in lead management, sales automation, and B2B growth.
            </p>
            <a
              href="https://salescentri.com/resources/whitepapers-ebooks"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Download Resources</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12">
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured Article
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <a
                    href="https://salescentri.com/resources/whitepapers-ebooks"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={20} />
                  </a>
                </div>
                
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
              <p className="text-lg text-gray-600">Find content tailored to your specific interests</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <a
                    key={index}
                    href="https://salescentri.com/resources/whitepapers-ebooks"
                    className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} articles</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-600">Expert insights to help you maximize your lead management success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <a
                        href="https://salescentri.com/resources/whitepapers-ebooks"
                        className="flex items-center space-x-1 text-blue-600 font-medium hover:space-x-2 transition-all"
                      >
                        <span>Read More</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://salescentri.com/resources/whitepapers-ebooks"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>View All Articles</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stay Updated with iLMS Insights
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest lead management tips, industry trends, and product updates delivered to your inbox.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="max-w-md mx-auto">
                <div className="flex space-x-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <a
                    href="https://salescentri.com/resources/whitepapers-ebooks"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 whitespace-nowrap"
                  >
                    Subscribe
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Join 5,000+ sales professionals. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Put These Insights to Work?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start implementing these strategies with our powerful iLMS platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Book Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;