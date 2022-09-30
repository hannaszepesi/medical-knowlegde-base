package com.codecool.medicalknowledgebase.service;

import com.codecool.medicalknowledgebase.repository.DiseaseRepository;
import com.codecool.medicalknowledgebase.model.Disease;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DiseaseService {

    @Autowired
    private DiseaseRepository diseaseRepository;

    public void add(Disease disease) {
        diseaseRepository.save(disease);
    }

    public Disease find(Long id) {
        return diseaseRepository.findById(id).get();
    }

    public List<Disease> getAll() {
        return diseaseRepository.findAll();
    }

    public void delete(Long id) {
        diseaseRepository.deleteById(id);
    }

    public void update(Long id, Disease disease) {
        diseaseRepository.update(id, disease.getName(), disease.getDescription(), disease.getSymptoms(), disease.getRiskFactors());
    }




}
