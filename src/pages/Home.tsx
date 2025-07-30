import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Target, Shield, Zap, BarChart3 } from 'lucide-react';

const Home = () => {
  const [roiInputs, setRoiInputs] = useState({
    leads: 1000,
    conversionRate: 15,
    dealValue: 5000
  });

  const calculateROI = () => {
    const currentRevenue = (roiInputs.leads * roiInputs.conversionRate / 100) * roiInputs.dealValue;
    const improvedRevenue = (roiInputs.leads * (roiInputs.conversionRate * 1.4) / 100) * roiInputs.dealValue;
    return improvedRevenue - currentRevenue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap size={16} />
              <span>Industry-Leading iLMS Solution</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Lead Management </span>
              with iLMS
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Streamline and score your leads for more efficient sales follow-ups. Our intelligent Lead Management System increases conversions by 40% and reduces sales cycle time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center space-x-2"
              >
                <Play size={20} />
                <span>Watch Demo</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-blue-500" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-purple-500" />
                <span>10,000+ Active Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Leading B2B Companies Choose Our iLMS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced lead scoring, automated follow-ups, and intelligent pipeline management that drives results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Lead Scoring</h3>
              <p className="text-gray-600 mb-4">
                AI-powered lead scoring algorithm that prioritizes high-value prospects and increases conversion rates by 40%.
              </p>
              <a href="https://salescentri.com/platforms/lead-management/lead-generation" className="text-blue-600 font-medium flex items-center space-x-1 hover:space-x-2 transition-all">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pipeline Management</h3>
              <p className="text-gray-600 mb-4">
                Visual pipeline tracking with automated stage progression and real-time analytics for better forecasting.
              </p>
              <a href="https://salescentri.com/solutions/psa-suite" className="text-green-600 font-medium flex items-center space-x-1 hover:space-x-2 transition-all">
                <span>Explore Features</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive reporting dashboard with actionable insights to optimize your sales performance.
              </p>
              <a href="https://salescentri.com/pricing" className="text-purple-600 font-medium flex items-center space-x-1 hover:space-x-2 transition-all">
                <span>View Plans</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your ROI</h2>
              <p className="text-xl text-gray-600">
                See how much revenue you could generate with our iLMS solution
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Leads
                    </label>
                    <input
                      type="number"
                      value={roiInputs.leads}
                      onChange={(e) => setRoiInputs({...roiInputs, leads: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Conversion Rate (%)
                    </label>
                    <input
                      type="number"
                      value={roiInputs.conversionRate}
                      onChange={(e) => setRoiInputs({...roiInputs, conversionRate: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average Deal Value ($)
                    </label>
                    <input
                      type="number"
                      value={roiInputs.dealValue}
                      onChange={(e) => setRoiInputs({...roiInputs, dealValue: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Projected Results</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Additional Monthly Revenue:</span>
                      <span className="text-2xl font-bold text-green-600">
                        ${calculateROI().toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Annual Revenue Increase:</span>
                      <span className="text-xl font-bold text-blue-600">
                        ${(calculateROI() * 12).toLocaleString()}
                      </span>
                    </div>
                    <div className="pt-4 border-t border-blue-200">
                      <span className="text-sm text-gray-600">
                        *Based on average 40% conversion improvement
                      </span>
                    </div>
                  </div>
                  
                  <a
                    href="https://salescentri.com/get-started/book-demo"
                    className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-center block"
                  >
                    Get Custom ROI Analysis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See how companies are transforming their sales processes with our iLMS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Apollo's iLMS increased our lead conversion rate by 45% in just 3 months. The lead scoring feature is incredibly accurate."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Smith</div>
                  <div className="text-sm text-gray-500">VP Sales, TechCorp</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The pipeline management features have completely transformed how we track and manage our opportunities. Highly recommended!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria Johnson</div>
                  <div className="text-sm text-gray-500">Sales Director, GrowthLab</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "ROI was evident within the first month. The automated follow-up sequences alone saved us 20 hours per week."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">DL</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">David Lee</div>
                  <div className="text-sm text-gray-500">CEO, ScaleUp Inc</div>
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
            Ready to Transform Your Lead Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our iLMS to increase conversions and accelerate growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Free Trial
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Schedule Demo
            </a>
          </div>

          <p className="text-blue-200 mt-6 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;