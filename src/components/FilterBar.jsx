import FilterChip from "./FilterChip";

function FilterBar({ filtroAtual, onFiltroChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none">
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

export default FilterBar;
