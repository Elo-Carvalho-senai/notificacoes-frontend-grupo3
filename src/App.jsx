import { useState } from "react";
import FilterBar from "./components/FilterBar"; // 1. Importa a nova barra de filtros
import NotificationCard from "./components/NotificationCard";
import NovaNotificacaoForm from "./components/NovaNotificacaoForm";
import Button from "./components/Button";

const notificacoesIniciais = [
  {
    id: 1,
    canal: "PUSH",
    hora: "10:42",
    titulo: "Servidor em Manutenção",
    texto: "A manutenção do servidor API-Grupo3 começará em breve...",
    lida: false,
  },
  {
    id: 2,
    canal: "EMAIL",
    hora: "Ontem",
    titulo: "Bem-vindo à Plataforma",
    texto: "Explore os recursos da BiblioTech e aproveite ao máximo.",
    lida: true,
  },
  {
    id: 3,
    canal: "ALERTA",
    hora: "25/08",
    titulo: "Nova tentativa de login",
    texto: "Detectamos uma nova tentativa de login na sua conta.",
    lida: true,
  },
];

export default function App() {
  const [filtro, setFiltro] = useState("todas");
  const [notificacoes, setNotificacoes] = useState(notificacoesIniciais);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  function adicionarNotificacao(nova) {
    setNotificacoes((atual) => [nova, ...atual]);
    setMostrarFormulario(false);
  }

  function marcarComoLida(id) {
    setNotificacoes((atual) =>
      atual.map((n) => (n.id === id ? { ...n, lida: true } : n))
    );
  }

  const notificacoesFiltradas = notificacoes.filter((item) => {
    if (filtro === "todas") return true;
    return item.canal.toLowerCase() === filtro.toLowerCase();
  });

  const naoLidasCount = notificacoes.filter((n) => !n.lida).length;

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen shadow-lg pb-10 font-sans flex flex-col">
      {/* Cabeçalho */}
      <div className="bg-[#0A4D3E] text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <span className="text-xl cursor-pointer font-bold">←</span>
          <h1 className="text-lg font-bold">Central de Notificações</h1>
        </div>
        {naoLidasCount > 0 && (
          <span className="bg-[#E24C24] text-white text-xs px-2 py-1 rounded font-bold">
            {naoLidasCount} não lidas
          </span>
        )}
      </div>

      <div className="p-4 flex-1">
        {/* Botão do Form */}
        <div className="mb-4">
          <Button 
            variant="destaque" 
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
          >
            {mostrarFormulario ? "✕ Fechar Formulário" : "＋ Criar Notificação de Teste"}
          </Button>
        </div>

        {mostrarFormulario && (
          <div className="mb-4">
            <NovaNotificacaoForm onAdicionar={adicionarNotificacao} />
          </div>
        )}

        {/* 2. Chamada da FilterBar com Elevação de Estado perfeita */}
        <FilterBar filtroAtual={filtro} onFiltroChange={setFiltro} />

        {/* Lista de Notificações */}
        <div className="space-y-3">
          {notificacoesFiltradas.map((n) => (
            <NotificationCard 
              key={n.id} 
              {...n} 
              onCliqueDetalhes={() => marcarComoLida(n.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
