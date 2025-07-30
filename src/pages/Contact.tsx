import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    inquiry: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to sales inquiry form
    window.open('https://salescentri.com/contact/sales-inquiry', '_blank');
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      description: "Speak with our sales team",
      contact: "+1 (555) 012-3456",
      action: "Call Now",
      link: "tel:+15550123456"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Get in touch via email",
      contact: "info@apollo-marketing.com",
      action: "Send Email",
      link: "mailto:info@apollo-marketing.com"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Visit our Albany office",
      contact: "Albany, NY 12207",
      action: "Get Directions",
      link: "https://maps.google.com"
    }
  ];

  const inquiryTypes = [
    {
      title: "Sales Inquiry",
      description: "Questions about pricing, features, or demos",
      link: "https://salescentri.com/contact/sales-inquiry",
      color: "blue"
    },
    {
      title: "Support Request",
      description: "Technical support for existing customers",
      link: "https://salescentri.com/contact/support-request",
      color: "green"
    },
    {
      title: "Partnership",
      description: "Integration or partnership opportunities",
      link: "https://salescentri.com/contact/partnerships",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get in
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your lead management? Our team is here to help you get started with iLMS and answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book a Demo
              </a>
              <a
                href="https://salescentri.com/contact/support-request/live-chat"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
              <p className="text-xl text-gray-600">Choose the method that works best for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-blue-300 hover:shadow-lg transition-all duration-200">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="text-lg font-semibold text-gray-900 mb-4">{method.contact}</p>
                    <a
                      href={method.link}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <span>{method.action}</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Inquiry Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Can We Help You With?</h2>
              <p className="text-xl text-gray-600">Select your inquiry type for faster assistance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {inquiryTypes.map((inquiry, index) => {
                const colorClasses = {
                  blue: "border-blue-200 hover:border-blue-400 bg-blue-50",
                  green: "border-green-200 hover:border-green-400 bg-green-50",
                  purple: "border-purple-200 hover:border-purple-400 bg-purple-50"
                };

                return (
                  <a
                    key={index}
                    href={inquiry.link}
                    className={`block p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
                      colorClasses[inquiry.color as keyof typeof colorClasses]
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{inquiry.title}</h3>
                    <p className="text-gray-600 mb-4">{inquiry.description}</p>
                    <div className="flex items-center space-x-2 text-blue-600 font-medium">
                      <span>Get Started</span>
                      <ArrowRight size={16} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="demo">Request Demo</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tell us about your lead management needs..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Albany Office</h2>
              <p className="text-xl text-gray-600">Located in the heart of New York's Tech Valley</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Apollo Marketing Solutions</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">123 Tech Drive, Suite 100<br />Albany, NY 12207</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Office Hours</p>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST<br />Saturday - Sunday: Closed</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+1 (555) 012-3456</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                  >
                    <span>Get Directions</span>
                    <ArrowRight size={20} />
                  </a>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="text-blue-600" size={64} />
                    </div>
                    <p className="text-blue-800 font-medium">Albany, NY</p>
                    <p className="text-blue-600">New York's Tech Valley</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait - transform your lead management today
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
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;