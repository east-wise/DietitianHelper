function PrintAnalysisResult() {
    const growthDietA = [
            ["곡류군", "어육류군", "채소군", "지방군", "우유군", "과일군"],
            { "Calorie": "1000", "ExUn": [3, 1.5, 3, 3, 2, 1] },
            { "Calorie": "1100", "ExUn": [4.5, 1.5, 3, 3, 2, 1] },
            { "Calorie": "1200", "ExUn": [4.5, 2, 4, 3, 2, 1] },
            { "Calorie": "1300", "ExUn": [4.5, 2, 4.5, 4, 2, 1] },
            { "Calorie": "1400", "ExUn": [6, 2, 4.5, 4, 2, 1] },
            { "Calorie": "1500", "ExUn": [6, 2.5, 4.5, 5, 2, 1] },
            { "Calorie": "1600", "ExUn": [7.5, 2.5, 4.5, 5, 2, 1] },
            { "Calorie": "1700", "ExUn": [7.5, 3, 4.5, 5, 2, 1] },
            { "Calorie": "1800", "ExUn": [9, 3, 4.5, 5, 2, 1] },
            { "Calorie": "1900", "ExUn": [9, 3.5, 5, 5, 2, 1] },
            { "Calorie": "2000", "ExUn": [9, 3.5, 5, 6, 2, 2] },
            { "Calorie": "2100", "ExUn": [9, 4, 6, 6, 2, 2] },
            { "Calorie": "2200", "ExUn": [10.5, 4, 6, 6, 2, 2] },
            { "Calorie": "2300", "ExUn": [10.5, 5, 6, 6, 2, 2] },
            { "Calorie": "2400", "ExUn": [10.5, 5, 6, 6, 2, 3] },
            { "Calorie": "2500", "ExUn": [10.5, 5.5, 6, 7, 2, 3] },
            { "Calorie": "2600", "ExUn": [10.5, 5.5, 6, 8, 2, 4] },
            { "Calorie": "2700", "ExUn": [12, 5.5, 6, 8, 2, 4] },
            { "Calorie": "2800", "ExUn": [12, 6, 6, 8, 2, 4] }],
        growthDietB = [
            ["곡류군", "어육류군", "채소군", "지방군", "우유군", "과일군"],
            { "Calorie": "1000", "ExUn": [4.5, 1.5, 4, 2, 1, 1] },
            { "Calorie": "1100", "ExUn": [4.5, 2, 4, 3, 1, 1] },
            { "Calorie": "1200", "ExUn": [6, 2, 4, 3, 1, 1] },
            { "Calorie": "1300", "ExUn": [6, 2, 4.5, 4, 1, 1] },
            { "Calorie": "1400", "ExUn": [7.5, 2, 4.5, 4, 1, 1] },
            { "Calorie": "1500", "ExUn": [7.5, 2.5, 4.5, 4, 1, 1] },
            { "Calorie": "1600", "ExUn": [9, 2.5, 4.5, 4, 1, 1] },
            { "Calorie": "1700", "ExUn": [9, 3.5, 4.5, 4, 1, 1] },
            { "Calorie": "1800", "ExUn": [9, 3.5, 5, 4, 1, 2] },
            { "Calorie": "1900", "ExUn": [9, 4, 6, 4, 1, 2] },
            { "Calorie": "2000", "ExUn": [10.5, 4, 6, 4, 1, 2] },
            { "Calorie": "2100", "ExUn": [10.5, 4.5, 6, 5, 1, 2] },
            { "Calorie": "2200", "ExUn": [10.5, 5, 6, 6, 1, 2] },
            { "Calorie": "2300", "ExUn": [12, 5, 6, 6, 1, 2] },
            { "Calorie": "2400", "ExUn": [12, 5, 6, 6, 1, 3] },
            { "Calorie": "2500", "ExUn": [12, 5, 6, 7, 1, 4] },
            { "Calorie": "2600", "ExUn": [12, 6, 6, 7, 1, 4] },
            { "Calorie": "2700", "ExUn": [12, 6.5, 7, 8, 1, 4] }],
        DMDiet = [
            ["곡류군", "어육류군", "채소군", "지방군", "우유군", "과일군"],
            { "Calorie": "1000", "ExUn": [4, 3, 7, 2, 1, 1] },
            { "Calorie": "1100", "ExUn": [5, 3, 7, 2, 1, 1] },
            { "Calorie": "1200", "ExUn": [5, 4, 6, 3, 1, 1] },
            { "Calorie": "1300", "ExUn": [6, 4, 6, 3, 1, 1] },
            { "Calorie": "1400", "ExUn": [7, 4, 6, 3, 1, 1] },
            { "Calorie": "1500", "ExUn": [7, 5, 7, 4, 1, 1] },
            { "Calorie": "1600", "ExUn": [8, 5, 7, 4, 1, 1] },
            { "Calorie": "1700", "ExUn": [8, 5, 7, 4, 1, 2] },
            { "Calorie": "1800", "ExUn": [8, 5, 7, 4, 2, 2] },
            { "Calorie": "1900", "ExUn": [9, 5, 7, 4, 2, 2] },
            { "Calorie": "2000", "ExUn": [10, 5, 7, 4, 2, 2] },
            { "Calorie": "2100", "ExUn": [10, 6, 7, 4, 2, 2] },
            { "Calorie": "2200", "ExUn": [11, 6, 7, 4, 2, 2] },
            { "Calorie": "2300", "ExUn": [11, 7, 8, 5, 2, 2] },
            { "Calorie": "2400", "ExUn": [12, 7, 8, 5, 2, 2] },
            { "Calorie": "2500", "ExUn": [13, 7, 8, 5, 2, 2] },
            { "Calorie": "2600", "ExUn": [13, 8, 8, 5, 2, 2] },
            { "Calorie": "2700", "ExUn": [13, 8, 9, 6, 2, 3] },
            { "Calorie": "2800", "ExUn": [14, 8, 9, 6, 2, 3] },
            { "Calorie": "2900", "ExUn": [15, 8, 9, 6, 2, 3] }];
    const proteinControledDiet = [
        ["곡류군", "어육류군", "채소군", "지방군", "우유군", "과일군", "열량보충군"],
        [
            { "Calorie": "1300", "ExUn": [7, 1, 6, 6, 7, 0, 2, 0] },
            { "Calorie": "1400", "ExUn": [8, 1, 6, 6, 7, 0, 2, 0] },
            { "Calorie": "1500", "ExUn": [9, 1, 6, 6, 7, 0, 2, 0] },
            { "Calorie": "1600", "ExUn": [10, 1, 6, 6, 7, 0, 2, 0] },
            { "Calorie": "1700", "ExUn": [10, 1, 6, 6, 7, 0, 2, 1] },
            { "Calorie": "1800", "ExUn": [10, 1, 6, 6, 7, 0, 2, 2] },
            { "Calorie": "1900", "ExUn": [10, 1, 6, 6, 7, 0, 2, 3] },
            { "Calorie": "2000", "ExUn": [12, 0, 6, 6, 7, 0, 2, 3] }],
        [
            { "Calorie": "1300", "ExUn": [7, 2.5, 6, 6, 6, 0, 1, 0] },
            { "Calorie": "1400", "ExUn": [7.5, 2, 6, 6, 7, 0, 1, 0] },
            { "Calorie": "1500", "ExUn": [8, 2, 6, 6, 7, 0, 2, 0] },
            { "Calorie": "1600", "ExUn": [9, 2, 6, 6, 7, 0, 2, 0] },
            { "Calorie": "1700", "ExUn": [10, 2, 6, 6, 7, 0, 2, 0] },
            { "Calorie": "1800", "ExUn": [11, 2, 6, 6, 7, 0, 2, 0] },
            { "Calorie": "1900", "ExUn": [11, 2, 6, 6, 7, 0, 2, 1] },
            { "Calorie": "2000", "ExUn": [11, 2, 6, 6, 7, 0, 2, 2] },
            { "Calorie": "2100", "ExUn": [11, 2, 6, 6, 7, 0, 2, 3] },
            { "Calorie": "2200", "ExUn": [13, 1, 6, 6, 7, 0, 2, 3] },
            { "Calorie": "2300", "ExUn": [14, 1, 6, 6, 7, 0, 2, 3] },
            { "Calorie": "2400", "ExUn": [15, 1, 6, 6, 7, 0, 2, 3] },
            { "Calorie": "2500", "ExUn": [16, 0, 6, 6, 8, 0, 2, 3] },
            { "Calorie": "2600", "ExUn": [17, 0, 6, 6, 8, 0, 2, 3] }],
        [
            { "Calorie": "1300", "ExUn": [6, 4, 6, 6, 4, 0.5, 1, 0] },
            { "Calorie": "1400", "ExUn": [7, 3, 6, 6, 5, 0.5, 2, 0] },
            { "Calorie": "1500", "ExUn": [8, 3, 6, 6, 5, 0.5, 2, 0] },
            { "Calorie": "1600", "ExUn": [9, 3, 6, 6, 5, 0.5, 2, 0] },
            { "Calorie": "1700", "ExUn": [9.5, 3, 6, 6, 6, 0.5, 2, 0] },
            { "Calorie": "1800", "ExUn": [10, 3, 6, 6, 7, 0.5, 2, 0] },
            { "Calorie": "1900", "ExUn": [10, 3, 6, 6, 7, 0.5, 2, 1] },
            { "Calorie": "2000", "ExUn": [10.5, 3, 6, 6, 7, 0.5, 2, 1] },
            { "Calorie": "2100", "ExUn": [10.5, 3, 6, 6, 7, 0.5, 2, 2] },
            { "Calorie": "2200", "ExUn": [10.5, 3, 6, 6, 7, 0.5, 2, 3] },
            { "Calorie": "2300", "ExUn": [12.5, 2, 6, 6, 7, 0.5, 2, 3] },
            { "Calorie": "2400", "ExUn": [13.5, 2, 6, 6, 7, 0.5, 2, 3] },
            { "Calorie": "2500", "ExUn": [14.5, 2, 6, 6, 7, 0.5, 2, 3] },
            { "Calorie": "2600", "ExUn": [16, 1, 6, 6, 7, 0.5, 2, 3] },
            { "Calorie": "2700", "ExUn": [17, 1, 6, 6, 7, 0.5, 2, 3] },
            { "Calorie": "2800", "ExUn": [18, 1, 6, 6, 7, 0.5, 2, 3] }],
        [
            { "Calorie": "1400", "ExUn": [6, 5, 6, 6, 4, 0.5, 2, 0] },
            { "Calorie": "1500", "ExUn": [7, 4.5, 6, 6, 4, 0.5, 2, 0] },
            { "Calorie": "1600", "ExUn": [8, 4.5, 6, 6, 4, 0.5, 2, 0] },
            { "Calorie": "1700", "ExUn": [9, 4, 6, 6, 5, 0.5, 2, 0] },
            { "Calorie": "1800", "ExUn": [10, 4, 6, 6, 5, 0.5, 2, 0] },
            { "Calorie": "1900", "ExUn": [10.5, 4, 6, 6, 6, 0.5, 2, 0] },
            { "Calorie": "2000", "ExUn": [11.5, 4, 6, 6, 6, 0.5, 2, 0] },
            { "Calorie": "2100", "ExUn": [11.5, 4, 6, 6, 6, 0.5, 2, 1] },
            { "Calorie": "2200", "ExUn": [11.5, 4, 6, 6, 6, 0.5, 2, 2] },
            { "Calorie": "2300", "ExUn": [11.5, 4, 6, 6, 6, 0.5, 2, 3] },
            { "Calorie": "2400", "ExUn": [13, 3, 6, 6, 7, 0.5, 2, 3] },
            { "Calorie": "2500", "ExUn": [14, 3, 6, 6, 7, 0.5, 2, 3] },
            { "Calorie": "2600", "ExUn": [15, 3, 6, 6, 7, 0.5, 2, 3] },
            { "Calorie": "2700", "ExUn": [16.5, 2, 6, 6, 7, 0.5, 2, 3] },
            { "Calorie": "2800", "ExUn": [17.5, 2, 6, 6, 7, 0.5, 2, 3] }],
        [
            { "Calorie": "1500", "ExUn": [6, 6, 6, 6, 4, 1, 1, 0] },
            { "Calorie": "1600", "ExUn": [7, 5, 6, 6, 4, 1, 2, 0] },
            { "Calorie": "1700", "ExUn": [8, 5, 6, 6, 4, 1, 2, 0] },
            { "Calorie": "1800", "ExUn": [9, 5, 6, 6, 4, 1, 2, 0] },
            { "Calorie": "1900", "ExUn": [10, 4.5, 6, 6, 5, 1, 2, 0] },
            { "Calorie": "2000", "ExUn": [11, 4.5, 6, 6, 5, 1, 2, 0] },
            { "Calorie": "2100", "ExUn": [12, 4, 6, 6, 6, 1, 2, 0] },
            { "Calorie": "2200", "ExUn": [12, 4, 6, 6, 6, 1, 2, 1] },
            { "Calorie": "2300", "ExUn": [13, 4, 6, 6, 6, 1, 2, 1] },
            { "Calorie": "2400", "ExUn": [13, 4, 6, 6, 6, 1, 2, 2] },
            { "Calorie": "2500", "ExUn": [13.5, 4, 6, 6, 7, 1, 2, 2] },
            { "Calorie": "2600", "ExUn": [13.5, 4, 6, 6, 7, 1, 2, 3] },
            { "Calorie": "2700", "ExUn": [14.5, 4, 6, 6, 7, 1, 2, 3] },
            { "Calorie": "2800", "ExUn": [16, 3, 6, 6, 7, 1, 2, 3] }],
        [
            { "Calorie": "1800", "ExUn": [9, 6, 6, 6, 4, 1, 1, 0] },
            { "Calorie": "1900", "ExUn": [10, 6, 6, 6, 4, 1, 1, 0] },
            { "Calorie": "2000", "ExUn": [11, 6, 6, 6, 4, 1, 1, 0] },
            { "Calorie": "2100", "ExUn": [11.5, 6, 6, 6, 5, 1, 1, 0] },
            { "Calorie": "2200", "ExUn": [12, 6, 6, 6, 5, 1, 1, 0] },
            { "Calorie": "2300", "ExUn": [13, 5, 6, 6, 6, 1, 2, 0] },
            { "Calorie": "2400", "ExUn": [13, 5, 6, 6, 6, 1, 2, 1] },
            { "Calorie": "2500", "ExUn": [13, 5, 6, 6, 7, 1, 2, 2] },
            { "Calorie": "2600", "ExUn": [13.5, 5, 6, 6, 7, 1, 2, 2] },
            { "Calorie": "2700", "ExUn": [13.5, 5, 6, 6, 7, 1, 2, 3] },
            { "Calorie": "2800", "ExUn": [14.5, 5, 6, 6, 7, 1, 2, 3] }],
        [
            { "Calorie": "1900", "ExUn": [9, 7, 6, 6, 4, 1, 1, 0] },
            { "Calorie": "2000", "ExUn": [10, 7, 6, 6, 4, 1, 1, 0] },
            { "Calorie": "2100", "ExUn": [11, 7, 6, 6, 4, 1, 1, 0] },
            { "Calorie": "2200", "ExUn": [11.5, 7, 6, 6, 5, 1, 1, 0] },
            { "Calorie": "2300", "ExUn": [12, 7, 6, 6, 5, 1, 2, 0] },
            { "Calorie": "2400", "ExUn": [12, 7, 6, 6, 5, 1, 2, 1] },
            { "Calorie": "2500", "ExUn": [13, 6, 6, 6, 5, 1, 2, 2] },
            { "Calorie": "2600", "ExUn": [13, 6, 6, 6, 7, 1, 2, 2] },
            { "Calorie": "2700", "ExUn": [13, 6, 6, 6, 7, 1, 2, 3] },
            { "Calorie": "2800", "ExUn": [13.5, 6, 6, 6, 8, 1, 2, 3] }],
        [
            { "Calorie": "2100", "ExUn": [10.5, 8, 6, 6, 4, 1, 1, 0] },
            { "Calorie": "2200", "ExUn": [11.5, 8, 6, 6, 4, 1, 1, 0] },
            { "Calorie": "2300", "ExUn": [11.5, 8, 6, 6, 5, 1, 2, 0] },
            { "Calorie": "2400", "ExUn": [12.5, 8, 6, 6, 5, 1, 2, 0] },
            { "Calorie": "2500", "ExUn": [13, 8, 6, 6, 6, 1, 2, 0] },
            { "Calorie": "2600", "ExUn": [13, 8, 6, 6, 6, 1, 2, 1] },
            { "Calorie": "2700", "ExUn": [13.5, 8, 6, 6, 7, 1, 2, 1] },
            { "Calorie": "2800", "ExUn": [13.5, 8, 6, 6, 7, 1, 2, 2] }],
        [
            { "Calorie": "2200", "ExUn": [10.5, 9, 6, 6, 4, 1, 1, 0] },
            { "Calorie": "2300", "ExUn": [11, 9, 6, 6, 4, 1, 2, 0] },
            { "Calorie": "2400", "ExUn": [11.5, 9, 6, 6, 5, 1, 2, 0] },
            { "Calorie": "2500", "ExUn": [12.5, 9, 6, 6, 5, 1, 2, 0] },
            { "Calorie": "2600", "ExUn": [13, 9, 6, 6, 6, 1, 2, 0] },
            { "Calorie": "2700", "ExUn": [13, 9, 6, 6, 6, 1, 2, 1] },
            { "Calorie": "2800", "ExUn": [14, 9, 6, 6, 7, 1, 2, 1] }],
        [
            { "Calorie": "2500", "ExUn": [12, 10, 6, 6, 5, 1, 2, 0] },
            { "Calorie": "2600", "ExUn": [13, 10, 6, 6, 5, 1, 2, 0] },
            { "Calorie": "2700", "ExUn": [13.5, 10, 6, 6, 6, 1, 2, 0] },
            { "Calorie": "2800", "ExUn": [14.5, 10, 6, 6, 6, 1, 2, 0] }]
    ];
    let DietNutrient = {
        Energy: 0,
        Protein: 0,
        Sodium: 0,
        Potassium: 0,
        Phosphorous: 0
    }
    let putativeDiagnosis=[];

//----영양소 계산 시작----//
    if (catchPatientInfo.KidneyCondition == 99) {
        DietNutrient.Energy
            = catchPatientInfo.weight * catchPatientInfo.BMIactivity;
        DietNutrient.Protein = catchPatientInfo.weight * 1.2;
        if (catchPatientInfo.ElectricCondition.Potassium == "고칼륨혈증"){
            DietNutrient.Potassium = 1500;
        }
        else DietNutrient.Potassium = 2000;
        if (catchPatientInfo.LipidCondition.Phosphorous == "고인산혈증"){
            DietNutrient.Phosphorous = catchPatientInfo.weight * 12;
        }
        else DietNutrient.Phosphorous = catchPatientInfo.weight * 15;
    }
    else if (catchPatientInfo.KidneyCondition > 2) {
        DietNutrient.Energy
            = catchPatientInfo.weight * catchPatientInfo.activityindex;
        if (catchPatientInfo.diabetesCondition == "당뇨"){
            DietNutrient.Protein = catchPatientInfo.weight * 0.8;
        }
        else DietNutrient.Protein = catchPatientInfo.weight * 0.6;
        if (catchPatientInfo.ElectricCondition.Potassium == "고칼륨혈증"){
            DietNutrient.Potassium = 2000;
        }
        else DietNutrient.Potassium = 3500;
        if (catchPatientInfo.LipidCondition.Phosphorous == "고인산혈증"){
            DietNutrient.Phosphorous = catchPatientInfo.weight * 12;
        }
        else DietNutrient.Phosphorous = catchPatientInfo.weight * 15;
    }
    else if (catchPatientInfo.KidneyCondition <= 2) {
        if (catchPatientInfo.PIBWCondition == "비만" ||
            catchPatientInfo.PIBWCondition == "고도비만") {
            if (catchPatientInfo.LiverCondition !="정상") {
                DietNutrient.Targht6mWeight = catchPatientInfo.weight * 0.9;
            }
            else if (catchPatientInfo.LiverCondition == "정상")
                DietNutrient.Targht6mWeight
                    = catchPatientInfo.IdealBodyWeight
                    + (catchPatientInfo.weight - catchPatientInfo.IdealBodyWeight)
                    * 0.25;
        }
        else if (catchPatientInfo.PIBWCondition == "과체중"){
            DietNutrient.Targht6mWeight = catchPatientInfo.weight * 0.9;
        }
        else DietNutrient.Targht6mWeight = catchPatientInfo.IdealBodyWeight;
        DietNutrient.LossEnergy =
            (catchPatientInfo.weight - DietNutrient.Targht6mWeight) * 7000 / 180;
        DietNutrient.EastimateEnergy =
            catchPatientInfo.weight * catchPatientInfo.activityindex;
        DietNutrient.Energy =
            DietNutrient.EastimateEnergy - DietNutrient.LossEnergy;
        if (catchPatientInfo.diabetesCondition == "당뇨"){
            DietNutrient.Protein = catchPatientInfo.weight * 1.2;
        }
        else DietNutrient.Protein = catchPatientInfo.weight * 1.0;
        if (catchPatientInfo.ElectricCondition.Potassium == "고칼륨혈증"){
            DietNutrient.Potassium = 1500;
        }
        else DietNutrient.Potassium = 2000;
        if (catchPatientInfo.LipidCondition.Phosphorous == "고인산혈증"){
            DietNutrient.Phosphorous = catchPatientInfo.weight * 12;
        }
        else DietNutrient.Phosphorous = catchPatientInfo.weight * 15;
    }


//----계산한 영양소 출력하기----//
    $('#recommendDiet2').hide();
    $('.weightModify').hide();
    $('#Targht6mWeight').hide();
    $('#EastimateEnergy').hide();
    $('#guideParagraph').append(
        catchPatientInfo.name
        + "님의 분석결과"
    );
    $('#nowHeight').append(catchPatientInfo.height + "cm");
    $('#nowWeight').append(catchPatientInfo.weight + "kg");
    $('#idealBodyWeight').append(Math.round(catchPatientInfo.IdealBodyWeight * 10) / 10 + "kg");
    $('#normalBodyWeightRange').append(
        Math.round(catchPatientInfo.IdealBodyWeight * 0.9)
        + "~"
        + Math.round(catchPatientInfo.IdealBodyWeight * 1.09)
        + "kg, "
    );
    if (catchPatientInfo.KidneyCondition == 99){
        $('#normalBodyWeightRange').append(catchPatientInfo.BMICondition);
        putativeDiagnosis.push("혈액투석");
    }
    else if (catchPatientInfo.KidneyCondition > 2){
        $('#normalBodyWeightRange').append(catchPatientInfo.BMICondition);
        putativeDiagnosis.push("만성콩팥병");
    }
    else if (catchPatientInfo.KidneyCondition <= 2){
        $('#normalBodyWeightRange').append(catchPatientInfo.PIBWCondition);
        if (catchPatientInfo.PIBWCondition != "정상")
            putativeDiagnosis.push(catchPatientInfo.PIBWCondition);
    }




//----권장 영양소 섭취량 출력----//
    const CKDProteinIndex = Math.round(DietNutrient.Protein / 10) - 2;
    const goalEnergy = Math.round(DietNutrient.Energy / 100) * 100;
    const goalProtein = Math.round(DietNutrient.Protein / 10)*10;
    
    $('#calorie').append(goalEnergy + "kcal");
    $('#protein').append(DietNutrient.Protein + "g");
    $('#potassium').append(DietNutrient.Potassium + "mg");
    $('#phosphorous').append(DietNutrient.Phosphorous + "mg");


//----권장 식품교환단위 계산----//
    let recommendExUnit = [,,]; 
    if (catchPatientInfo.KidneyCondition <= 2) {
        if (catchPatientInfo.age > 19 || catchPatientInfo.age == 0) {
            recommendExUnit[0] = DMDiet[0];
            recommendExUnit[1] = searchExUnit(DMDiet, goalEnergy);
            for (let i = 0; i < recommendExUnit[0].length; i++) {
                let row_2_data = document.createElement('td');
                row_2_data.innerHTML = recommendExUnit[0][i];
                $('#recommendDietName').append(row_2_data);
                let row_3_data = document.createElement('td');
                row_3_data.innerHTML = recommendExUnit[1].ExUn[i];
                $('#recommendDiet').append(row_3_data);
            }
        }
        else if(catchPatientInfo.age<20){
            $('#recommendDiet2').show();
            recommendExUnit[0] = growthDietA[0];
            recommendExUnit[1] = searchExUnit(growthDietA, goalEnergy);
            recommendExUnit[2] = searchExUnit(growthDietB, goalEnergy);
            for (let i = 0; i < recommendExUnit[0].length; i++) {
                let row_2_data = document.createElement('td');
                row_2_data.innerHTML = recommendExUnit[0][i];
                $('#recommendDietName').append(row_2_data);
                let row_3_data = document.createElement('td');
                row_3_data.innerHTML = recommendExUnit[1].ExUn[i];
                $('#recommendDiet').append(row_3_data);
                let row_4_data = document.createElement('td');
                row_4_data.innerHTML = recommendExUnit[2].ExUn[i];
                $('#recommendDiet2').append(row_4_data);
            }
        }
        if (catchPatientInfo.PIBWCondition != "정상") {
            $('#PDGuide').append("<br>");
            $('.weightModify').show();
            $('#Targht6mWeight').show();
            $('#EastimateEnergy').show();
            $('#Targht6mWeight').append(
                Math.round(DietNutrient.Targht6mWeight)
                + "kg"
            );
            $('#EastimateEnergy').append(
                Math.round(DietNutrient.EastimateEnergy)
                + "kcal"
                + "<br>("
            );
            if (Math.round(DietNutrient.LossEnergy) < 0) {
                $('#EastimateEnergy').append(
                    "+"
                    + (-1) * Math.round(DietNutrient.LossEnergy)
                    + "kcal 추천)"
                );
            }
            else {
                $('#EastimateEnergy').append(
                    "-"
                    + Math.round(DietNutrient.LossEnergy)
                    + "kcal 추천)"
                );
            }
        }
    }
    else if(catchPatientInfo.KidneyCondition > 2){
        recommendExUnit[0] = proteinControledDiet[0];
        recommendExUnit[1] = searchExUnit(proteinControledDiet[CKDProteinIndex], goalEnergy);
        for (let i = 0; i < recommendExUnit[0].length; i++) {
            let row_2_data = document.createElement('td');
            row_2_data.innerHTML = recommendExUnit[0][i];
            $('#recommendDietName').append(row_2_data);
            let row_3_data = document.createElement('td');
            row_3_data.innerHTML = recommendExUnit[1].ExUn[i];
            $('#recommendDiet').append(row_3_data);
        }
    }
    console.log(recommendExUnit);

    function searchExUnit(dietDB, value) {
        return dietDB.filter(function (object) {
            return object["Calorie"] == value;
        })[0];
    }
    
    //----추정진단명 찾아보기----//
    if (catchPatientInfo.diabetesCondition != "정상")
        putativeDiagnosis.push(catchPatientInfo.diabetesCondition);
    if (catchPatientInfo.BPCondition[0] != "정상")
        putativeDiagnosis.push(catchPatientInfo.BPCondition[0]);
    if (catchPatientInfo.BPCondition.length==2)
        putativeDiagnosis.push(catchPatientInfo.BPCondition[1]);
    if (catchPatientInfo.ElectricCondition.Sodium != "정상")
        putativeDiagnosis.push(catchPatientInfo.ElectricCondition.Sodium);
    if (catchPatientInfo.ElectricCondition.Potassium != "정상")
        putativeDiagnosis.push(catchPatientInfo.ElectricCondition.Potassium);
    if (catchPatientInfo.ElectricCondition.Chloride != "정상")
        putativeDiagnosis.push(catchPatientInfo.ElectricCondition.Chloride);
    if (catchPatientInfo.LipidCondition.Cholesterol != "정상")
        putativeDiagnosis.push(catchPatientInfo.LipidCondition.Cholesterol);
    if (catchPatientInfo.LipidCondition.Warning != "")
        putativeDiagnosis.push(catchPatientInfo.LipidCondition.Warning);
    if (catchPatientInfo.LipidCondition.Triglyceride != "정상")
        putativeDiagnosis.push(catchPatientInfo.LipidCondition.Triglyceride);
    if (catchPatientInfo.LipidCondition.Phosphorous != "정상")
        putativeDiagnosis.push(catchPatientInfo.LipidCondition.Phosphorous);
    if (catchPatientInfo.LiverCondition != "정상")
        putativeDiagnosis.push(catchPatientInfo.LiverCondition);
    if(putativeDiagnosis.length==0){
        putativeDiagnosis=["정상"];
    }
    $('#PDGuide').append(catchPatientInfo.name+ "님의 추정 진단:");
    
    
    for(let i=0;i<putativeDiagnosis.length;i++){
        if(i>0){
            $('#putativeDiagnosis').append(", ");
        }
        $('#putativeDiagnosis').append(putativeDiagnosis[i]);
    }
}
