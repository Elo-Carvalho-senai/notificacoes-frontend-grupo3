export default function NotificationCard({ canal, hora, titulo, texto, lida }) {
  return (
    <div
      className={`border rounded-xl p-4 mb-3 transition-all ${
        lida
          ? "bg-card border-gray-200 opacity-80"
          : "bg-white border-l-4 border-l-destaque border-gray-200 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center text-xs font-mono mb-2">
        <span className="bg-teal-50 text-marca px-2 py-0.5 rounded font-bold">
          {canal}
        </span>
        <div className="flex gap-2 text-gray-500">
          <span>{hora}</span>
          {!lida && <span className="text-destaque font-bold">• não lida</span>}
        </div>
      </div>
      <h3 className="font-semibold text-texto text-base mb-1">{titulo}</h3>
      <p className="text-gray-600 text-sm">{texto}</p>
    </div>
  );
}