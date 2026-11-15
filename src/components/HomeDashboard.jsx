import React from 'react';
import { Camera, Droplets, Sparkles, BookOpen, Calculator, AlertTriangle, ShieldCheck, ArrowRight, History } from 'lucide-react';
import { SAMPLE_PLANT_PHOTOS } from '../services/offlineAnalyzer';

export default function HomeDashboard({ onOpenScanner, setActiveTab, onSelectSample, scanHistory, onSelectHistoryItem }) {
  return (
    <div className="pb-24 pt-3 px-4 max-w-md mx-auto space-y-4">
      {/* Banner Principal Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-agro-forest via-agro-emerald to-agro-leaf text-white p-5 shadow-card">
        {/* Adorno vegetal de fondo */}
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/20 text-agro-pale text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-agro-mint" />
            <span>Diagnóstico con Inteligencia Artificial</span>
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
            <span>Escanear y Diagnosticar Ahora</span>
          </button>
        </div>
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

      {/* Pruebas Rápidas con Fotos de Muestra */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-800 flex items-center space-x-1.5">
            <span>⚡ Pruébalo al instante con estas fotos</span>
          </h3>
          <span className="text-[11px] text-agro-emerald font-semibold">Toca una foto</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {SAMPLE_PLANT_PHOTOS.slice(0, 6).map((sample) => (
            <button
              key={sample.id}
              onClick={() => onSelectSample(sample)}
              className="group text-left rounded-xl bg-white border border-gray-200/80 p-2 shadow-sm hover:border-agro-emerald hover:shadow-md transition-all active:scale-95 flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-1.5 bg-gray-100">
                <img
                  src={sample.imageUrl}
                  alt={sample.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {sample.diseaseId === 'planta_sana' ? (
                  <span className="absolute top-1 right-1 bg-green-600/90 text-white text-[9px] font-bold px-1 rounded">
                    Sana
                  </span>
                ) : sample.diseaseId.includes('riego') || sample.diseaseId.includes('asfixia') ? (
                  <span className="absolute top-1 right-1 bg-blue-600/90 text-white text-[9px] font-bold px-1 rounded flex items-center space-x-0.5">
                    <Droplets className="w-2.5 h-2.5" />
                    <span>Riego</span>
                  </span>
                ) : (
                  <span className="absolute top-1 right-1 bg-amber-600/90 text-white text-[9px] font-bold px-1 rounded">
                    SOS
                  </span>
                )}
              </div>
              <p className="text-[11px] font-bold text-gray-800 line-clamp-1 leading-tight group-hover:text-agro-forest">
                {sample.title}
              </p>
              <span className="text-[10px] text-gray-400 mt-0.5 font-medium">
                {sample.category}
              </span>
            </button>
          ))}
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
              Dosis exacta de abono por m² o maceta
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
              Hongos, bichos y remedios caseros
            </p>
          </div>
        </button>
      </div>

      {/* Historial Reciente (si hay diagnósticos guardados) */}
      {scanHistory && scanHistory.length > 0 && (
        <div className="rounded-xl bg-white border border-gray-200/80 p-3.5 space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-gray-800 flex items-center space-x-1.5">
              <History className="w-4 h-4 text-agro-emerald" />
              <span>Últimos Diagnósticos Guardados</span>
            </h4>
            <span className="text-[11px] text-gray-400 font-medium">
              {scanHistory.length} registrado(s)
            </span>
          </div>

          <div className="divide-y divide-gray-100">
            {scanHistory.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                onClick={() => onSelectHistoryItem(item)}
                className="py-2 flex items-center justify-between hover:bg-gray-50 cursor-pointer rounded px-1"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                    {item.image ? (
                      <img src={item.image} alt={item.plantName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs">🌿</div>
                    )}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-800">{item.plantName}</h5>
                    <p className="text-[10px] text-gray-500 font-medium">
                      {item.isHealthy ? 'Sana' : item.diseaseName}
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
                      ? 'Sed'
                      : item.wateringStatus === 'exceso_riego'
                      ? 'Exceso agua'
                      : 'Riego OK'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
