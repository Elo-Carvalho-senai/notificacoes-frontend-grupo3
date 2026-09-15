export default function Button({ children, variant = "primario", onClick }) {
  const estilos = {
    primario: "bg-marca text-white hover:opacity-90",
    destaque: "bg-destaque text-white hover:opacity-90",
  };

  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${estilos[variant]}`}
    >
      {children}
    </button>
  );
}