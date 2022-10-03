package com.codecool.medicalknowledgebase.repository;

import com.codecool.medicalknowledgebase.model.Symptom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Component
public interface SymptomRepository extends JpaRepository<Symptom, Long> {

    Optional<Symptom> findById(Long id);

    void deleteById(Long id);

    List<Symptom> findAllByOrderByIdDesc();

    @Query("SELECT name FROM Symptom ")
    List<String> getNames();
    @Modifying
    @Transactional
    @Query("UPDATE Symptom SET name = :name, description = :description WHERE id = :id")
    void update(@Param("id") Long id, @Param("name") String name, @Param("description") String description);

}