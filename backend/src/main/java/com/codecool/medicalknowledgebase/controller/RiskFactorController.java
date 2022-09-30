package com.codecool.medicalknowledgebase.controller;

import com.codecool.medicalknowledgebase.model.RiskFactor;
import com.codecool.medicalknowledgebase.service.RiskFactorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/risk-factors")
public class RiskFactorController {

    @Autowired
    private RiskFactorService riskFactorService;

    @GetMapping("/get-all")
    public List<RiskFactor> getRiskFactors() {
        return riskFactorService.getAll();
    }

    @PostMapping("/add")
    public void addNewDisease(@RequestBody RiskFactor newRiskFactor) {
        riskFactorService.add(newRiskFactor);
    }

    @GetMapping("/find/{id}")
    public RiskFactor getRiskFactor(@PathVariable Long id) {
        return riskFactorService.find(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteRiskFactor(@PathVariable Long id) {
        riskFactorService.delete(id);
    }

    @GetMapping("/names")
    public List<String> getNames() {
        return riskFactorService.getNames();
    }

    @PutMapping("/update/{id}")
    public void updateRiskFactor(@PathVariable Long id, @RequestBody RiskFactor riskFactor) {
        riskFactorService.update(id, riskFactor);
    }
}
