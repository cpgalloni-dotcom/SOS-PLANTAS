import React, { useState, useEffect } from 'react';
import { 
  Camera, Image as ImageIcon, X, RefreshCw, Sparkles, Check, 
  Search, Droplets, Bug, Leaf, AlertCircle, Scan
} from 'lucide-react';
import { compressAndProcessImage } from '../utils/imageCompressor';
import { ARGENTINE_PLANTS, searchArgentinePlants } from '../data/argentinePlantsData';

export default function ScannerModal({ isOpen, onClose, onAnalyzeImage, isAnalyzing }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isProcessingFile, setIsProcessingFile] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  
  // Opciones de escaneo guiado
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [plantSearchQuery, setPlantSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchingPlant, setIsSearchingPlant] = useState(false);
  const [healthObservation, setHealthObservation] = useState('sana'); // 'sana', 'sed', 'exceso', 'plaga'

  useEffect(() => {
    if (!isOpen) {
      setSelectedImage(null);
      setIsProcessingFile(false);
      setErrorMessage(null);
      setSelectedPlant(null);
      setPlantSearchQuery('');
      setSearchResults([]);
      setIsSearchingPlant(false);
      setHealthObservation('sana');
    }
  }, [isOpen]);

  // Búsqueda de plantas argentinas
  useEffect(() => {
    if (plantSearchQuery.trim().length > 0) {
      const results = searchArgentinePlants(plantSearchQuery);
      setSearchResults(results.slice(0, 6));
    } else {
      setSearchResults([]);
    }
  }, [plantSearchQuery]);

  const handleFileSelected = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. Previsualización instantánea (0ms)
    try {
      const instantPreview = URL.createObjectURL(file);
      setSelectedImage(instantPreview);
    } catch (e) {
      // Ignorar
    }

    setIsProcessingFile(true);
    setErrorMessage(null);

    try {
      const compressedDataUrl = await compressAndProcessImage(file, 1080, 0.85);
      if (compressedDataUrl) {
        setSelectedImage(compressedDataUrl);
      }
    } catch (err) {
      console.warn('Error en compresión:', err);
    } finally {
      setIsProcessingFile(false);
      e.target.value = '';
    }
  };

  const handleStartDiagnosis = () => {
    if (selectedImage) {
      onAnalyzeImage(selectedImage, null, {
        selectedPlantId: selectedPlant ? selectedPlant.id : null,
        healthObservation: healthObservation
      });
    }
  };

  // Plantas sugeridas rápidas típicas de Argentina
  const quickPicks = [
    { id: 'potus', label: '🌿 Potus' },
    { id: 'monstera', label: '🌿 Monstera' },
    { id: 'limonero', label: '🍋 Limonero' },
    { id: 'tomate', label: '🍅 Tomate' },
    { id: 'sansevieria', label: '🪴 Espada San Jorge' },
    { id: 'malvon', label: '🌸 Malvón' },
    { id: 'rosal', label: '🌹 Rosal' },
    { id: 'gomero', label: '🌳 Gomero' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* Barra Superior */}
      <div className="p-3.5 flex items-center justify-between z-20 text-white border-b border-white/10 shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-agro-mint animate-pulse" />
          <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-agro-pale flex items-center space-x-1.5">
            <Scan className="w-4 h-4 text-agro-mint" />
            <span>Escáner Botánico y Fitosanitario</span>
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Área Central */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-3 max-w-md mx-auto w-full">
        {selectedImage ? (
          <div className="w-full space-y-4">
            {/* Visor de Escaneo con retícula de precisión botánica */}
            <div className="relative w-full aspect-square max-h-[300px] rounded-3xl overflow-hidden border-2 border-agro-mint shadow-2xl bg-black mx-auto">
              <img
                src={selectedImage}
                alt="Planta escaneada"
                className="w-full h-full object-cover"
              />

              {/* Retícula de visor agronómico */}
              <div className="absolute inset-4 pointer-events-none border border-white/20 rounded-2xl flex flex-col justify-between p-2">
                <div className="flex justify-between">
                  <span className="w-4 h-4 border-t-2 border-l-2 border-agro-mint" />
                  <span className="w-4 h-4 border-t-2 border-r-2 border-agro-mint" />
                </div>
                <div className="flex justify-between">
                  <span className="w-4 h-4 border-b-2 border-l-2 border-agro-mint" />
                  <span className="w-4 h-4 border-b-2 border-r-2 border-agro-mint" />
                </div>
              </div>

              {/* Animación de láser durante el análisis */}
              {isAnalyzing && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-agro-mint to-transparent shadow-[0_0_20px_#52b788] animate-scan-line" />
                  <div className="absolute inset-0 bg-agro-emerald/20 backdrop-contrast-125" />
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="inline-block px-4 py-1.5 bg-agro-dark/95 text-agro-mint text-xs font-black rounded-full border border-agro-mint/50 animate-pulse shadow-lg">
                      🔬 Analizando especie, clorofila y estado hídrico...
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Panel de Ajuste Fino Botánico (Solo visible antes de diagnosticar) */}
            {!isAnalyzing && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15 space-y-3 text-white">
                
                {/* 1. Selector de Salud: ¡Evita diagnósticos falsos de plagas! */}
                <div>
                  <label className="text-[11px] font-black uppercase text-agro-pale tracking-wider block mb-1.5 flex items-center space-x-1">
                    <Leaf className="w-3.5 h-3.5 text-agro-mint" />
                    <span>¿Cómo observas la salud de tu planta?</span>
                  </label>
                  
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setHealthObservation('sana')}
                      className={`p-2 rounded-xl text-center border text-[11px] font-bold flex flex-col items-center justify-center transition-all ${
                        healthObservation === 'sana'
                          ? 'bg-emerald-600 border-emerald-400 text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-sm mb-0.5">🌿</span>
                      <span className="leading-tight">Se ve Sana</span>
                      <span className="text-[9px] opacity-80">(Cuidados y Riego)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setHealthObservation('sed')}
                      className={`p-2 rounded-xl text-center border text-[11px] font-bold flex flex-col items-center justify-center transition-all ${
                        healthObservation === 'sed' || healthObservation === 'exceso'
                          ? 'bg-blue-600 border-blue-400 text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-sm mb-0.5">💧</span>
                      <span className="leading-tight">Duda de Riego</span>
                      <span className="text-[9px] opacity-80">(Sed o Encharcada)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setHealthObservation('plaga')}
                      className={`p-2 rounded-xl text-center border text-[11px] font-bold flex flex-col items-center justify-center transition-all ${
                        healthObservation === 'plaga'
                          ? 'bg-amber-600 border-amber-400 text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-sm mb-0.5">🐛</span>
                      <span className="leading-tight">Veo Manchas</span>
                      <span className="text-[9px] opacity-80">(Plagas u Hongos)</span>
                    </button>
                  </div>
                </div>

                {/* 2. Confirmación de Especie Botánica Argentina */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-[11px] font-black uppercase text-agro-pale tracking-wider flex items-center space-x-1">
                      <Sparkles className="w-3.5 h-3.5 text-agro-mint" />
                      <span>Especie Botánica (Argentina):</span>
                    </label>
                    {selectedPlant && (
                      <button
                        type="button"
                        onClick={() => setSelectedPlant(null)}
                        className="text-[10px] text-agro-mint hover:underline font-bold"
                      >
                        Cambiar
                      </button>
                    )}
                  </div>

                  {selectedPlant ? (
                    <div className="p-2.5 rounded-xl bg-agro-emerald/30 border border-agro-mint flex items-center justify-between text-xs">
                      <div>
                        <strong className="block text-white font-bold italic">
                          {selectedPlant.scientificName}
                        </strong>
                        <span className="text-agro-pale text-[11px]">
                          ({selectedPlant.argentineName})
                        </span>
                      </div>
                      <Check className="w-4 h-4 text-agro-mint shrink-0" />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {/* Barra de búsqueda rápida */}
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
                        <input
                          type="text"
                          value={plantSearchQuery}
                          onChange={(e) => setPlantSearchQuery(e.target.value)}
                          placeholder="Buscar planta: ej. Potus, Tomate, Limonero..."
                          className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-agro-mint"
                        />
                      </div>

                      {/* Lista desplegable si busca */}
                      {searchResults.length > 0 && (
                        <div className="max-h-28 overflow-y-auto rounded-xl bg-agro-dark/95 border border-agro-mint/40 divide-y divide-white/10 text-xs">
                          {searchResults.map((p) => (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => {
                                setSelectedPlant(p);
                                setPlantSearchQuery('');
                                setSearchResults([]);
                              }}
                              className="w-full text-left p-2 hover:bg-white/15 flex items-center justify-between text-white"
                            >
                              <div>
                                <span className="font-bold italic">{p.scientificName}</span>
                                <span className="text-agro-pale text-[11px] ml-1">({p.argentineName})</span>
                              </div>
                              <span className="text-[10px] text-gray-400">{p.category}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Botones de sugerencias rápidas */}
                      <div className="flex flex-wrap gap-1">
                        {quickPicks.map((qp) => (
                          <button
                            key={qp.id}
                            type="button"
                            onClick={() => {
                              const match = ARGENTINE_PLANTS.find(p => p.id === qp.id);
                              if (match) setSelectedPlant(match);
                            }}
                            className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] font-semibold transition-colors"
                          >
                            {qp.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>
        ) : (
          /* Pantalla Inicial: Abrir Cámara o Galería */
          <div className="max-w-sm w-full bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20 p-6 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-agro-emerald/30 border-2 border-agro-mint flex items-center justify-center mx-auto text-agro-mint shadow-inner">
              <Camera className="w-10 h-10 animate-pulse" />
            </div>

            <div className="space-y-1.5 text-white">
              <h3 className="text-lg font-black tracking-tight">
                Escáner Botánico SOS Plantas
              </h3>
              <p className="text-xs text-agro-pale/80 leading-relaxed font-normal">
                Identifica el nombre científico de tu planta, su nombre popular en Argentina, su estado hídrico y si realmente está sana o necesita cuidados.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-900/50 border border-red-500 text-red-200 text-xs">
                {errorMessage}
              </div>
            )}

            {/* BOTONES DIRECTOS NATIVOS */}
            <div className="space-y-3 pt-2">
              <label className="relative w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-agro-emerald to-agro-leaf text-white font-black text-sm flex items-center justify-center space-x-2.5 shadow-xl hover:brightness-110 active:scale-98 cursor-pointer overflow-hidden transition-all">
                <Camera className="w-5 h-5 text-white" />
                <span>ABRIR CÁMARA DEL CELULAR</span>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                  onChange={handleFileSelected}
                />
              </label>

              <label className="relative w-full py-3.5 px-5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center justify-center space-x-2 border border-white/20 active:scale-98 cursor-pointer overflow-hidden transition-all">
                <ImageIcon className="w-4 h-4 text-agro-pale" />
                <span>Elegir Foto de la Galería</span>
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                  onChange={handleFileSelected}
                />
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Controles Inferiores */}
      {selectedImage && !isAnalyzing && (
        <div className="p-3 z-20 bg-gradient-to-t from-black via-black/80 to-transparent shrink-0">
          <div className="flex items-center space-x-2.5 max-w-md mx-auto">
            <label className="relative flex-1 py-3 px-3 rounded-xl bg-white/20 text-white font-bold text-xs flex items-center justify-center space-x-1 hover:bg-white/30 cursor-pointer overflow-hidden">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Otra Foto</span>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                onChange={handleFileSelected}
              />
            </label>

            <button
              onClick={handleStartDiagnosis}
              className="flex-[2] py-3.5 px-4 rounded-xl bg-gradient-to-r from-agro-emerald to-agro-leaf text-white font-black text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg shadow-agro-emerald/50 hover:brightness-110 active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-agro-pale" />
              <span>ESCANEAR Y OBTENER NOMBRE</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
