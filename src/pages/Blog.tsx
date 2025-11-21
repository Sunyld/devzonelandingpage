import React from "react";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "As Tendências de Desenvolvimento Web para 2024",
      excerpt:
        "Descubra as principais tecnologias e frameworks que estão moldando o futuro do desenvolvimento web.",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "João Silva",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      category: "Desenvolvimento Web",
      featured: true,
    },
    {
      id: 2,
      title: "React vs Vue.js: Qual Framework Escolher?",
      excerpt:
        "Uma comparação detalhada entre os dois frameworks mais populares para desenvolvimento frontend.",
      image:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Maria Santos",
      date: "10 de Janeiro, 2024",
      readTime: "8 min",
      category: "Frontend",
      featured: false,
    },
    {
      id: 3,
      title: "Como Otimizar a Performance de Aplicações Mobile",
      excerpt:
        "Dicas práticas para melhorar a performance e experiência do usuário em apps móveis.",
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Carlos Oliveira",
      date: "8 de Janeiro, 2024",
      readTime: "6 min",
      category: "Mobile",
      featured: false,
    },
    {
      id: 4,
      title: "Microserviços: Arquitetura para Aplicações Escaláveis",
      excerpt:
        "Entenda como implementar uma arquitetura de microserviços para sistemas robustos.",
      image:
        "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Ana Costa",
      date: "5 de Janeiro, 2024",
      readTime: "10 min",
      category: "Backend",
      featured: false,
    },
    {
      id: 5,
      title: "UX/UI Design: Princípios para Interfaces Intuitivas",
      excerpt:
        "Como criar interfaces que proporcionam uma experiência excepcional ao usuário.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Pedro Lima",
      date: "3 de Janeiro, 2024",
      readTime: "7 min",
      category: "Design",
      featured: false,
    },
    {
      id: 6,
      title: "Segurança em Aplicações Web: Melhores Práticas",
      excerpt:
        "Proteja suas aplicações contra as principais vulnerabilidades de segurança.",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Lucas Ferreira",
      date: "1 de Janeiro, 2024",
      readTime: "9 min",
      category: "Segurança",
      featured: false,
    },
  ];

  const categories = [
    "Todos",
    "Desenvolvimento Web",
    "Frontend",
    "Backend",
    "Mobile",
    "Design",
    "Segurança",
  ];

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section id="hero" className="gradient-bg -mt-2 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Blog Técnico</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Insights, tutoriais e tendências do mundo do desenvolvimento
            digital. Mantenha-se atualizado com as últimas novidades da
            tecnologia.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-primary-600 font-medium text-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="btn-primary inline-flex items-center w-fit">
                    Ler Artigo Completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                      Ler mais
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Receba Conteúdo Exclusivo
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Inscreva-se em nossa newsletter e receba os melhores artigos sobre
            desenvolvimento e tecnologia diretamente em seu e-mail.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button className="btn-primary whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
            <p className="text-sm text-primary-200 mt-3">
              Sem spam. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Precisa de Ajuda com seu Projeto?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossa equipe de especialistas está pronta para transformar suas
            ideias em soluções digitais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="btn-primary">
              Falar com Especialista
            </Link>
            <Link to="/servicos" className="btn-secondary">
              Ver Nossos Serviços
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
