import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthContext";

// Componente de segurança que checa se o usuário tem um token
function RotaProtegida({ children }) {
  const { token } = useAuth();

  // Se não houver token salvo, redireciona imediatamente para o login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Se houver token, deixa acessar a página normalmente
  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Protegemos a rota inicial colocando a Home dentro da RotaProtegida */}
      <Route
        path="/"
        element={
          <RotaProtegida>
            <Home />
          </RotaProtegida>
        }
      />
    </Routes>
  );
}

export default App;