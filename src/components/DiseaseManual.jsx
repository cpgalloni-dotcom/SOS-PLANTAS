import React, { useState, useMemo } from 'react';
import { Search, Filter, Droplets, Bug, ChevronRight, X, Sparkles } from 'lucide-react';
import { DISEASES_DATABASE } from '../data/diseasesData';
import DiseaseDetailModal from './DiseaseDetailModal';
import PlantImage from './PlantImage';

export default function DiseaseManual() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeQuery, setActiveQuery] = useState('');
  const [selectedPlantType, setSelectedPlantType] = useState('Todos');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeModalDisease, setActiveModalDisease] = useState(null);

  const plantTypes = ['Todos', 'Frutales', 'Flores', 'Hortalizas', 'Interior'];
  const categories = ['Todos', 'Hongos', 'Plagas', 'Carencias', 'Problemas Hídricos'];

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setActiveQuery(searchTerm.trim());
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setActiveQuery('');
  };

  const filteredDiseases = useMemo(() => {
    return DISEASES_DATABASE.filter((d) => {
      // Excluir la entrada de "planta sana" del manual de patologías a menos que se busque explícitamente
      if (d.id === 'planta_sana' && !activeQuery.toLowerCase().includes('sana')) {
        return false;
      }

      const q = activeQuery.toLowerCase();
      const cropsStr = Array.isArray(d.affectedCrops) ? d.affectedCrops.join(' ').toLowerCase() : (d.affectedCrops || '').toLowerCase();
      const symptomsStr = Array.isArray(d.symptoms) ? d.symptoms.join(' ').toLowerCase() : '';

      const matchesSearch = !q || (
        d.name.toLowerCase().includes(q) ||
        d.scientificName.toLowerCase().includes(q) ||
        cropsStr.includes(q) ||
        symptomsStr.includes(q) ||
        d.category.toLowerCase().includes(q)
      );

      const matchesPlantType =
        selectedPlantType === 'Todos' || (d.plantTypes && d.plantTypes.includes(selectedPlantType));

      const matchesCategory =
        selectedCategory === 'Todos' || d.category === selectedCategory;

      return matchesSearch && matchesPlantType && matchesCategory;
    });
  }, [activeQuery, selectedPlantType, selectedCategory]);

  return (
    <div className="pb-24 pt-3 px-4 max-w-md mx-auto space-y-4">
      {/* Encabezado */}
      <div>
        <h2 className="text-xl font-black text-gray-900 tracking-tight flex items-center space-x-2">
          <Bug className="w-6 h-6 text-agro-forest" />
          <span>Manual de Plagas y Enfermedades</span>
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Escribe una planta (ej: Tomate, Rosa, Limón) o plaga (ej: Pulgón, Oídio)
        </p>
      </div>

      {/* FORMULARIO DE BÚSQUEDA CON BOTÓN EXPLÍCITO Y SOPORTE DE TECLA ENTER */}
      <form onSubmit={handleSearchSubmit} className="space-y-2">
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                // Si borra el texto, limpiar de inmediato los filtros
                if (e.target.value === '') {
                  setActiveQuery('');
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearchSubmit(e);
                }
              }}
              placeholder="Buscar por planta o síntoma (ej. Tomate)..."
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

          {/* BOTÓN BUSCAR EXPLÍCITO SOLICITADO */}
          <button
            type="submit"
            className="px-4 py-3 rounded-xl bg-agro-forest text-white font-extrabold text-xs flex items-center space-x-1.5 shadow-md hover:bg-agro-emerald active:scale-95 transition-all shrink-0"
          >
            <Search className="w-4 h-4" />
            <span>BUSCAR</span>
          </button>
        </div>

        {/* Indicador de búsqueda activa si hay un término buscado */}
        {activeQuery && (
          <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-900 px-3 py-1.5 rounded-lg border border-emerald-200">
            <span>Resultados para: <strong>"{activeQuery}"</strong></span>
            <button
              type="button"
              onClick={handleClearSearch}
              className="text-emerald-700 font-bold underline ml-2"
            >
              Ver todas
            </button>
          </div>
        )}
      </form>

      {/* Filtros por tipo de cultivo */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
          Filtrar por tipo de cultivo:
        </span>
        <div className="flex space-x-2 overflow-x-auto pb-1 no-scrollbar">
          {plantTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedPlantType(type)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedPlantType === type
                  ? 'bg-agro-forest text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro por Categoría de Agente */}
      <div className="flex space-x-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-agro-emerald/15 text-agro-forest border border-agro-emerald/40 font-bold'
                : 'text-gray-500 bg-white/60 hover:bg-gray-100 border border-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de Fichas Fitosanitarias */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-gray-500 font-semibold px-1">
          <span>{filteredDiseases.length} patología(s) encontrada(s)</span>
        </div>

        {filteredDiseases.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-gray-200 p-6 space-y-2">
            <p className="text-sm font-bold text-gray-700">No se encontraron resultados para "{activeQuery || searchTerm}"</p>
            <p className="text-xs text-gray-400">Prueba buscando por "Tomate", "Rosa", "Limonero", "Hongo" o "Pulgón".</p>
            <button
              onClick={() => {
                handleClearSearch();
                setSelectedPlantType('Todos');
                setSelectedCategory('Todos');
              }}
              className="mt-2 px-3 py-1.5 rounded-lg bg-agro-pale text-agro-forest text-xs font-bold"
            >
              Mostrar todas las plantas
            </button>
          </div>
        ) : (
          filteredDiseases.map((disease) => (
            <div
              key={disease.id}
              onClick={() => setActiveModalDisease(disease)}
              className="group rounded-2xl bg-white border border-gray-200 p-3 shadow-sm hover:border-agro-emerald hover:shadow-md transition-all cursor-pointer flex space-x-3 items-center"
            >
              {/* Imagen con componente PlantImage para que NUNCA aparezca [?] */}
              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                <PlantImage
                  src={disease.image}
                  alt={disease.name}
                  category={disease.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span
                  className={`absolute top-1 left-1 text-[9px] font-bold px-1 rounded shadow-sm ${
                    disease.category === 'Hongos'
                      ? 'bg-amber-600 text-white'
                      : disease.category === 'Plagas'
                      ? 'bg-red-600 text-white'
                      : disease.category === 'Problemas Hídricos'
                      ? 'bg-blue-600 text-white'
                      : 'bg-emerald-600 text-white'
                  }`}
                >
                  {disease.category}
                </span>
              </div>

              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-gray-800 line-clamp-1 group-hover:text-agro-forest">
                    {disease.name}
                  </h4>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-agro-forest transition-transform group-hover:translate-x-0.5 shrink-0" />
                </div>
                
                <p className="text-[10px] text-gray-400 italic line-clamp-1">
                  {disease.scientificName}
                </p>

                <p className="text-[11px] text-gray-600 line-clamp-1">
                  <span className="font-bold text-gray-700">Ataca: </span>
                  {Array.isArray(disease.affectedCrops) ? disease.affectedCrops.join(', ') : disease.affectedCrops}
                </p>

                {/* Estado de Riego */}
                <div className="flex items-center space-x-2 pt-0.5">
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center space-x-1 ${
                      disease.wateringStatus === 'necesita_riego'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : disease.wateringStatus === 'exceso_riego'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    <Droplets className="w-2.5 h-2.5" />
                    <span>
                      {disease.wateringStatus === 'necesita_riego'
                        ? 'Falta Riego'
                        : disease.wateringStatus === 'exceso_riego'
                        ? 'Exceso Agua'
                        : 'Riego Normal'}
                    </span>
                  </span>

                  <span className="text-[9px] text-gray-500 font-medium">
                    Severidad: {disease.severity}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal Ficha Detallada */}
      <DiseaseDetailModal
        disease={activeModalDisease}
        isOpen={!!activeModalDisease}
        onClose={() => setActiveModalDisease(null)}
      />
    </div>
  );
}
