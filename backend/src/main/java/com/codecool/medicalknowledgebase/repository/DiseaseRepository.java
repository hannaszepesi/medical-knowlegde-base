package com.codecool.medicalknowledgebase.repository;

import com.codecool.medicalknowledgebase.model.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface DiseaseRepository extends JpaRepository<Disease, Long> {

    Optional<Disease> findById(Long id);

    void deleteById(Long id);

}
