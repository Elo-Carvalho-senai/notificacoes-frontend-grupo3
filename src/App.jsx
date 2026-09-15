import { useState } from "react";
import FilterChip from "./components/FilterChip";
import NotificationCard from "./components/NotificationCard";
import Button from "./components/Button";

// Lista fixa inicial baseada no modelo oficial do professor (Página 15)
const notificacoesExemplo = [
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

  // Filtra as notificações dinamicamente com base no estado do filtro
  const notificacoesFiltradas = notificacoesExemplo.filter((item) => {
    if (filtro === "todas") return true;
    return item.canal.toLowerCase() === filtro.toLowerCase();
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Título Principal */}
      <h1 className="text-2xl font-bold mb-4">Central de Notificações</h1>

      {/* Menu de Filtros explícito via propriedades diretas (Páginas 15/16) */}
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

      {/* Renderização direta da lista usando .map() conforme o checklist oficial */}
      {notificacoesFiltradas.map((n) => (
        <NotificationCard key={n.id} {...n} />
      ))}

      {/* Botão padrão do sistema usando a variação correta */}
      <Button variant="destaque">Enviar notificação de teste</Button>
    </div>
  );
}
