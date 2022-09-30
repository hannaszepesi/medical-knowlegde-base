package com.codecool.medicalknowledgebase.repository;

import com.codecool.medicalknowledgebase.model.Disease;
import com.codecool.medicalknowledgebase.model.RiskFactor;
import com.codecool.medicalknowledgebase.model.Symptom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


public interface DiseaseRepository extends JpaRepository<Disease, Long> {

    Optional<Disease> findById(Long id);

    void deleteById(Long id);
    @Modifying
    @Transactional
    @Query("UPDATE Disease SET name = :name, description = :description, symptoms = :symptoms, riskFactors = :riskFactors WHERE id = :id")
    void update(@Param("id") Long id, @Param("name") String name, @Param("description") String description, @Param("symptoms") List<Symptom> symptoms, @Param("riskFactors") List<RiskFactor> riskFactors);

}
