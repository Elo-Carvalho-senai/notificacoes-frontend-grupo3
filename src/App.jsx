import { useState } from "react";
import FilterBar from "./components/FilterBar";
import NotificationList from "./components/NotificationList";
import NotificationForm from "./components/NotificationForm";

const notificacoesIniciais = [
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

export default function App() {
  const [filtro, setFiltro] = useState("todas");
  const [notificacoes, setNotificacoes] = useState(notificacoesIniciais);

  // Filtro que deriva os dados da lista em tempo real
  const notificacoesVisiveis = notificacoes.filter((n) => {
    if (filtro === "todas") return true;
    if (filtro === "push") return n.canal === "PUSH";
    if (filtro === "email") return n.canal === "EMAIL";
  });

  function adicionarNotificacao(nova) {
    setNotificacoes((atual) => [nova, ...atual]);
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Central de Notificações</h1>

      <NotificationForm onAdicionar={adicionarNotificacao} />
      <FilterBar filtroAtual={filtro} onFiltroChange={setFiltro} />
      <NotificationList notificacoes={notificacoesVisiveis} />
    </div>
  );
}