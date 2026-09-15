// src/components/Painel.jsx
function Painel({ titulo, children }) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-4">
            {/* O título é uma prop comum */}
            <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                {titulo}
            </h2>

            {/* Onde você colocar {children}, o miolo variável vai aparecer */}
            <div className="space-y-3">
                {children}
            </div>
        </div>
    );
}

export default Painel;