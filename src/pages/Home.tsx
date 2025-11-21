import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Settings,
  Star,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: "Sites Responsivos",
      description:
        "Desenvolvimento de sites modernos e responsivos que se adaptam a qualquer dispositivo.",
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description:
        "Aplicativos nativos para iOS e Android com performance excepcional.",
    },
    {
      icon: Settings,
      title: "Sistemas Empresariais",
      description:
        "Soluções personalizadas para otimizar processos e aumentar produtividade.",
    },
    {
      icon: Code,
      title: "Plataformas Web",
      description:
        "Plataformas web robustas e escaláveis para seu negócio crescer.",
    },
  ];

  const portfolio = [
    {
      title: "E-commerce Fashion",
      category: "E-commerce",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Plataforma completa de vendas online com mais de 10.000 produtos.",
    },
    {
      title: "App Delivery",
      category: "Mobile App",
      image:
        "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Aplicativo de delivery com geolocalização e pagamentos integrados.",
    },
    {
      title: "Sistema ERP",
      category: "Sistema Web",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Sistema completo de gestão empresarial para indústria.",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      company: "CEO, TechStart",
      text: "A DigitalCraft transformou nossa ideia em uma plataforma incrível. O resultado superou todas as expectativas!",
      rating: 5,
    },
    {
      name: "João Santos",
      company: "Diretor, InnovaCorp",
      text: "Profissionais excepcionais! Entregaram nosso projeto no prazo e com qualidade impecável.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      company: "Fundadora, StartupXYZ",
      text: "O suporte e a dedicação da equipe foram fundamentais para o sucesso do nosso aplicativo.",
      rating: 5,
    },
  ];

  const benefits = [
    "Desenvolvimento ágil e eficiente",
    "Suporte técnico 24/7",
    "Tecnologias mais modernas do mercado",
    "Equipe especializada e certificada",
    "Garantia de qualidade e prazo",
    "Preços competitivos",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="gradient-bg text-white min-h-screen flex items-center px-4"
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in pt-20 px-4">
              <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
                Transformamos
                <span className="text-primary-300"> Ideias </span>
                em Soluções Digitais
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Desenvolvemos sites, aplicativos móveis, sistemas empresariais e
                plataformas web que impulsionam seu negócio para o próximo
                nível.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  className="btn-primary inline-flex items-center"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  Ver Portfólio
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-gray-300">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-gray-300">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-gray-300">Anos</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up px-8">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Desenvolvimento Digital"
                className="rounded-lg shadow-2xl w-full   mx-auto"
              />
              <div
                className="absolute -left-2 -bottom-10 bg-white p-6 rounded-lg shadow-xl ml-4 mb-4 max-w-[90vw]"
                style={{ maxWidth: "calc(100% - 2rem)" }}
              >
                <div className="flex items-center  space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Projeto Entregue
                    </div>
                    <div className="text-gray-600">
                      No prazo e com qualidade
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em desenvolvimento digital para
              empresas de todos os tamanhos
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <div className="bg-primary-100 p-3 rounded-lg w-fit mb-6">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos nossos trabalhos mais recentes e impactantes
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-primary-600 text-sm font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary">
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Por que escolher a DigitalCraft?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Somos especialistas em transformar desafios complexos em
                soluções digitais elegantes e eficazes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-300 flex-shrink-0" />
                    <span className="text-primary-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <Users className="h-12 w-12 text-primary-300 mx-auto mb-4" />
                <div className="text-2xl font-bold">150+</div>
                <div className="text-primary-200">Clientes Satisfeitos</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <Award className="h-12 w-12 text-primary-300 mx-auto mb-4" />
                <div className="text-2xl font-bold">98%</div>
                <div className="text-primary-200">Taxa de Sucesso</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <Code className="h-12 w-12 text-primary-300 mx-auto mb-4" />
                <div className="text-2xl font-bold">200+</div>
                <div className="text-primary-200">Projetos Entregues</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <Star className="h-12 w-12 text-primary-300 mx-auto mb-4" />
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-primary-200">Avaliação Média</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depoimentos reais de empresas que confiaram em nosso trabalho
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar
            seu negócio a crescer no mundo digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="btn-primary inline-flex items-center"
            >
              Solicitar Orçamento Gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+5511999999999" className="btn-secondary">
              Ligar Agora: (11) 9999-9999
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
