import React, { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Fashion Store",
      category: "ecommerce",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Plataforma completa de e-commerce com mais de 10.000 produtos, sistema de pagamento integrado e painel administrativo.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "Fashion Brand XYZ",
      year: "2024",
      results: [
        "300% aumento nas vendas online",
        "50% redução no tempo de carregamento",
        "95% satisfação do cliente",
      ],
    },
    {
      id: 2,
      title: "App de Delivery",
      category: "mobile",
      image:
        "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Aplicativo de delivery com geolocalização em tempo real, sistema de pagamentos e notificações push.",
      technologies: ["React Native", "Firebase", "Google Maps API", "PayPal"],
      client: "DeliveryFast",
      year: "2023",
      results: [
        "10.000+ downloads no primeiro mês",
        "4.8 estrelas na App Store",
        "40% aumento nos pedidos",
      ],
    },
    {
      id: 3,
      title: "Sistema ERP Empresarial",
      category: "system",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Sistema completo de gestão empresarial com módulos de vendas, estoque, financeiro e relatórios.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      client: "Indústria ABC",
      year: "2023",
      results: [
        "60% redução no tempo de processos",
        "90% automação de tarefas",
        "ROI de 250% em 6 meses",
      ],
    },
    {
      id: 4,
      title: "Plataforma de Cursos Online",
      category: "web",
      image:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Plataforma educacional com sistema de videoaulas, exercícios interativos e certificados.",
      technologies: ["Next.js", "Prisma", "AWS", "Stripe"],
      client: "EduTech Solutions",
      year: "2024",
      results: [
        "5.000+ alunos cadastrados",
        "98% taxa de conclusão",
        "4.9 avaliação média",
      ],
    },
    {
      id: 5,
      title: "App de Fitness",
      category: "mobile",
      image:
        "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Aplicativo de treinos personalizados com acompanhamento de progresso e comunidade.",
      technologies: ["Flutter", "Firebase", "ML Kit", "HealthKit"],
      client: "FitLife App",
      year: "2023",
      results: [
        "25.000+ usuários ativos",
        "4.7 estrelas nas lojas",
        "80% retenção mensal",
      ],
    },
    {
      id: 6,
      title: "Portal Imobiliário",
      category: "web",
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Portal completo para compra e venda de imóveis com busca avançada e tour virtual.",
      technologies: ["React", "Node.js", "MySQL", "Google Maps"],
      client: "Imobiliária Premium",
      year: "2024",
      results: [
        "200% aumento em leads",
        "50% redução no tempo de venda",
        "15.000+ imóveis cadastrados",
      ],
    },
  ];

  const filters = [
    { id: "all", label: "Todos os Projetos" },
    { id: "web", label: "Desenvolvimento Web" },
    { id: "mobile", label: "Apps Mobile" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "system", label: "Sistemas" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section id="hero" className="gradient-bg -mt-2 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Nosso Portfólio
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados
            excepcionais que alcançamos para nossos clientes.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === filter.id
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  }`}
              >
                <Filter className="inline-block w-4 h-4 mr-2" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {project.client}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Tecnologias:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Resultados:
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium">
                      <ExternalLink className="h-4 w-4" />
                      <span>Ver Projeto</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium">
                      <Github className="h-4 w-4" />
                      <span>Código</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Números que Impressionam
            </h2>
            <p className="text-xl text-primary-100">
              Resultados concretos dos nossos projetos
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-primary-200">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-primary-200">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-200">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Seu projeto pode ser o próximo!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos transformar sua ideia em um projeto
            de sucesso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contato" className="btn-primary">
              Solicitar Orçamento
            </a>
            <a href="tel:+5511999999999" className="btn-secondary">
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
