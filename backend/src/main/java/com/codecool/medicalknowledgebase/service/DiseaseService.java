package com.codecool.medicalknowledgebase.service;

import com.codecool.medicalknowledgebase.model.RiskFactor;
import com.codecool.medicalknowledgebase.model.Symptom;
import com.codecool.medicalknowledgebase.repository.DiseaseRepository;
import com.codecool.medicalknowledgebase.model.Disease;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.Tuple;
import javax.swing.text.html.parser.Entity;
import javax.xml.crypto.dsig.keyinfo.KeyValue;
import java.util.*;

@Component
public class DiseaseService {

    @Autowired
    private DiseaseRepository diseaseRepository;

    public Disease add(Disease disease) {
        return diseaseRepository.save(disease);
    }

    public Disease find(Long id) {
        return diseaseRepository.findById(id).get();
    }

    public List<Disease> getAll() {
        return diseaseRepository.findAllByOrderByIdDesc();
    }

    public void delete(Long id) {
        diseaseRepository.deleteById(id);
    }

    public void update(Long id, Disease disease) {
        disease.setId(id);
        diseaseRepository.save(disease);
    }



}
