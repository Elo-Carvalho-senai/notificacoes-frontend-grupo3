import { useState } from "react";
import Button from "./Button";

function NovaNotificacaoForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [canal, setCanal] = useState("PUSH");

  function handleSubmit(e) {
    e.preventDefault();
    if (!titulo.trim()) return;

    onAdicionar({
      id: Date.now(),
      canal,
      hora: new Date().toLocaleTimeString().slice(0, 5),
      titulo,
      texto,
      lida: false,
      temBotao: false,
    });

    setTitulo("");
    setTexto("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 mb-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs"
    >
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título da notificação"
        className="border border-slate-200 rounded-lg px-3 py-2 text-xs bg-slate-50/50 focus:outline-none focus:bg-white focus:border-[#1d5c58]"
      />

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Texto"
        rows={2}
        className="border border-slate-200 rounded-lg px-3 py-2 text-xs bg-slate-50/50 resize-none focus:outline-none focus:bg-white focus:border-[#1d5c58]"
      />

      <div className="flex gap-2 items-center justify-between">
        <select
          value={canal}
          onChange={(e) => setCanal(e.target.value)}
          className="border border-slate-200 rounded-lg px-3 py-1.5 text-xs bg-slate-50 font-medium text-slate-700 cursor-pointer focus:outline-none"
        >
          <option value="PUSH">PUSH</option>
          <option value="EMAIL">E-MAIL</option>
          <option value="ALERTA">ALERTA</option>
        </select>

        <Button type="submit" variant="destaque">
          Adicionar notificação
        </Button>
      </div>
    </form>
  );
}

export default NovaNotificacaoForm;