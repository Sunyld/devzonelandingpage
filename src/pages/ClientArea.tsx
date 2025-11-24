import { useState } from "react";
import {
  User,
  Eye,
  EyeOff,
  FileText,
  Calendar,
  MessageSquare,
  Download,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

const ClientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  const projects = [
    {
      id: 1,
      name: "E-commerce Fashion Store",
      status: "Em Desenvolvimento",
      progress: 75,
      startDate: "15/01/2024",
      deadline: "15/03/2024",
      lastUpdate: "10/02/2024",
      statusColor: "text-blue-600",
      progressColor: "bg-blue-600",
    },
    {
      id: 2,
      name: "App Mobile Delivery",
      status: "Concluído",
      progress: 100,
      startDate: "01/12/2023",
      deadline: "01/02/2024",
      lastUpdate: "01/02/2024",
      statusColor: "text-green-600",
      progressColor: "bg-green-600",
    },
    {
      id: 3,
      name: "Sistema ERP",
      status: "Aguardando Aprovação",
      progress: 50,
      startDate: "20/01/2024",
      deadline: "20/04/2024",
      lastUpdate: "05/02/2024",
      statusColor: "text-yellow-600",
      progressColor: "bg-yellow-600",
    },
  ];

  const messages = [
    {
      id: 1,
      from: "João Silva - Desenvolvedor",
      subject: "Atualização do Projeto E-commerce",
      date: "10/02/2024",
      preview: "Finalizamos a implementação do sistema de pagamentos...",
      unread: true,
    },
    {
      id: 2,
      from: "Maria Santos - Designer",
      subject: "Aprovação do Layout Mobile",
      date: "08/02/2024",
      preview: "Enviamos as telas do aplicativo para sua aprovação...",
      unread: false,
    },
    {
      id: 3,
      from: "Carlos Oliveira - Gerente",
      subject: "Reunião de Acompanhamento",
      date: "05/02/2024",
      preview: "Vamos agendar nossa reunião semanal para...",
      unread: false,
    },
  ];

  const documents = [
    {
      id: 1,
      name: "Contrato de Desenvolvimento.pdf",
      type: "Contrato",
      date: "15/01/2024",
      size: "2.3 MB",
    },
    {
      id: 2,
      name: "Especificações Técnicas.pdf",
      type: "Documentação",
      date: "20/01/2024",
      size: "1.8 MB",
    },
    {
      id: 3,
      name: "Manual do Usuário.pdf",
      type: "Manual",
      date: "01/02/2024",
      size: "3.1 MB",
    },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-primary-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <User className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Área do Cliente
              </h2>
              <p className="text-gray-600 mt-2">
                Acesse sua conta para acompanhar seus projetos
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-12"
                    placeholder="Sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">Lembrar-me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-primary-600 hover:text-[#00daff]"
                >
                  Esqueceu a senha?
                </a>
              </div>

              <button type="submit" className="w-full btn-primary">
                Entrar
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Não tem uma conta?{" "}
                <a
                  href="/contato"
                  className="text-primary-600 hover:text-[#00daff] font-medium"
                >
                  Entre em contato
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="container-max py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Área do Cliente
              </h1>
              <p className="text-gray-600">Bem-vindo de volta, João Silva!</p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Sair
            </button>
          </div>
        </div>
      </section>

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Projects Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Meus Projetos
              </h2>
              <div className="space-y-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="border border-gray-200 rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {project.name}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${project.statusColor} bg-opacity-10`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>Progresso</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${project.progressColor}`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Início:</span>
                        <p className="font-medium">{project.startDate}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Prazo:</span>
                        <p className="font-medium">{project.deadline}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">
                          Última Atualização:
                        </span>
                        <p className="font-medium">{project.lastUpdate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Mensagens Recentes
              </h2>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-4 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
                      message.unread
                        ? "border-primary-200 bg-primary-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`font-medium ${
                          message.unread ? "text-primary-900" : "text-gray-900"
                        }`}
                      >
                        {message.from}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {message.date}
                      </span>
                    </div>
                    <h4
                      className={`font-medium mb-1 ${
                        message.unread ? "text-primary-800" : "text-gray-800"
                      }`}
                    >
                      {message.subject}
                    </h4>
                    <p className="text-gray-600 text-sm">{message.preview}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Resumo
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Em Andamento</span>
                  </div>
                  <span className="font-semibold text-gray-900">1</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">Concluídos</span>
                  </div>
                  <span className="font-semibold text-gray-900">1</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">Pendentes</span>
                  </div>
                  <span className="font-semibold text-gray-900">1</span>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Documentos
              </h3>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {doc.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {doc.type} • {doc.size}
                        </p>
                      </div>
                    </div>
                    <button className="text-primary-600 hover:text-[#00daff]">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Ações Rápidas
              </h3>
              <div className="space-y-3">
                <button className="w-full btn-primary text-sm py-2">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Nova Mensagem
                </button>
                <button className="w-full btn-secondary text-sm py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Reunião
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientArea;
