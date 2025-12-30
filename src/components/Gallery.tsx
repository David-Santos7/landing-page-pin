import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ÁREA EXTERNA*/
import fachada from "@/assets/Gallery/fachada.gif"; 
import bengalo from "@/assets/Gallery/Bengalo.gif";
import churrasqueira from "@/assets/Gallery/Churrasqueira.gif";
import crossfit from "@/assets/Gallery/Crossfit.gif";
import petPlace from "@/assets/Gallery/pet-place.gif";
import piscina from "@/assets/Gallery/piscina.gif";
import playground from "@/assets/Gallery/playground.gif";
import quadra from "@/assets/Gallery/quadra.gif";

/* ÁREA INTERNA*/
import academia from "@/assets/Gallery/Academia.gif";
import bicicletario from "@/assets/Gallery/Bicicletario.gif";
import brinquedoteca from "@/assets/Gallery/Brinquedoteca.gif";
import coworking from "@/assets/Gallery/coworking.gif";
import espacoBeleza from "@/assets/Gallery/espaco-beleza.gif";
import delivery from "@/assets/Gallery/delivery.gif";
import ioga from "@/assets/Gallery/ioga.gif";
import lavanderia from "@/assets/Gallery/lavanderia.gif";
import mercado from "@/assets/Gallery/mercado.gif";
import petCare from "@/assets/Gallery/pet-care.gif";
import salaoDeFesta from "@/assets/Gallery/salao-de-festa.gif";
import sauna from "@/assets/Gallery/sauna.gif";
import spa from "@/assets/Gallery/spa.gif";
import sportBar from "@/assets/Gallery/sport-bar.gif";
import jogos from "@/assets/Gallery/jogos.gif";

/* ÁREA ROOFTOP*/
import hidromassagem from "@/assets/Gallery/hidromassagem.gif";
import rooftop from "@/assets/Gallery/rooftop.gif";

type Category = "externas" | "internas" | "rooftop";

const galleryData = {
  externas: [
    { src: fachada, title: "Fachada do Prédio" },
    { src: bengalo, title: "Piscina com Raia" },
    { src: churrasqueira, title: "Fachada" },
    { src: crossfit, title: "Fachada" },
    { src: petPlace, title: "Fachada" },
    { src: piscina, title: "Fachada" },
    { src: playground, title: "Fachada" },
    { src: quadra, title: "Fachada" },
  ],

  internas: [
    { src: academia, title: "Cozinha Integrada" },
    { src: bicicletario, title: "Quarto" },
    { src: brinquedoteca, title: "Quarto" },
    { src: coworking, title: "Quarto" },
    { src: espacoBeleza, title: "Quarto" },
    { src: delivery, title: "Quarto" },
    { src: ioga, title: "Quarto" },
    { src: lavanderia, title: "Quarto" },
    { src: mercado, title: "Quarto" },
    { src: petCare, title: "Quarto" },
    { src: salaoDeFesta, title: "Quarto" },
    { src: sauna, title: "Quarto" },
    { src: spa, title: "Quarto" },
    { src: sportBar, title: "Quarto" },
    { src: jogos, title: "Quarto" },
  ],

  rooftop: [
     { src: hidromassagem, title: "Rooftop Gourmet" },
    { src: rooftop, title: "Rooftop Gourmet" },
  ],
};

const Gallery = () => {
  const [category, setCategory] = useState<Category>("externas");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = galleryData[category];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 font-bold lg:px-8 flex flex-col lg:flex-row gap-12">

        {/* MENU LATERAL */}
        <aside
          className="
            lg:w-1/4 
            flex lg:flex-col 
            gap-4
            overflow-x-auto lg:overflow-visible
            pb-2 lg:pb-0
          "
        >
          {[
            { key: "externas", label: "Áreas Externas" },
            { key: "internas", label: "Áreas Internas" },
            { key: "rooftop", label: "Rooftop" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setCategory(item.key as Category)}
              className={`
                px-6 py-3 rounded-full border transition-all
                whitespace-nowrap
                ${
                  category === item.key
                    ? "bg-accent text-white border-accent"
                    : "border-muted text-muted-foreground hover:border-accent"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </aside>

        {/* GRID DE IMAGENS */}
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl group h-[320px]"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                <span className="p-5 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.title}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </button>

            <motion.img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].title}
              className="max-w-[90vw] max-h-[85vh] rounded-xl object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
