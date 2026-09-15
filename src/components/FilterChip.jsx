function FilterChip({ label, ativo, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1.5 rounded-full text-sm border cursor-pointer transition-colors ${ativo
                    ? "bg-marca text-white border-marca"
                    : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                }`}
        >
            {label}
        </button>
    );
}

export default FilterChip;