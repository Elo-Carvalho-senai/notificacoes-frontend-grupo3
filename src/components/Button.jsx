function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-brand hover:opacity-90 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
        >
            {text}
        </button>
    );
}

export default Button;
