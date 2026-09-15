import NotificationCard from "./NotificationCard";

export default function NotificationList({ notificacoes }: any) {
  if (!notificacoes || notificacoes.length === 0) {
    return (
      <p className="text-slate-500 text-sm text-center py-6">
        Nenhuma notificação por aqui.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {notificacoes.map((n: any) => (
        <NotificationCard key={n.id} {...n} />
      ))}
    </div>
  );
}