import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primario" | "destaque";
  className?: string;
}

export default function Button({
  children,
  variant = "primario",
  className = "",
  ...props
}: ButtonProps) {
  const estilos = {
    primario: "bg-marca text-white",
    destaque: "bg-destaque text-white",
  };

  const estiloVariante = estilos[variant] || estilos.primario;

  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold transition-opacity cursor-pointer ${estiloVariante} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
