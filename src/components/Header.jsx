import React from 'react';
import { Sprout, Sparkles, Settings, Wifi, WifiOff } from 'lucide-react';

export default function Header({ activeTab, onOpenApiKeyModal, isAiActive }) {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-agro-dark via-agro-forest to-agro-emerald text-white shadow-md">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo e Identidad */}
        <div className="flex items-center space-x-2.5">
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
            <Sprout className="w-6 h-6 text-agro-mint animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <h1 className="text-xl font-extrabold tracking-tight text-white">
                SOS <span className="text-agro-mint font-black">Plantas</span>
              </h1>
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-agro-mint/20 text-agro-light border border-agro-mint/30">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-agro-pale/80 font-medium">
              Diagnóstico Fitosanitario y Riego
            </p>
          </div>
        </div>

        {/* Selector de Modo IA / Ajustes */}
        <button
          onClick={onOpenApiKeyModal}
          className={`flex items-center space-x-1.5 text-xs px-2.5 py-1.5 rounded-lg border transition-all duration-200 ${
            isAiActive
              ? 'bg-agro-mint/20 border-agro-mint/40 text-agro-light hover:bg-agro-mint/30 shadow-sm'
              : 'bg-white/10 border-white/20 text-white/90 hover:bg-white/20'
          }`}
          title="Configuración de IA y Motor de Análisis"
        >
          {isAiActive ? (
            <>
              <Sparkles className="w-3.5 h-3.5 text-agro-mint animate-spin" style={{ animationDuration: '4s' }} />
              <span className="font-semibold">Gemini IA</span>
            </>
          ) : (
            <>
              <Wifi className="w-3.5 h-3.5 text-agro-light" />
              <span className="font-semibold">Offline</span>
            </>
          )}
          <Settings className="w-3 h-3 text-agro-pale/70 ml-0.5" />
        </button>
      </div>
    </header>
  );
}
