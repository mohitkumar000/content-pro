// src/pages/OurWork.tsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react"; // Icon for closing modal

interface VideoItem {
  title: string;
  description: string;
  videoId: string;
}

const videos: VideoItem[] = [
  { title: "🍿 Movie Review Style Edits", description: "Deep, cinematic breakdowns with dramatic pacing and storytelling flair.", videoId: "0-n7pX1lEpI" },
  { title: "🌀 Faceless Viral Niche Edits", description: "Perfect for faceless automation channels where visuals alone carry the story.", videoId: "dSD0Io3Hx60" },
  { title: "⚡ Fast-Retention Face Edits", description: "Quick cuts, zooms, and sharp pacing—crafted for creators who want every second to count.", videoId: "VkbRTO15zXc" },
  { title: "🎥 Face Tutorial Edits", description: "Smooth, professional tutorial edits that highlight clarity and engagement.", videoId: "NjVc8WXtrKM" },
  { title: "✏️ Stickman-Style Fun Edits", description: "Unique stick-figure animations that make learning and storytelling fun.", videoId: "pqVJRbFcpwc" },
  { title: "📽️ Documentary-Style Smooth Edits", description: "Seamless transitions and cinematic flow like a mini-documentary.", videoId: "NsamozzZtB0" },
];

const channels = [
  { title: "🤖 Geekbot AI", description: "A faceless AI-driven channel built from scratch with viral edits and strategies.", url: "https://www.youtube.com/@geekbotai" },
  { title: "🧠 Thinkverse AI", description: "Exploring AI concepts with sleek edits and engaging scripts.", url: "https://www.youtube.com/@ThinkverseAI1" },
  { title: "💡 Meghna Thinks", description: "A creative automation channel mixing storytelling, tutorials, and experiments.", url: "https://www.youtube.com/@MeghnaThinks" },
];

// ✨ ANIMATION: Re-usable animated text component
const AnimatedText = ({ text, el: Wrapper = "p", className }: { text: string; el?: keyof JSX.IntrinsicElements; className?: string }) => {
  const textVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };
  const charVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 200 } },
  };
  return (
    <Wrapper className={className}>
      <motion.span variants={textVariants} initial="hidden" animate="show">
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={charVariants} className="inline-block">{char === " " ? "\u00A0" : char}</motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

// 🚀 REDESIGNED: VideoCard with Modal Player
const VideoCard: React.FC<{ item: VideoItem; onPlay: (videoId: string) => void }> = ({ item, onPlay }) => {
  return (
    <motion.div 
      className="bg-white/5 rounded-2xl border border-white/10 shadow-lg overflow-hidden group cursor-pointer"
      variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { type: 'spring' } } }}
      whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
      onClick={() => onPlay(item.videoId)}
    >
      <div className="relative w-full h-56">
        <img src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`} alt={`Thumbnail of ${item.title}`} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
          <div className="text-white bg-red-600/80 backdrop-blur-sm rounded-full p-4 transform group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
        <p className="text-white/70 text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
};

const OurWork: React.FC = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Our Work - The Growth Genie",
    description: "A showcase of YouTube projects and automation channels by The Growth Genie, featuring edits, faceless content, tutorials, and storytelling styles.",
    creator: { "@type": "Organization", name: "The Growth Genie", url: "https://www.thegrowthgenie.com" },
    exampleOfWork: videos.map((v) => ({
      "@type": "VideoObject", name: v.title, description: v.description,
      thumbnailUrl: `https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`,
      contentUrl: `https://www.youtube.com/watch?v=${v.videoId}`,
      embedUrl: `https://www.youtube.com/embed/${v.videoId}`,
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thegrowthgenie.com/" },
      { "@type": "ListItem", position: 2, name: "Our Work", item: "https://www.thegrowthgenie.com/our-work" },
    ],
  };
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>Our Work | The Growth Genie – YouTube Automation, Edits & Channels</title>
        <meta name="description" content="Explore The Growth Genie's portfolio of YouTube projects – cinematic edits, faceless automation, tutorials, storytelling content, and complete channel builds."/>
        <meta name="keywords" content="YouTube automation work, video editing portfolio, faceless YouTube channels, cinematic edits, The Growth Genie projects"/>
        <link rel="canonical" href="https://www.thegrowthgenie.com/our-work"/>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ✅ MODIFIED: Dark background with subtle rainbow aurora effect */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-3xl animate-pulse-slow opacity-20"></div>
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slower opacity-10"></div>
        <div className="absolute top-1/4 left-2/3 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-3xl animate-pulse-slow opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slower opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow opacity-20"></div>
        <div className="absolute bottom-1/2 right-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slower opacity-20"></div>
      </div>
      <div className="absolute inset-0 bg-black/30 z-0"></div>


      {/* 🚀 REDESIGNED: Header with Animation */}
      <section className="relative py-28 lg:py-36 z-10 text-center">
        <div className="container mx-auto px-6">
          <AnimatedText 
            text="A Showcase of Our Work" 
            el="h1" 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto"
          >
            Faceless edits, tutorials, cinematic reviews & full automation channels—see what we can do for you.
          </motion.p>
        </div>
      </section>

      {/* 🎥 REDESIGNED: Masonry Video Grid with Animation */}
      <section className="relative py-16 z-10">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {videos.map((video, idx) => (
              <VideoCard key={idx} item={video} onPlay={setPlayingVideoId} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🌍 REDESIGNED: Channels Section with Animation */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6 text-center">
          <AnimatedText text="Our Automation Channels" el="h2" className="text-4xl md:text-5xl font-bold mb-12" />
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {channels.map((ch, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { type: 'spring' } } }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">{ch.title}</h3>
                <p className="text-white/80 mb-6">{ch.description}</p>
                <motion.a
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition-all duration-300 rounded-lg font-semibold shadow-md shadow-cyan-500/20"
                >
                  Visit Channel →
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ✨ NEW: Video Player Modal */}
      <AnimatePresence>
        {playingVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setPlayingVideoId(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPlayingVideoId(null)}
                className="absolute -top-3 -right-3 bg-white text-black rounded-full p-2 z-10 hover:scale-110 transition-transform"
                aria-label="Close video player"
              >
                <X size={24} />
              </button>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${playingVideoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurWork;