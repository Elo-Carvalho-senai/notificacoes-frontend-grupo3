import { useState } from "react";
import FilterBar from "./components/FilterBar";
import NotificationList from "./components/NotificationList";
import NotificationCard from "./components/NotificationCard";
import Button from "./components/Button";

export default function App() {
  // Estado do filtro selecionado
  const [filtro, setFiltro] = useState("todas");

  // Parte 3: A lista de notificações como um estado real do React
  const [notificacoes, setNotificacoes] = useState([
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
  ]);

  // Parte 3: Função correta que cria um array NOVO sem usar .push()
  const adicionarNotificacaoTeste = () => {
    const nova = {
      id: Date.now(),
      canal: "PUSH",
      hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      titulo: "Nova Notificação de Teste",
      texto: "Esta notificação foi adicionada usando a função de estado imutável!",
      lida: false,
    };

    // REGRA DE OURO: Usando a função (atual) => [nova, ...atual] recomendado pela folha
    setNotificacoes((atual) => [nova, ...atual]);
  };

  // Lógica para filtrar a lista na tela de acordo com o estado do chip selecionado
  const notificacoesFiltradas = notificacoes.filter((n) => {
    if (filtro === "todas") return true;
    return n.canal.toLowerCase() === filtro;
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Central de Notificações</h1>

      {/* Componente Extraído (Parte 2) — Barra de Filtros */}
      <FilterBar filtroAtual={filtro} onMudarFiltro={setFiltro} />

      {/* Componente Extraído (Parte 2) — Casca da lista gerenciando o children */}
      <NotificationList count={notificacoesFiltradas.length}>
        {notificacoesFiltradas.map((n) => (
          <NotificationCard key={n.id} {...n} />
        ))}
      </NotificationList>

      {/* Botão chamando a função imutável no clique */}
      <Button variant="destaque" onClick={adicionarNotificacaoTeste}>
        Enviar notificação de teste
      </Button>
    </div>
  );
}