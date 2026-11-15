import React, { useState } from 'react';
import { X, Sparkles, Key, Check, AlertCircle, ExternalLink, Shield } from 'lucide-react';

export default function ApiKeyModal({ isOpen, onClose, apiKey, onSaveApiKey, isAiMode, onToggleAiMode }) {
  const [inputKey, setInputKey] = useState(apiKey || '');
  const [showSavedMsg, setShowSavedMsg] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveApiKey(inputKey.trim());
    setShowSavedMsg(true);
    setTimeout(() => {
      setShowSavedMsg(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-4 text-gray-800">
        {/* Encabezado */}
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-agro-forest text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-agro-mint" />
            </div>
            <div>
              <h3 className="text-sm font-black text-gray-900">Motor de Diagnóstico</h3>
              <p className="text-[11px] text-gray-500">Configuración de Inteligencia Artificial</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selector de Modo */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
            Selecciona el Modo de Análisis:
          </label>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onToggleAiMode(false)}
              className={`p-3 rounded-2xl border text-left transition-all ${
                !isAiMode
                  ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/30'
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="text-xs font-black text-gray-900 block">Modo Offline</span>
              <span className="text-[10px] text-gray-500 block mt-0.5">
                Base experta local sin costo ni API key.
              </span>
            </button>

            <button
              onClick={() => onToggleAiMode(true)}
              className={`p-3 rounded-2xl border text-left transition-all ${
                isAiMode
                  ? 'bg-agro-forest text-white border-agro-forest ring-2 ring-agro-emerald/40'
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-1">
                <span className="text-xs font-black block">Gemini IA</span>
                <span className="text-[9px] bg-agro-mint/30 text-agro-mint px-1 rounded font-bold">PRO</span>
              </div>
              <span className="text-[10px] opacity-80 block mt-0.5">
                Visión multimodal para cualquier foto real.
              </span>
            </button>
          </div>
        </div>

        {/* Campo de API Key (si modo IA está activo) */}
        {isAiMode && (
          <div className="space-y-2 pt-1 animate-fadeIn">
            <label className="text-xs font-bold text-gray-700 flex items-center justify-between">
              <span>Google Gemini API Key:</span>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-agro-emerald text-[11px] font-bold flex items-center space-x-1 hover:underline"
              >
                <span>Obtener gratis</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </label>

            <div className="relative">
              <Key className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                placeholder="Pega aquí tu API Key de Gemini..."
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-agro-emerald/30 focus:border-agro-emerald font-mono"
              />
            </div>
            <p className="text-[10px] text-gray-500 leading-tight">
              Tu clave se almacena de forma segura en tu navegador local (LocalStorage) y nunca se comparte.
            </p>
          </div>
        )}

        {showSavedMsg && (
          <div className="p-2 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-xl text-center flex items-center justify-center space-x-1">
            <Check className="w-4 h-4" />
            <span>Configuración guardada correctamente</span>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex space-x-2 pt-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50"
          >
            Cerrar
          </button>
          <button
            onClick={handleSave}
            className="flex-[2] py-2.5 rounded-xl bg-agro-forest text-white text-xs font-extrabold hover:bg-agro-emerald transition-colors"
          >
            Guardar Configuración
          </button>
        </div>
      </div>
    </div>
  );
}
