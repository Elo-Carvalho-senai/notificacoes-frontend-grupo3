import { useState } from "react";
import Button from "./Button";

function NotificationForm({ onAdicionar }) {
    // Estados controlados para cada campo do formulário
    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");
    const [canal, setCanal] = useState("PUSH");

    function handleSubmit(e) {
        // Evita o comportamento padrão do navegador de recarregar a página
        e.preventDefault();

        // Validação simples: não deixa enviar campos vazios
        if (!titulo.trim() || !texto.trim()) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Monta o novo objeto de notificação com os dados digitados
        const novaNotificacao = {
            id: Date.now(),
            canal,
            hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
            titulo,
            texto,
            lida: false,
        };

        // Envia o dado para o componente pai (App.jsx) salvar no estado geral
        onAdicionar(novaNotificacao);

        // Limpa os campos do formulário após o envio bem-sucedido
        setTitulo("");
        setTexto("");
        setCanal("PUSH");
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-4 mb-6 shadow-sm flex flex-col gap-3">
            <h2 className="text-md font-bold text-gray-700">Nova Notificação Real</h2>

            {/* Campo de Título */}
            <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500">Título</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Digite o título da mensagem"
                    className="border border-gray-200 rounded-lg p-2 text-sm focus:outline-marca"
                />
            </div>

            {/* Campo de Mensagem */}
            <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500">Mensagem</label>
                <textarea
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Digite o conteúdo do texto"
                    className="border border-gray-200 rounded-lg p-2 text-sm focus:outline-marca resize-none h-20"
                />
            </div>

            {/* Seleção de Canal */}
            <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500">Canal de Envio</label>
                <select
                    value={canal}
                    onChange={(e) => setCanal(e.target.value)}
                    className="border border-gray-200 rounded-lg p-2 text-sm focus:outline-marca bg-white"
                >
                    <option value="PUSH">Push (Sinal de Alerta)</option>
                    <option value="EMAIL">E-mail</option>
                </select>
            </div>

            {/* Botão de Envio do próprio Design System */}
            <div className="mt-2 flex justify-end">
                <Button variant="primario">Cadastrar Notificação</Button>
            </div>
        </form>
    );
}

export default NotificationForm;