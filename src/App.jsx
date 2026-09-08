import { useState } from "react";
// Correção dos caminhos apontando para a pasta correta "componentes"
import NotificationList from "./components/NotificationList";
import FilterBar from "./components/FilterBar";
import NovaNotificacaoForm from "./components/NovaNotificacaoForm";

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

function App() {
  // Inicializa o estado com a lista de exemplos para você não ver a tela vazia de início
  const [notificacoes, setNotificacoes] = useState(notificacoesExemplo);
  const [filtro, setFiltro] = useState("todas");

  // Função para adicionar nova notificação respeitando a imutabilidade
  function adicionarNotificacao(nova) { 
    setNotificacoes((atual) => [nova, ...atual]); 
  } 

  // Lógica que filtra o array antes de mandar para o componente de listagem
  const notificacoesFiltradas = notificacoes.filter((n) => {
    if (filtro === "todas") return true;
    return n.canal.toLowerCase() === filtro.toLowerCase();
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Central de Notificações</h1>
      
      {/* Passo 3: Formulário controlado adicionado no topo */}
      <NovaNotificacaoForm onAdicionar={adicionarNotificacao} />
      
      {/* Passo 2: Barra de filtros extraída */}
      <FilterBar filtroAtual={filtro} onFiltroChange={setFiltro} />
      
      {/* Passo 1: Lista isolada que recebe as notificações filtradas */}
      <NotificationList notificacoes={notificacoesFiltradas} />
    </div>
  );
}

export default App;