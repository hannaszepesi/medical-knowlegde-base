package com.codecool.medicalknowledgebase.service;

import com.codecool.medicalknowledgebase.model.Disease;
import com.codecool.medicalknowledgebase.repository.SymptomRepository;
import com.codecool.medicalknowledgebase.model.Symptom;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.CascadeType;
import javax.persistence.ManyToMany;
import java.util.List;

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
        return symptomRepository.findAll();
    }

    public void delete(Long id) {
        symptomRepository.deleteById(id);
    }

    public List<String> getNames() {
        return symptomRepository.getNames();
    }

    public void update(Long id, Symptom symptom) {
        symptomRepository.update(id, symptom.getName(), symptom.getDescription());
    }
}
