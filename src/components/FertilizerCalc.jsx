import React, { useState, useMemo, useRef } from 'react';
import { 
  Calculator, Search, X, Droplets, Leaf, FlaskConical, 
  Camera, Check, Info, Store, Tag, Sparkles, Loader2 
} from 'lucide-react';
import { CROPS_DATABASE, FERTILIZER_TYPES } from '../data/cropsData';
import { compressAndProcessImage } from '../utils/imageCompressor';
import { analyzePlantOffline } from '../services/offlineAnalyzer';

// Catálogo detallado de marcas comerciales existentes en el mercado
export const COMMERCIAL_BRANDS = [
  {
    brand: 'Fertifox',
    line: 'Línea Líquida y Polvo de Alta Eficiencia',
    recommendedProduct: 'Fertifox Floración (con fitohormonas) / Fertifox Crecimiento Follaje',
    type: 'Líquido concentrado para diluir',
    bestFor: 'Macetas, rosales, flores, cítricos y huerta familiar',
    howToBuy: 'Pedir en cualquier vivero o ferretería como "Fertifox tapa roja (floración)" o "Fertifox tapa verde (crecimiento)".',
    badge: 'Popular & Fácil de usar'
  },
  {
    brand: 'Nitrofoska (EuroChem)',
    line: 'Granulados Complejos Químicos de Liberación Gradual',
    recommendedProduct: 'Nitrofoska Azul Especial (NPK 12-12-17 + 2% Mg + microelementos)',
    type: 'Perlas granulares azules al suelo',
    bestFor: 'Frutales (limonero, manzano, naranjo), huertos, tomates y arbustos',
    howToBuy: 'Pedir en agroquímicas o viveros como "Nitrofoska Azul granulado". Cada grano contiene todos los nutrientes.',
    badge: 'Máximo Rendimiento'
  },
  {
    brand: 'Yara International',
    line: 'Línea Profesional Agronómica de Alta Pureza',
    recommendedProduct: 'YaraMila Complex (NPK 12-11-18) / YaraLiva Nitrabor (Calcio + Boro)',
    type: 'Granulado hidrosoluble sin cloro',
    bestFor: 'Cítricos, vid, palto/aguacate, tomates y cultivos de producción',
    howToBuy: 'Disponible en cooperativas agrícolas y casas de agroquímica en bolsas de 5kg y 25kg.',
    badge: 'Calidad Profesional'
  },
  {
    brand: 'Profertil / Bunge',
    line: 'Fertilizantes Simples a Granel de Alta Concentración',
    recommendedProduct: 'Urea Perlada 46-0-0 / Fosfato Diamónico (DAP 18-46-0)',
    type: 'Perlas blancas simples al voleo o disueltas',
    bestFor: 'Grandes superficies, siembra masiva y estímulo de hojas en primavera',
    howToBuy: 'Se compra por kilo fraccionado en forrajerías o bolsas en distribuidores de agro.',
    badge: 'Más Económico'
  },
  {
    brand: 'Mamboretá',
    line: 'Fitosanitarios y Fertilizantes Foliares Concentrados',
    recommendedProduct: 'Mamboretá FERT (Foliar con aminoácidos y micronutrientes)',
    type: 'Pulverización foliar de choque',
    bestFor: 'Recuperar plantas estresadas, amarillentas o tras ataques de plagas',
    howToBuy: 'Muy común en viveros y agroquímicas bajo la marca Mamboretá.',
    badge: 'Absorción Inmediata'
  },
  {
    brand: 'Top Crop / Namasté / Biobizz',
    line: 'Línea 100% Orgánica / Agroecológica Certificada',
    recommendedProduct: 'Top Bloom / Namasté Oro Negro / Bio-Grow (a base de algas y melazas)',
    type: 'Extracto orgánico líquido bioestimulante',
    bestFor: 'Huerto ecológico, hierbas aromáticas, flores y plantas medicinales',
    howToBuy: 'Disponible en growshops, viveros botánicos y tiendas de jardinería orgánica.',
    badge: '100% Ecológico'
  },
  {
    brand: 'Humus de Lombriz Californiana (Terrafértil u otros)',
    line: 'Abono Orgánico Vivo de Suelo',
    recommendedProduct: 'Humus 100% puro tamizado',
    type: 'Sustrato orgánico desodorizado',
    bestFor: 'Cualquier planta sin riesgo alguno de quemar raíces ni sobrefertilizar',
    howToBuy: 'En bolsas de 5L a 50L en cualquier vivero o supermercado.',
    badge: 'Seguro & Regenerador'
  }
];

