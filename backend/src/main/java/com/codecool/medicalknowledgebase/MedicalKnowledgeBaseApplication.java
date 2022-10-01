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
		boneFractures = symptomService.add(boneFractures);

		Symptom heightLoss = new Symptom("height loss");
		heightLoss.setDescription(
				"Height loss is related to aging changes in bone, muscles, and joints. While a minor degree of height loss is usual and unlikely to be associated with any health problems, significant height loss may indicate osteoporosis.");
		heightLoss = symptomService.add(heightLoss);

		Symptom postureChange = new Symptom("posture change");
		postureChange.setDescription("It occurs when a person, often an older person, moves to a more vertical position: from sitting to standing or from lying down to sitting or standing.");
		postureChange = symptomService.add(postureChange);

		RiskFactor lackOfExercise = new RiskFactor("lack of exercise");
		lackOfExercise.setDescription("Not getting enough physical activity can lead to heart disease—even for people who have no other risk factors. It can also increase the likelihood of developing other heart disease risk factors, including obesity, high blood pressure, high blood cholesterol, and type 2 diabetes.");
		lackOfExercise = riskFactorService.add(lackOfExercise);

		RiskFactor lowProteinIntake = new RiskFactor("low protein intake");
		lowProteinIntake.setDescription("A low-protein diet requires you to restrict the amount of protein you consume, typically so that it constitutes 4–8% of your daily calories");
		lowProteinIntake = riskFactorService.add(lowProteinIntake);

		RiskFactor oldAge = new RiskFactor("old age");
		oldAge.setDescription("Old age refers to ages nearing or surpassing the life expectancy · Elderly people often have limited regenerative abilities and are more susceptible to disease,");
		oldAge = riskFactorService.add(oldAge);

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
		osteoporosis = diseaseService.add(osteoporosis);

		RiskFactor familyHistory = new RiskFactor("family history");
		familyHistory.setDescription("Having a parent or sibling with a disease increases the risk of a person having the same the same disease. If both parents have the same disease, the risk is even higher.");
		familyHistory = riskFactorService.add(familyHistory);

		RiskFactor youngAge = new RiskFactor("young age");
		youngAge.setDescription("The disease usually occurs to younger people");
		youngAge = riskFactorService.add(youngAge);

		RiskFactor genetics = new RiskFactor("genetics");
		genetics.setDescription("Having specific genes may increase the risk of type certain type of diseases. A person’s doctor can check for these genes.");
		genetics = riskFactorService.add(genetics);

		Symptom weightLoss = new Symptom("weight loss");
		weightLoss.setDescription("Weight loss is defined as the reduction in body mass and body fat. ");
		weightLoss = symptomService.add(weightLoss);

		Symptom notHealingWounds = new Symptom("non healing wounds");
		notHealingWounds.setDescription("A non-healing wound is a wound that doesn't heal within five to eight weeks, even though you've been following your provider's instructions to take care of it.");
		notHealingWounds = symptomService.add(notHealingWounds);

		Symptom peeingTooOften = new Symptom("peeing too often");
		peeingTooOften.setDescription("-");
		peeingTooOften = symptomService.add(peeingTooOften);

		Disease diabetes1 = new Disease("diabetes 1");
		diabetes1.setDescription("Type 1 diabetes, once known as juvenile diabetes or insulin-dependent diabetes, is a chronic condition. In this condition, the pancreas makes little or no insulin. Insulin is a hormone the body uses to allow sugar (glucose) to enter cells to produce energy.");
		List<Symptom> diabetesSymptoms = new ArrayList<>();
		diabetesSymptoms.add(weightLoss);
		diabetesSymptoms.add(notHealingWounds);
		diabetesSymptoms.add(peeingTooOften);
		diabetes1.setSymptoms(diabetesSymptoms);
		List<RiskFactor> diabetesRiskFactors = new ArrayList<>();
		diabetesRiskFactors.add(genetics);
		diabetesRiskFactors.add(youngAge);
		diabetesRiskFactors.add(familyHistory);
		diabetes1.setRiskFactors(diabetesRiskFactors);
		diabetes1 = diseaseService.add(diabetes1);


		RiskFactor havingCardiovascularDisease = new RiskFactor("having a cardiovascular disease");
		havingCardiovascularDisease.setDescription("Having conditions affecting the heart or blood vessels.");
		havingCardiovascularDisease = riskFactorService.add(havingCardiovascularDisease);

		Symptom memoryLoss = new Symptom("memory loss");
		memoryLoss.setDescription("Memory loss is unusual forgetfulness. You may not be able to remember new events, recall one or more memories of the past, or both.");
		memoryLoss = symptomService.add(memoryLoss);

		Symptom shortenedAttentionSpan = new Symptom("shortened attention span");
		shortenedAttentionSpan.setDescription(
				"Sometimes a short attention span is a temporary response to extra stress or stimulation in your life. But if it lasts, it may be a sign of an attention disorder or mental health condition.");
		shortenedAttentionSpan = symptomService.add(shortenedAttentionSpan);

		Disease alzheimers = new Disease("Alzheimer's");
		alzheimers.setDescription("Alzheimer's disease is the most common type of dementia. It is a progressive disease beginning with mild memory loss and possibly leading to loss of the ability to carry on a conversation and respond to the environment.");
		List<Symptom> alzheimersSymptoms = new ArrayList<>();
		alzheimersSymptoms.add(shortenedAttentionSpan);
		alzheimersSymptoms.add(memoryLoss);
		alzheimers.setSymptoms(alzheimersSymptoms);
		List<RiskFactor> alzheimersRiskFactors = new ArrayList<>();
		alzheimersRiskFactors.add(havingCardiovascularDisease);
		alzheimersRiskFactors.add(oldAge);
		alzheimers.setRiskFactors(alzheimersRiskFactors);
		alzheimers = diseaseService.add(alzheimers);






	}
}
