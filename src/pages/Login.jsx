import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { API_URL } from "../config";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErro(null);
        try {
      // APAGAR OU COMENTAR A BUSCA DA API POR ENQUANTO:
      /*
      const resposta = await fetch(`${API_URL}/auth/login`, { ... });
      if (!resposta.ok) throw new Error("Credenciais inválidas");
      const { token } = await resposta.json();
      */

      // TRUQUE DE TESTE: Aceita qualquer coisa e cria um token fictício
      const tokenFicticio = "token_de_teste_123456";
      login(tokenFicticio); 
      navigate("/"); 
    } catch (e) {
      setErro(e.message);
    }

  }

  return (
    <div className="max-w-sm mx-auto p-4 mt-10 border border-gray-200 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-center">Acessar Sistema</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          required
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          required
        />
        {erro && <p className="text-red-600 text-sm text-center">{erro}</p>}
        <button className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 transition-colors">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;