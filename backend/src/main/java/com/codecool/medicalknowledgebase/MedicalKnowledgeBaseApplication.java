package com.codecool.medicalknowledgebase;

import com.codecool.medicalknowledgebase.model.Disease;
import com.codecool.medicalknowledgebase.model.RiskFactor;
import com.codecool.medicalknowledgebase.model.Symptom;
import com.codecool.medicalknowledgebase.service.DiseaseService;
import com.codecool.medicalknowledgebase.service.RiskFactorService;
import com.codecool.medicalknowledgebase.service.SymptomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class MedicalKnowledgeBaseApplication implements CommandLineRunner {
	@Autowired
	private DiseaseService diseaseService;
	@Autowired
	private SymptomService symptomService;
	@Autowired
	private RiskFactorService riskFactorService;
	@Autowired
	public static void main(String[] args) {
		SpringApplication.run(MedicalKnowledgeBaseApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		initData();
	}

	private void initData() {
		Symptom boneFractures = new Symptom("bone fractures");
		boneFractures.setDescription("If more pressure is put on a bone than it can stand, it will split or break. A break of any size is called a fracture. If the broken bone punctures the skin, it is called an open fracture (compound fracture).");
		symptomService.add(boneFractures);

		Symptom heightLoss = new Symptom("height loss");
		heightLoss.setDescription(
				"Height loss is related to aging changes in bone, muscles, and joints. While a minor degree of height loss is usual and unlikely to be associated with any health problems, significant height loss may indicate osteoporosis.");
		symptomService.add(heightLoss);

		Symptom postureChange = new Symptom("posture change");
		postureChange.setDescription("It occurs when a person, often an older person, moves to a more vertical position: from sitting to standing or from lying down to sitting or standing.");
		symptomService.add(postureChange);

		RiskFactor lackOfExercise = new RiskFactor("lack of exercise");
		lackOfExercise.setDescription("Not getting enough physical activity can lead to heart disease—even for people who have no other risk factors. It can also increase the likelihood of developing other heart disease risk factors, including obesity, high blood pressure, high blood cholesterol, and type 2 diabetes.");
		riskFactorService.add(lackOfExercise);

		RiskFactor lowProteinIntake = new RiskFactor("low protein intake");
		lowProteinIntake.setDescription("A low-protein diet requires you to restrict the amount of protein you consume, typically so that it constitutes 4–8% of your daily calories");
		riskFactorService.add(lowProteinIntake);

		RiskFactor oldAge = new RiskFactor("old age");
		oldAge.setDescription("Old age refers to ages nearing or surpassing the life expectancy · Elderly people often have limited regenerative abilities and are more susceptible to disease,");
		riskFactorService.add(oldAge);

		Disease osteoporosis = new Disease("osteoporosis");
		osteoporosis.setDescription("Osteoporosis is a health condition that weakens bones, making them fragile and more likely to break. It develops slowly over several years and is often only diagnosed when a fall or sudden impact causes a bone to break (fracture). The most common injuries in people with osteoporosis are: broken wrist.");
		List<Symptom> symptoms = new ArrayList<>();
		symptoms.add(heightLoss);
		symptoms.add(postureChange);
		symptoms.add(boneFractures);
		osteoporosis.setSymptoms(symptoms);
		List<RiskFactor> riskFactors = new ArrayList<>();
		riskFactors.add(lackOfExercise);
		riskFactors.add(lowProteinIntake);
		riskFactors.add(oldAge);
		osteoporosis.setRiskFactors(riskFactors);
		diseaseService.add(osteoporosis);


	}
}
