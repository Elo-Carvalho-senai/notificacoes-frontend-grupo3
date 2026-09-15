import { useState } from "react";
import FilterBar from "./components/FilterBar";
import NotificationList from "./components/NotificationList";
import NovaNotificacaoForm from "./components/NovaNotificacaoForm";

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
]


function App() {
  const [notificacoes, setNotificacoes] = useState(notificacoesIniciais);
  const [filtro, setFiltro] = useState("todas");
//   const [canal, setCanal] = useState("PUSH");

    return (
    <div className="max-w-2xl mx-auto p-4 min-h-screen bg-fundo text-texto font-sans">
      <h1 className="text-2xl font-bold mb-4 text-marca">Central de Notificações</h1>

      {/* 1. Formulário controlado para criar notificações */}
      <NovaNotificacaoForm onAdicionar={adicionarNotificacao} />

      {/* 2. Barra de filtros com elevação de estado */}
      <FilterBar filtroAtual={filtro} onFiltroChange={setFiltro} />

      {/* 3. Lista isolada de notificações (trata estado vazio internamente) */}
      <NotificationList notificacoes={notificacoesFiltradas} />
    </div>
  );
}



  // Adiciona a nova notificação no topo sem mutar o array original (Encontro 7)
  function adicionarNotificacao(nova) {
    setNotificacoes((atual) => [nova, ...atual]);
  }

  // Lógica de filtragem dos dados
  const notificacoesFiltradas = notificacoes.filter((n) => {
    if (filtro === "push") return n.canal === "PUSH";
    if (filtro === "email") return n.canal === "EMAIL";
    return true; // "todas"
  });



 export default App;