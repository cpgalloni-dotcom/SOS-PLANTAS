import React, { useState, useMemo } from 'react';
import { Calculator, Search, X, Droplets, Leaf, FlaskConical, AlertCircle, Check, Info } from 'lucide-react';
import { CROPS_DATABASE, FERTILIZER_TYPES } from '../data/cropsData';

export default function FertilizerCalc({ initialCropName }) {
  const [searchTerm, setSearchTerm] = useState(initialCropName || '');
  const [activeQuery, setActiveQuery] = useState(initialCropName || '');
  
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
  const [selectedStage, setSelectedStage] = useState('crecimiento'); // 'siembra' | 'crecimiento' | 'floracion' | 'fructificacion'

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

    // Si hay coincidencias, auto-seleccionar la primera
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
          <span>Calculadora de Fertilizantes NPK</span>
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Busca cualquier planta o cultivo para calcular su dosis exacta de abono
        </p>
      </div>

      {/* BARRA Y BOTÓN DE BÚSQUEDA DE PLANTA SOLICITADO */}
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
              placeholder="Buscar planta (ej: Tomate, Rosa, Limón)..."
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
            1. Selecciona o Toca tu Planta:
          </label>
          <span className="text-[11px] font-bold text-agro-emerald">
            {filteredCrops.length} disponible(s)
          </span>
        </div>
        
        {filteredCrops.length === 0 ? (
          <div className="text-center py-6 bg-gray-50 rounded-xl p-4 text-xs space-y-2">
            <p className="font-bold text-gray-700">No encontramos "{activeQuery || searchTerm}"</p>
            <p className="text-gray-500 text-[11px]">Intenta buscar por Tomate, Limonero, Rosas, Vid, Pimiento o Manzano.</p>
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

        {/* Ficha rápida del cultivo seleccionado */}
        <div className="p-2.5 rounded-xl bg-agro-cream border border-agro-pale text-xs flex items-center justify-between">
          <div>
            <span className="font-bold text-agro-dark">{currentCrop.name}</span>
            <span className="text-gray-500 text-[10px] ml-1.5 italic">({currentCrop.scientific})</span>
          </div>
          <span className="text-[10px] font-bold bg-white text-agro-emerald px-2 py-0.5 rounded-full border border-agro-pale">
            pH: {currentCrop.optimalPh}
          </span>
        </div>
      </div>

      {/* Superficie o Macetas */}
      <div className="rounded-2xl bg-white border border-gray-200/90 p-4 shadow-sm space-y-3">
        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">
          2. Superficie o Cantidad:
        </label>

        {/* Tipo de Unidad */}
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

        {/* Cantidad numérica */}
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
            <span className="text-[9px] text-white/60 block mt-0.5">Fruto & Resistencia</span>
          </div>
        </div>

        {/* Recomendación Comercial y Orgánica */}
        <div className="space-y-2 pt-1 text-xs">
          <div className="p-3 rounded-xl bg-white/10 border border-white/10 space-y-1">
            <div className="flex items-center space-x-1.5 text-agro-mint font-bold">
              <FlaskConical className="w-4 h-4" />
              <span>Opción Comercial Recomendada:</span>
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

        {/* Pauta Obligatoria de Riego con Fertilizante */}
        <div className="p-3 rounded-xl bg-blue-900/50 border border-blue-400/40 text-xs space-y-1">
          <div className="flex items-center space-x-1.5 text-blue-300 font-bold">
            <Droplets className="w-4 h-4" />
            <span>Pauta de Riego de la Fertilización (Vital):</span>
          </div>
          <p className="text-blue-100 text-[11px] leading-relaxed">
            <strong>¡Nunca fertilices con el sustrato seco!</strong> Riega abundantemente 1 a 2 horas antes de abonar para evitar que las sales quemen los pelos absorbentes de las raíces. {currentCrop.wateringNeed}.
          </p>
        </div>

        <p className="text-[11px] text-agro-pale/80 italic leading-snug">
          💡 Consejo: {currentStageData.advice}
        </p>
      </div>

      {/* Glosario Rápido de Fertilizantes Agronómicos */}
      <div className="rounded-2xl bg-white border border-gray-200 p-4 space-y-3">
        <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide flex items-center space-x-1.5">
          <Info className="w-4 h-4 text-agro-emerald" />
          <span>Fórmulas Comunes de Fertilizantes</span>
        </h4>
        <div className="space-y-2">
          {FERTILIZER_TYPES.slice(0, 4).map((f, i) => (
            <div key={i} className="text-xs p-2 rounded-lg bg-gray-50 border border-gray-100">
              <div className="flex items-center justify-between">
                <strong className="text-gray-900">{f.name}</strong>
                <span className="text-[10px] text-gray-500 font-semibold">{f.type}</span>
              </div>
              <p className="text-[11px] text-gray-600 mt-0.5">{f.bestFor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
