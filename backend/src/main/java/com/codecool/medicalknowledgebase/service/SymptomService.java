package com.codecool.medicalknowledgebase.service;

import com.codecool.medicalknowledgebase.repository.SymptomRepository;
import com.codecool.medicalknowledgebase.model.Symptom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SymptomService {

    @Autowired
    private SymptomRepository symptomRepository;

    public void add(Symptom symptom) {
        symptomRepository.save(symptom);
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
