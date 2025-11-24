import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code, Smartphone, Globe, Settings } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false); // controla montagem
  const [isAnimating, setIsAnimating] = useState(false); // controla animação de saída
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHero, setIsHero] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuVisible(true);
      setTimeout(() => setIsAnimating(true), 10); // inicia animação de entrada
    } else if (isMenuVisible) {
      setIsAnimating(false); // inicia animação de saída
      const timeout = setTimeout(() => setIsMenuVisible(false), 300); // espera animação
      return () => clearTimeout(timeout);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setIsHero(heroBottom > 80); // 80px para considerar altura do header
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsHero(true);
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Executa ao montar
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isHero ? "gradient-bg" : "bg-white shadow-lg"} `}
    >
      <nav className="mx-auto px-6 ">
        <div className="flex justify-between items-center py-4 gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={`${isHero ? "public/img/logoWhite.png" : "public/img/logo.png"}`} className="h-16" alt="DevZoneSystems" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden custom:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium px-1 transition-colors duration-300 ${location.pathname === item.href
                    ? "text-primary-300  border-b-2 border-primary-300"
                    : isHero
                      ? "text-white hover:text-primary-200 "
                      : "text-gray-700  hover:text-primary-600 "
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/area-cliente"
              className={`btn-primary ${isHero ? "" : "!bg-primary-600 !text-white"
                }`}
            >
              Área do Cliente
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="custom:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 transition-colors duration-200 ${isHero ? "text-white" : "text-gray-700"
                }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuVisible && (
          <div className="fixed inset-0 z-50 flex custom:hidden">
            {/* Overlay */}
            <div
              className={`fixed inset-0 bg-black transition-opacity duration-300 ${isAnimating ? "bg-opacity-30" : "bg-opacity-0"
                }`}
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Off-canvas menu */}
            <div
              className={`relative ml-auto w-4/5 max-w-xs h-full bg-white shadow-lg transform transition-transform duration-300 ${isAnimating ? "translate-x-0" : "translate-x-full"
                }`}
            >
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fechar menu"
                className="absolute top-4 right-4 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-600"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="px-6 pt-16 pb-6 space-y-1 flex text-nowrap flex-col">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-nowrap rounded-md text-base font-medium ${location.pathname === item.href
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/area-cliente"
                  className="block px-3 text-nowrap py-2 text-center bg-primary-600 text-white rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Área do Cliente
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
