package com.codecool.medicalknowledgebase.controller;

import com.codecool.medicalknowledgebase.model.Disease;
import com.codecool.medicalknowledgebase.model.Symptom;
import com.codecool.medicalknowledgebase.service.SymptomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/symptoms")
public class SymptomController {
    @Autowired
    private SymptomService symptomService;

    @GetMapping("/get-all")
    public List<Symptom> getSymptoms() {
        return symptomService.getAll();
    }

    @PostMapping("/add")
    public void addNewSymptom(@RequestBody Symptom newSymptom) {
        symptomService.add(newSymptom);
    }

    @GetMapping("/find/{id}")
    public Symptom getSymptom(@PathVariable Long id) {
        return symptomService.find(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteSymptom(@PathVariable Long id) {
        symptomService.delete(id);
    }

    @GetMapping("/names")
    public List<String> getNames() {
        return symptomService.getNames();
    }

    @PutMapping("/update/{id}")
    public void updateSymptom(@PathVariable Long id, @RequestBody Symptom symptom) {
        symptomService.update(id, symptom);
    }
}
