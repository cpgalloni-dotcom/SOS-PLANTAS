package com.sosplantas.app.model;

import java.io.Serializable;
import java.util.List;

/**
 * Modelo de datos POJO para la Ficha Clínica y Diagnóstica de SOS Plantas.
 * Incluye obligatoriamente la evaluación del estado hídrico y necesidades de riego.
 */
public class PlantDiagnosis implements Serializable {
    private String plantName;
    private String scientificName;
    private String plantType; // Frutal, Flor, Hortaliza, Interior
    private boolean isHealthy;
    private int confidenceScore; // Ej: 95%
    
    // Datos de la Patología
    private String diseaseName;
    private String category; // Hongos, Plagas, Carencias, Problemas Hídricos
    private String severity; // Leve, Moderada, Crítica

    // =========================================================
    // EVALUACIÓN DE SALUD HÍDRICA Y RIEGO (OBLIGATORIO)
    // =========================================================
    private String wateringStatus; // "necesita_riego" | "riego_optimo" | "exceso_riego"
    private String wateringDiagnosis;
    private String wateringAdvice;

    // Tratamientos y síntomas
    private List<String> symptoms;
    private List<String> organicTreatment;
    private List<String> chemicalTreatment;
    private String recoveryCare;

    public PlantDiagnosis() {}

    public PlantDiagnosis(String plantName, String scientificName, String plantType, 
                          boolean isHealthy, int confidenceScore, String diseaseName, 
                          String wateringStatus, String wateringDiagnosis, String wateringAdvice) {
        this.plantName = plantName;
        this.scientificName = scientificName;
        this.plantType = plantType;
        this.isHealthy = isHealthy;
        this.confidenceScore = confidenceScore;
        this.diseaseName = diseaseName;
        this.wateringStatus = wateringStatus;
        this.wateringDiagnosis = wateringDiagnosis;
        this.wateringAdvice = wateringAdvice;
    }

    // Getters y Setters
    public String getPlantName() { return plantName; }
    public void setPlantName(String plantName) { this.plantName = plantName; }

    public String getScientificName() { return scientificName; }
    public void setScientificName(String scientificName) { this.scientificName = scientificName; }

    public String getPlantType() { return plantType; }
    public void setPlantType(String plantType) { this.plantType = plantType; }

    public boolean isHealthy() { return isHealthy; }
    public void setHealthy(boolean healthy) { isHealthy = healthy; }

    public int getConfidenceScore() { return confidenceScore; }
    public void setConfidenceScore(int confidenceScore) { this.confidenceScore = confidenceScore; }

    public String getDiseaseName() { return diseaseName; }
    public void setDiseaseName(String diseaseName) { this.diseaseName = diseaseName; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getSeverity() { return severity; }
    public void setSeverity(String severity) { this.severity = severity; }

    public String getWateringStatus() { return wateringStatus; }
    public void setWateringStatus(String wateringStatus) { this.wateringStatus = wateringStatus; }

    public String getWateringDiagnosis() { return wateringDiagnosis; }
    public void setWateringDiagnosis(String wateringDiagnosis) { this.wateringDiagnosis = wateringDiagnosis; }

    public String getWateringAdvice() { return wateringAdvice; }
    public void setWateringAdvice(String wateringAdvice) { this.wateringAdvice = wateringAdvice; }

    public List<String> getSymptoms() { return symptoms; }
    public void setSymptoms(List<String> symptoms) { this.symptoms = symptoms; }

    public List<String> getOrganicTreatment() { return organicTreatment; }
    public void setOrganicTreatment(List<String> organicTreatment) { this.organicTreatment = organicTreatment; }

    public List<String> getChemicalTreatment() { return chemicalTreatment; }
    public void setChemicalTreatment(List<String> chemicalTreatment) { this.chemicalTreatment = chemicalTreatment; }

    public String getRecoveryCare() { return recoveryCare; }
    public void setRecoveryCare(String recoveryCare) { this.recoveryCare = recoveryCare; }
}
