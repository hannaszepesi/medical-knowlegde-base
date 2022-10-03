package com.codecool.medicalknowledgebase.service;

import com.codecool.medicalknowledgebase.model.Disease;
import com.codecool.medicalknowledgebase.model.RiskFactor;
import com.codecool.medicalknowledgebase.repository.SymptomRepository;
import com.codecool.medicalknowledgebase.model.Symptom;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.CascadeType;
import javax.persistence.ManyToMany;
import java.util.List;
import java.util.Optional;

@Component
public class SymptomService {

    @Autowired
    private SymptomRepository symptomRepository;

    public Symptom add(Symptom symptom) {
        return symptomRepository.save(symptom);
    }

    public Symptom find(Long id) {
        return symptomRepository.findById(id).get();
    }

    public List<Symptom> getAll() {
        return symptomRepository.findAllByOrderByIdDesc();
    }

    public void delete(Long id) {
        Optional<Symptom> symptom = symptomRepository.findById(id);
        symptom.ifPresent(symptom1 -> {
            for (Disease disease : symptom1.getDiseases()) {
                disease.getSymptoms().remove(symptom1);
            }});
        symptomRepository.deleteById(id);
    }

    public List<String> getNames() {
        return symptomRepository.getNames();
    }

    public void update(Long id, Symptom symptom) {
        symptomRepository.update(id, symptom.getName(), symptom.getDescription());
    }
}
