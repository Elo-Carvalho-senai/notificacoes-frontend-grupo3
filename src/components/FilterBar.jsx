import FilterChip from "./FilterChip";

function FilterBar({ filtroAtual, onChangeFiltro }) {
    return (
        <div className="flex gap-2 mb-4">
            <FilterChip
                label="Todas"
                ativo={filtroAtual === "todas"}
                onClick={() => onChangeFiltro("todas")}
            />
            <FilterChip
                label="Push"
                ativo={filtroAtual === "push"}
                onClick={() => onChangeFiltro("push")}
            />
            <FilterChip
                label="E-mail"
                ativo={filtroAtual === "email"}
                onClick={() => onChangeFiltro("email")}
            />
        </div>
    );
}

export default FilterBar;