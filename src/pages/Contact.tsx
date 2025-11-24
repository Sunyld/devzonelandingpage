import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const services = [
    "Desenvolvimento de Site",
    "Aplicativo Mobile",
    "Sistema Empresarial",
    "Plataforma Web",
    "E-commerce",
    "Consultoria Técnica",
    "Outro",
  ];

  const budgetRanges = [
    "Até MZN 10.000",
    "MZN 10.000 - MZN 25.000",
    "MZN 25.000 - MZN 50.000",
    "MZN 50.000 - MZN 100.000",
    "Acima de MZN 100.000",
    "Prefiro não informar",
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Mensagem Enviada com Sucesso!
          </h2>
          <p className="text-gray-600 mb-6">
            Obrigado pelo seu interesse! Nossa equipe entrará em contato em até
            24 horas.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="btn-primary">
            Enviar Nova Mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        id="hero"
        className="gradient-bg -mt-2 text-white section-padding"
      >
        <div className="container-max  text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Nossa equipe está
            aqui para ajudar você a criar soluções digitais excepcionais.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefone</h3>
                      <p className="text-gray-600">(+258) 87 533 3380</p>
                      <p className="text-sm text-gray-500">
                        Segunda a Sexta, 8h às 18h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">E-mail</h3>
                      <p className="text-gray-600">devzone.moz@gmail.com</p>
                      <p className="text-sm text-gray-500">
                        Resposta em até 24h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Endereço</h3>
                      <p className="text-gray-600">Nampula, Mocambique</p>
                      <p className="text-sm text-gray-500">
                        Atendimento presencial com agendamento
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Horário</h3>
                      <p className="text-gray-600">
                        Segunda a Sexta: 9h às 18h
                      </p>
                      <p className="text-sm text-gray-500">
                        Suporte 24/7 para clientes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Resposta Rápida Garantida
                  </h3>
                  <p className="text-sm text-gray-600">
                    Comprometemo-nos a responder todas as mensagens em até 24
                    horas úteis.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Solicite seu Orçamento
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="84 *** ****"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Serviço de Interesse *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Orçamento Estimado
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Selecione uma faixa</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Descreva seu Projeto *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Conte-nos mais sobre seu projeto, objetivos e requisitos específicos..."
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      Concordo com os{" "}
                      <a
                        href="#"
                        className="text-primary-600 hover:text-[#00daff]"
                      >
                        termos de uso
                      </a>{" "}
                      e{" "}
                      <a
                        href="#"
                        className="text-primary-600 hover:text-[#00daff]"
                      >
                        política de privacidade
                      </a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary inline-flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Solicitação
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Qual é o prazo médio para desenvolvimento?",
                answer:
                  "O prazo varia conforme a complexidade do projeto. Sites simples: 2-4 semanas. Aplicativos: 2-4 meses. Sistemas complexos: 3-6 meses.",
              },
              {
                question: "Vocês oferecem suporte pós-entrega?",
                answer:
                  "Sim! Oferecemos 3 meses de suporte gratuito e planos de manutenção contínua para garantir que seu projeto funcione perfeitamente.",
              },
              {
                question: "Como funciona o processo de pagamento?",
                answer:
                  "Trabalhamos com parcelas: 50% no início, 30% na entrega do protótipo e 20% na finalização. Aceitamos Carteiras Moveis (M-pesa e E-Mola) e transferência bancarias.",
              },
              {
                question: "Posso acompanhar o desenvolvimento?",
                answer:
                  "Claro! Você terá acesso à nossa área do cliente para acompanhar o progresso em tempo real e participar de reuniões semanais.",
              },
              {
                question: "Quais tecnologias vocês utilizam?",
                answer:
                  "Utilizamos as tecnologias mais modernas do mercado, incluindo React, Node.js, Python, Flutter, e outras ferramentas de ponta, sempre escolhendo a melhor stack para cada projeto.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="relative bg-primary-50 rounded-lg shadow-sm overflow-hidden"
              >
                {/* Linha vertical roxa na esquerda */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600"></div>

                <div className="pl-6 pr-4 py-5 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 pr-4 flex-1">
                    {faq.question}
                  </h3>
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors"
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Resposta expandida */}
                {openFAQ === index && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