export default function FertilizerCalc({ initialCropName }) {
  const [searchTerm, setSearchTerm] = useState(initialCropName || '');
  const [activeQuery, setActiveQuery] = useState(initialCropName || '');
  const [analyzingPhoto, setAnalyzingPhoto] = useState(false);
  const [photoFeedback, setPhotoFeedback] = useState(null);

  const cameraInputRef = useRef(null);

  // Buscar si vino algún cultivo preseleccionado
  const initialCrop = useMemo(() => {
    if (!initialCropName) return CROPS_DATABASE[0];
    const match = CROPS_DATABASE.find(c => 
      c.name.toLowerCase().includes(initialCropName.toLowerCase()) || 
      initialCropName.toLowerCase().includes(c.name.toLowerCase())
    );
    return match || CROPS_DATABASE[0];
  }, [initialCropName]);

  const [selectedCropId, setSelectedCropId] = useState(initialCrop.id);
  const [scaleType, setScaleType] = useState('m2'); // 'm2' | 'macetas' | 'hectareas'
  const [quantity, setQuantity] = useState(10);
  const [selectedStage, setSelectedStage] = useState('crecimiento');

  // Filtrado de cultivos según la búsqueda
  const filteredCrops = useMemo(() => {
    if (!activeQuery.trim()) return CROPS_DATABASE;
    const q = activeQuery.toLowerCase().trim();
    return CROPS_DATABASE.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.scientific.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  }, [activeQuery]);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    const q = searchTerm.trim();
    setActiveQuery(q);

    if (q) {
      const match = CROPS_DATABASE.find(c => 
        c.name.toLowerCase().includes(q.toLowerCase()) ||
        c.scientific.toLowerCase().includes(q.toLowerCase())
      );
      if (match) {
        setSelectedCropId(match.id);
      }
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setActiveQuery('');
  };

  // Manejar captura de foto para recomendación de fertilizante
  const handlePhotoCapture = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAnalyzingPhoto(true);
    setPhotoFeedback(null);

    try {
      const compressedData = await compressAndProcessImage(file, 1080, 0.8);
      // Analizar especie botánica
      const result = await analyzePlantOffline(compressedData);
      
      // Buscar el cultivo en la base de datos
      const matched = CROPS_DATABASE.find(c => 
        c.name.toLowerCase().includes(result.plantName.toLowerCase()) ||
        result.plantName.toLowerCase().includes(c.name.toLowerCase())
      );

      if (matched) {
        setSelectedCropId(matched.id);
        setPhotoFeedback(`✅ ¡Foto analizada! Identificamos: ${matched.name}. Mostrando fertilizantes y marcas.`);
      } else {
        setSelectedCropId(CROPS_DATABASE[0].id);
        setPhotoFeedback(`✅ ¡Foto analizada! Planta reconocida (${result.plantName}). Aplicando recomendación agronómica.`);
      }
    } catch (err) {
      console.error(err);
      setPhotoFeedback('No se pudo procesar la foto. Puedes buscar tu planta por nombre en la barra.');
    } finally {
      setAnalyzingPhoto(false);
      e.target.value = '';
    }
  };

  const currentCrop = useMemo(() => {
    return CROPS_DATABASE.find(c => c.id === selectedCropId) || CROPS_DATABASE[0];
  }, [selectedCropId]);

  const currentStageData = useMemo(() => {
    return currentCrop.stages[selectedStage] || currentCrop.stages.crecimiento;
  }, [currentCrop, selectedStage]);

  // Cálculos dinámicos
  const calculations = useMemo(() => {
    const dosePerM2 = currentStageData.dosePerM2 || 40;
    const npk = currentStageData.npkRatio;

    let multiplier = 1;
    let unitLabel = 'gramos';

    if (scaleType === 'm2') {
      multiplier = Math.max(1, quantity);
      unitLabel = multiplier * dosePerM2 >= 1000 ? 'kg' : 'gramos';
    } else if (scaleType === 'macetas') {
      multiplier = Math.max(1, quantity) * 0.25;
      unitLabel = 'gramos';
    } else if (scaleType === 'hectareas') {
      multiplier = Math.max(0.1, quantity) * 10000;
      unitLabel = 'kg';
    }

    const totalBaseGrams = dosePerM2 * multiplier;
    const nGrams = Math.round((totalBaseGrams * npk.n) / 100);
    const pGrams = Math.round((totalBaseGrams * npk.p) / 100);
    const kGrams = Math.round((totalBaseGrams * npk.k) / 100);

    const formatVal = (grams) => {
      if (unitLabel === 'kg') {
        return `${(grams / 1000).toFixed(1)} kg`;
      }
      return `${Math.round(grams)} g`;
    };

    return {
      n: formatVal(nGrams),
      p: formatVal(pGrams),
      k: formatVal(kGrams),
      totalFertilizer: formatVal(totalBaseGrams),
      unitLabel
    };
  }, [currentStageData, scaleType, quantity]);

  return (
    <div className="pb-24 pt-3 px-4 max-w-md mx-auto space-y-4">
      {/* Encabezado */}
      <div>
        <h2 className="text-xl font-black text-gray-900 tracking-tight flex items-center space-x-2">
          <Calculator className="w-6 h-6 text-agro-forest" />
          <span>Calculadora de Fertilizantes y Marcas</span>
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Saca foto a tu planta o búscala por nombre para ver qué abono y marcas usar
        </p>
      </div>

      {/* BOTÓN SOLICITADO: SACAR FOTO PARA RECOMENDAR FERTILIZANTE */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-agro-forest to-agro-emerald text-white space-y-2 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Camera className="w-5 h-5 text-agro-mint" />
            <span className="text-xs font-black uppercase tracking-wide">
              Identificación por Cámara
            </span>
          </div>
          <span className="text-[10px] bg-white/20 text-agro-pale px-2 py-0.5 rounded font-bold">
            Inteligente
          </span>
        </div>

        <p className="text-xs text-agro-pale/90 leading-snug">
          ¿No sabes qué planta es? Tómale una foto y el sistema te dirá qué abono y qué marcas comprar.
        </p>

        <label className="relative w-full py-3.5 px-4 rounded-xl bg-white text-agro-forest font-extrabold text-xs flex items-center justify-center space-x-2 shadow-lg hover:bg-agro-pale active:scale-98 transition-all cursor-pointer overflow-hidden">
          {analyzingPhoto ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-agro-forest" />
              <span>Identificando planta y marcas...</span>
            </>
          ) : (
            <>
              <Camera className="w-4 h-4 text-agro-forest" />
              <span>SACAR FOTO PARA RECOMENDAR FERTILIZANTE</span>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
            disabled={analyzingPhoto}
            onChange={handlePhotoCapture}
          />
        </label>

        {photoFeedback && (
          <div className="p-2 rounded-lg bg-white/15 text-white text-[11px] font-medium border border-white/20 flex items-center space-x-1.5">
            <Check className="w-4 h-4 text-agro-mint shrink-0" />
            <span>{photoFeedback}</span>
          </div>
        )}
      </div>

      {/* BARRA Y BOTÓN DE BÚSQUEDA */}
      <form onSubmit={handleSearchSubmit} className="space-y-2">
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (e.target.value === '') setActiveQuery('');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearchSubmit(e);
              }}
              placeholder="O escribe la planta (ej: Tomate, Limonero, Rosa)..."
              className="w-full pl-9 pr-8 py-3 rounded-xl bg-white border border-gray-300 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-agro-emerald focus:border-agro-emerald shadow-sm font-medium"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-3 rounded-xl bg-agro-forest text-white font-extrabold text-xs flex items-center space-x-1.5 shadow-md hover:bg-agro-emerald active:scale-95 transition-all shrink-0"
          >
            <Search className="w-4 h-4" />
            <span>BUSCAR</span>
          </button>
        </div>
      </form>

      {/* Selector de Cultivo */}
      <div className="rounded-2xl bg-white border border-gray-200/90 p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
            1. Cultivo Seleccionado:
          </label>
          <span className="text-[11px] font-bold text-agro-emerald">
            {filteredCrops.length} planta(s)
          </span>
        </div>
        
        {filteredCrops.length === 0 ? (
          <div className="text-center py-6 bg-gray-50 rounded-xl p-4 text-xs space-y-2">
            <p className="font-bold text-gray-700">No encontramos "{activeQuery || searchTerm}"</p>
            <p className="text-gray-500 text-[11px]">Prueba con Tomate, Limonero, Rosas, Vid, Pimiento o Manzano.</p>
            <button
              type="button"
              onClick={handleClearSearch}
              className="px-3 py-1 rounded-lg bg-agro-forest text-white font-bold text-xs"
            >
              Ver todas las plantas
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {filteredCrops.map((crop) => (
              <button
                key={crop.id}
                onClick={() => setSelectedCropId(crop.id)}
                className={`p-2 rounded-xl text-center flex flex-col items-center justify-center border transition-all ${
                  selectedCropId === crop.id
                    ? 'bg-agro-forest text-white border-agro-forest shadow-md scale-102 font-bold ring-2 ring-agro-mint'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-2xl mb-1">{crop.icon}</span>
                <span className="text-[11px] leading-tight line-clamp-1">{crop.name}</span>
              </button>
            ))}
          </div>
        )}

        <div className="p-2.5 rounded-xl bg-agro-cream border border-agro-pale text-xs flex items-center justify-between">
          <div>
            <span className="font-bold text-agro-dark">{currentCrop.name}</span>
            <span className="text-gray-500 text-[10px] ml-1.5 italic">({currentCrop.scientific})</span>
          </div>
          <span className="text-[10px] font-bold bg-white text-agro-emerald px-2 py-0.5 rounded-full border border-agro-pale">
            pH óptimo: {currentCrop.optimalPh}
          </span>
        </div>
      </div>

      {/* Superficie o Macetas */}
      <div className="rounded-2xl bg-white border border-gray-200/90 p-4 shadow-sm space-y-3">
        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
          2. Superficie o Cantidad:
        </label>

        <div className="grid grid-cols-3 gap-2">
          {[
            { id: 'm2', label: 'Metros (m²)' },
            { id: 'macetas', label: 'N° Macetas' },
            { id: 'hectareas', label: 'Hectáreas (ha)' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setScaleType(item.id);
                if (item.id === 'm2') setQuantity(20);
                if (item.id === 'macetas') setQuantity(5);
                if (item.id === 'hectareas') setQuantity(1);
              }}
              className={`py-2 px-1 text-xs font-bold rounded-xl border text-center transition-all ${
                scaleType === item.id
                  ? 'bg-agro-emerald text-white border-agro-emerald shadow-sm'
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-3 pt-1">
          <input
            type="number"
            min="1"
            max="10000"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            className="flex-1 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-sm font-black text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-agro-emerald"
          />
          <span className="text-xs font-bold text-gray-600 min-w-16">
            {scaleType === 'm2' ? 'm² de tierra' : scaleType === 'macetas' ? 'macetas' : 'hectáreas'}
          </span>
        </div>
      </div>

      {/* Etapa Fenológica del Cultivo */}
      <div className="rounded-2xl bg-white border border-gray-200/90 p-4 shadow-sm space-y-3">
        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
          3. Etapa de Crecimiento del Cultivo:
        </label>

        <div className="grid grid-cols-2 gap-2">
          {[
            { id: 'siembra', label: '1. Siembra / Enraizamiento', desc: 'Fósforo alto' },
            { id: 'crecimiento', label: '2. Crecimiento Vegetativo', desc: 'Nitrógeno alto' },
            { id: 'floracion', label: '3. Floración y Cuajado', desc: 'Fósforo y Potasio' },
            { id: 'fructificacion', label: '4. Engorde y Cosecha', desc: 'Potasio alto' }
          ].map((stage) => (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              className={`p-2.5 rounded-xl text-left border transition-all ${
                selectedStage === stage.id
                  ? 'bg-agro-cream border-agro-emerald shadow-sm text-agro-forest ring-1 ring-agro-emerald'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-xs font-bold block">{stage.label}</span>
              <span className="text-[10px] text-gray-500 font-medium">{stage.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* RESULTADO: PLAN DE FERTILIZACIÓN AGRONÓMICA */}
      <div className="rounded-2xl bg-gradient-to-br from-agro-dark to-agro-forest text-white p-5 shadow-card space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <span className="text-[10px] uppercase font-bold text-agro-mint tracking-wider">
              DOSIS CALCULADA
            </span>
            <h3 className="text-lg font-black">{currentCrop.name} ({currentStageData.name})</h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-extrabold text-agro-pale">
            Total: {calculations.totalFertilizer}
          </span>
        </div>

        {/* Desglose N-P-K */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
            <span className="text-[10px] font-bold text-agro-pale block">Nitrógeno (N)</span>
            <span className="text-lg font-black text-agro-mint">{calculations.n}</span>
            <span className="text-[9px] text-white/60 block mt-0.5">Follaje & Vigor</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
            <span className="text-[10px] font-bold text-agro-pale block">Fósforo (P)</span>
            <span className="text-lg font-black text-amber-300">{calculations.p}</span>
            <span className="text-[9px] text-white/60 block mt-0.5">Raíz & Flores</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
            <span className="text-[10px] font-bold text-agro-pale block">Potasio (K)</span>
            <span className="text-lg font-black text-cyan-300">{calculations.k}</span>
            <span className="text-[9px] text-white/60 block mt-0.5">Fruto & Dulzor</span>
          </div>
        </div>

        {/* Recomendación Comercial y Orgánica */}
        <div className="space-y-2 pt-1 text-xs">
          <div className="p-3 rounded-xl bg-white/10 border border-white/10 space-y-1">
            <div className="flex items-center space-x-1.5 text-agro-mint font-bold">
              <FlaskConical className="w-4 h-4" />
              <span>Fórmula Química Recomendada:</span>
            </div>
            <p className="text-white/95 font-medium">{currentStageData.recommendedFormula}</p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-900/60 border border-agro-mint/30 space-y-1">
            <div className="flex items-center space-x-1.5 text-agro-mint font-bold">
              <Leaf className="w-4 h-4" />
              <span>Alternativa 100% Ecológica / Orgánica:</span>
            </div>
            <p className="text-white/95 font-medium">{currentStageData.organicAlternative}</p>
          </div>
        </div>

        {/* Pauta de Riego de la Fertilización */}
        <div className="p-3 rounded-xl bg-blue-900/50 border border-blue-400/40 text-xs space-y-1">
          <div className="flex items-center space-x-1.5 text-blue-300 font-bold">
            <Droplets className="w-4 h-4" />
            <span>Pauta Obligatoria de Riego:</span>
          </div>
          <p className="text-blue-100 text-[11px] leading-relaxed">
            <strong>¡Nunca fertilices con el sustrato seco!</strong> Riega abundantemente 1 hora antes de abonar para evitar que las sales quemen los pelos absorbentes de las raíces. {currentCrop.wateringNeed}.
          </p>
        </div>
      </div>

      {/* SECCIÓN DETALLADA: MARCAS COMERCIALES EXISTENTES EN EL MERCADO */}
      <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-3 shadow-sm">
        <div className="flex items-center justify-between border-b pb-2">
          <h4 className="text-xs font-black text-gray-900 uppercase tracking-wide flex items-center space-x-1.5">
            <Store className="w-4 h-4 text-agro-forest" />
            <span>Marcas Existentes en el Mercado (Guía de Compra)</span>
          </h4>
          <span className="text-[10px] text-agro-emerald font-bold">Dónde Comprar</span>
        </div>

        <p className="text-[11px] text-gray-500 leading-snug">
          Estas son las marcas líderes que encontrarás en viveros, forrajerías y agroquímicas para abonar tu <strong>{currentCrop.name}</strong>:
        </p>

        <div className="space-y-2.5">
          {COMMERCIAL_BRANDS.map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-gray-50 border border-gray-200/80 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <strong className="text-sm font-black text-gray-900">{item.brand}</strong>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-agro-pale text-agro-forest">
                    {item.badge}
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 font-semibold">{item.type}</span>
              </div>

              <div className="text-[11px] text-gray-700">
                <span className="font-bold text-gray-900">Producto recomendado: </span>
                <span className="text-agro-forest font-semibold">{item.recommendedProduct}</span>
              </div>

              <div className="text-[10px] text-gray-600 bg-white p-2 rounded-lg border border-gray-200">
                <span className="font-bold text-amber-800">🛒 Cómo pedirlo al vendedor: </span>
                {item.howToBuy}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
