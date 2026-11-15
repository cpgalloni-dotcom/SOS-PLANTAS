import React, { useState } from 'react';
import { Lightbulb, Droplets, Sun, Scissors, Sparkles, AlertCircle, CheckCircle2, ChevronDown } from 'lucide-react';

export default function CropTips() {
  const [activeTab, setActiveTab] = useState('riego');

  return (
    <div className="pb-24 pt-3 px-4 max-w-md mx-auto space-y-4">
      {/* Encabezado */}
      <div>
        <h2 className="text-xl font-black text-gray-900 tracking-tight flex items-center space-x-2">
          <Lightbulb className="w-6 h-6 text-agro-forest" />
          <span>Consejos de Cultivo SOS</span>
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Guías agronómicas de riego, poda y prevención estilo Plantix
        </p>
      </div>

      {/* Tabs Superiores */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-gray-200/70 rounded-xl">
        {[
          { id: 'riego', label: '💧 Riego Maestro' },
          { id: 'estaciones', label: '🌿 Temporadas' },
          { id: 'recetas', label: '🧪 Recetas Caseras' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === tab.id
                ? 'bg-white text-agro-forest shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENIDO 1: GUÍA MAESTRA DE RIEGO */}
      {activeTab === 'riego' && (
        <div className="space-y-3 animate-fadeIn">
          {/* Tarjeta Comparativa: Falta vs Exceso */}
          <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-3 shadow-sm">
            <h3 className="text-xs font-black text-gray-800 uppercase tracking-wide flex items-center space-x-1.5">
              <Droplets className="w-4 h-4 text-blue-600" />
              <span>¿Falta de Riego o Exceso de Agua? (Comparativa)</span>
            </h3>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
                <span className="font-extrabold text-blue-900 block">💧 Falta de Riego (Sed)</span>
                <ul className="text-[11px] text-blue-950 space-y-1">
                  <li>• Hojas flácidas y peciolos desmayados.</li>
                  <li>• Bordes secos y crujientes como papel.</li>
                  <li>• Tierra agrietada y ligera al levantar la maceta.</li>
                  <li>• <strong>Solución:</strong> Riego lento o por inmersión inmediata.</li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
                <span className="font-extrabold text-amber-900 block">🚨 Exceso de Riego (Asfixia)</span>
                <ul className="text-[11px] text-amber-950 space-y-1">
                  <li>• Hojas marchitas con tierra empapada.</li>
                  <li>• Hojas amarillentas y blandas al tacto.</li>
                  <li>• Olor a ciénaga / podrido en el drenaje.</li>
                  <li>• <strong>Solución:</strong> Suspender riego y verificar drenaje.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Los 4 Mandamientos del Riego */}
          <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-3 shadow-sm">
            <h4 className="text-xs font-black text-gray-800 uppercase tracking-wide">
              Los 4 Mandamientos del Riego Saludable:
            </h4>

            <div className="space-y-2 text-xs text-gray-700">
              <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-gray-50">
                <span className="w-5 h-5 rounded-full bg-agro-forest text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                  1
                </span>
                <div>
                  <strong className="text-gray-900">La regla del dedo / palillo:</strong>
                  <p className="text-[11px] text-gray-600">Nunca riegues solo porque la superficie se ve seca. Introduce el dedo 3-4 cm; si sale húmedo, espera 2 días más.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-gray-50">
                <span className="w-5 h-5 rounded-full bg-agro-forest text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                  2
                </span>
                <div>
                  <strong className="text-gray-900">Horario de oro:</strong>
                  <p className="text-[11px] text-gray-600">Riega a primera hora de la mañana (6:00 a 8:00 AM). El agua hidrata la planta antes del calor del día y el follaje se seca rápido, evitando hongos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-gray-50">
                <span className="w-5 h-5 rounded-full bg-agro-forest text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                  3
                </span>
                <div>
                  <strong className="text-gray-900">¡Nunca mojes las hojas ni las flores!:</strong>
                  <p className="text-[11px] text-gray-600">El agua foliar es el puente perfecto para que germinen las esporas de oídio y mildiu. Riega siempre directo al sustrato.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-gray-50">
                <span className="w-5 h-5 rounded-full bg-agro-forest text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                  4
                </span>
                <div>
                  <strong className="text-gray-900">Vacía siempre el plato inferior:</strong>
                  <p className="text-[11px] text-gray-600">15 minutos después de regar la maceta, retira el agua sobrante del plato. El agua estancada ahoga las raíces por capilaridad inversa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTENIDO 2: GUÍA POR TEMPORADAS */}
      {activeTab === 'estaciones' && (
        <div className="space-y-3 animate-fadeIn">
          {[
            {
              title: '🌸 Primavera: Despertar y Brotación',
              badge: 'Marzo - Junio (Hem. Norte) / Sept - Dic (Hem. Sur)',
              color: 'border-emerald-200 bg-emerald-50/50',
              points: [
                'Aporte de Nitrógeno (Humus de lombriz o Urea) para activar hojas tiernas.',
                'Podas de formación y limpieza de ramas secas que quedaron del invierno.',
                'Primeros tratamientos preventivos con jabón potásico contra pulgones recién nacidos.',
                'Aumento paulatino de la frecuencia de riego conforme suben las temperaturas.'
              ]
            },
            {
              title: '☀️ Verano: Calor, Frutos y Protección',
              badge: 'Máximo requerimiento de agua',
              color: 'border-amber-200 bg-amber-50/50',
              points: [
                'Riegos profundos y continuos sin encharcar. Evitar regar al mediodía bajo sol abrasador.',
                'Instalar acolchado (mulch) de paja o corteza para que el sustrato no pierda humedad.',
                'Abonar con Potasio (K) para engordar tomates, cítricos y frutales.',
                'Monitoreo intensivo de araña roja en el envés de hojas expuestas a sequedad ambiental.'
              ]
            },
            {
              title: '🍂 Otoño: Cosecha y Preparación al Frío',
              badge: 'Disminución de fertilización',
              color: 'border-orange-200 bg-orange-50/50',
              points: [
                'Reducir drásticamente el aporte de nitrógeno para que los brotes tiernos se endurezcan.',
                'Aplicar abonos de lenta liberación ricos en fósforo para fortalecer raíces.',
                'Retirar hojas caídas enfermas del suelo para que los hongos no pasen el invierno en ellas.'
              ]
            },
            {
              title: '❄️ Invierno: Letargo y Poda Sanitaria',
              badge: 'Riegos mínimos',
              color: 'border-blue-200 bg-blue-50/50',
              points: [
                'Espaciar los riegos al mínimo (1 vez cada 10 o 15 días según especie).',
                'Aplicar tratamiento de invierno con Oxicloruro de Cobre y Aceite mineral en árboles caducifolios.',
                'Realizar poda de ramas secas, enfermas o que se crucen en el centro de la copa.'
              ]
            }
          ].map((s, idx) => (
            <div key={idx} className={`rounded-2xl p-4 border ${s.color} space-y-2`}>
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-gray-900">{s.title}</h4>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide block">
                {s.badge}
              </span>
              <ul className="text-xs text-gray-700 space-y-1">
                {s.points.map((pt, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-agro-forest font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* CONTENIDO 3: RECETAS CASERAS AGROECOLÓGICAS */}
      {activeTab === 'recetas' && (
        <div className="space-y-3 animate-fadeIn">
          {[
            {
              title: 'Jabón Potásico + Aceite de Neem',
              target: 'Contra pulgón, mosca blanca, cochinilla y araña roja',
              recipe: [
                '1 litro de agua tibia.',
                '15 ml de jabón potásico líquido (emulsionante natural).',
                '5 ml de aceite de neem puro prensado en frío.',
                'Agitar vigorosamente y pulverizar sobre el envés de las hojas cada 4 días al atardecer.'
              ]
            },
            {
              title: 'Fungicida de Leche (Anti-Oídio)',
              target: 'Contra oídio y cenicillas en rosas, tomates y calabacines',
              recipe: [
                '900 ml de agua sin cloro.',
                '100 ml de leche de vaca entera (o desnatada).',
                'La lactoferrina y sales de la leche crean un escudo antiséptico natural al reaccionar con la luz solar. Aplicar cada 7 días.'
              ]
            },
            {
              title: 'Infusión de Ajo y Guindilla (Repelente)',
              target: 'Ahuyenta orugas, hormigas, trips y pulgones',
              recipe: [
                '1 cabeza de ajo machacada + 2 guindillas o chiles picantes triturados.',
                'Hervir en 1L de agua durante 15 minutos con tapa.',
                'Dejar reposar 24 horas, colar finamente y diluir 1:4 con agua antes de pulverizar.'
              ]
            },
            {
              title: 'Té de Plátano Potásico',
              target: 'Estimulante natural de floración y cuajado de frutos',
              recipe: [
                'Cáscaras de 4 plátanos cortadas en tiras.',
                'Hervir en 1 litro de agua durante 10 minutos.',
                'Dejar enfriar, colar y usar el líquido para regar flores y tomates en floración cada 15 días.'
              ]
            }
          ].map((rec, idx) => (
            <div key={idx} className="rounded-2xl bg-white border border-gray-200 p-4 space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-agro-forest">{rec.title}</h4>
              </div>
              <p className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md inline-block">
                {rec.target}
              </p>
              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Preparación:</span>
                <ul className="text-xs text-gray-700 space-y-1">
                  {rec.recipe.map((step, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-agro-emerald font-bold">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
