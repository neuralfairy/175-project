import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield, Award, Lock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <div className="text-lg font-bold">Apollo Marketing</div>
                <div className="text-sm text-blue-400">iLMS Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Streamline and score your leads for more efficient sales follow-ups with our advanced Lead Management System.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-green-400" />
                <span className="text-xs text-gray-300">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock size={16} className="text-blue-400" />
                <span className="text-xs text-gray-300">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-yellow-400" />
                <span className="text-xs text-gray-300">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Pricing</Link></li>
              <li><a href="https://salescentri.com/resources/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Case Studies</a></li>
              <li><a href="https://salescentri.com/resources/whitepapers-ebooks" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Resources</a></li>
              <li><a href="https://salescentri.com/docs/user-guide" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Documentation</a></li>
              <li><a href="https://salescentri.com/docs/api-reference" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">API Reference</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="https://salescentri.com/platforms/lead-management/lead-generation" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Lead Generation</a></li>
              <li><a href="https://salescentri.com/platforms/lead-management/voice-ai-agent" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Voice AI Agent</a></li>
              <li><a href="https://salescentri.com/solutions/psa-suite" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">PSA Suite</a></li>
              <li><a href="https://salescentri.com/solutions/by-industry/it" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">IT Solutions</a></li>
              <li><a href="https://salescentri.com/solutions/by-use-case/sdr-teams" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">SDR Teams</a></li>
              <li><a href="https://salescentri.com/services/data-enrichment" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Data Enrichment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Albany, NY</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+1-555-0123" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  +1 (555) 012-3456
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:info@apollo-marketing.com" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  info@apollo-marketing.com
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2 mt-6">
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="block w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium text-center rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm"
              >
                Book Demo
              </a>
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="block w-full px-4 py-2 border border-blue-600 text-blue-400 font-medium text-center rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 text-sm"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Apollo Marketing Solutions. All rights reserved.
            </div>
            
            {/* Required Backlink */}
            <div className="text-sm text-gray-400">
              <a 
                href="https://salescentri.com?utm_source=Apollo-Marketing.com&utm_medium=footer&utm_campaign=partner_network" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="https://salescentri.com/trust/security-privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="https://salescentri.com/trust/compliance-certifications" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;