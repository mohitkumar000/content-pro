// src/pages/OurWork.tsx
import React from "react";

const videos = [
  {
    title: "🎬 Movie Review Style",
    url: "https://www.youtube.com/embed/0-n7pX1lEpI?si=UBDlO5SQcv2trrTe",
  },
  {
    title: "📺 Faceless Niche Edit",
    url: "https://www.youtube.com/embed/dSD0Io3Hx60?si=XrtW_XO2KLJxBT_f",
  },
  {
    title: "🎭 Face Edit 1",
    url: "https://www.youtube.com/embed/nRtLG8CnVYw?si=rdieZhg9WPnf1FZ2",
  },
  {
    title: "🎭 Face Edit 2",
    url: "https://www.youtube.com/embed/NjVc8WXtrKM?si=Kff0-46dHjpnj63g",
  },
];

const OurWork: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* 🌌 Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-starfield"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-black to-purple-900/40"></div>
      </div>

      {/* Header */}
      <section className="relative py-24 lg:py-32 z-10 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Work
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            A showcase of our YouTube projects — faceless edits, reviews, and
            full automation channels.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="relative py-16 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-3xl border border-white/10 shadow-lg overflow-hidden group hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              >
                {/* Video Thumbnail */}
                <div className="relative w-full h-64 md:h-80 lg:h-72">
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover rounded-t-3xl"
                  />
                  {/* Overlay hover effect */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-lg font-semibold">
                    <span className="text-white">▶ Watch Now</span>
                  </div>
                </div>

                {/* Video Title */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    Professional editing, scripting & design tailored for
                    creators.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Channel Highlight */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-elevated">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              📺 Full YouTube Automation Channel
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Here’s a complete channel I helped build — from scripts and edits
              to thumbnails, growth, and automation.
            </p>

            <a
              href="https://www.youtube.com/@geekbotai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 hover:opacity-90 transition-all duration-300 rounded-xl font-semibold shadow-lg hover:shadow-indigo-500/40"
            >
              Visit Geekbot AI Channel →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
