import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";

/* LOGO */
import logoPin from "@/assets/logo-pin.png";

const navLinks = [
  { name: "Início", href: "#hero" },
  { name: "Diferenciais", href: "#features" },
  { name: "Galeria", href: "#gallery" },
  { name: "Plantas", href: "#floor-plans" },
  { name: "Financiamento", href: "#financiamento" },
  { name: "Contato", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="cursor-pointer block"
            >
              <div className="w-12 h-12 rounded-sm flex items-center justify-center overflow-hidden">
                <img
                  src={logoPin}
                  alt="Logo Vila Sônia"
                  className="w-20 h-20 object-contain"
                />
              </div>
            </a>
          </motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NavLink
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-bold text-sm tracking-wide cursor-pointer block"
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* CTA DESKTOP — CORRIGIDO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex items-center gap-4"
          >
            <Button
              onClick={(e) =>
                handleNavClick(
                  e as unknown as React.MouseEvent<HTMLAnchorElement>,
                  "#contact"
                )
              }
              className="
                bg-[#8dc63f] text-white
                hover:bg-[#2f6f2f]
                shadow-md shadow-[#8dc63f]/30
                px-8 py-6 text-base font-bold
                transition-colors
              "
            >
              Agendar Visita
            </Button>
          </motion.div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground z-50 relative"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU — NÃO ALTERADO */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card border-t border-border absolute top-20 left-0 w-full overflow-y-auto shadow-xl"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-6 pb-20">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors font-bolds py-3 border-b border-border/50 block w-full"
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="flex flex-col gap-4 mt-4">
                <Button
                  onClick={(e) =>
                    handleNavClick(
                      e as unknown as React.MouseEvent<HTMLAnchorElement>,
                      "#contact"
                    )
                  }
                  className="w-full bg-accent text-accent-foreground hover:bg-[#cfeac3] py-6 text-lg"
                >
                  Agendar Visita
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
