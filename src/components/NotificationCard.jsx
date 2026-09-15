function NotificationCard({ titulo, mensagem, hora }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 max-w-md flex flex-col gap-1">
            <div className="flex justify-between items-start">
                <h4 className="font-bold text-gray-900">{titulo}</h4>
                <span className="text-xs text-gray-400">{hora}</span>
            </div>
            <p className="text-sm text-gray-600">{mensagem}</p>
        </div>
    );
}
export default NotificationCard;