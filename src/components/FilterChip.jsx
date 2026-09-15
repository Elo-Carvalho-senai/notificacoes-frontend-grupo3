export default function FilterChip({ label, ativo, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 text-sm font-medium rounded-full border transition-colors cursor-pointer ${
        ativo
          ? "bg-marca text-white border-marca"
          : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}
