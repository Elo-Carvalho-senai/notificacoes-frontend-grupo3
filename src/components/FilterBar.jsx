import FilterChip from "./FilterChip";

export default function FilterBar({ filtroAtual, onFiltroChange }) {
  return (
    <div className="flex gap-2 mb-4 overflow-x-auto pb-1 no-scrollbar">
      <FilterChip
        label="Todos"
        ativo={filtroAtual === "todas"}
        onClick={() => onFiltroChange("todas")}
      />
      <FilterChip
        label="Push"
        ativo={filtroAtual === "push"}
        onClick={() => onFiltroChange("push")}
      />
      <FilterChip
        label="E-mail"
        ativo={filtroAtual === "email"}
        onClick={() => onFiltroChange("email")}
      />
      <FilterChip
        label="Alertas"
        ativo={filtroAtual === "alerta"}
        onClick={() => onFiltroChange("alerta")}
      />
    </div>
  );
}