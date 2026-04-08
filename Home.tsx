import { motion } from "motion/react";
import { 
  Youtube, 
  BookOpen, 
  ArrowRight, 
  Play,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { articles } from "./articles";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

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

export default function Home() {
  useEffect(() => {
    document.title = "Senior Glide: Move with Confidence, Live with Joy — Senior Health & Wellness";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-20 pb-10 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-slate-50/50 to-transparent -z-10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] -z-10" />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -z-10" 
        />
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-950/5 border border-brand-950/10 text-brand-950 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                Empowering Longevity
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-2xl sm:text-4xl md:text-7xl font-display font-black text-brand-950 mb-8 leading-tight md:leading-[1] tracking-tight md:tracking-tighter">
                Senior <span className="text-accent-500 italic">Glide</span> — <br className="hidden md:block" />Move with Confidence, Live with Joy.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-brand-800/70 mb-6 leading-relaxed max-w-xl">
                Expert health, fitness, and wellness guidance designed specifically for seniors over 60 who want to maintain independence and vitality.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.youtube.com/@SeniorGlide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-950 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-950/20 hover:bg-brand-900 transition-all flex items-center justify-center gap-3"
                >
                  <Youtube className="w-6 h-6" />
                  Watch on YouTube
                </a>
                <a 
                  href="#articles"
                  className="bg-white text-brand-950 px-8 py-4 rounded-xl font-bold text-lg border border-slate-200 shadow-lg hover:border-brand-950 transition-all flex items-center justify-center gap-3"
                >
                  Browse Articles
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-12 lg:mt-0 max-w-lg mx-auto lg:ml-auto lg:mr-0"
            >
              <div className="relative z-10 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Senior wellness and fitness guidance for healthy aging over 60"
                  className="w-full aspect-square object-cover"
                />
              </div>
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white p-4 lg:p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[160px] lg:max-w-[200px] hidden sm:block"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-accent-500 rounded-lg flex items-center justify-center mb-3 lg:mb-4">
                  <Play className="w-4 h-4 lg:w-5 lg:h-5 text-white fill-white" />
                </div>
                <p className="text-xs lg:text-sm font-bold text-brand-950 leading-tight">Daily Movement Routines</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-20 bg-brand-950 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,transparent_70%)] opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl text-white mb-4 font-display">Featured Senior Wellness Videos</h2>
            <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative group">
              <div className="relative bg-brand-900 rounded-2xl overflow-hidden shadow-2xl border border-white/5 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/FHI9unBKx34"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="mt-16 grid md:grid-cols-3 gap-12">
              {[
                { icon: <Play />, title: "Expert Instruction", desc: "Guided by certified senior fitness specialists." },
                { icon: <Youtube />, title: "Follow Along", desc: "Real-time workouts you can do from home." },
                { icon: <BookOpen />, title: "Science Based", desc: "Methods backed by latest longevity research." }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-accent-400 mb-6 mx-auto border border-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl text-white mb-3 font-display">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Articles Grid */}
      <motion.section 
        id="articles" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="py-24 bg-soft-white"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-brand-900 mb-4 tracking-tight">Expert Health Guides for Seniors</h2>
              <p className="text-xl text-brand-800/60 max-w-2xl font-medium">
                In-depth articles on nutrition, movement, and emergency protocols to support your active lifestyle.
              </p>
            </div>
            <button className="flex items-center gap-2 text-brand-900 font-bold hover:text-accent-500 transition-colors group">
              View All Articles
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-10"
          >
            {articles.map((article) => (
              <motion.div
                key={article.id}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.4 }
                }}
                className="group bg-white rounded-2xl overflow-hidden card-shadow border border-slate-100 flex flex-col"
              >
                <Link to={`/article/${article.id}`} className="relative aspect-video overflow-hidden flex-shrink-0">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-950/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[10px] font-bold text-brand-950 uppercase tracking-widest border border-slate-200">
                      {article.category}
                    </span>
                  </div>
                </Link>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <Link to={`/article/${article.id}`}>
                      <h3 className="text-xl md:text-2xl font-sans font-extrabold text-brand-950 mb-4 group-hover:text-accent-500 transition-colors line-clamp-2 leading-tight">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-brand-800/60 text-sm md:text-base line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-50">
                    <Link to={`/article/${article.id}`} className="flex items-center gap-2 text-brand-950 font-bold text-sm group/btn">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Strip */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-premium-gradient rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#b45309_0%,transparent_40%)] opacity-10" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#d97706_0%,transparent_40%)] opacity-10" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl text-white mb-8">Start Moving Safely Today</h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                Join thousands of seniors who have reclaimed their mobility and confidence. Move with Confidence, Live with Joy.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.youtube.com/@SeniorGlide"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl shadow-accent-500/20 hover:bg-accent-400 transition-all flex items-center gap-3 mx-auto w-fit"
              >
                <Youtube className="w-6 h-6" />
                Watch on YouTube
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
