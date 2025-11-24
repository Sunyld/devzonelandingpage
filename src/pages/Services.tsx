import React from "react";
import {
  Globe,
  Smartphone,
  Settings,
  Code,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Desenvolvimento de Sites Responsivos",
      description:
        "Criamos sites modernos, rápidos e otimizados para todos os dispositivos.",
      features: [
        "Design responsivo e mobile-first",
        "Otimização para SEO",
        "Performance e velocidade",
        "Integração com CMS",
        "Manutenção e suporte",
      ],
      technologies: ["React", "Next.js", "WordPress", "Tailwind CSS"],
      price: "A partir de MZN 2.500",
    },
    {
      icon: Smartphone,
      title: "Desenvolvimento de Aplicativos Mobile",
      description:
        "Apps nativos para iOS e Android com performance excepcional.",
      features: [
        "Desenvolvimento nativo iOS/Android",
        "Interface intuitiva e moderna",
        "Integração com APIs",
        "Push notifications",
        "Publicação nas lojas",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      price: "A partir de MZN 8.000",
    },
    {
      icon: Settings,
      title: "Sistemas Empresariais",
      description:
        "Soluções personalizadas para otimizar processos empresariais.",
      features: [
        "Análise de processos",
        "Sistema sob medida",
        "Integração com sistemas existentes",
        "Relatórios e dashboards",
        "Treinamento da equipe",
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      price: "A partir de MZN 15.000",
    },
    {
      icon: Code,
      title: "Plataformas Web Personalizadas",
      description:
        "Plataformas robustas e escaláveis para seu negócio crescer.",
      features: [
        "Arquitetura escalável",
        "Painel administrativo",
        "Sistema de usuários",
        "Pagamentos integrados",
        "Analytics avançado",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker"],
      price: "A partir de MZN 12.000",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Descoberta",
      description: "Entendemos suas necessidades e objetivos de negócio.",
    },
    {
      step: "02",
      title: "Planejamento",
      description: "Criamos um plano detalhado e cronograma do projeto.",
    },
    {
      step: "03",
      title: "Design",
      description: "Desenvolvemos protótipos e interfaces intuitivas.",
    },
    {
      step: "04",
      title: "Desenvolvimento",
      description: "Codificamos sua solução com as melhores práticas.",
    },
    {
      step: "05",
      title: "Testes",
      description: "Realizamos testes rigorosos para garantir qualidade.",
    },
    {
      step: "06",
      title: "Entrega",
      description: "Lançamos seu projeto e oferecemos suporte contínuo.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        id="hero"
        className="gradient-bg -mt-2 text-white section-padding"
      >
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Oferecemos soluções completas em desenvolvimento digital para
            transformar sua visão em realidade e impulsionar seu negócio.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="p-8">
                  <div className="bg-primary-100 p-3 rounded-lg w-fit mb-6">
                    <service.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      O que está incluído:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Tecnologias:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-100 text-[#00daff] px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary-600">
                      {service.price}
                    </div>
                    <Link
                      to="/contato"
                      className="btn-primary inline-flex items-center"
                    >
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguimos uma metodologia comprovada para garantir o sucesso do seu
              projeto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tecnologias que Utilizamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com as tecnologias mais modernas e confiáveis do
              mercado
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React",
              "Node.js",
              "Python",
              "Flutter",
              "AWS",
              "MongoDB",
              "PostgreSQL",
              "Docker",
              "Kubernetes",
              "Next.js",
              "TypeScript",
              "GraphQL",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
              >
                <div className="text-lg font-semibold text-gray-900">
                  {tech}
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
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado para
            suas necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </div>
  );
};

export default Services;
