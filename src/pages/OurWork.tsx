// src/pages/OurWork.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Video,
  Zap,
  Eye,
  Film,
  Pencil,
  Popcorn,
  Bot,
  Brain,
  Lightbulb,
  Youtube,
  Rocket,
  Camera,
  Cpu,
  Sparkles,
} from "lucide-react";

// ✅ Video Item interface
interface VideoItem {
  title: string;
  description: string;
  videoId: string;
  icon: React.ReactNode;
}

// ✅ Reordered videos with icons
let videos: VideoItem[] = [
  {
    title: "🎥 Face Tutorial Edits (Style 2)",
    description: "Smooth, professional tutorial edits that highlight clarity and engagement.",
    videoId: "NjVc8WXtrKM",
    icon: <Video className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "⚡ Fast-Retention Face Edits (Style 1)",
    description: "Quick cuts, zooms, and sharp pacing—crafted for creators who want every second to count.",
    videoId: "VkbRTO15zXc",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "🌀 Faceless Viral Niche Edits",
    description: "Perfect for faceless automation channels where visuals alone carry the story.",
    videoId: "dSD0Io3Hx60",
    icon: <Eye className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "📽️ Documentary-Style Smooth Edits",
    description: "Seamless transitions and cinematic flow like a mini-documentary.",
    videoId: "NsamozzZtB0",
    icon: <Film className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "✏️ Stickman-Style Fun Edits",
    description: "Unique stick-figure animations that make learning and storytelling fun.",
    videoId: "pqVJRbFcpwc",
    icon: <Pencil className="w-6 h-6 text-pink-400" />,
  },
  {
    title: "🍿 Movie Review Style Edits",
    description: "Deep, cinematic breakdowns with dramatic pacing and storytelling flair.",
    videoId: "0-n7pX1lEpI",
    icon: <Popcorn className="w-6 h-6 text-red-400" />,
  },
];

// ✅ Channels with icons
const channels = [
  {
    title: "🤖 Geekbot AI",
    description: "A faceless AI-driven channel built from scratch with viral edits and strategies.",
    url: "https://www.youtube.com/@geekbotai",
    icon: <Bot className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "🧠 Thinkverse AI",
    description: "Exploring AI concepts with sleek edits and engaging scripts.",
    url: "https://www.youtube.com/@ThinkverseAI1",
    icon: <Brain className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "💡 Meghna Thinks",
    description: "A creative automation channel mixing storytelling, tutorials, and experiments.",
    url: "https://www.youtube.com/@MeghnaThinks",
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
  },
];

// 🎥 Video Card
const VideoCard: React.FC<VideoItem> = ({ title, description, videoId, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/5 rounded-3xl border border-white/10 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative w-full h-56 md:h-64">
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={`Thumbnail of ${title}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition"
        >
          <button className="text-white bg-red-600 rounded-full px-6 py-3 font-semibold shadow-lg hover:scale-105 transition">
            ▶ Watch
          </button>
        </a>
      </div>

      <div className="p-6 text-center">
        <div className="flex justify-center mb-3">{icon}</div>
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

// 🌟 Floating animated icon component
const FloatingIcon = ({
  Icon,
  className,
  delay,
}: {
  Icon: any;
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute ${className} opacity-30`}
    initial={{ y: 0 }}
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 4, repeat: Infinity, delay }}
  >
    <Icon className="w-10 h-10 text-white" />
  </motion.div>
);

const OurWork: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Helmet>
        <title>Our Work | The Growth Genie – YouTube Automation, Edits & Channels</title>
        <meta
          name="description"
          content="Explore The Growth Genie's portfolio of YouTube projects – cinematic edits, faceless automation, tutorials, storytelling content, and complete channel builds."
        />
      </Helmet>

      {/* 🌟 Floating icons Top */}
      <FloatingIcon Icon={Rocket} className="top-10 left-10" delay={0.2} />
      <FloatingIcon Icon={Camera} className="top-20 right-16" delay={0.6} />
      <FloatingIcon Icon={Cpu} className="top-36 left-1/3" delay={1} />
      <FloatingIcon Icon={Sparkles} className="top-14 right-1/4" delay={1.5} />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 text-center z-10">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500">
              Work
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of our YouTube projects — faceless edits, tutorials, cinematic reviews &
            full automation channels.
          </motion.p>
        </div>
      </section>

      {/* 🎥 Video Grid */}
      <section className="relative py-16 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((video, idx) => (
              <VideoCard key={idx} {...video} />
            ))}
          </div>
        </div>
      </section>

      {/* 🌍 Channels Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-3">
            <Youtube className="w-8 h-8 text-red-500" />
            My Automation Channel Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {channels.map((ch, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all"
              >
                <div className="flex justify-center mb-4">{ch.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{ch.title}</h3>
                <p className="text-white/80 text-sm mb-6">{ch.description}</p>
                <a
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 hover:opacity-90 transition-all duration-300 rounded-xl font-semibold shadow-md"
                >
                  Visit Channel →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 Floating icons Bottom */}
      <FloatingIcon Icon={Video} className="bottom-20 left-12" delay={0.4} />
      <FloatingIcon Icon={Zap} className="bottom-32 right-16" delay={0.8} />
      <FloatingIcon Icon={Sparkles} className="bottom-10 right-1/3" delay={1.2} />
      <FloatingIcon Icon={Rocket} className="bottom-24 left-1/2" delay={1.6} />
    </div>
  );
};

export default OurWork;
