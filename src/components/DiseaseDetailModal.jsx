import React from 'react';
import { X, Droplets, Leaf, FlaskConical, AlertTriangle, ShieldCheck, Info } from 'lucide-react';
import PlantImage from './PlantImage';

export default function DiseaseDetailModal({ disease, isOpen, onClose }) {
  if (!isOpen || !disease) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-md max-h-[90vh] rounded-t-3xl sm:rounded-2xl overflow-y-auto shadow-2xl flex flex-col">
        {/* Cabecera con imagen */}
        <div className="relative h-44 w-full bg-black shrink-0">
          <PlantImage
            src={disease.image}
            alt={disease.name}
            category={disease.category}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-agro-emerald/80 px-2 py-0.5 rounded">
              {disease.category}
            </span>
            <h3 className="text-lg font-black leading-tight mt-1">{disease.name}</h3>
            <p className="text-[11px] text-agro-pale italic">{disease.scientificName}</p>
          </div>
        </div>

        {/* Contenido Ficha Técnica */}
        <div className="p-4 space-y-4 text-gray-800">
          {/* Cultivos afectados y gravedad */}
          <div className="flex items-center justify-between text-xs border-b pb-2">
            <div>
              <span className="text-gray-500 font-semibold">Ataca a:</span>
              <p className="font-bold text-gray-800">
                {Array.isArray(disease.affectedCrops) ? disease.affectedCrops.join(', ') : disease.affectedCrops}
              </p>
            </div>
            <div className="text-right">
              <span className="text-gray-500 font-semibold">Severidad:</span>
              <p className="font-bold text-amber-600">{disease.severity}</p>
            </div>
          </div>

          {/* DIAGNÓSTICO Y PROTOCOLO DE RIEGO */}
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 space-y-1.5">
            <div className="flex items-center space-x-1.5 text-blue-900 font-extrabold text-xs">
              <Droplets className="w-4 h-4 text-blue-600" />
              <span>Diagnóstico y Pauta de Riego</span>
            </div>
            <p className="text-xs text-blue-950 font-medium leading-snug">
              {disease.wateringDiagnosis}
            </p>
            <p className="text-[11px] text-blue-800 bg-white/70 p-2 rounded-lg border border-blue-100 mt-1">
              <strong>Pauta:</strong> {disease.wateringAdvice}
            </p>
          </div>

          {/* Síntomas */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold text-gray-700 uppercase flex items-center space-x-1">
              <Info className="w-3.5 h-3.5 text-agro-forest" />
              <span>Síntomas Principales</span>
            </h4>
            <ul className="space-y-1 text-xs text-gray-700">
              {disease.symptoms.map((s, i) => (
                <li key={i} className="flex items-start space-x-1.5">
                  <span className="text-agro-emerald font-bold">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Remedios Ecológicos */}
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
            <h4 className="text-xs font-bold text-emerald-900 flex items-center space-x-1.5">
              <Leaf className="w-4 h-4 text-emerald-700" />
              <span>Tratamiento Ecológico (Remedios Caseros)</span>
            </h4>
            <ul className="space-y-1 text-xs text-emerald-950">
              {disease.organicTreatment.map((t, i) => (
                <li key={i} className="flex items-start space-x-1.5">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tratamiento Químico */}
          {disease.chemicalTreatment && disease.chemicalTreatment.length > 0 && (
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5">
              <h4 className="text-xs font-bold text-gray-800 flex items-center space-x-1.5">
                <FlaskConical className="w-4 h-4 text-gray-600" />
                <span>Tratamiento Químico Comercial</span>
              </h4>
              <ul className="space-y-1 text-xs text-gray-700">
                {disease.chemicalTreatment.map((t, i) => (
                  <li key={i} className="flex items-start space-x-1.5">
                    <span className="text-gray-400 font-bold">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Prevención */}
          {disease.prevention && (
            <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 space-y-1">
              <span className="font-bold uppercase text-[10px] tracking-wide block text-amber-800">
                Prevención Cultural
              </span>
              <p>{disease.prevention}</p>
            </div>
          )}
        </div>

        {/* Botón cerrar inferior */}
        <div className="p-4 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-agro-forest text-white text-xs font-bold hover:bg-agro-emerald transition-colors"
          >
            Entendido / Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
