package com.codecool.medicalknowledgebase.service;

import com.codecool.medicalknowledgebase.repository.RiskFactorRepository;
import com.codecool.medicalknowledgebase.model.RiskFactor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RiskFactorService {
    @Autowired
    private RiskFactorRepository riskFactorRepository;

    public void add(RiskFactor riskFactor) {
        riskFactorRepository.save(riskFactor);
    }

    public RiskFactor find(Long id) {
        return riskFactorRepository.findById(id).get();
    }

    public List<RiskFactor> getAll() {
        return riskFactorRepository.findAll();
    }

    public void delete(Long id) {
        riskFactorRepository.deleteById(id);
    }

    public List<String> getNames() {
        return riskFactorRepository.getNames();
    }

    public void update(Long id, RiskFactor riskFactor) {
        riskFactorRepository.update(id, riskFactor.getName(), riskFactor.getDescription());
    }
}
