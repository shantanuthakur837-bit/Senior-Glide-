import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { 
  Youtube, 
  Instagram, 
  Facebook, 
  Mail, 
  Play,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const TikTokIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 3.44-.3 6.88-.45 10.32-.06 1.58-.67 3.17-1.89 4.19-1.39 1.16-3.32 1.58-5.1 1.34-1.8-.24-3.48-1.33-4.38-2.92-1.12-1.99-.92-4.63.46-6.42.93-1.21 2.35-1.99 3.86-2.13.01 1.44.01 2.88.02 4.32-1.01.12-1.98.74-2.4 1.67-.42.93-.24 2.1.43 2.86.67.76 1.76 1.05 2.73.74.97-.31 1.65-1.23 1.68-2.25.08-4.54.16-9.07.24-13.61.01-.01.01-.02.02-.03z"/>
  </svg>
);

const PinterestIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.631 0 12.017 0z"/>
  </svg>
);

const SOCIAL_LINKS = [
  { name: 'YouTube', url: 'https://www.youtube.com/@SeniorGlide', icon: Youtube },
  { name: 'Instagram', url: 'https://www.instagram.com/seniorglide?igsh=cXBjZzJscngxaXJp', icon: Instagram },
  { name: 'TikTok', url: 'https://www.tiktok.com/@seniorglide?_r=1&_t=ZP-95KkH9ZpzpP', icon: TikTokIcon },
  { name: 'Pinterest', url: 'https://pin.it/gX3VOeimO', icon: PinterestIcon },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1DXYrSQB3c/', icon: Facebook },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent-400/30">
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-brand-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-900 transition-all border border-white/10"
            aria-label="Back to top"
          >
            <ChevronRight className="w-8 h-8 -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className={`glass rounded-2xl px-6 py-2 flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "shadow-2xl border-white/30" : "shadow-lg border-white/10"
          }`}>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-premium-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-2xl font-display font-extrabold tracking-tight text-brand-900">
                Senior<span className="text-accent-500">Glide</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              {[
                { name: "Home", path: "/" },
                { name: "Articles", path: "/articles" },
                { name: "About", path: "#" },
                { name: "Contact", path: "#" }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className="text-base font-bold text-brand-800 hover:text-accent-500 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/@SeniorGlide"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 bg-brand-950 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-xl hover:bg-brand-800 transition-all"
              >
                <Youtube className="w-4 h-4" />
                Watch on YouTube
              </a>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-900"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
                {["Home", "Articles", "About", "Contact"].map((item) => (
                  <Link 
                    key={item} 
                    to={item === "Home" ? "/" : item === "Articles" ? "/articles" : "#"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-display font-bold text-brand-900"
                  >
                    {item}
                  </Link>
                ))}
              <a
                href="https://www.youtube.com/@SeniorGlide"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-accent-500 text-white py-5 rounded-2xl font-bold text-xl shadow-xl"
              >
                <Youtube className="w-6 h-6" />
                Watch on YouTube
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-brand-950 pt-24 pb-12 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-premium-gradient rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-display font-extrabold tracking-tight">
                    Senior<span className="text-accent-500">Glide</span>
                  </span>
                </div>
              </div>
              <p className="text-white/50 leading-relaxed mb-8">
                Empowering seniors to live active, independent lives through safe movement and mindful wellness.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {SOCIAL_LINKS.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent-500 transition-all group"
                    title={link.name}
                  >
                    <link.icon className="w-5 h-5 text-white/70 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 text-accent-500">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "Articles", path: "/articles" },
                  { name: "About Us", path: "#" },
                  { name: "Success Stories", path: "#" },
                  { name: "Privacy Policy", path: "#" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-white/60 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 text-accent-500">Categories</h4>
              <ul className="space-y-4">
                {["Mobility", "Strength", "Balance", "Nutrition", "Mindfulness"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 text-accent-500">Contact Us</h4>
              <div className="flex items-center gap-3 text-white/60 mb-6">
                <Mail className="w-5 h-5 text-accent-500" />
                <span>seniorglideofficial@gmail.com</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Have questions? We're here to help you on your journey to better health.
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/30 text-sm mb-2">
                © {new Date().getFullYear()} Senior Glide. All rights reserved.
              </p>
              <p className="text-white/20 text-xs max-w-md">
                For informational purposes only. Not medical advice. Read our full Medical Disclaimer. Move with Confidence, Live with Joy.
              </p>
            </div>
            <div className="flex items-center gap-8 text-white/30 text-sm">
              <a href="mailto:seniorglideofficial@gmail.com" className="hover:text-white transition-colors flex items-center gap-2 font-bold">
                <Mail className="w-4 h-4" />
                seniorglideofficial@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
