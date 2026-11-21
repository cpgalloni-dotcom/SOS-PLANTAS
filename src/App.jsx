import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomeDashboard from './components/HomeDashboard';
import ScannerModal from './components/ScannerModal';
import DiagnosisResult from './components/DiagnosisResult';
import DiseaseManual from './components/DiseaseManual';
import FertilizerCalc from './components/FertilizerCalc';
import CropTips from './components/CropTips';
import ApiKeyModal from './components/ApiKeyModal';
import { analyzePlantWithGemini } from './services/geminiVisionService';
import { analyzePlantOffline } from './services/offlineAnalyzer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentDiagnosis, setCurrentDiagnosis] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [preselectedCropForCalc, setPreselectedCropForCalc] = useState(null);
  const [alertError, setAlertError] = useState(null);

  // Estados persistentes en LocalStorage
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('sos_plantas_api_key') || '';
  });

  const [isAiMode, setIsAiMode] = useState(() => {
    return localStorage.getItem('sos_plantas_ai_mode') === 'true';
  });

  const [scanHistory, setScanHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('sos_plantas_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Guardar en LocalStorage al cambiar
  useEffect(() => {
    localStorage.setItem('sos_plantas_history', JSON.stringify(scanHistory));
  }, [scanHistory]);

  const handleSaveApiKey = (newKey) => {
    setApiKey(newKey);
    localStorage.setItem('sos_plantas_api_key', newKey);
  };

  const handleToggleAiMode = (enabled) => {
    setIsAiMode(enabled);
    localStorage.setItem('sos_plantas_ai_mode', enabled ? 'true' : 'false');
  };

  // Manejar el análisis de una imagen
  const handleAnalyzeImage = async (imageUri, sampleId = null) => {
    setIsAnalyzing(true);
    setAlertError(null);

    try {
      let result = null;

      if (isAiMode && apiKey && !sampleId) {
        try {
          result = await analyzePlantWithGemini(imageUri, apiKey);
        } catch (apiErr) {
          console.warn('Fallo en Gemini API, usando motor offline:', apiErr);
          setAlertError(`Aviso de IA: ${apiErr.message}. Se utilizó el motor experto offline como respaldo.`);
          result = await analyzePlantOffline(imageUri, sampleId);
        }
      } else {
        result = await analyzePlantOffline(imageUri, sampleId);
      }

      setCurrentImage(imageUri);
      setCurrentDiagnosis(result);
      setIsScannerOpen(false);
    } catch (err) {
      console.error('Error general en diagnóstico:', err);
      setAlertError('Ocurrió un error al procesar el diagnóstico. Por favor intenta con otra foto.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Seleccionar una foto de muestra rápida desde la pantalla de inicio
  const handleSelectSample = async (sample) => {
    setIsAnalyzing(true);
    setCurrentImage(sample.imageUrl);
    try {
      const result = await analyzePlantOffline(sample.imageUrl, sample.id);
      setCurrentDiagnosis(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Guardar diagnóstico actual en historial
  const handleSaveToHistory = () => {
    if (!currentDiagnosis) return;

    const exists = scanHistory.some(
      h => h.plantName === currentDiagnosis.plantName && h.diseaseName === currentDiagnosis.diseaseName
    );

    if (!exists) {
      const newEntry = {
        ...currentDiagnosis,
        image: currentImage,
        timestamp: new Date().toLocaleDateString('es-ES', {
          day: '2-digit',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      setScanHistory([newEntry, ...scanHistory]);
    }
  };

  const isCurrentDiagnosisSaved = scanHistory.some(
    h => currentDiagnosis && h.plantName === currentDiagnosis.plantName && h.diseaseName === currentDiagnosis.diseaseName
  );

  const handleSelectHistoryItem = (item) => {
    setCurrentDiagnosis(item);
    setCurrentImage(item.image);
  };

  const handleGoToCalculator = (plantName) => {
    setPreselectedCropForCalc(plantName);
    setCurrentDiagnosis(null);
    setActiveTab('calculator');
  };

  return (
    <div className="min-h-screen bg-agro-cream text-gray-900 font-sans flex flex-col">
      {/* Barra Superior */}
      <Header
        activeTab={activeTab}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        isAiActive={isAiMode && !!apiKey}
      />

      {/* Alerta de notificación si hubo fallback */}
      {alertError && (
        <div className="max-w-md mx-auto px-4 mt-2 w-full">
          <div className="p-2.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 text-xs flex items-center justify-between">
            <span>{alertError}</span>
            <button onClick={() => setAlertError(null)} className="ml-2 font-bold">✕</button>
          </div>
        </div>
      )}

      {/* Vista Principal */}
      <main className="flex-1 w-full">
        {/* Si hay un diagnóstico activo, mostrar la ficha médica */}
        {currentDiagnosis ? (
          <DiagnosisResult
            diagnosis={currentDiagnosis}
            image={currentImage}
            onReset={() => setCurrentDiagnosis(null)}
            onSaveToHistory={handleSaveToHistory}
            isSaved={isCurrentDiagnosisSaved}
            onGoToCalculator={handleGoToCalculator}
          />
        ) : (
          <>
            {activeTab === 'home' && (
              <HomeDashboard
                onOpenScanner={() => setIsScannerOpen(true)}
                setActiveTab={setActiveTab}
                scanHistory={scanHistory}
                onSelectHistoryItem={handleSelectHistoryItem}
              />
            )}

            {activeTab === 'manual' && <DiseaseManual />}

            {activeTab === 'calculator' && (
              <FertilizerCalc initialCropName={preselectedCropForCalc} />
            )}

            {activeTab === 'tips' && <CropTips />}
          </>
        )}
      </main>

      {/* Barra de Navegación Inferior Móvil */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setCurrentDiagnosis(null);
          setActiveTab(tab);
        }}
        onOpenScanner={() => setIsScannerOpen(true)}
      />

      {/* Modal de Escáner y Cámara */}
      <ScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onAnalyzeImage={handleAnalyzeImage}
        isAnalyzing={isAnalyzing}
      />

      {/* Modal de Configuración de API Key */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        apiKey={apiKey}
        onSaveApiKey={handleSaveApiKey}
        isAiMode={isAiMode}
        onToggleAiMode={handleToggleAiMode}
      />
    </div>
  );
}
