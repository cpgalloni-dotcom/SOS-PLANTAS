import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon, X, RefreshCw, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { compressAndProcessImage } from '../utils/imageCompressor';

export default function ScannerModal({ isOpen, onClose, onAnalyzeImage, isAnalyzing }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isProcessingFile, setIsProcessingFile] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setSelectedImage(null);
      setIsProcessingFile(false);
      setErrorMessage(null);
    }
  }, [isOpen]);

  const handleFileSelected = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. Crear inmediatamente URL local del objeto para que aparezca EN LA PANTALLA EN 1 MILISEGUNDO
    try {
      const instantPreview = URL.createObjectURL(file);
      setSelectedImage(instantPreview);
    } catch (e) {
      // Ignorar
    }

    setIsProcessingFile(true);
    setErrorMessage(null);

    try {
      // 2. Procesar y comprimir para diagnóstico
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
      onAnalyzeImage(selectedImage);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between backdrop-blur-md animate-fadeIn">
      {/* Barra Superior */}
      <div className="p-4 flex items-center justify-between z-20 text-white border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-agro-mint animate-pulse" />
          <span className="text-sm font-extrabold tracking-wide uppercase text-agro-pale">
            Cámara Fitosanitaria SOS
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Área Central: Foto tomada o Selector */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden px-4 py-2">
        {selectedImage ? (
          <div className="relative max-w-sm w-full aspect-square rounded-3xl overflow-hidden border-2 border-agro-mint shadow-2xl bg-black">
            <img
              src={selectedImage}
              alt="Planta a diagnosticar"
              className="w-full h-full object-cover"
            />
            {/* Si está analizando, mostrar láser y texto de escaneo */}
            {isAnalyzing && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-agro-mint to-transparent shadow-[0_0_15px_#52b788] animate-scan-line" />
                <div className="absolute inset-0 bg-agro-emerald/20 backdrop-contrast-125" />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="inline-block px-4 py-1.5 bg-agro-dark/90 text-agro-mint text-xs font-black rounded-full border border-agro-mint/50 animate-pulse shadow-lg">
                    Analizando patógenos y estado de riego...
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-sm w-full bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20 p-6 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-agro-emerald/30 border-2 border-agro-mint flex items-center justify-center mx-auto text-agro-mint shadow-inner">
              <Camera className="w-10 h-10 animate-pulse" />
            </div>

            <div className="space-y-1.5 text-white">
              <h3 className="text-lg font-black tracking-tight">
                Toma una foto de tu planta
              </h3>
              <p className="text-xs text-agro-pale/80 leading-relaxed font-normal">
                Enfoca la hoja, flor, fruto o tronco para saber qué planta es, si está enferma y si le falta o sobra agua.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-900/50 border border-red-500 text-red-200 text-xs">
                {errorMessage}
              </div>
            )}

            {/* BOTONES DIRECTOS NATIVOS EN IPHONE Y ANDROID */}
            <div className="space-y-3 pt-2">
              {/* Botón 1: Cámara Nativa */}
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

              {/* Botón 2: Galería de Fotos */}
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

      {/* Controles Inferiores cuando la foto ya está en pantalla */}
      {selectedImage && !isAnalyzing && (
        <div className="p-4 z-20 space-y-3 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="flex items-center space-x-3 max-w-sm mx-auto">
            <label className="relative flex-1 py-3 px-4 rounded-xl bg-white/20 text-white font-bold text-xs flex items-center justify-center space-x-1.5 hover:bg-white/30 cursor-pointer overflow-hidden">
              <RefreshCw className="w-4 h-4" />
              <span>Cambiar Foto</span>
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
              className="flex-[2] py-3.5 px-4 rounded-xl bg-gradient-to-r from-agro-emerald to-agro-leaf text-white font-black text-sm flex items-center justify-center space-x-2 shadow-lg shadow-agro-emerald/50 hover:brightness-110 active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-agro-pale" />
              <span>DIAGNOSTICAR PLANTA</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
