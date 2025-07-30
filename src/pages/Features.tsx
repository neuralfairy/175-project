import React from 'react';
import { Target, TrendingUp, BarChart3, Zap, Users, Clock, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Smart Lead Scoring",
      description: "AI-powered algorithm that analyzes 50+ data points to score and prioritize your highest-value prospects.",
      benefits: ["40% increase in conversion rates", "Reduce time spent on cold leads", "Automated scoring updates"],
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Pipeline Management",
      description: "Visual pipeline tracking with drag-and-drop functionality and automated stage progression.",
      benefits: ["Real-time pipeline visibility", "Automated follow-up reminders", "Forecasting accuracy"],
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting dashboard with actionable insights and performance metrics.",
      benefits: ["Custom dashboard creation", "ROI tracking", "Team performance metrics"],
      color: "purple"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Set up intelligent automation rules for lead routing, follow-ups, and task assignments.",
      benefits: ["Save 20+ hours per week", "Consistent follow-up process", "Reduced human error"],
      color: "orange"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in collaboration tools with lead assignment, notes sharing, and activity tracking.",
      benefits: ["Seamless team coordination", "Shared lead history", "Activity timeline"],
      color: "indigo"
    },
    {
      icon: Clock,
      title: "Real-time Notifications",
      description: "Instant alerts for high-priority leads, follow-up reminders, and deal stage changes.",
      benefits: ["Never miss opportunities", "Mobile notifications", "Custom alert rules"],
      color: "red"
    }
  ];

  const integrations = [
    { name: "Salesforce", logo: "SF" },
    { name: "HubSpot", logo: "HS" },
    { name: "Pipedrive", logo: "PD" },
    { name: "Microsoft Dynamics", logo: "MD" },
    { name: "Zoho CRM", logo: "ZC" },
    { name: "Monday.com", logo: "MC" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Modern Sales Teams</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how our comprehensive iLMS features work together to streamline your lead management process and accelerate sales growth.
            </p>
            <a
              href="https://salescentri.com/solutions/use-case-navigator/demo"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Try Interactive Demo</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClasses = {
                blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50",
                green: "from-green-500 to-green-600 text-green-600 bg-green-50",
                purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50",
                orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-50",
                indigo: "from-indigo-500 to-indigo-600 text-indigo-600 bg-indigo-50",
                red: "from-red-500 to-red-600 text-red-600 bg-red-50"
              };

              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[1]} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle size={20} className={colorClasses[feature.color as keyof typeof colorClasses].split(' ')[2]} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://salescentri.com/get-started/book-demo"
                    className={`mt-6 inline-flex items-center space-x-2 ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[2]} font-medium hover:underline`}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                See iLMS in Action
              </h2>
              <p className="text-xl text-gray-600">
                Experience the power of our lead management system with our interactive demo
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Interactive Dashboard Demo</h3>
                <p className="text-blue-100 mb-6">
                  Explore real lead scoring, pipeline management, and analytics in our fully functional demo environment.
                </p>
                <a
                  href="https://salescentri.com/solutions/use-case-navigator/demo"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  <span>Launch Demo</span>
                  <ArrowRight size={20} />
                </a>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Target className="text-blue-600" size={24} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Lead Scoring</h4>
                    <p className="text-gray-600 text-sm">See how AI scores and prioritizes your leads</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="text-green-600" size={24} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pipeline View</h4>
                    <p className="text-gray-600 text-sm">Drag-and-drop pipeline management</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="text-purple-600" size={24} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Analytics</h4>
                    <p className="text-gray-600 text-sm">Real-time performance insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Connect with your existing tools and workflows for a unified sales experience
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-sm">{integration.logo}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{integration.name}</p>
                </div>
              ))}
            </div>

            <a
              href="https://salescentri.com/solutions/psa-suite/integrations"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
            >
              <span>View All Integrations</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Your data is protected with industry-leading security measures and compliance standards
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <Shield className="text-blue-600 mb-4 mx-auto" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">SOC 2 Certified</h3>
                <p className="text-gray-600">Independently audited security controls and processes</p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">256</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SSL Encryption</h3>
                <p className="text-gray-600">End-to-end encryption for all data transmission</p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-sm">GDPR</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">GDPR Compliant</h3>
                <p className="text-gray-600">Full compliance with global privacy regulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today and see how our iLMS can transform your sales process
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

export default Features;