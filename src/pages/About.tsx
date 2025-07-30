import React from 'react';
import { Users, Target, Award, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Sales at Fortune 500 company with 15+ years of experience in B2B sales and lead management.",
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Ex-Google engineer with expertise in AI and machine learning. Led development of our proprietary lead scoring algorithm.",
      initials: "MC"
    },
    {
      name: "Lisa Rodriguez",
      role: "VP of Product",
      bio: "Product management veteran with deep understanding of sales workflows and customer needs.",
      initials: "LR"
    },
    {
      name: "David Kim",
      role: "Head of Customer Success",
      bio: "Dedicated to ensuring our clients achieve their sales goals with our iLMS platform.",
      initials: "DK"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Customer-Centric",
      description: "Everything we do is focused on helping our customers achieve better sales outcomes."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously innovate to stay ahead of the evolving sales technology landscape."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our company and with our clients."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we deliver, from product quality to customer service."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Apollo Marketing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're on a mission to revolutionize how B2B companies manage and convert their leads. Our intelligent Lead Management System (iLMS) helps sales teams work smarter, not harder.
            </p>
            <a
              href="https://salescentri.com/company/about-us"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To empower B2B sales teams with intelligent lead management technology that drives measurable results. We believe every lead has potential, and our job is to help you unlock it.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in 2020 in Albany, NY, Apollo Marketing Solutions has grown from a small startup to a trusted partner for thousands of sales professionals worldwide.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                    <div className="text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                    <div className="text-gray-600">Avg. Conversion Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Enterprise Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                    <div className="text-gray-600">Uptime SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">How we became the leading iLMS solution</p>
            </div>

            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2020</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Beginning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Founded by former sales executives who experienced firsthand the challenges of managing leads effectively. We saw the need for smarter, more intuitive lead management tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2021</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Product Launch</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Launched our first iLMS platform with AI-powered lead scoring. Within months, early adopters reported significant improvements in conversion rates.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2022</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expanded our team and added advanced features like pipeline management and automated workflows. Reached 1,000+ active users milestone.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2023</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Focus</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Introduced enterprise-grade security and compliance features. Started serving Fortune 500 companies and achieved SOC 2 certification.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2024</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AI Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Launched next-generation AI features including predictive analytics and intelligent automation. Now serving 10,000+ users worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
              <p className="text-xl text-gray-600">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
                    <span className="text-white font-bold text-xl">{member.initials}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://salescentri.com/company/about-us/leadership-team"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
              >
                <span>View Full Team</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-200">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 mb-8">
              Help us build the future of lead management technology
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">Remote-First</div>
                  <p className="text-gray-600">Work from anywhere in the world</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">Growth</div>
                  <p className="text-gray-600">Continuous learning opportunities</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">Impact</div>
                  <p className="text-gray-600">Make a difference in sales technology</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-gray-700">Competitive salary and equity</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-gray-700">Comprehensive health benefits</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-gray-700">Flexible PTO and work-life balance</span>
              </div>
            </div>

            <a
              href="https://salescentri.com/company/careers"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>View Open Positions</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our iLMS can transform your sales process
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule a Meeting
            </a>
            <a
              href="https://salescentri.com/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;