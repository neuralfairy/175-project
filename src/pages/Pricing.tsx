import React from 'react';
import { Check, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 49,
      description: "Perfect for small teams getting started with lead management",
      features: [
        "Up to 1,000 leads per month",
        "Basic lead scoring",
        "Email integrations",
        "Standard reporting",
        "Email support",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "blue"
    },
    {
      name: "Professional",
      price: 99,
      description: "Advanced features for growing sales teams",
      features: [
        "Up to 10,000 leads per month",
        "Advanced AI lead scoring",
        "CRM integrations",
        "Custom workflows",
        "Real-time analytics",
        "Priority support",
        "Team collaboration tools",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "purple"
    },
    {
      name: "Enterprise",
      price: null,
      description: "Custom solutions for large organizations",
      features: [
        "Unlimited leads",
        "Custom AI models",
        "Enterprise integrations",
        "Advanced security",
        "Dedicated support",
        "Custom reporting",
        "White-label options",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "gray"
    }
  ];

  const faqs = [
    {
      question: "What is included in the free trial?",
      answer: "The 14-day free trial includes full access to all Professional plan features with no restrictions. No credit card required."
    },
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes are prorated and take effect immediately."
    },
    {
      question: "What integrations are available?",
      answer: "We integrate with all major CRM systems including Salesforce, HubSpot, Pipedrive, and many others. View our full integration list."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. Our team provides free onboarding assistance to help you get started quickly."
    },
    {
      question: "What kind of support do you offer?",
      answer: "All plans include email support. Professional and Enterprise plans include priority support with faster response times."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Choose the perfect plan for your team. All plans include our core iLMS features with no hidden fees.
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <span>🎉</span>
              <span>14-day free trial on all plans</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border-2 p-8 relative transition-all duration-200 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-purple-500 shadow-lg scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star size={14} fill="currentColor" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    {plan.price ? (
                      <div>
                        <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-600 ml-2">/month</span>
                      </div>
                    ) : (
                      <div className="text-3xl font-bold text-gray-900">Custom</div>
                    )}
                  </div>

                  {plan.name === 'Starter' && (
                    <a
                      href="https://salescentri.com/get-started/free-trial"
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 block text-center"
                    >
                      {plan.cta}
                    </a>
                  )}

                  {plan.name === 'Professional' && (
                    <a
                      href="https://salescentri.com/get-started/free-trial"
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 block text-center"
                    >
                      {plan.cta}
                    </a>
                  )}

                  {plan.name === 'Enterprise' && (
                    <a
                      href="https://salescentri.com/contact/sales-inquiry"
                      className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 block text-center"
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check 
                        size={20} 
                        className={`flex-shrink-0 ${
                          plan.popular ? 'text-purple-600' : 'text-green-600'
                        }`} 
                      />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Compare All Features
              </h2>
              <p className="text-xl text-gray-600">
                See what's included in each plan
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 bg-purple-50">Professional</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900">Monthly Lead Limit</td>
                      <td className="text-center py-4 px-6 text-gray-600">1,000</td>
                      <td className="text-center py-4 px-6 text-gray-600 bg-purple-50">10,000</td>
                      <td className="text-center py-4 px-6 text-gray-600">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900">AI Lead Scoring</td>
                      <td className="text-center py-4 px-6"><Check size={20} className="text-green-600 mx-auto" /></td>
                      <td className="text-center py-4 px-6 bg-purple-50"><Check size={20} className="text-green-600 mx-auto" /></td>
                      <td className="text-center py-4 px-6"><Check size={20} className="text-green-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900">CRM Integrations</td>
                      <td className="text-center py-4 px-6 text-gray-400">Basic</td>
                      <td className="text-center py-4 px-6 text-gray-600 bg-purple-50">Advanced</td>
                      <td className="text-center py-4 px-6 text-gray-600">Enterprise</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900">Custom Workflows</td>
                      <td className="text-center py-4 px-6 text-gray-400">-</td>
                      <td className="text-center py-4 px-6 bg-purple-50"><Check size={20} className="text-green-600 mx-auto" /></td>
                      <td className="text-center py-4 px-6"><Check size={20} className="text-green-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900">API Access</td>
                      <td className="text-center py-4 px-6 text-gray-400">-</td>
                      <td className="text-center py-4 px-6 bg-purple-50"><Check size={20} className="text-green-600 mx-auto" /></td>
                      <td className="text-center py-4 px-6"><Check size={20} className="text-green-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900">Priority Support</td>
                      <td className="text-center py-4 px-6 text-gray-400">-</td>
                      <td className="text-center py-4 px-6 bg-purple-50"><Check size={20} className="text-green-600 mx-auto" /></td>
                      <td className="text-center py-4 px-6"><Check size={20} className="text-green-600 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Apollo Marketing iLMS?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">10,000+ Users</h3>
                <p className="text-gray-600">Trusted by sales teams worldwide for lead management excellence</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">40% Increase</h3>
                <p className="text-gray-600">Average conversion rate improvement within 90 days</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">99.9% Uptime</h3>
                <p className="text-gray-600">Enterprise-grade reliability with guaranteed SLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our pricing and features
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a
                href="https://salescentri.com/contact/sales-inquiry"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
              >
                <span>Contact Sales</span>
                <ArrowRight size={20} />
              </a>
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
            Join thousands of companies already using our iLMS to accelerate growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start 14-Day Free Trial
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Schedule Demo
            </a>
          </div>

          <p className="text-blue-200 mt-6 text-sm">
            No credit card required • Cancel anytime • 24/7 support
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;