function NotificationList({ count, children }) {
    return (
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm mb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Mensagens ({count})
            </h2>
            <div className="flex flex-col gap-1">
                {children.length === 0 ? (
                    <p className="text-sm text-gray-400 py-4 text-center">Nenhuma notificação por aqui.</p>
                ) : (
                    children
                )}
            </div>
        </div>
    );
}

export default NotificationList;