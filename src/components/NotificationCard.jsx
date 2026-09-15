export default function NotificationCard({ canal, hora, titulo, texto, lida }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
      <div className="flex gap-2 text-xs font-mono text-gray-500 mb-2">
        {/* Tag do canal com as cores do seu Design System */}
        <span className="bg-teal-50 text-marca px-2 py-0.5 rounded font-bold">
          {canal}
        </span>
        <span>{hora}</span>
        {/* Renderização condicional oficial solicitada pelo professor */}
        {!lida && <span>não lida</span>}
      </div>
      <h3 className="font-semibold text-base mb-1 text-slate-800">{titulo}</h3>
      <p className="text-gray-600 text-sm">{texto}</p>
    </div>
  );
}
