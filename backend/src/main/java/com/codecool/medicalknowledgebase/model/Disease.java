package com.codecool.medicalknowledgebase.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
@Getter
@Entity
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Disease{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Lob
    private String description;

    @ManyToMany
    private List<Symptom> symptoms;

    @ManyToMany
    private List<RiskFactor> riskFactors;

    public Disease(String name) {
        this.name = name;
    }
}
