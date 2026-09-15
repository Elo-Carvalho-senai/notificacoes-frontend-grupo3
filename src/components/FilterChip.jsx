export default function FilterChip({ label, ativo, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`px-3 py-1.5 rounded-full text-sm border font-medium transition-colors cursor-pointer ${
        ativo
          ? "bg-marca text-white border-marca"
          : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}
