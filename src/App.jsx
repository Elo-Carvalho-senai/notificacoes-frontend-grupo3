import { useState } from "react";
import FilterChip from "./components/FilterChip";
import NotificationCard from "./components/NotificationCard";
import Button from "./components/Button";

// 1. Lista de dados fictícios (Mock data)
const notificacoesExemplo = [
  {
    id: 1,
    canal: "PUSH",
    hora: "14:32",
    titulo: "Inscrição confirmada",
    texto: "Seu lugar está garantido.",
    lida: false,
  },
  {
    id: 2,
    canal: "EMAIL",
    hora: "13:10",
    titulo: "Evento amanhã",
    texto: "Não esqueça o notebook.",
    lida: true,
  },
];

// 2. Componente de Composição (Casca Reutilizável usando children)
function NotificationList({ title, children }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm mb-4">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
        {title}
      </h2>
      {/* O miolo variável entra exatamente aqui através do children */}
      <div className="flex flex-col gap-1">
        {children}
      </div>
    </div>
  );
}

// 3. Componente Principal Raiz
export default function App() {
  const [filtro, setFiltro] = useState("todas");

  // Lógica para filtrar a lista na tela de verdade de acordo com o estado do chip
  const notificacoesFiltradas = notificacoesExemplo.filter((n) => {
    if (filtro === "todas") return true;
    return n.canal.toLowerCase() === filtro;
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Central de Notificações</h1>

      {/* Seção de Chips de Filtro */}
      <div className="flex gap-2 mb-4">
        <FilterChip
          label="Todas"
          ativo={filtro === "todas"}
          onClick={() => setFiltro("todas")}
        />
        <FilterChip
          label="Push"
          ativo={filtro === "push"}
          onClick={() => setFiltro("push")}
        />
        <FilterChip
          label="E-mail"
          ativo={filtro === "email"}
          onClick={() => setFiltro("email")}
        />
      </div>

      {/* Uso da Composição: Passando os cards de notificação DENTRO da lista usando children */}
      <NotificationList title={`Mensagens (${notificacoesFiltradas.length})`}>
        {notificacoesFiltradas.length === 0 ? (
          <p className="text-sm text-gray-400 py-4 text-center">Nenhuma notificação por aqui.</p>
        ) : (
          notificacoesFiltradas.map((n) => (
            <NotificationCard key={n.id} {...n} />
          ))
        )}
      </NotificationList>

      {/* Botão com a prop children e variante de destaque */}
      <Button variant="destaque" onClick={() => alert("Notificação enviada!")}>
        Enviar notificação de teste
      </Button>
    </div>
  );
}