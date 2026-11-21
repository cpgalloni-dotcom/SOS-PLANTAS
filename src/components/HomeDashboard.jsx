import React, { useState } from 'react';
import { 
  Camera, Image as ImageIcon, Droplets, Sparkles, BookOpen, 
  Calculator, Download, History, Bot, Scan, CheckCircle2, 
  AlertTriangle, ArrowRight, X, Loader2
} from 'lucide-react';
import { compressAndProcessImage } from '../utils/imageCompressor';

export default function HomeDashboard({ 
  onOpenScanner, 
  setActiveTab, 
  scanHistory, 
  onSelectHistoryItem,
  onAnalyzeImage,
  isAnalyzing
}) {
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [agentStatus, setAgentStatus] = useState('idle'); // 'idle', 'uploading', 'analyzing'
  const [previewImage, setPreviewImage] = useState(null);

  // Manejo directo de foto desde el Agente en el Inicio
  const handleDirectPhoto = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const instantPreview = URL.createObjectURL(file);
      setPreviewImage(instantPreview);
      setAgentStatus('analyzing');
    } catch {
      // Ignorar
    }

    try {
      const compressedDataUrl = await compressAndProcessImage(file, 1080, 0.85);
      if (compressedDataUrl && onAnalyzeImage) {
        onAnalyzeImage(compressedDataUrl);
      }
    } catch (err) {
      console.warn('Error procesando imagen para el agente:', err);
    } finally {
      e.target.value = '';
      setAgentStatus('idle');
      setPreviewImage(null);
    }
  };

  return (
    <div className="pb-24 pt-3 px-4 max-w-md mx-auto space-y-4 animate-fadeIn">
      
      {/* ========================================================================= */}
      {/* AGENTE DE IA BOTÁNICO Y FITOSANITARIO (CARD PRINCIPAL HERO)                */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-agro-dark via-agro-forest to-agro-emerald text-white p-5 shadow-2xl border border-agro-mint/30">
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-agro-mint/15 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 space-y-3.5">
          {/* Badge del Agente */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-agro-pale text-xs font-black backdrop-blur-md">
              <Bot className="w-4 h-4 text-agro-mint animate-pulse" />
              <span>AGENTE DE IA AGRÓNOMO SOS</span>
            </div>
            <span className="flex items-center space-x-1 text-[11px] font-bold text-agro-mint bg-black/30 px-2 py-0.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-agro-mint animate-ping" />
              <span>Activo 24/7</span>
            </span>
          </div>

          {/* Pregunta Principal solicitada por el usuario */}
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black leading-tight tracking-tight text-white">
              ¿Tu planta está marchita, tiene manchas o querés saber cómo se llama?
            </h2>
            <p className="text-xs text-agro-pale/90 leading-relaxed font-normal">
              Sacá una foto: el <strong className="text-white font-bold">Agente de IA</strong> busca sobre tu planta, identifica el <strong className="text-agro-pale font-bold">Nombre Científico (y de Argentina)</strong>, te avisa si está con plagas o sana, y te da sus cuidados especiales de riego.
            </p>
          </div>

          {/* Visor de análisis si se está procesando */}
          {previewImage && isAnalyzing ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-agro-mint shadow-xl bg-black flex items-center justify-center">
              <img src={previewImage} alt="Analizando" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-agro-dark/60 flex flex-col items-center justify-center p-3 text-center space-y-2">
                <Loader2 className="w-8 h-8 text-agro-mint animate-spin" />
                <span className="text-xs font-black text-white px-3 py-1 bg-black/80 rounded-full border border-agro-mint/40 animate-pulse">
                  🤖 Agente de IA buscando especie y patógenos...
                </span>
              </div>
            </div>
          ) : (
            /* Botones de Acción Directa del Agente de IA */
            <div className="space-y-2 pt-1">
              {/* Botón 1: Cámara Móvil Directa */}
              <label className="relative w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-agro-mint to-emerald-400 text-agro-dark font-black text-sm flex items-center justify-center space-x-2.5 shadow-xl hover:brightness-105 active:scale-98 cursor-pointer overflow-hidden transition-all">
                <Camera className="w-5 h-5 text-agro-dark" />
                <span>SACAR FOTO CON EL AGENTE DE IA</span>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                  onChange={handleDirectPhoto}
                />
              </label>

              {/* Botón 2: Elegir de la Galería o Abrir Visor Completo */}
              <div className="flex items-center space-x-2">
                <label className="relative flex-1 py-2.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center justify-center space-x-1.5 border border-white/20 active:scale-98 cursor-pointer overflow-hidden transition-all">
                  <ImageIcon className="w-4 h-4 text-agro-pale" />
                  <span>Subir Galería</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                    onChange={handleDirectPhoto}
                  />
                </label>

                <button
                  onClick={onOpenScanner}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-black/30 hover:bg-black/40 text-agro-pale font-bold text-xs flex items-center justify-center space-x-1 border border-white/15 active:scale-98 transition-all"
                >
                  <Scan className="w-4 h-4 text-agro-mint" />
                  <span>Abrir Escáner Guiado</span>
                </button>
              </div>
            </div>
          )}

          {/* Garantías del Agente */}
          <div className="pt-1 flex items-center justify-between text-[11px] text-agro-pale/80 border-t border-white/10">
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-agro-mint" />
              <span>Identificación exacta</span>
            </span>
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-agro-mint" />
              <span>Alerta de plagas o sana</span>
            </span>
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-agro-mint" />
              <span>Salud de riego</span>
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECCIÓN INFERIOR SOLICITADA: CALCULADORA FERTILIZANTE Y MANUAL DE PLAGAS  */}
      {/* ========================================================================= */}
      <div className="space-y-2">
        <h3 className="text-xs font-black uppercase text-gray-500 tracking-wider px-1">
          Herramientas Agronómicas
        </h3>

        <div className="grid grid-cols-2 gap-2.5">
          {/* Tarjeta Calculadora de Fertilizantes */}
          <button
            onClick={() => setActiveTab('calculator')}
            className="p-4 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:border-agro-emerald hover:shadow-md transition-all text-left flex flex-col justify-between group space-y-3"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-agro-forest flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                <Calculator className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-agro-forest group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <h4 className="text-xs font-black text-gray-900 group-hover:text-agro-forest">
                Calculadora de Fertilizante
              </h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                Buscar planta, calcular NPK y marcas (Fertifox, Nitrofoska, Yara)
              </p>
            </div>
          </button>

          {/* Tarjeta Manual de Plagas */}
          <button
            onClick={() => setActiveTab('manual')}
            className="p-4 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:border-amber-500 hover:shadow-md transition-all text-left flex flex-col justify-between group space-y-3"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                <BookOpen className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-800 group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <h4 className="text-xs font-black text-gray-900 group-hover:text-amber-800">
                Manual de Plagas
              </h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                Buscador con botón: Hormiga, Oídio, Mildiu, Pulgón y curas
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Alerta de Riego Inteligente */}
      <div className="rounded-2xl bg-blue-50 border border-blue-200 p-3.5 flex items-start space-x-3 shadow-sm">
        <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
          <Droplets className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-black text-blue-950 uppercase tracking-wide">
              Regla de Oro del Riego
            </h4>
            <span className="text-[10px] bg-blue-200 text-blue-900 px-2 py-0.5 rounded-full font-extrabold">
              Vital
            </span>
          </div>
          <p className="text-xs text-blue-900/90 mt-1 leading-snug">
            Introduce el dedo 3 cm en la tierra. Si sale húmedo, <strong>no riegues</strong>. El exceso de agua asfixia las raíces más rápido que la sed.
          </p>
        </div>
      </div>

      {/* Tarjeta de Instalación Directa en Celular (PWA) */}
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-agro-forest text-white flex items-center justify-center shrink-0">
            <Download className="w-5 h-5 text-agro-mint" />
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
          className="px-3 py-1.5 rounded-xl bg-agro-forest text-white text-xs font-bold hover:bg-agro-emerald shrink-0 transition-colors shadow-sm"
        >
          Ver Cómo
        </button>
      </div>

      {/* Historial de Diagnósticos del Usuario */}
      {scanHistory && scanHistory.length > 0 && (
        <div className="rounded-2xl bg-white border border-gray-200 p-3.5 space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-gray-800 flex items-center space-x-1.5">
              <History className="w-4 h-4 text-agro-forest" />
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
                className="py-2.5 flex items-center justify-between hover:bg-gray-50 cursor-pointer rounded px-1 transition-colors"
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
