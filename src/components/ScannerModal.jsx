import React, { useState, useRef, useEffect } from 'react';
import { Camera, Upload, X, RefreshCw, AlertCircle, Sparkles, Image as ImageIcon } from 'lucide-react';
import { SAMPLE_PLANT_PHOTOS } from '../services/offlineAnalyzer';

export default function ScannerModal({ isOpen, onClose, onAnalyzeImage, isAnalyzing }) {
  const [cameraActive, setCameraActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [cameraError, setCameraError] = useState(null);
  const [selectedSampleId, setSelectedSampleId] = useState(null);
  
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      startCamera();
    } else {
      stopCamera();
      setSelectedImage(null);
      setSelectedSampleId(null);
      setCameraError(null);
    }
    return () => {
      stopCamera();
    };
  }, [isOpen]);

  const startCamera = async () => {
    setCameraError(null);
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment', // Usar cámara trasera en celulares
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setCameraActive(true);
        }
      } else {
        setCameraError('Cámara no compatible o bloqueada en este navegador. Puedes subir una foto.');
      }
    } catch (err) {
      console.warn('No se pudo acceder a la cámara trasera:', err);
      // Intentar cualquier cámara si la trasera falla
      try {
        const fallbackStream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = fallbackStream;
        if (videoRef.current) {
          videoRef.current.srcObject = fallbackStream;
          setCameraActive(true);
        }
      } catch (err2) {
        setCameraError('No se pudo abrir la cámara. Puedes subir una foto de tu planta o usar una de muestra.');
        setCameraActive(false);
      }
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  const handleCapturePhoto = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      setSelectedImage(dataUrl);
      setSelectedSampleId(null);
      stopCamera();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
        setSelectedSampleId(null);
        stopCamera();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectSample = (sample) => {
    setSelectedImage(sample.imageUrl);
    setSelectedSampleId(sample.id);
    stopCamera();
  };

  const handleConfirmScan = () => {
    if (selectedImage) {
      onAnalyzeImage(selectedImage, selectedSampleId);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-between backdrop-blur-sm animate-fadeIn">
      {/* Barra Superior con botón Cerrar */}
      <div className="p-4 flex items-center justify-between z-20 text-white">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
          <span className="text-sm font-bold tracking-wide uppercase text-agro-pale">
            Visor Agronómico SOS
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Área Central: Visor de Cámara o Imagen Seleccionada */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden px-4">
        {selectedImage ? (
          <div className="relative max-w-sm w-full aspect-square rounded-2xl overflow-hidden border-2 border-agro-mint shadow-2xl bg-black">
            <img
              src={selectedImage}
              alt="Planta seleccionada"
              className="w-full h-full object-cover"
            />
            {/* Animación de escaneo láser si está analizando */}
            {isAnalyzing && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-agro-mint to-transparent shadow-[0_0_15px_#52b788] animate-scan-line" />
                <div className="absolute inset-0 bg-agro-emerald/10 backdrop-contrast-125" />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="inline-block px-3 py-1 bg-agro-dark/80 text-agro-mint text-xs font-bold rounded-full border border-agro-mint/40 animate-pulse">
                    Analizando síntomas y estado de riego...
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="relative max-w-sm w-full aspect-square rounded-2xl overflow-hidden border border-white/20 bg-neutral-900 flex items-center justify-center">
            {cameraActive ? (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                />
                {/* Cuadro de enfoque botánico */}
                <div className="absolute inset-8 border-2 border-dashed border-agro-mint/70 rounded-xl pointer-events-none flex flex-col justify-between p-2">
                  <div className="flex justify-between">
                    <div className="w-4 h-4 border-t-2 border-l-2 border-agro-mint" />
                    <div className="w-4 h-4 border-t-2 border-r-2 border-agro-mint" />
                  </div>
                  <div className="text-center">
                    <span className="bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full font-medium backdrop-blur-sm">
                      Enfoca la hoja o zona enferma
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-4 h-4 border-b-2 border-l-2 border-agro-mint" />
                    <div className="w-4 h-4 border-b-2 border-r-2 border-agro-mint" />
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center p-6 space-y-3 text-white/80">
                <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
                <p className="text-xs max-w-xs">{cameraError || 'Cargando cámara...'}</p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 rounded-lg bg-agro-emerald text-white text-xs font-bold hover:bg-agro-leaf"
                >
                  Subir Foto desde Galería
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controles Inferiores */}
      <div className="p-4 z-20 space-y-3 bg-gradient-to-t from-black via-black/80 to-transparent">
        {selectedImage ? (
          <div className="flex items-center space-x-3 max-w-sm mx-auto">
            <button
              onClick={() => {
                setSelectedImage(null);
                setSelectedSampleId(null);
                startCamera();
              }}
              disabled={isAnalyzing}
              className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white font-bold text-xs flex items-center justify-center space-x-1.5 hover:bg-white/30 transition-all disabled:opacity-50"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Tomar Otra</span>
            </button>

            <button
              onClick={handleConfirmScan}
              disabled={isAnalyzing}
              className="flex-[2] py-3.5 px-4 rounded-xl bg-gradient-to-r from-agro-emerald to-agro-leaf text-white font-black text-sm flex items-center justify-center space-x-2 shadow-lg shadow-agro-emerald/50 hover:brightness-110 active:scale-98 transition-all disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Diagnosticando...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-agro-pale" />
                  <span>DIAGNOSTICAR PLANTA</span>
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-3 max-w-sm mx-auto">
            {/* Botones de acción: Disparador y Galería */}
            <div className="flex items-center justify-around">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                title="Subir desde galería"
              >
                <ImageIcon className="w-5 h-5" />
              </button>

              {/* Botón Disparador Central */}
              <button
                onClick={handleCapturePhoto}
                disabled={!cameraActive}
                className="w-18 h-18 rounded-full border-4 border-white p-1 flex items-center justify-center group active:scale-90 transition-transform disabled:opacity-40"
              >
                <div className="w-14 h-14 rounded-full bg-white group-hover:bg-agro-mint transition-colors flex items-center justify-center">
                  <Camera className="w-7 h-7 text-agro-forest" />
                </div>
              </button>

              <button
                onClick={startCamera}
                className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                title="Reiniciar cámara"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

            {/* Selector horizontal rápido de fotos de muestra */}
            <div className="pt-2 border-t border-white/10">
              <p className="text-[10px] text-agro-pale/70 text-center font-medium mb-1.5">
                O prueba rápidamente con un caso clínico:
              </p>
              <div className="flex space-x-2 overflow-x-auto pb-1 no-scrollbar justify-center">
                {SAMPLE_PLANT_PHOTOS.slice(0, 4).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSelectSample(s)}
                    className="shrink-0 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/25 text-white text-[11px] font-semibold border border-white/10 transition-colors"
                  >
                    <span>{s.title.split(' ')[0]}</span>
                    <span className="text-[9px] text-agro-mint">({s.title.split(' ')[1] || s.category})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
    </div>
  );
}
