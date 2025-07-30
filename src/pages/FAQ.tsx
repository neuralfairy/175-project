import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, ArrowRight, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "What is iLMS (Lead Management System)?",
          answer: "iLMS is our intelligent Lead Management System that helps B2B companies streamline their lead management process through AI-powered lead scoring, automated workflows, and advanced analytics. It integrates with your existing CRM and sales tools to provide a comprehensive solution for managing and converting leads more effectively."
        },
        {
          question: "How quickly can I get started with Apollo Marketing's iLMS?",
          answer: "You can get started immediately with our 14-day free trial. The initial setup takes less than 15 minutes, and our onboarding team will help you configure the system to match your sales process. Most customers see results within the first week of implementation."
        },
        {
          question: "Do I need technical expertise to use iLMS?",
          answer: "No technical expertise is required. Our iLMS is designed for sales teams and business users. The intuitive interface makes it easy to manage leads, set up workflows, and analyze performance. We also provide comprehensive training and support to ensure your success."
        },
        {
          question: "What happens during the free trial?",
          answer: "During the 14-day free trial, you get full access to all Professional plan features including lead scoring, CRM integrations, automated workflows, and analytics. No credit card is required, and our customer success team will help you set up and optimize the system for your needs."
        }
      ]
    },
    {
      title: "Features & Functionality",
      faqs: [
        {
          question: "How does AI lead scoring work in iLMS?",
          answer: "Our AI analyzes over 50 data points including demographic information, behavioral signals, engagement history, and company data to assign scores from 0-100. The algorithm learns from your conversion patterns and continuously improves accuracy. High-scoring leads are automatically prioritized for follow-up."
        },
        {
          question: "Can iLMS integrate with my existing CRM?",
          answer: "Yes, iLMS integrates with all major CRM systems including Salesforce, HubSpot, Pipedrive, Microsoft Dynamics, Zoho, and many others. The integration is bi-directional, ensuring data stays synchronized between systems without manual effort."
        },
        {
          question: "What types of automated workflows can I create?",
          answer: "You can create workflows for lead routing, follow-up sequences, task assignments, notifications, and data updates. Examples include automatically assigning leads based on territory, sending personalized email sequences, creating tasks for high-priority leads, and updating lead status based on actions."
        },
        {
          question: "How accurate is the lead scoring algorithm?",
          answer: "Our AI lead scoring algorithm achieves 85%+ accuracy in identifying high-converting leads. The system learns from your specific conversion patterns and improves over time. Most customers see a 40% increase in conversion rates within 90 days of implementation."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      faqs: [
        {
          question: "What's included in each pricing plan?",
          answer: "Starter ($49/month) includes basic lead scoring, email integrations, and standard reporting for up to 1,000 leads. Professional ($99/month) adds advanced AI scoring, CRM integrations, custom workflows, and analytics for up to 10,000 leads. Enterprise offers unlimited leads, custom features, and dedicated support."
        },
        {
          question: "Are there any setup fees or hidden costs?",
          answer: "No setup fees or hidden costs. All plans include free onboarding, training, and standard support. The only additional costs might be for premium integrations or custom development work, which are clearly outlined upfront."
        },
        {
          question: "Can I change plans or cancel anytime?",
          answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Plan changes are prorated and take effect immediately. There are no long-term commitments or cancellation fees."
        },
        {
          question: "Do you offer discounts for annual payments?",
          answer: "Yes, we offer a 20% discount for annual payments on all plans. Enterprise customers can also negotiate custom pricing based on their specific needs and volume requirements."
        }
      ]
    },
    {
      title: "Security & Compliance",
      faqs: [
        {
          question: "How secure is my data in iLMS?",
          answer: "We use enterprise-grade security including 256-bit SSL encryption, SOC 2 certification, regular security audits, and data centers with 99.9% uptime. All data is encrypted at rest and in transit, and we follow strict access controls and monitoring procedures."
        },
        {
          question: "Is iLMS GDPR compliant?",
          answer: "Yes, iLMS is fully GDPR compliant. We provide data processing agreements, consent management tools, data export capabilities, and the right to be forgotten functionality. We also comply with other privacy regulations including CCPA and PIPEDA."
        },
        {
          question: "Where is my data stored?",
          answer: "Data is stored in secure, SOC 2 certified data centers in the United States. We offer data residency options for international customers who require data to be stored in specific geographic regions."
        },
        {
          question: "What backup and disaster recovery measures are in place?",
          answer: "We maintain automated daily backups with point-in-time recovery capabilities. Our disaster recovery plan ensures 99.9% uptime with redundant systems and failover procedures. Data is replicated across multiple secure locations."
        }
      ]
    },
    {
      title: "Support & Training",
      faqs: [
        {
          question: "What kind of support do you provide?",
          answer: "All plans include email support with response times within 24 hours. Professional and Enterprise plans include priority support with faster response times, phone support, and dedicated customer success managers. We also provide comprehensive documentation, video tutorials, and webinar training."
        },
        {
          question: "Do you provide training and onboarding?",
          answer: "Yes, all customers receive free onboarding and training. This includes system setup, workflow configuration, integration assistance, and user training. Enterprise customers get dedicated onboarding specialists and custom training programs."
        },
        {
          question: "How can I get help if I have questions?",
          answer: "You can reach our support team via email, live chat, or phone (for eligible plans). We also have an extensive knowledge base, video tutorials, and community forum. Most questions are answered within hours during business hours."
        },
        {
          question: "Do you offer professional services for implementation?",
          answer: "Yes, we offer professional services for complex implementations, custom integrations, and workflow design. Our team of experts can help you optimize your lead management process and ensure maximum ROI from your iLMS investment."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Questions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Find answers to common questions about our iLMS platform, features, pricing, and implementation.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <HelpCircle className="text-blue-600" size={24} />
                  <span>{category.title}</span>
                </h2>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openFAQ === globalIndex;

                    return (
                      <div key={faqIndex} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="text-blue-600 flex-shrink-0" size={20} />
                          ) : (
                            <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="pt-2 border-t border-gray-100">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {filteredFAQs.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-gray-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any questions matching "{searchTerm}". Try different keywords or browse our categories.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Get instant answers from our support team
                </p>
                <a
                  href="https://salescentri.com/contact/support-request/live-chat"
                  className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:space-x-3 transition-all"
                >
                  <span>Start Chat</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge Base</h3>
                <p className="text-gray-600 mb-4">
                  Browse detailed guides and tutorials
                </p>
                <a
                  href="https://salescentri.com/docs/user-guide"
                  className="inline-flex items-center space-x-2 text-green-600 font-medium hover:space-x-3 transition-all"
                >
                  <span>Browse Docs</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">📧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email Support</h3>
                <p className="text-gray-600 mb-4">
                  Send us a detailed message
                </p>
                <a
                  href="https://salescentri.com/contact/support-request"
                  className="inline-flex items-center space-x-2 text-purple-600 font-medium hover:space-x-3 transition-all"
                >
                  <span>Send Email</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <p className="text-lg text-gray-600">
                Common tasks our customers perform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="block bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-200 border border-blue-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start Free Trial</h3>
                <p className="text-gray-600 mb-4">
                  Get started with our 14-day free trial - no credit card required
                </p>
                <div className="flex items-center space-x-2 text-blue-600 font-medium">
                  <span>Start Now</span>
                  <ArrowRight size={16} />
                </div>
              </a>

              <a
                href="https://salescentri.com/get-started/book-demo"
                className="block bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all duration-200 border border-green-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Book a Demo</h3>
                <p className="text-gray-600 mb-4">
                  See iLMS in action with a personalized demo
                </p>
                <div className="flex items-center space-x-2 text-green-600 font-medium">
                  <span>Schedule Demo</span>
                  <ArrowRight size={16} />
                </div>
              </a>

              <a
                href="https://salescentri.com/pricing"
                className="block bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all duration-200 border border-purple-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">View Pricing</h3>
                <p className="text-gray-600 mb-4">
                  Compare plans and find the right fit for your team
                </p>
                <div className="flex items-center space-x-2 text-purple-600 font-medium">
                  <span>See Plans</span>
                  <ArrowRight size={16} />
                </div>
              </a>

              <a
                href="https://salescentri.com/contact/sales-inquiry"
                className="block bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-200 border border-orange-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Sales</h3>
                <p className="text-gray-600 mb-4">
                  Speak with our sales team about custom solutions
                </p>
                <div className="flex items-center space-x-2 text-orange-600 font-medium">
                  <span>Get in Touch</span>
                  <ArrowRight size={16} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Lead Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies already using our iLMS to increase conversions
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

export default FAQ;