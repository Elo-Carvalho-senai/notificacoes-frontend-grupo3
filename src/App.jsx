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
];

function App() {
  const [filtro, setFiltro] = useState("todas");
  const [notificacoes, setNotificacoes] = useState(notificacoesIniciais);

  // Função para adicionar nova notificação respeitando a imutabilidade
  function adicionarNotificacao(nova) { 
    setNotificacoes((atual) => [nova, ...atual]); 
  } 

  // Lógica que filtra o array antes de mandar para o componente de listagem
  const notificacoesVisiveis = notificacoes.filter((n) => {
    if (filtro === "todas") return true;
    if (filtro === "push") return n.canal === "PUSH";
    if (filtro === "email") return n.canal === "EMAIL";
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Central de Notificações</h1>
      
      {/* Formulário controlado adicionado no topo */}
      <NovaNotificacaoForm onAdicionar={adicionarNotificacao} />
      
      {/* Barra de filtros extraída */}
      <FilterBar filtroAtual={filtro} onFiltroChange={setFiltro} />
      
      {/* Lista isolada que recebe as notificações filtradas */}
      <NotificationList notificacoes={notificacoesVisiveis} />
    </div>
  );
}

export default App;