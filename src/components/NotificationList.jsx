import NotificationCard from "./NotificationCard.jsx";

function NotificationList({ notificacoes }) {
  // Trata o estado vazio (empty state)
  if (notificacoes.length === 0) {
    return (
      <div className="text-center py-8 bg-[#EAF0EE] rounded-lg border border-dashed border-gray-300">
        <p className="text-[#14201E] font-medium text-sm">
          Nenhuma notificação por aqui.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {notificacoes.map((n) => (
        <NotificationCard key={n.id} {...n} />
      ))}
    </div>
  );
}

export default NotificationList;