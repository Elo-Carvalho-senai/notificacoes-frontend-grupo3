import { useState } from "react";
import Button from "./Button";

function NovaNotificacaoForm({ onAdicionar }) {
  // Três estados controlados — um por campo
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [canal, setCanal] = useState("PUSH");

  function handleSubmit(e) {
    e.preventDefault(); // Obrigatório para evitar que a página recarregue
    
    // Validação simples: sem título (ou só espaços), não faz nada
    if (!titulo.trim()) return;

    // O formulário monta o objeto da notificação e entrega para o pai via prop
    onAdicionar({
      id: Date.now(), // Número único para servir de key local
      canal,
      hora: new Date().toLocaleTimeString().slice(0, 5), // Pega a hora atual no formato HH:MM
      titulo,
      texto,
      lida: false,
    });

    // Limpa os campos depois de enviar
    setTitulo("");
    setTexto("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título da notificação"
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-slate-400"
      />
      
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Texto"
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm h-20 resize-none focus:outline-slate-400"
      />

      <div className="flex gap-4 my-1 text-sm items-center">
        <label className="text-gray-500 font-medium">Canal:</label>
        <select 
          value={canal} 
          onChange={(e) => setCanal(e.target.value)}
          className="border border-gray-200 rounded p-1 bg-white text-gray-700 text-sm focus:outline-none"
        >
          <option value="PUSH">Push</option>
          <option value="EMAIL">E-mail</option>
          <option value="ALERTA">Alerta</option>
        </select>
      </div>

      {/* Componente reutilizável com a variante de destaque definida pelo grupo */}
      <Button variant="destaque">Adicionar notificação</Button>
    </form>
  );
}

export default NovaNotificacaoForm;
