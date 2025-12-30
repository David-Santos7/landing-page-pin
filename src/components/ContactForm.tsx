import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin } from "lucide-react"; // Removi Phone e Mail pois não estão sendo usados no visual
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xnjadaza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Mensagem enviada! Entraremos em contato em breve.",
        });
        setFormData({ name: "", email: "", phone: "" });
      } else {
        throw new Error("Erro ao enviar");
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível enviar. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* FORMULÁRIO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium tracking-wider text-sm uppercase">
              Contato
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
              Agende Sua Visita
            </h2>

            <p className="text-muted-foreground mb-8">
              Preencha o formulário e nossa equipe entrará em contato.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-14"
              />

              <Input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-14"
              />

              <Input
                name="phone"
                placeholder="Seu telefone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-14"
              />

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full h-14 text-base bg-accent text-accent-foreground hover:bg-gold-dark shadow-gold"
              >
                {isSubmitting ? "Enviando..." : (
                  <>
                    Quero Ser Contactado
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* INFO + MAPA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* CARD CONTATO */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <h3 className="font-display text-xl font-semibold mb-6">
                Informações de Contato
              </h3>
              <div className="flex gap-4">
                <MapPin className="text-accent" />
                <span>
                  Rua Grauçá, 200 – Vila Sônia - São Paulo.
                  <p> - A apenas 500m do metrô Vila Sônia</p>
                  <p>- 10 min do Shopping Butantã</p>
                  <p>- 20 min do Estádio MorumBIS</p>
                </span>
              </div>
            </div>

            {/* MAPA MODERNO */}
            <a
              
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden border border-border bg-card shadow-soft"
            >
              {/* MAPA */}
              <div className="relative aspect-video">
                <iframe
                  src="https://www.google.com/maps?q=Rua+Grauçá,+200+-+Vila+Sônia,+São+Paulo+-+SP&output=embed"
                  className="absolute inset-0 w-full h-full grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90" />

              {/* CTA */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                <div className="text-white">
                  <p className="text-sm opacity-80">Endereço</p>
                  <p className="font-semibold">
                    Rua Grauçá, 200 – Vila Sônia
                  </p>
                  <p className="text-xs opacity-70">
                    São Paulo – SP • 05626-020
                  </p>
                </div>

              </div>
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;