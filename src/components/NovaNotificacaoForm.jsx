import { useState } from "react";
import Button from "./Button"; // Garanta que o nome do componente de botão está correto

function NovaNotificacaoForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [canal, setCanal] = useState("PUSH"); // Valor padrão inicial

  function handleSubmit(e) {
    e.preventDefault(); // Impede a página de recarregar
    
    if (!titulo.trim()) return; // Validação básica para não enviar vazio

    // Monta o objeto da nova notificação e envia para o componente pai
    onAdicionar({
      id: Date.now(), // Gera um ID único provisório
      canal,
      hora: new Date().toLocaleTimeString().slice(0, 5), // Formata a hora em HH:MM
      titulo,
      texto,
      lida: false,
    });

    // Limpa os campos após o envio
    setTitulo("");
    setTexto("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6 p-4 bg-white rounded-xl border border-gray-100">
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título da notificação"
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
      />
      
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Texto da mensagem..."
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm h-20 resize-none"
      />

      <div className="flex gap-4 my-1 text-sm items-center">
        <label className="text-gray-500">Canal:</label>
        <select 
          value={canal} 
          onChange={(e) => setCanal(e.target.value)}
          className="border border-gray-200 rounded p-1 bg-white"
        >
          <option value="PUSH">Push</option>
          <option value="EMAIL">E-mail</option>
          <option value="ALERTA">Alerta</option>
        </select>
      </div>

      <Button variant="destaque">Enviar notificação de teste</Button>
    </form>
  );
}

export default NovaNotificacaoForm;
