import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <img src="/img/logoWhite.png" alt="DevZoneSystems" className="h-14" />
            </div>
            <p className="text-gray-300  ">
              Transformamos ideias em soluções digitais inovadoras.
              Especialistas em desenvolvimento web, mobile e sistemas
              empresariais.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Aplicativos Mobile
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Sistemas Empresariais
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Plataformas Personalizadas
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/area-cliente"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Área do Cliente
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">
                  <a href="#" className="hover:text-primary-400">
                  devzone.moz@gmail.com

                </a>
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">(+258) 87 533 3380</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">Nampula, Mocambique</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-400 text-sm w-full sm:w-auto">
              © 2025 <a href="#" className="hover:text-primary-400">DevZoneSystems</a>. Todos os direitos reservados.
            </p>
            <div className="flex justify-center sm:justify-end space-x-6 mt-4 sm:mt-0 w-full sm:w-auto">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
