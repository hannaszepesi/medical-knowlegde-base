package com.codecool.medicalknowledgebase.service;

import com.codecool.medicalknowledgebase.model.Disease;
import com.codecool.medicalknowledgebase.repository.RiskFactorRepository;
import com.codecool.medicalknowledgebase.model.RiskFactor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class RiskFactorService {
    @Autowired
    private RiskFactorRepository riskFactorRepository;

    public RiskFactor add(RiskFactor riskFactor) {
        return riskFactorRepository.save(riskFactor);
    }

    public RiskFactor find(Long id) {
        return riskFactorRepository.findById(id).get();
    }

    public List<RiskFactor> getAll() {
        return riskFactorRepository.findAllByOrderByIdDesc();
    }

    public void delete(Long id) {
        Optional<RiskFactor> riskFactor = riskFactorRepository.findById(id);
        riskFactor.ifPresent(riskFactor1 -> {
            for (Disease disease : riskFactor1.getDiseases()) {
                disease.getRiskFactors().remove(riskFactor1);
            }});
        riskFactorRepository.deleteById(id);
    }

    public List<String> getNames() {
        return riskFactorRepository.getNames();
    }

    public void update(Long id, RiskFactor riskFactor) {
        riskFactorRepository.update(id, riskFactor.getName(), riskFactor.getDescription());
    }
}
