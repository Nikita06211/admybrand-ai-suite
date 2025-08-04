"use client";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import ActionButtons from "./ui/ActionButtons";

export default function FooterSection() {
  return (
    <footer className="bg-[#0b0d13] text-gray-300 pt-20 pb-12  border-gray-700">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-[#14171b] rounded-xl p-12 mb-16 text-center shadow-glow-purple">
          <h2 className="bg-gradient-to-r from-[#9b54e7] to-[#729cff] text-transparent bg-clip-text text-4xl font-extrabold mb-4">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            {"Join thousands of marketing teams who've already revolutionized their campaigns with ADmyBRAND AI."}
          </p>
          <div className="flex justify-center gap-6">
            <ActionButtons
              mainLabel="Start Free Trial"
              secondaryLabel="Schedule Demo"
              showArrow={true}
              disabled={false}
              onMainClick={() => {/* handle trial click */}}
              onSecondaryClick={() => {/* handle demo click */}}
            />
          </div>
        </div>
        <div className="border-t border-[#222438] w-full my-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 text-sm">
          <div className="md:col-span-2 space-y-6">
            <div className="inline-flex items-center text-white font-bold text-xl gap-2 mb-2">
              <div className="w-7 h-7 bg-blue-400 rounded-full"></div> 
              ADmyBRAND AI
            </div>
            <p className="max-w-sm">
              Revolutionizing marketing with cutting-edge AI technology. Create compelling campaigns, analyze performance, and scale your brand like never before.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                <a href="mailto:hello@admybrand.ai" className="hover:text-[#9b54e7]">hello@admybrand.ai</a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-blue-400" />
                <a href="tel:+15551234567" className="hover:text-[#9b54e7]">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-blue-400" />
                San Francisco, CA
              </li>
            </ul>
            <div className="flex space-x-6 pt-4">
              {/* Social links - replace icons with actual SVGs or icon components */}
              <a href="#" aria-label="Twitter" className="hover:text-[#9b54e7]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#9b54e7]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-[#9b54e7]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#9b54e7]">Features</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">Pricing</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">Integrations</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#9b54e7]">About Us</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">Careers</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">Press</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#9b54e7]">Documentation</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">Help Center</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">Community</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">Templates</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">Webinars</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#9b54e7]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">GDPR</a></li>
              <li><a href="#" className="hover:text-[#9b54e7]">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <div>© 2024 ADmyBRAND AI. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <span>Made with <span className="text-pink-600">&#10084;</span> in San Francisco</span>
            <span className="text-green-500 flex items-center gap-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414L9 11.586l6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
