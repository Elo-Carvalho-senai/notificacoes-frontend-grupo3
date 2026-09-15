function FilterChip({ text, isActive = false }) {
    return (
        <span className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors cursor-pointer border ${isActive
                ? 'bg-brand/10 text-brand border-brand'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border-transparent'
            }`}>
            {text}
        </span>
    );
}

export default FilterChip;