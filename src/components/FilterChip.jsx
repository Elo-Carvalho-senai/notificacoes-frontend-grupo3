function Filterchip({ texto, ativo = false }) { // Usando valor padrão se não for passado
    return (
        <span className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors cursor-pointer ${ativo
            ? 'bg-blue-100 text-blue-800 border border-blue-300'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>
            {texto}
        </span>
    );
}

export default Filterchip;