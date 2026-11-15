package com.sosplantas.app;

import java.util.HashMap;
import java.util.Map;

/**
 * Módulo Agronómico de Cálculo N-P-K para SOS Plantas en Java.
 * Calcula las necesidades de fertilización según especie, superficie y estado fenológico.
 */
public class FertilizerCalculator {

    public enum Stage {
        SIEMBRA,
        CRECIMIENTO,
        FLORACION,
        FRUCTIFICACION
    }

    public static class NpkResult {
        public double nitrogenGrams;
        public double phosphorusGrams;
        public double potassiumGrams;
        public double totalFertilizerGrams;
        public String commercialRecommendation;
        public String organicAlternative;
        public String irrigationPrecautions;

        @Override
        public String toString() {
            return String.format("N: %.1fg | P: %.1fg | K: %.1fg (Total: %.1fg)", 
                    nitrogenGrams, phosphorusGrams, potassiumGrams, totalFertilizerGrams);
        }
    }

    /**
     * Calcula la dosificación de abono requerida
     * @param cropId Identificador del cultivo (ej: "tomate", "limonero", "rosas")
     * @param areaM2 Metros cuadrados de cultivo o equivalente en macetas
     * @param stage Etapa fenológica
     * @return Objeto NpkResult con los gramos exactos y recomendaciones agronómicas
     */
    public static NpkResult calculateDose(String cropId, double areaM2, Stage stage) {
        NpkResult result = new NpkResult();
        double baseGramsPerM2 = 40.0;
        double ratioN = 0.33, ratioP = 0.33, ratioK = 0.34;

        switch (stage) {
            case SIEMBRA:
                baseGramsPerM2 = 25.0;
                ratioN = 0.15; ratioP = 0.60; ratioK = 0.25; // Fósforo dominante para raíz
                result.commercialRecommendation = "Fosfato Diamónico (DAP 18-46-0) o Superfosfato";
                result.organicAlternative = "Harina de huesos (40g/m²) + Micorrizas benéficas";
                break;
            case CRECIMIENTO:
                baseGramsPerM2 = 45.0;
                ratioN = 0.55; ratioP = 0.20; ratioK = 0.25; // Nitrógeno dominante para follaje
                result.commercialRecommendation = "Triple 15 (15-15-15) reforzado con Urea perlada";
                result.organicAlternative = "Humus de lombriz puro + Purín de ortiga fermentado al 10%";
                break;
            case FLORACION:
                baseGramsPerM2 = 50.0;
                ratioN = 0.20; ratioP = 0.40; ratioK = 0.40; // Fósforo y Potasio para flores
                result.commercialRecommendation = "NPK 12-24-12 o Nitrato Potásico + Calcio quelado";
                result.organicAlternative = "Té de cáscaras de plátano + Harina de roca fosfórica";
                break;
            case FRUCTIFICACION:
                baseGramsPerM2 = 55.0;
                ratioN = 0.15; ratioP = 0.15; ratioK = 0.70; // Potasio ultra alto para engorde
                result.commercialRecommendation = "Sulfato de Potasio soluble (0-0-50)";
                result.organicAlternative = "Ceniza de madera tamizada limpia (30g/m²) + Bokashi maduro";
                break;
        }

        // Ajuste según especie botánica
        if (cropId.equalsIgnoreCase("limonero") || cropId.equalsIgnoreCase("naranjo")) {
            baseGramsPerM2 *= 1.3; // Los cítricos demandan mayor concentración de nutrientes
        } else if (cropId.equalsIgnoreCase("orquideas")) {
            baseGramsPerM2 *= 0.2; // Dosis muy diluida para evitar quemaduras radiculares
        }

        double totalGrams = baseGramsPerM2 * areaM2;
        result.totalFertilizerGrams = totalGrams;
        result.nitrogenGrams = totalGrams * ratioN;
        result.phosphorusGrams = totalGrams * ratioP;
        result.potassiumGrams = totalGrams * ratioK;

        // Pauta obligatoria de riego relacionada con la fertilización
        result.irrigationPrecautions = "VITAL: Nunca fertilices con la tierra seca. Riega abundantemente 1 hora " +
                "antes de aplicar el abono para disolver sales y prevenir quemaduras en las raíces.";

        return result;
    }
}
