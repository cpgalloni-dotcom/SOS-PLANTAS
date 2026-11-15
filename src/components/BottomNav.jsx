import React from 'react';
import { Home, BookOpen, Camera, Calculator, Lightbulb } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab, onOpenScanner }) {
  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'manual', label: 'Manual', icon: BookOpen },
    { id: 'scanner', label: 'Escanear', icon: Camera, isPrimary: true },
    { id: 'calculator', label: 'Fertilizante', icon: Calculator },
    { id: 'tips', label: 'Consejos', icon: Lightbulb },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/80 shadow-mobile">
      <div className="max-w-md mx-auto px-2 flex items-center justify-around h-16 relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          if (item.isPrimary) {
            return (
              <div key={item.id} className="relative -top-5">
                <button
                  onClick={onOpenScanner}
                  className="w-14 h-14 rounded-full bg-gradient-to-tr from-agro-forest via-agro-emerald to-agro-leaf text-white flex flex-col items-center justify-center shadow-lg shadow-agro-emerald/40 hover:scale-105 active:scale-95 transition-transform duration-200 border-4 border-white"
                  title="Escanear y diagnosticar planta"
                >
                  <Camera className="w-6 h-6 animate-pulse" />
                  <span className="text-[9px] font-bold tracking-tight">SOS</span>
                </button>
              </div>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors duration-150 ${
                isActive
                  ? 'text-agro-forest font-bold'
                  : 'text-gray-400 hover:text-agro-emerald'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px] scale-110 text-agro-forest' : 'stroke-[1.8px]'}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-agro-emerald rounded-full" />
                )}
              </div>
              <span className={`text-[10px] mt-1 ${isActive ? 'font-bold text-agro-forest' : 'font-medium text-gray-500'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
