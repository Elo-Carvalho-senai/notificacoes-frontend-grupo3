import { useState } from "react";
import FilterBar from "./components/FilterBar";
import NotificationList from "./components/NotificationList";
import NotificationCard from "./components/NotificationCard";
import Button from "./components/Button";

// Componente do Formulário Controlado (Parte 4) inserido no mesmo arquivo para ficar 100% completo
function NotificationForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [canal, setCanal] = useState("PUSH");

  function handleSubmit(e) {
    e.preventDefault();

    // Impede o envio se os campos estiverem em branco
    if (!titulo.trim() || !texto.trim()) {
      alert("Por favor, preencha o título e a mensagem!");
      return;
    }

    const novaNotificacao = {
      id: Date.now(),
      canal,
      hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      titulo,
      texto,
      lida: false,
    };

    // Elevação de estado: envia a nova notificação para o componente pai (App)
    onAdicionar(novaNotificacao);

    // Limpa os campos após o envio
    setTitulo("");
    setTexto("");
    setCanal("PUSH");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-4 mb-6 shadow-sm flex flex-col gap-3">
      <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Nova Notificação</h2>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-500">Título</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Digite o título"
          className="border border-gray-200 rounded-lg p-2 text-sm focus:outline-marca"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-500">Mensagem</label>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite o conteúdo"
          className="border border-gray-200 rounded-lg p-2 text-sm focus:outline-marca resize-none h-16"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-500">Canal</label>
        <select
          value={canal}
          onChange={(e) => setCanal(e.target.value)}
          className="border border-gray-200 rounded-lg p-2 text-sm bg-white focus:outline-marca"
        >
          <option value="PUSH">Push</option>
          <option value="EMAIL">E-mail</option>
        </select>
      </div>

      <div className="flex justify-end mt-1">
        <Button variant="primario">Cadastrar Notificação</Button>
      </div>
    </form>
  );
}

// Componente Principal
export default function App() {
  const [filtro, setFiltro] = useState("todas");
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

  // Função utilizada para o botão de teste e também pelo formulário real
  const lidarComAdicionar = (nova) => {
    setNotificacoes((atual) => [nova, ...atual]);
  };

  const adicionarNotificacaoTeste = () => {
    const novaTeste = {
      id: Date.now(),
      canal: "PUSH",
      hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      titulo: "Nova Notificação de Teste",
      texto: "Esta notificação foi adicionada usando a função de estado imutável!",
      lida: false,
    };
    lidarComAdicionar(novaTeste);
  };

  // Filtragem da lista em tempo real baseada no chip ativo
  const notificacoesFiltradas = notificacoes.filter((n) => {
    if (filtro === "todas") return true;
    return n.canal.toLowerCase() === filtro;
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Central de Notificações</h1>

      {/* Formulário Controlado (Parte 4) */}
      <NotificationForm onAdicionar={lidarComAdicionar} />

      {/* Barra de Filtros (Parte 2) */}
      <FilterBar filtroAtual={filtro} onMudarFiltro={setFiltro} />

      {/* Lista Baseada em Composição (Parte 2) */}
      <NotificationList count={notificacoesFiltradas.length}>
        {notificacoesFiltradas.map((n) => (
          <NotificationCard key={n.id} {...n} />
        ))}
      </NotificationList>

      {/* Botão de Teste Adicional */}
      <Button variant="destaque" onClick={adicionarNotificacaoTeste}>
        Enviar notificação de teste
      </Button>
    </div>
  );
}