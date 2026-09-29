import { useState, useEffect } from "react";
import { API_URL } from "../config";
import { useAuth } from "../context/AuthContext";

import FilterBar from "../components/FilterBar";
import NotificationList from "../components/NotificationList";
import NovaNotificacaoForm from "../components/NovaNotificacaoForm";



function Home() {
    const { token } = useAuth();
    const [filtro, setFiltro] = useState("todas");
    const [notificacoes, setNotificacoes] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);


    // Função para adicionar nova notificação enviando para a API com o Token
    async function adicionarNotificacao(nova) {
        try {
            const resposta = await fetch(`${API_URL}/notificacoes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // Envia o token no cabeçalho
                },
                body: JSON.stringify(nova)
            });

            if (!resposta.ok) throw new Error("Erro ao criar notificação no servidor");

            // Se deu certo na API, atualiza a lista na tela de forma limpa
            const notificacaoCriada = await resposta.json();
            setNotificacoes((atual) => [notificacaoCriada, ...atual]);
        } catch (e) {
            alert(e.message);
        }
    }


    useEffect(() => {
        async function buscar() {
            try {
                const resposta = await fetch(`${API_URL}/notificacoes`);

                // Se a API responder com erro, lança para o catch
                if (!resposta.ok) throw new Error("Erro ao buscar notificações");

                const dados = await resposta.json();
                setNotificacoes(dados);
            } catch (e) {
                setErro(e.message);
            } finally {
                setCarregando(false);
            }
        }
        buscar();
    }, []);

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

            {/* Se estiver carregando, mostra o aviso */}
            {carregando && <p className="text-gray-500">Carregando notificações...</p>}

            {/* Se der erro na busca, mostra a mensagem amigável */}
            {erro && (
                <p className="text-red-600">Não foi possível carregar as notificações. Tente novamente.</p>
            )}

            {/* Se já carregou e não deu erro, exibe a lista original */}
            {!carregando && !erro && (
                <NotificationList notificacoes={notificacoesVisiveis} />
            )}

        </div>
    );
}

export default Home; 