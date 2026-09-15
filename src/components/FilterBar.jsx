import FilterChip from "./FilterChip";

function FilterBar({ filtroAtual, onMudarFiltro }) {
    return (
        <div className="flex gap-2 mb-4">
            <FilterChip
                label="Todas"
                ativo={filtroAtual === "todas"}
                onClick={() => onMudarFiltro("todas")}
            />
            <FilterChip
                label="Push"
                ativo={filtroAtual === "push"}
                onClick={() => onMudarFiltro("push")}
            />
            <FilterChip
                label="E-mail"
                ativo={filtroAtual === "email"}
                onClick={() => onMudarFiltro("email")}
            />
        </div>
    );
}

export default FilterBar;