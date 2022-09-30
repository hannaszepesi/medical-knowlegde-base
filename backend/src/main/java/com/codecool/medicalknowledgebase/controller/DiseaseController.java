package com.codecool.medicalknowledgebase.controller;

import com.codecool.medicalknowledgebase.model.Disease;
import com.codecool.medicalknowledgebase.service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/diseases")
public class DiseaseController {
    @Autowired
    private DiseaseService diseaseService;

    @GetMapping("/get-all")
    public List<Disease> getDiseases() {
        return diseaseService.getAll();
    }

    @PostMapping("/add")
    public void addNewDisease(@RequestBody Disease newDisease) {
        diseaseService.add(newDisease);
    }

    @GetMapping("/find/{id}")
    public Disease getDisease(@PathVariable Long id) {
        return diseaseService.find(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDisease(@PathVariable Long id) {
        diseaseService.delete(id);
    }

    @PutMapping("/update/{id}")
    public void updateDisease(@PathVariable Long id, @RequestBody Disease disease) {
        diseaseService.update(id, disease);
    }


}
