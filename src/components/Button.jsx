function Button({ texto, onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
            {texto}
        </button>
    );
}

export default Button;