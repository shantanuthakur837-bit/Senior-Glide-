import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Youtube, Clock, Tag, Share2, Play, ExternalLink, BookOpen } from "lucide-react";
import { useEffect } from "react";
import { articles } from "./articles";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  useEffect(() => {
    if (article) {
      document.title = article.pageTitle;
      window.scrollTo(0, 0);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Article Not Found</h1>
          <Link to="/" className="text-accent-500 font-bold hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-32 pb-24">
      {/* Article Header */}
      <header className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-brand-800/60 hover:text-brand-950 font-bold transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Medical Disclaimer Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface-50 border-l-4 border-accent-500 p-6 rounded-r-2xl mb-12 shadow-sm"
          >
            <p className="text-brand-950 font-bold mb-2 flex items-center gap-2">
              ⚕️ Medical Note:
            </p>
            <p className="text-brand-800/80 text-base mb-4">
              This article is for informational purposes only and does not replace professional medical advice. 
              Please consult your doctor before starting any new exercise program.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-brand-800/40 uppercase tracking-widest">
              <span>✍️ By: Senior Glide Team</span>
              <span className="hidden sm:inline">|</span>
              <span>📅 Last Updated: {article.lastUpdated}</span>
            </div>
          </motion.div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Tag className="w-3 h-3" />
              {article.category}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-sans font-black text-brand-950 mb-8 leading-tight tracking-tight"
            >
              {article.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-8 text-brand-800/40 text-sm font-bold uppercase tracking-widest"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                6 Min Read
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Featured Image/Video */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl card-shadow border border-slate-100"
        >
          {article.id === 4 ? (
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full aspect-video object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={article.videoUrl}
                title={article.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-slate max-w-none">
            {article.content.map((section, index) => {
              switch (section.type) {
                case 'heading':
                  return <h2 key={index} className="text-4xl font-sans font-extrabold text-brand-950 mt-16 mb-8 leading-tight">{section.text}</h2>;
                case 'subheading':
                  return <h3 key={index} className="text-3xl font-sans font-bold text-brand-950 mt-12 mb-6 leading-tight">{section.text}</h3>;
                case 'paragraph':
                  return <p key={index} className="text-xl font-medium text-brand-900 leading-relaxed mb-10">{section.text}</p>;
                case 'list':
                  return (
                    <ul key={index} className="space-y-6 mb-10">
                      {section.items?.map((item, i) => (
                        <li key={i} className="flex gap-5 text-xl font-medium text-brand-900 leading-relaxed">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-500/10 text-accent-600 flex items-center justify-center text-sm font-black mt-1">
                            {i + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                case 'note':
                  return (
                    <div key={index} className="p-8 bg-slate-50 rounded-2xl border-l-8 border-brand-950 mb-10 italic text-xl font-medium text-brand-800/80">
                      {section.text}
                    </div>
                  );
                case 'challenge':
                  return (
                    <div key={index} className="p-10 bg-premium-gradient rounded-3xl text-white mb-12 shadow-xl">
                      <h4 className="text-2xl font-sans font-black mb-6 flex items-center gap-3">
                        <Play className="w-6 h-6 fill-white" />
                        Tonight's Challenge
                      </h4>
                      <p className="text-white/90 text-xl font-medium leading-relaxed italic">{section.text}</p>
                    </div>
                  );
                case 'disclaimer':
                  return (
                    <div key={index} className="mt-20 pt-12 border-t border-slate-100 text-base text-brand-800/50 italic leading-relaxed font-medium">
                      {section.text}
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Sources Section */}
          {article.sources && article.sources.length > 0 && (
            <div className="mt-20 p-8 bg-surface-50 rounded-3xl border border-slate-100">
              <h2 className="text-2xl font-sans font-black text-brand-950 mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-accent-500" />
                📚 Sources & References:
              </h2>
              <ul className="space-y-3">
                {article.sources.map((source, idx) => (
                  <li key={idx}>
                    <a 
                      href={source.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-800/70 hover:text-accent-500 transition-colors flex items-center gap-2 text-lg font-medium"
                    >
                      <span className="text-accent-500">{idx + 1}.</span>
                      {source.name}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Articles Section */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <div className="mt-12 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-sans font-black text-brand-950 mb-6">
                📖 More from Senior Glide:
              </h2>
              <ul className="space-y-4">
                {article.relatedArticles.map((rel, idx) => (
                  <li key={idx}>
                    <Link 
                      to={`/article/${rel.id}`}
                      className="text-brand-950 hover:text-accent-500 transition-colors flex items-center gap-3 text-xl font-bold group"
                    >
                      <span className="text-accent-500 group-hover:translate-x-1 transition-transform">→</span>
                      {rel.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Navigation */}
          <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold text-brand-800/40 uppercase tracking-widest mb-2">Enjoyed this guide?</p>
              <h4 className="text-xl font-display font-bold text-brand-950">Watch more on YouTube</h4>
            </div>
            <a 
              href="https://www.youtube.com/@SeniorGlide"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-xl shadow-accent-500/20 hover:bg-accent-400 transition-all"
            >
              <Youtube className="w-5 h-5" />
              Visit Channel
            </a>
          </div>

          {/* Footer SEO */}
          <div className="mt-20 pt-12 border-t border-slate-100 text-center">
            <p className="text-sm text-brand-800/40 mb-4">
              © 2026 Senior Glide. All rights reserved.<br />
              For informational purposes only. Not medical advice.<br />
              Read our full Medical Disclaimer.
            </p>
            <a href="mailto:seniorglideofficial@gmail.com" className="text-accent-500 font-bold hover:underline">
              seniorglideofficial@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
