package com.sosplantas.app.model;

import java.io.Serializable;
import java.util.List;

public class DiseaseItem implements Serializable {
    private String id;
    private String name;
    private String scientificName;
    private String category;
    private List<String> plantTypes;
    private String affectedCrops;
    private String severity;
    private List<String> symptoms;
    private String wateringStatus;
    private String wateringDiagnosis;
    private String wateringAdvice;
    private List<String> organicTreatment;
    private List<String> chemicalTreatment;

    public DiseaseItem() {}

    // Getters y Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getScientificName() { return scientificName; }
    public void setScientificName(String scientificName) { this.scientificName = scientificName; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public List<String> getPlantTypes() { return plantTypes; }
    public void setPlantTypes(List<String> plantTypes) { this.plantTypes = plantTypes; }

    public String getAffectedCrops() { return affectedCrops; }
    public void setAffectedCrops(String affectedCrops) { this.affectedCrops = affectedCrops; }

    public String getSeverity() { return severity; }
    public void setSeverity(String severity) { this.severity = severity; }

    public List<String> getSymptoms() { return symptoms; }
    public void setSymptoms(List<String> symptoms) { this.symptoms = symptoms; }

    public String getWateringStatus() { return wateringStatus; }
    public void setWateringStatus(String wateringStatus) { this.wateringStatus = wateringStatus; }

    public String getWateringDiagnosis() { return wateringDiagnosis; }
    public void setWateringDiagnosis(String wateringDiagnosis) { this.wateringDiagnosis = wateringDiagnosis; }

    public String getWateringAdvice() { return wateringAdvice; }
    public void setWateringAdvice(String wateringAdvice) { this.wateringAdvice = wateringAdvice; }

    public List<String> getOrganicTreatment() { return organicTreatment; }
    public void setOrganicTreatment(List<String> organicTreatment) { this.organicTreatment = organicTreatment; }

    public List<String> getChemicalTreatment() { return chemicalTreatment; }
    public void setChemicalTreatment(List<String> chemicalTreatment) { this.chemicalTreatment = chemicalTreatment; }
}
