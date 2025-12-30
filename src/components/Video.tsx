import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import pinvsVideo from "../assets/videos/PINVS.mp4";
import cooktopVideo from "../assets/videos/Cooktop.mp4";

const videos = [
  {
    src: pinvsVideo,
    title: "Fachada do Empreendimento",
  },
  {
    src: cooktopVideo,
    title: "Área de Lazer",
  },
];

const Video = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="videos" className="py-24 bg-[#cfeac3]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-bold tracking-wider text-sm uppercase">
            Vídeos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Viva a Experiência
          </h2>
          <p className="text-muted-foreground">
            Conheça o empreendimento em movimento
          </p>
        </motion.div>

        {/* Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl group"
            >
              <div className="aspect-video">
                <video
                  src={video.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/50 transition-colors flex items-end">
                <span className="p-4 text-primary-foreground font-medium">
                  {video.title}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            {/* Botão fechar */}
            <button
              className="absolute top-6 right-6 z-60 text-primary-foreground/70 hover:text-primary-foreground"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(null);
              }}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Vídeo */}
            <motion.video
              src={videos[activeIndex].src}
              controls
              autoPlay
              playsInline
              className="max-w-[90vw] max-h-[85vh] rounded-xl z-50"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Video;
