function Button({ children, variant = "primario", onClick }) {
    const estilos = {
        primario: "bg-marca text-white",
        destaque: "bg-destaque text-white",
    };

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-lg font-semibold cursor-pointer transition-opacity hover:opacity-90 ${estilos[variant]}`}
        >
            {children}
        </button>
    );
}

export default Button;