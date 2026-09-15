import { useState } from "react"; // Importando o hook de estado
import Button from "./components/Button";
import FilterChip from "./components/FilterChip";
import NotificationCard from "./components/NotificationCard";

export default function App() {
  // Estado para armazenar qual filtro está selecionado atualmente
  const [filter, setFilter] = useState("Todas");

  const handleNotificationClick = () => {
    alert('Todas as notificações foram lidas!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col gap-6 items-start">
      <h1 className="text-2xl font-bold text-gray-800">Central de Notificações</h1>

      {/* Seção de Filtros dinâmicos */}
      <div className="flex gap-2">
        {/* Adicionamos uma função anônima no onClick para disparar o setFilter com o texto do chip */}
        <span onClick={() => setFilter("Todas")}>
          <FilterChip text="Todas" isActive={filter === "Todas"} />
        </span>

        <span onClick={() => setFilter("Lidas")}>
          <FilterChip text="Lidas" isActive={filter === "Lidas"} />
        </span>

        <span onClick={() => setFilter("Arquivadas")}>
          <FilterChip text="Arquivadas" isActive={filter === "Arquivadas"} />
        </span>
      </div>

      {/* Lista de Notificações */}
      <div className="flex flex-col gap-3 w-full">
        <NotificationCard
          title="Nova mensagem de entrega"
          message="Seu pedido saiu para a rota de entrega."
          time="10:30"
        />
        <NotificationCard
          title="Alerta de Segurança"
          message="Um novo dispositivo fez login na sua conta."
          time="Ontem"
        />
      </div>

      {/* Botão de Ação */}
      <Button text="Marcar todas como lidas" onClick={handleNotificationClick} />
    </div>
  );
}