package com.codecool.medicalknowledgebase.repository;

import com.codecool.medicalknowledgebase.model.RiskFactor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Component
public interface RiskFactorRepository extends JpaRepository<RiskFactor, Long> {

    Optional<RiskFactor> findById(Long id);

    List<RiskFactor> findAllByOrderByIdDesc();

    void deleteById(Long id);

    @Query("SELECT name FROM RiskFactor ")
    List<String> getNames();
    @Modifying
    @Transactional
    @Query("UPDATE RiskFactor SET name = :name, description = :description WHERE id = :id")
    void update(@Param("id") Long id, @Param("name") String name, @Param("description") String description);
}
