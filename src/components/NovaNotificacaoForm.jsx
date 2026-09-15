import { useState } from "react";
import Button from "./Button.jsx";

export default function NovaNotificacaoForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [canal, setCanal] = useState("PUSH");

  function handleSubmit(e) {
    e.preventDefault(); // Evita que a página recarregue
    if (!titulo.trim()) return;

    // Envia o novo objeto para o componente pai (App)
    onAdicionar({
      id: Date.now(),
      canal,
      hora: new Date().toLocaleTimeString().slice(0, 5),
      titulo,
      texto,
      lida: false,
    });

    // Limpa os campos
    setTitulo("");
    setTexto("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6 p-4 bg-[#FAFAF7] border border-gray-200 rounded-xl shadow-sm">
      <h2 className="font-semibold text-[#14201E]">Criar Nova Notificação</h2>
      
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título da notificação *"
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0F4D46]"
      />

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Texto da mensagem"
        rows="2"
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0F4D46]"
      />

      <div className="flex items-center gap-2 mb-1 text-sm text-[#14201E]">
        <span>Canal:</span>
        <select
          value={canal}
          onChange={(e) => setCanal(e.target.value)}
          className="border border-gray-200 rounded-lg px-2 py-1 text-sm bg-white"
        >
          <option value="PUSH">PUSH</option>
          <option value="EMAIL">E-MAIL</option>
        </select>
      </div>

      <Button variant="destaque">Adicionar notificação</Button>
    </form>
  );
}