import React, { useState } from 'react';
import { Camera, Droplets, Sparkles, BookOpen, Calculator, Download, History, HelpCircle, X, Check } from 'lucide-react';

export default function HomeDashboard({ onOpenScanner, setActiveTab, scanHistory, onSelectHistoryItem }) {
  const [showInstallModal, setShowInstallModal] = useState(false);

  return (
    <div className="pb-24 pt-3 px-4 max-w-md mx-auto space-y-4">
      {/* Banner Principal Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-agro-forest via-agro-emerald to-agro-leaf text-white p-5 shadow-card">
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/20 text-agro-pale text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-agro-mint" />
            <span>Diagnóstico Botánico y Salud de Riego</span>
          </div>

          <h2 className="text-2xl font-black leading-tight tracking-tight">
            ¿Tu planta está marchita o tiene manchas?
          </h2>
          
          <p className="text-xs text-agro-pale/90 leading-relaxed font-normal">
            Saca una foto para saber qué planta es, si está enferma, <strong className="text-white underline decoration-agro-mint">si necesita riego urgente</strong> y cómo curarla.
          </p>

          <button
            onClick={onOpenScanner}
            className="w-full mt-2 py-3.5 px-4 rounded-xl bg-white text-agro-forest font-extrabold text-sm flex items-center justify-center space-x-2 shadow-lg hover:bg-agro-pale active:scale-[0.98] transition-all"
          >
            <Camera className="w-5 h-5 text-agro-forest" />
            <span>Sacar Foto y Diagnosticar Ahora</span>
          </button>
        </div>
      </div>

      {/* Tarjeta de Instalación Directa en Celular (PWA) */}
      <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-emerald-950">
              ¿Quieres bajar la app a tu celular?
            </h4>
            <p className="text-[11px] text-emerald-800">
              Instálala en tu pantalla de inicio en 2 clics
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowInstallModal(true)}
          className="px-3 py-1.5 rounded-lg bg-agro-forest text-white text-xs font-bold hover:bg-agro-emerald shrink-0"
        >
          Ver Cómo
        </button>
      </div>

      {/* Tarjeta de Alerta de Riego Inteligente */}
      <div className="rounded-xl bg-blue-50 border border-blue-200/80 p-3.5 flex items-start space-x-3 shadow-sm">
        <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-600">
          <Droplets className="w-5 h-5 animate-bounce" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide">
              Regla de Oro del Riego
            </h4>
            <span className="text-[10px] bg-blue-200/70 text-blue-800 px-1.5 py-0.5 rounded font-semibold">
              Vital
            </span>
          </div>
          <p className="text-xs text-blue-800/90 mt-1 leading-snug">
            Introduce el dedo 3 cm en la tierra. Si sale húmedo, <strong>no riegues</strong>. El encharcamiento pudre raíces más rápido que la sequía.
          </p>
        </div>
      </div>

      {/* Accesos Rápidos a Módulos */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          onClick={() => setActiveTab('calculator')}
          className="p-3.5 rounded-xl bg-white border border-gray-200/70 shadow-sm hover:border-agro-leaf transition-all text-left flex items-start space-x-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-agro-emerald flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-800 group-hover:text-agro-forest">
              Calculadora NPK
            </h4>
            <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">
              Buscar planta y calcular abono
            </p>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('manual')}
          className="p-3.5 rounded-xl bg-white border border-gray-200/70 shadow-sm hover:border-agro-leaf transition-all text-left flex items-start space-x-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-800 group-hover:text-amber-800">
              Manual de Plagas
            </h4>
            <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">
              Buscar hongos, plagas y curas
            </p>
          </div>
        </button>
      </div>

      {/* Historial de Diagnósticos del Usuario */}
      {scanHistory && scanHistory.length > 0 && (
        <div className="rounded-xl bg-white border border-gray-200/80 p-3.5 space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-gray-800 flex items-center space-x-1.5">
              <History className="w-4 h-4 text-agro-emerald" />
              <span>Tus Diagnósticos Recientes</span>
            </h4>
            <span className="text-[11px] text-gray-400 font-medium">
              {scanHistory.length} guardado(s)
            </span>
          </div>

          <div className="divide-y divide-gray-100">
            {scanHistory.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onSelectHistoryItem(item)}
                className="py-2.5 flex items-center justify-between hover:bg-gray-50 cursor-pointer rounded px-1"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden shrink-0 border">
                    {item.image ? (
                      <img src={item.image} alt={item.plantName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm">🌿</div>
                    )}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-800">{item.plantName}</h5>
                    <p className="text-[10px] text-gray-500 font-medium">
                      {item.isHealthy ? 'Planta Sana' : item.diseaseName}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      item.wateringStatus === 'necesita_riego'
                        ? 'bg-blue-100 text-blue-700'
                        : item.wateringStatus === 'exceso_riego'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {item.wateringStatus === 'necesita_riego'
                      ? 'Falta Riego'
                      : item.wateringStatus === 'exceso_riego'
                      ? 'Exceso Agua'
                      : 'Riego OK'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal Instructivo para Bajar / Instalar la App en el Celular */}
      {showInstallModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-4 text-gray-800">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-agro-forest text-white flex items-center justify-center">
                  <Download className="w-4 h-4 text-agro-mint" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-gray-900">Bajar la App a tu Celular</h3>
                  <p className="text-[11px] text-gray-500">Instalación directa en 2 pasos</p>
                </div>
              </div>
              <button
                onClick={() => setShowInstallModal(false)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              {/* Para iPhone / iPad */}
              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5">
                <span className="font-extrabold text-gray-900 block flex items-center space-x-1.5">
                  <span>📱 Si usas iPhone (Safari o Chrome):</span>
                </span>
                <ol className="list-decimal pl-4 space-y-1 text-gray-700 text-[11px]">
                  <li>Toca el botón <strong>Compartir</strong> (el cuadrito con la flecha hacia arriba ↑).</li>
                  <li>Desliza hacia abajo y toca <strong>"Agregar a pantalla de inicio"</strong>.</li>
                  <li>Toca <strong>"Agregar"</strong> arriba a la derecha.</li>
                </ol>
              </div>

              {/* Para Android */}
              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5">
                <span className="font-extrabold text-gray-900 block flex items-center space-x-1.5">
                  <span>🤖 Si usas Android (Google Chrome):</span>
                </span>
                <ol className="list-decimal pl-4 space-y-1 text-gray-700 text-[11px]">
                  <li>Toca los <strong>tres puntos</strong> `⋮` arriba a la derecha del navegador.</li>
                  <li>Toca <strong>"Instalar aplicación"</strong> o <strong>"Agregar a la pantalla principal"</strong>.</li>
                  <li>Confirma en <strong>Instalar</strong>.</li>
                </ol>
              </div>

              <p className="text-[11px] text-agro-forest bg-agro-pale/60 p-2.5 rounded-xl font-medium leading-snug">
                🌿 ¡Listo! Se creará el icono de <strong>SOS Plantas</strong> en la pantalla de tu celular y funcionará a pantalla completa como una app nativa.
              </p>
            </div>

            <button
              onClick={() => setShowInstallModal(false)}
              className="w-full py-2.5 rounded-xl bg-agro-forest text-white text-xs font-bold hover:bg-agro-emerald"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
