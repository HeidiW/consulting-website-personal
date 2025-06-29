import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">Heidi</span> Williams-Foy
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              Expert performance advertising consultant specializing in Meta, TikTok, and Reddit ads. Helping businesses scale profitably through data-driven strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-neutral-300">
              <li><a href="#" className="hover:text-white transition-colors">Meta Ads Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok Advertising</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reddit Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strategy Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>hello@adsexpert.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {currentYear} Heidi Williams-Foy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
