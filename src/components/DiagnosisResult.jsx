import React, { useEffect, useState } from 'react';
import { 
  CheckCircle2, AlertTriangle, Droplets, ShieldAlert, Sparkles, 
  ArrowLeft, Bookmark, BookmarkCheck, Share2, Calculator, Info,
  HeartHandshake, FlaskConical, Leaf, Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DiagnosisResult({ diagnosis, image, onReset, onSaveToHistory, isSaved, onGoToCalculator }) {
  const [copied, setCopied] = useState(false);
  const [activeData, setActiveData] = useState(diagnosis);

  useEffect(() => {
    setActiveData(diagnosis);
  }, [diagnosis]);

  const handleSwitchPlant = (candidate) => {
    setActiveData(prev => ({
      ...prev,
      plantName: `${candidate.scientificName} (${candidate.argentineName})`,
      scientificName: candidate.scientificName,
      argentineName: candidate.argentineName,
      family: candidate.family,
      plantType: candidate.category,
      wateringAdvice: `Pauta recomendada para Argentina: en verano regar ${candidate.summerWatering}. En invierno regar ${candidate.winterWatering}. Mantener en su luz ideal: ${candidate.light}.`,
      organicTreatment: [
        'Limpieza: Pasar un paño suave húmedo sobre las hojas cada 15 días.',
        `Abono preventivo: Incorporar humus de lombriz o compost en superficie al inicio de primavera y verano.`,
        `Nutrición recomendada: ${candidate.fertilizer}.`
      ]
    }));
  };

  useEffect(() => {
    // Si la planta está sana, lanzar confeti festivo
    if (activeData && activeData.isHealthy) {
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Ignorar si falla canvas en algún entorno
      }
    }
  }, [activeData]);

  if (!activeData) return null;

  const isHealthy = activeData.isHealthy;
  const wateringStatus = activeData.wateringStatus || 'riego_optimo';

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Diagnóstico SOS Plantas: ${activeData.plantName}`,
        text: `Diagnóstico de mi ${activeData.plantName}: ${isHealthy ? 'Sana' : activeData.diseaseName}. Estado de riego: ${activeData.wateringStatus}.`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(
        `SOS Plantas | Diagnóstico: ${activeData.plantName} - ${isHealthy ? 'Planta Sana' : activeData.diseaseName}. Riego: ${activeData.wateringDiagnosis}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pb-28 pt-2 px-4 max-w-md mx-auto space-y-4 animate-fadeIn">
      {/* Botón Volver */}
      <div className="flex items-center justify-between">
        <button
          onClick={onReset}
          className="flex items-center space-x-1.5 text-xs font-bold text-agro-forest hover:text-agro-emerald px-2.5 py-1.5 rounded-lg bg-agro-pale/60 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Escanear Otra Planta</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={onSaveToHistory}
            className={`p-2 rounded-lg border text-xs font-bold flex items-center space-x-1 transition-all ${
              isSaved
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                : 'bg-white border-gray-200 text-gray-700 hover:border-agro-emerald'
            }`}
            title="Guardar en historial"
          >
            {isSaved ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-[11px]">Guardado</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4" />
                <span className="text-[11px]">Guardar</span>
              </>
            )}
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:text-agro-forest transition-colors"
            title="Compartir diagnóstico"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {copied && (
        <div className="text-center py-1 text-xs bg-emerald-100 text-emerald-800 rounded-lg font-bold">
          ¡Diagnóstico copiado al portapapeles!
        </div>
      )}

      {/* Tarjeta de Encabezado con Foto y Especie */}
      <div className="rounded-2xl bg-white border border-gray-200/90 shadow-card overflow-hidden">
        <div className="relative h-48 w-full bg-black">
          <img
            src={image || 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80'}
            alt={activeData.plantName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Badge de Precisión IA */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-agro-mint" />
            <span>{activeData.confidenceScore || 94}% Certeza</span>
          </div>

          {/* Badge de Categoría */}
          <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
            {activeData.plantType || 'Especie Botánica'}
          </div>

          {/* Información al pie de la foto: Nombre Científico (Nombre en Argentina) */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
            <div className="bg-black/80 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-lg">
              <span className="text-[10px] font-black uppercase text-agro-mint tracking-wider block">
                🌿 Especie Botánica Identificada
              </span>
              <h2 className="text-base sm:text-lg font-black tracking-tight leading-snug mt-0.5">
                <span className="italic">{activeData.scientificName || activeData.plantName}</span>
                {activeData.argentineName && (
                  <span className="text-agro-pale block text-sm font-extrabold not-italic mt-0.5">
                    ({activeData.argentineName})
                  </span>
                )}
              </h2>
              {activeData.family && (
                <div className="text-[11px] text-gray-300 mt-1 flex items-center space-x-1.5">
                  <span className="bg-white/15 px-2 py-0.5 rounded text-[10px] font-semibold text-white">
                    Fam: {activeData.family}
                  </span>
                  <span>•</span>
                  <span>{activeData.plantType || 'Jardín'}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Estado General de Salud */}
        <div className="p-3.5 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Estado Fitosanitario
            </span>
            <span
              className={`text-xs font-black uppercase px-2.5 py-1 rounded-full flex items-center space-x-1 ${
                isHealthy
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}
            >
              {isHealthy ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sana y Vigorosa</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                  <span>Enferma / Con Plaga</span>
                </>
              )}
            </span>
          </div>

          {isHealthy ? (
            <div className="mt-2.5 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <div className="flex items-center space-x-1.5 text-xs text-emerald-900 font-extrabold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>¡Sin plagas ni hongos activos detectados!</span>
              </div>
              <p className="text-[11px] text-emerald-800 mt-1 leading-snug">
                Tu planta presenta buen estado vegetativo y clorofila activa. A continuación revisa su régimen de riego y fertilización ideal para el clima de Argentina.
              </p>
            </div>
          ) : (
            <div className="mt-2.5 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-amber-900">
                  {activeData.diseaseName}
                </span>
                <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-bold">
                  Gravedad: {activeData.severity || 'Moderada'}
                </span>
              </div>
              <p className="text-[11px] text-amber-800/90 mt-1 font-medium">
                Categoría: <strong>{activeData.category || 'Patología'}</strong>
              </p>
            </div>
          )}
        </div>

        {/* Alternativas sugeridas por el Agente de IA */}
        {activeData.topCandidates && activeData.topCandidates.filter(c => c.scientificName !== activeData.scientificName).length > 0 && (
          <div className="px-3.5 py-2.5 bg-gray-50/90 border-t border-gray-100 flex items-center justify-between text-xs">
            <span className="text-[11px] text-gray-500 font-semibold">¿Era otra especie?</span>
            <div className="flex items-center space-x-1.5 overflow-x-auto">
              {activeData.topCandidates
                .filter(c => c.scientificName !== activeData.scientificName)
                .slice(0, 2)
                .map((alt) => (
                  <button
                    key={alt.id}
                    onClick={() => handleSwitchPlant(alt)}
                    className="px-2.5 py-1 rounded-lg bg-white border border-gray-300 text-gray-700 text-[11px] font-bold hover:border-agro-emerald hover:text-agro-forest shadow-xs transition-colors whitespace-nowrap"
                  >
                    🌿 {alt.argentineName.split('/')[0].trim()}
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* SECCIÓN OBLIGATORIA Y DESTACADA: ESTADO Y DIAGNÓSTICO DE RIEGO            */}
      {/* ========================================================================= */}
      <div
        className={`rounded-2xl p-4 border-2 shadow-sm transition-all ${
          wateringStatus === 'necesita_riego'
            ? 'bg-blue-50/80 border-blue-400 text-blue-950'
            : wateringStatus === 'exceso_riego'
            ? 'bg-amber-50/80 border-amber-400 text-amber-950'
            : 'bg-emerald-50/80 border-emerald-400 text-emerald-950'
        }`}
      >
        <div className="flex items-start space-x-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
              wateringStatus === 'necesita_riego'
                ? 'bg-blue-600 text-white'
                : wateringStatus === 'exceso_riego'
                ? 'bg-amber-600 text-white'
                : 'bg-emerald-600 text-white'
            }`}
          >
            <Droplets className="w-6 h-6 animate-pulse" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold tracking-wider uppercase opacity-80">
                INFORME DE SALUD HÍDRICA
              </span>
              <span
                className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                  wateringStatus === 'necesita_riego'
                    ? 'bg-blue-200 text-blue-900 font-extrabold'
                    : wateringStatus === 'exceso_riego'
                    ? 'bg-amber-200 text-amber-900 font-extrabold'
                    : 'bg-emerald-200 text-emerald-900 font-extrabold'
                }`}
              >
                {wateringStatus === 'necesita_riego'
                  ? '💧 SED DETECTADA'
                  : wateringStatus === 'exceso_riego'
                  ? '🚨 EXCESO DE AGUA'
                  : '🌿 RIEGO ÓPTIMO'}
              </span>
            </div>

            <h3 className="text-sm font-black mt-1">
              {wateringStatus === 'necesita_riego'
                ? 'La planta necesita riego urgente'
                : wateringStatus === 'exceso_riego'
                ? '¡Alerta de asfixia radicular por exceso de riego!'
                : 'Nivel hídrico y turgencia celular óptimos'}
            </h3>

            {/* Diagnóstico hídrico */}
            <p className="text-xs mt-1.5 leading-relaxed font-medium">
              {activeData.wateringDiagnosis || 'Hojas en equilibrio turgente sin signos de estrés hídrico.'}
            </p>

            {/* Instrucción precisa de riego */}
            <div className="mt-3 p-2.5 rounded-xl bg-white/70 border border-black/5 text-xs space-y-1">
              <strong className="block text-[11px] uppercase tracking-wide opacity-90 font-bold">
                Pauta de riego recomendada:
              </strong>
              <p className="text-xs leading-normal">
                {activeData.wateringAdvice || 'Regar moderadamente al amanecer evitando mojar las hojas.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Síntomas Visibles Detectados */}
      {activeData.symptoms && activeData.symptoms.length > 0 && (
        <div className="rounded-xl bg-white border border-gray-200 p-3.5 space-y-2">
          <h4 className="text-xs font-bold text-gray-800 flex items-center space-x-1.5 uppercase tracking-wide">
            <Info className="w-4 h-4 text-agro-forest" />
            <span>Síntomas Visibles en la Foto</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-gray-700">
            {activeData.symptoms.map((symptom, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-agro-emerald shrink-0 mt-1.5" />
                <span className="leading-snug">{symptom}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* PLAN DE CUIDADOS O TRATAMIENTO */}
      <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-4 shadow-sm">
        <div className="flex items-center space-x-2 border-b pb-2">
          <div className="w-7 h-7 rounded-lg bg-agro-forest text-white flex items-center justify-center">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-black text-gray-800">
              {isHealthy ? 'Guía de Mantenimiento Agronómico' : '¿Qué necesita para sanar? (Plan de Tratamiento)'}
            </h4>
            <p className="text-[11px] text-gray-500">
              {isHealthy ? 'Pautas para mantenerla vigorosa y frondosa' : 'Tratamientos fitosanitarios avalados'}
            </p>
          </div>
        </div>

        {/* 1. Tratamiento Ecológico / Orgánico */}
        <div className="rounded-xl bg-emerald-50/70 border border-emerald-200 p-3 space-y-2">
          <h5 className="text-xs font-bold text-emerald-900 flex items-center space-x-1.5">
            <Leaf className="w-4 h-4 text-emerald-700" />
            <span>{isHealthy ? 'Cuidados y Nutrición Ecológica' : 'Tratamiento Ecológico y Casero (Recomendado)'}</span>
          </h5>
          <ul className="space-y-1.5 text-xs text-emerald-950">
            {Array.isArray(activeData.organicTreatment) ? (
              activeData.organicTreatment.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="font-bold text-emerald-700">•</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))
            ) : (
              <li className="leading-snug">{activeData.organicTreatment}</li>
            )}
          </ul>
        </div>

        {/* 2. Tratamiento Químico / Convencional (si aplica) */}
        {!isHealthy && activeData.chemicalTreatment && (
          <div className="rounded-xl bg-gray-50 border border-gray-200 p-3 space-y-2">
            <h5 className="text-xs font-bold text-gray-800 flex items-center space-x-1.5">
              <FlaskConical className="w-4 h-4 text-gray-600" />
              <span>Tratamiento Fitosanitario Comercial</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-gray-700">
              {Array.isArray(activeData.chemicalTreatment) ? (
                activeData.chemicalTreatment.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="font-bold text-gray-400">•</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))
              ) : (
                <li className="leading-snug">{activeData.chemicalTreatment}</li>
              )}
            </ul>
          </div>
        )}

        {/* 3. Cuidados de Recuperación / Mantenimiento */}
        {activeData.recoveryCare && (
          <div className="rounded-xl bg-amber-50/60 border border-amber-200 p-3 space-y-1.5">
            <h5 className="text-xs font-bold text-amber-900 flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-amber-700" />
              <span>{isHealthy ? 'Calendario de Mantenimiento' : 'Protocolo de Recuperación (15 Días)'}</span>
            </h5>
            <p className="text-xs text-amber-950 leading-relaxed font-medium">
              {activeData.recoveryCare}
            </p>
          </div>
        )}
      </div>

      {/* Botón de Enlace a la Calculadora de Fertilizantes */}
      <button
        onClick={() => onGoToCalculator(activeData.plantName)}
        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-agro-emerald to-agro-forest text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md hover:brightness-110 active:scale-98 transition-all"
      >
        <Calculator className="w-4 h-4 text-agro-mint" />
        <span>Calcular Fertilizante NPK para {activeData.plantName}</span>
      </button>
    </div>
  );
}
