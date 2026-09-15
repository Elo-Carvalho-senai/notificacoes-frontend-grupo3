import Button from "./Button";

export default function NotificationCard({ canal, hora, titulo, texto, lida, onCliqueDetalhes }) {
  const obterEstiloCanal = () => {
    switch (canal.toUpperCase()) {
      case "PUSH":
        return { bgIcone: "bg-red-50 text-red-500", icone: "🔔" };
      case "EMAIL":
        return { bgIcone: "bg-emerald-50 text-emerald-600", icone: "✉️" };
      case "ALERTA":
      default:
        return { bgIcone: "bg-slate-100 text-slate-700", icone: "⚠️" };
    }
  };

  const estilo = obterEstiloCanal();

  return (
    <div 
      className={`relative bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex gap-4 transition-all duration-200
        ${!lida ? "border-l-4 border-l-[#E24C24]" : ""}`}
    >
      {/* Ícone */}
      <div className={`w-12 h-12 rounded-full flex items-center justify-between text-xl shrink-0 ${estilo.bgIcone}`}>
        <span className="mx-auto">{estilo.icone}</span>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-slate-800 text-base leading-tight pr-6">
            {titulo}
          </h3>
          <span className="text-xs text-gray-400 font-medium shrink-0 flex items-center gap-1">
            {hora}
            {!lida && <span className="w-2 h-2 bg-[#E24C24] rounded-full inline-block"></span>}
            {lida && <span className="text-emerald-500 font-bold">✓</span>}
          </span>
        </div>
        
        <p className="text-sm text-gray-500 leading-normal font-normal">
          {texto}
        </p>

        {/* Adicionado o onClick que dispara a ação do componente pai */}
        {!lida && (
          <div className="pt-2">
            <Button variant="destaque" onClick={onCliqueDetalhes}>
              Ver detalhes
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
