document.addEventListener("DOMContentLoaded", function () {
  const catchPatientInfo = JSON.parse(localStorage.getItem("patient-info"));
  console.log(catchPatientInfo);
  // const catchPatientInfo = {
  //   BMICondition: "비만",
  //   BMIactivity: 29.068773297766832,
  //   BPCondition: "정상",
  //   IdealBodyWeight: 64.3302,
  //   KidneyCondition: 0,
  //   PIBWCondition: "비만",
  //   activityindex: "25",
  //   age: "54",
  //   diabetes: "y",
  //   diabetesCondition: "당뇨",
  //   gout: "정상",
  //   height: "171",
  //   isDialysis: "n",
  //   name: "김필립",
  //   sex: "male",
  //   weight: "85",
  //   ElectricCondition: {
  //     Chloride: "정상",
  //     Phosphorous: "정상",
  //     Potassium: "정상",
  //     Sodium: "정상",
  //   },
  //   LipidCondition: ["정상"],
  //   LiverCondition: ["정상"],
  // };

  const DMDiet = [
    ["곡류군", "어육류군", "채소군", "지방군", "우유군", "과일군"],
    [4, 3, 7, 2, 1, 1],
    [5, 3, 7, 2, 1, 1],
    [5, 4, 6, 3, 1, 1],
    [6, 4, 6, 3, 1, 1],
    [7, 4, 6, 3, 1, 1],
    [7, 5, 7, 4, 1, 1],
    [8, 5, 7, 4, 1, 1],
    [8, 5, 7, 4, 1, 2],
    [8, 5, 7, 4, 2, 2],
    [9, 5, 7, 4, 2, 2],
    [10, 5, 7, 4, 2, 2],
    [10, 6, 7, 4, 2, 2],
    [11, 6, 7, 4, 2, 2],
    [11, 7, 8, 5, 2, 2],
    [12, 7, 8, 5, 2, 2],
    [13, 7, 8, 5, 2, 2],
    [13, 8, 8, 5, 2, 2],
    [13, 8, 9, 6, 2, 3],
    [14, 8, 9, 6, 2, 3],
    [15, 8, 9, 6, 2, 3],
  ];
  const growthDietA = [
      ["곡류군", "어육류군", "채소군", "지방군", "우유군", "과일군"],
      [3, 1.5, 3, 3, 2, 1],
      [4.5, 1.5, 3, 3, 2, 1],
      [4.5, 2, 4, 3, 2, 1],
      [4.5, 2, 4.5, 4, 2, 1],
      [6, 2, 4.5, 4, 2, 1],
      [6, 2.5, 4.5, 5, 2, 1],
      [7.5, 2.5, 4.5, 5, 2, 1],
      [7.5, 3, 4.5, 5, 2, 1],
      [9, 3, 4.5, 5, 2, 1],
      [9, 3.5, 5, 5, 2, 1],
      [9, 3.5, 5, 6, 2, 2],
      [9, 4, 6, 6, 2, 2],
      [10.5, 4, 6, 6, 2, 2],
      [10.5, 5, 6, 6, 2, 2],
      [10.5, 5, 6, 6, 2, 3],
      [10.5, 5.5, 6, 7, 2, 3],
      [10.5, 5.5, 6, 8, 2, 4],
      [12, 5.5, 6, 8, 2, 4],
      [12, 6, 6, 8, 2, 4],
    ],
    growthDietB = [
      ["곡류군", "어육류군", "채소군", "지방군", "우유군", "과일군"],
      [4.5, 1.5, 4, 2, 1, 1],
      [4.5, 2, 4, 3, 1, 1],
      [6, 2, 4, 3, 1, 1],
      [6, 2, 4.5, 4, 1, 1],
      [7.5, 2, 4.5, 4, 1, 1],
      [7.5, 2.5, 4.5, 4, 1, 1],
      [9, 2.5, 4.5, 4, 1, 1],
      [9, 3.5, 4.5, 4, 1, 1],
      [9, 3.5, 5, 4, 1, 2],
      [9, 4, 6, 4, 1, 2],
      [10.5, 4, 6, 4, 1, 2],
      [10.5, 4.5, 6, 5, 1, 2],
      [10.5, 5, 6, 6, 1, 2],
      [12, 5, 6, 6, 1, 2],
      [12, 5, 6, 6, 1, 3],
      [12, 5, 6, 7, 1, 4],
      [12, 6, 6, 7, 1, 4],
      [12, 6.5, 7, 8, 1, 4],
    ];
  const proteinControledDiet = [
    [
      "곡류군",
      "어육류군",
      "채소군",
      "지방군",
      "우유군",
      "과일군",
      "열량보충군",
    ],
    [
      [7, 1, 6, 7, 0, 2, 0],
      [8, 1, 6, 7, 0, 2, 0],
      [9, 1, 6, 7, 0, 2, 0],
      [10, 1, 6, 7, 0, 2, 0],
      [10, 1, 6, 7, 0, 2, 1],
      [10, 1, 6, 7, 0, 2, 2],
      [10, 1, 6, 7, 0, 2, 3],
      [12, 0, 6, 7, 0, 2, 3],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [7, 2.5, 6, 6, 0, 1, 0],
      [7.5, 2, 6, 7, 0, 1, 0],
      [8, 2, 6, 7, 0, 2, 0],
      [9, 2, 6, 7, 0, 2, 0],
      [10, 2, 6, 7, 0, 2, 0],
      [11, 2, 6, 7, 0, 2, 0],
      [11, 2, 6, 7, 0, 2, 1],
      [11, 2, 6, 7, 0, 2, 2],
      [11, 2, 6, 7, 0, 2, 3],
      [13, 1, 6, 7, 0, 2, 3],
      [14, 1, 6, 7, 0, 2, 3],
      [15, 1, 6, 7, 0, 2, 3],
      [16, 0, 6, 8, 0, 2, 3],
      [17, 0, 6, 8, 0, 2, 3],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [6, 4, 6, 4, 0.5, 1, 0],
      [7, 3, 6, 5, 0.5, 2, 0],
      [8, 3, 6, 5, 0.5, 2, 0],
      [9, 3, 6, 5, 0.5, 2, 0],
      [9.5, 3, 6, 6, 0.5, 2, 0],
      [10, 3, 6, 7, 0.5, 2, 0],
      [10, 3, 6, 7, 0.5, 2, 1],
      [10.5, 3, 6, 7, 0.5, 2, 1],
      [10.5, 3, 6, 7, 0.5, 2, 2],
      [10.5, 3, 6, 7, 0.5, 2, 3],
      [12.5, 2, 6, 7, 0.5, 2, 3],
      [13.5, 2, 6, 7, 0.5, 2, 3],
      [14.5, 2, 6, 7, 0.5, 2, 3],
      [16, 1, 6, 7, 0.5, 2, 3],
      [17, 1, 6, 7, 0.5, 2, 3],
      [18, 1, 6, 7, 0.5, 2, 3],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0],
      [6, 5, 6, 4, 0.5, 2, 0],
      [7, 4.5, 6, 4, 0.5, 2, 0],
      [8, 4.5, 6, 4, 0.5, 2, 0],
      [9, 4, 6, 5, 0.5, 2, 0],
      [10, 4, 6, 5, 0.5, 2, 0],
      [10.5, 4, 6, 6, 0.5, 2, 0],
      [11.5, 4, 6, 6, 0.5, 2, 0],
      [11.5, 4, 6, 6, 0.5, 2, 1],
      [11.5, 4, 6, 6, 0.5, 2, 2],
      [11.5, 4, 6, 6, 0.5, 2, 3],
      [13, 3, 6, 7, 0.5, 2, 3],
      [14, 3, 6, 7, 0.5, 2, 3],
      [15, 3, 6, 7, 0.5, 2, 3],
      [16.5, 2, 6, 7, 0.5, 2, 3],
      [17.5, 2, 6, 7, 0.5, 2, 3],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [6, 6, 6, 4, 1, 1, 0],
      [7, 5, 6, 4, 1, 2, 0],
      [8, 5, 6, 4, 1, 2, 0],
      [9, 5, 6, 4, 1, 2, 0],
      [10, 4.5, 6, 5, 1, 2, 0],
      [11, 4.5, 6, 5, 1, 2, 0],
      [12, 4, 6, 6, 1, 2, 0],
      [12, 4, 6, 6, 1, 2, 1],
      [13, 4, 6, 6, 1, 2, 1],
      [13, 4, 6, 6, 1, 2, 2],
      [13.5, 4, 6, 7, 1, 2, 2],
      [13.5, 4, 6, 7, 1, 2, 3],
      [14.5, 4, 6, 7, 1, 2, 3],
      [16, 3, 6, 7, 1, 2, 3],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [9, 6, 6, 4, 1, 1, 0],
      [10, 6, 6, 4, 1, 1, 0],
      [11, 6, 6, 4, 1, 1, 0],
      [11.5, 6, 6, 5, 1, 1, 0],
      [12, 6, 6, 5, 1, 1, 0],
      [13, 5, 6, 6, 1, 2, 0],
      [13, 5, 6, 6, 1, 2, 1],
      [13, 5, 6, 7, 1, 2, 2],
      [13.5, 5, 6, 7, 1, 2, 2],
      [13.5, 5, 6, 7, 1, 2, 3],
      [14.5, 5, 6, 7, 1, 2, 3],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [9, 7, 6, 4, 1, 1, 0],
      [10, 7, 6, 4, 1, 1, 0],
      [11, 7, 6, 4, 1, 1, 0],
      [11.5, 7, 6, 5, 1, 1, 0],
      [12, 7, 6, 5, 1, 2, 0],
      [12, 7, 6, 5, 1, 2, 1],
      [13, 6, 6, 5, 1, 2, 2],
      [13, 6, 6, 7, 1, 2, 2],
      [13, 6, 6, 7, 1, 2, 3],
      [13.5, 6, 6, 8, 1, 2, 3],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [10.5, 8, 6, 4, 1, 1, 0],
      [11.5, 8, 6, 4, 1, 1, 0],
      [11.5, 8, 6, 5, 1, 2, 0],
      [12.5, 8, 6, 5, 1, 2, 0],
      [13, 8, 6, 6, 1, 2, 0],
      [13, 8, 6, 6, 1, 2, 1],
      [13.5, 8, 6, 7, 1, 2, 1],
      [13.5, 8, 6, 7, 1, 2, 2],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [10.5, 9, 6, 4, 1, 1, 0],
      [11, 9, 6, 4, 1, 2, 0],
      [11.5, 9, 6, 5, 1, 2, 0],
      [12.5, 9, 6, 5, 1, 2, 0],
      [13, 9, 6, 6, 1, 2, 0],
      [13, 9, 6, 6, 1, 2, 1],
      [14, 9, 6, 7, 1, 2, 1],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [12, 10, 6, 5, 1, 2, 0],
      [13, 10, 6, 5, 1, 2, 0],
      [13.5, 10, 6, 6, 1, 2, 0],
      [14.5, 10, 6, 6, 1, 2, 0],
    ],
  ];
  let DietNutrient = {
    Energy: 0,
    Protein: 0,
    Sodium: 0,
    Potassium: 0,
    Phosphorous: 0,
  };
  let putativeDiagnosis = [];

  //----영양소 계산 시작----//
  // 투석을 하는 경우
  if (catchPatientInfo.KidneyCondition == 99) {
    DietNutrient.Energy =
      catchPatientInfo.weight * catchPatientInfo.BMIactivity;
    DietNutrient.Protein = catchPatientInfo.weight * 1.2;
    if (catchPatientInfo.ElectricCondition.Potassium == "고칼륨혈증") {
      DietNutrient.Potassium = 1500;
    } else DietNutrient.Potassium = 2000;
    if (catchPatientInfo.LipidCondition.Phosphorous == "고인산혈증") {
      DietNutrient.Phosphorous = catchPatientInfo.weight * 12;
    } else DietNutrient.Phosphorous = catchPatientInfo.weight * 15;
    putativeDiagnosis.push("혈액투석");
  }
  // 투석하지 않는 만성콩팥병인 경우 GFR_gr > 2
  else if (catchPatientInfo.KidneyCondition > 2) {
    DietNutrient.Energy =
      catchPatientInfo.weight * catchPatientInfo.activityindex;
    DietNutrient.Protein = proteinIntake(
      catchPatientInfo.diabetesCondition,
      DietNutrient.weight,
      0.8,
      0.6
    );
    if (catchPatientInfo.ElectricCondition.Potassium == "고칼륨혈증") {
      DietNutrient.Potassium = 2000;
    } else DietNutrient.Potassium = 3500;
    if (catchPatientInfo.LipidCondition.Phosphorous == "고인산혈증") {
      DietNutrient.Phosphorous = catchPatientInfo.weight * 12;
    } else DietNutrient.Phosphorous = catchPatientInfo.weight * 15;
    putativeDiagnosis.push("만성콩팥병");
  }
  // 콩팥기능이 정상인 경우
  else if (catchPatientInfo.KidneyCondition <= 2) {
    if (catchPatientInfo.PIBWCondition == "고도비만") {
      if (catchPatientInfo.LiverCondition != "정상") {
        DietNutrient.Targht6mWeight = catchPatientInfo.weight * 0.9;
      } else if (catchPatientInfo.LiverCondition == "정상") {
        let idealBodyWeight =
          ((catchPatientInfo.height * catchPatientInfo.height) / 10000) * 25;
        DietNutrient.Targht6mWeight =
          idealBodyWeight + (catchPatientInfo.weight - idealBodyWeight) * 0.25;
      }
    } else if (catchPatientInfo.PIBWCondition == "비만") {
      if (catchPatientInfo.LiverCondition != "정상") {
        DietNutrient.Targht6mWeight = catchPatientInfo.weight * 0.9;
      } else if (catchPatientInfo.LiverCondition == "정상")
        DietNutrient.Targht6mWeight =
          catchPatientInfo.IdealBodyWeight +
          (catchPatientInfo.weight - catchPatientInfo.IdealBodyWeight) * 0.25;
    } else if (catchPatientInfo.PIBWCondition == "과체중") {
      DietNutrient.Targht6mWeight = catchPatientInfo.weight * 0.9;
    } else {
      DietNutrient.Targht6mWeight = catchPatientInfo.IdealBodyWeight;
    }
    DietNutrient.LossEnergy =
      ((catchPatientInfo.weight - DietNutrient.Targht6mWeight) * 7000) / 180;
    DietNutrient.EastimateEnergy =
      catchPatientInfo.weight * catchPatientInfo.activityindex;
    DietNutrient.Energy =
      DietNutrient.EastimateEnergy - DietNutrient.LossEnergy;
    DietNutrient.Protein = proteinIntake(
      catchPatientInfo.diabetesCondition,
      DietNutrient.Targht6mWeight,
      1.2,
      1.0
    );
    if (catchPatientInfo.ElectricCondition.Potassium == "고칼륨혈증") {
      DietNutrient.Potassium = 1500;
    } else DietNutrient.Potassium = 2000;
    if (catchPatientInfo.LipidCondition.Phosphorous == "고인산혈증") {
      DietNutrient.Phosphorous = catchPatientInfo.weight * 12;
    } else DietNutrient.Phosphorous = catchPatientInfo.weight * 15;
    if (catchPatientInfo.PIBWCondition != "정상")
      putativeDiagnosis.push(catchPatientInfo.PIBWCondition);
  }

  //----계산한 영양소 출력하기----//
  $("#recommendDiet2").hide();
  $(".weightModify").hide();
  $("#Targht6mWeight").hide();
  $("#EastimateEnergy").hide();
  $("#guideParagraph").append(catchPatientInfo.name + "님의 분석결과");
  $("#nowHeight").append(catchPatientInfo.height + "cm");
  $("#nowWeight").append(catchPatientInfo.weight + "kg");
  $("#idealBodyWeight").append(
    Math.round(catchPatientInfo.IdealBodyWeight * 10) / 10 + "kg"
  );
  $("#normalBodyWeightRange").append(
    Math.round(catchPatientInfo.IdealBodyWeight * 0.9) +
      "~" +
      Math.round(catchPatientInfo.IdealBodyWeight * 1.09) +
      "kg, "
  );
  if (catchPatientInfo.KidneyCondition > 2)
    $("#normalBodyWeightRange").append(catchPatientInfo.BMICondition);
  else if (catchPatientInfo.KidneyCondition <= 2)
    $("#normalBodyWeightRange").append(catchPatientInfo.PIBWCondition);

  //----권장 영양소 섭취량 출력----//
  const hashCKDProteinIndex = Math.round(DietNutrient.Protein / 10) - 2;
  const goalEnergy = Math.round(DietNutrient.Energy / 100) * 100;
  const goalProtein = Math.round(DietNutrient.Protein / 10) * 10;

  $("#calorie").append(goalEnergy + "kcal");
  $("#protein").append(Math.round(DietNutrient.Protein * 10) / 10 + "g");
  $("#potassium").append(DietNutrient.Potassium + "mg");
  $("#phosphorous").append(DietNutrient.Phosphorous + "mg");

  //----권장 식품교환단위 계산----//
  //Hash table =>> DMDiet 1200->1,  growthDiet 1000->1,  proteinControledDiet pro30->1 1300kcal->0
  let recommendExUnit = [, ,];
  if (catchPatientInfo.KidneyCondition <= 2) {
    if (catchPatientInfo.age > 19 || catchPatientInfo.age == 0) {
      const hashDMdiet = goalEnergy / 100 - 11;
      recommendExUnit[0] = DMDiet[0];
      recommendExUnit[1] = DMDiet[hashDMdiet];
      for (let i = 0; i < recommendExUnit[0].length; i++) {
        let row_2_data = document.createElement("td");
        let row_3_data = document.createElement("td");
        let row_4_data = document.createElement("td");
        let row_5_data = document.createElement("td");
        let row_6_data = document.createElement("td");
        row_2_data.innerHTML = recommendExUnit[0][i];
        row_3_data.innerHTML = recommendExUnit[1][i];
        let BLD = divide3part(recommendExUnit[1][i]);
        row_4_data.innerHTML = BLD[1];
        row_5_data.innerHTML = BLD[0];
        row_6_data.innerHTML = BLD[2];
        $("#recommendDietName").append(row_2_data);
        $("#recommendDiet").append(row_3_data);
        $("#rDB").append(row_4_data);
        $("#rDL").append(row_5_data);
        $("#rDD").append(row_6_data);
      }
    } else if (catchPatientInfo.age < 20) {
      const hashGrowD = goalEnergy / 100 - 9;
      $("#recommendDiet2").show();
      recommendExUnit[0] = growthDietA[0];
      recommendExUnit[1] = growthDietA[hashGrowD];
      recommendExUnit[2] = growthDietB[hashGrowD];
      for (let i = 0; i < recommendExUnit[0].length; i++) {
        let row_2_data = document.createElement("td");
        let row_3_data = document.createElement("td");
        let row_4_data = document.createElement("td");
        let row_5_data = document.createElement("td");
        let row_6_data = document.createElement("td");
        let row_7_data = document.createElement("td");
        row_2_data.innerHTML = recommendExUnit[0][i];
        row_3_data.innerHTML = recommendExUnit[1][i];
        row_7_data.innerHTML = recommendExUnit[2][i];
        let BLD = divide3part(recommendExUnit[1][i]);
        row_4_data.innerHTML = BLD[1];
        row_5_data.innerHTML = BLD[0];
        row_6_data.innerHTML = BLD[2];
        $("#recommendDietName").append(row_2_data);
        $("#recommendDiet").append(row_3_data);
        $("#recommendDiet2").append(row_7_data);
        $("#rDB").append(row_4_data);
        $("#rDL").append(row_5_data);
        $("#rDD").append(row_6_data);
      }
    }
    if (catchPatientInfo.PIBWCondition != "정상") {
      $(".weightModify").show();
      $("#Targht6mWeight").show();
      $("#EastimateEnergy").show();
      $("#Targht6mWeight").append(
        Math.round(DietNutrient.Targht6mWeight) + "kg"
      );
      $("#EastimateEnergy").append(
        Math.round(DietNutrient.EastimateEnergy) + "kcal" + "<br>("
      );
      if (Math.round(DietNutrient.LossEnergy) < 0) {
        $("#EastimateEnergy").append(
          "+" + -1 * Math.round(DietNutrient.LossEnergy) + "kcal 추천)"
        );
      } else {
        $("#EastimateEnergy").append(
          "-" + Math.round(DietNutrient.LossEnergy) + "kcal 추천)"
        );
      }
    }
  } else if (catchPatientInfo.KidneyCondition > 2) {
    const hashCKDD = goalEnergy / 100 - 13;
    recommendExUnit[0] = proteinControledDiet[0];
    recommendExUnit[1] = proteinControledDiet[hashCKDProteinIndex][hashCKDD];
    for (let i = 0; i < recommendExUnit[0].length; i++) {
      let row_2_data = document.createElement("td");
      let row_3_data = document.createElement("td");
      let row_4_data = document.createElement("td");
      let row_5_data = document.createElement("td");
      let row_6_data = document.createElement("td");
      row_2_data.innerHTML = recommendExUnit[0][i];
      row_3_data.innerHTML = recommendExUnit[1][i];
      let BLD = divide3part(recommendExUnit[1][i]);
      row_4_data.innerHTML = BLD[1];
      row_5_data.innerHTML = BLD[0];
      row_6_data.innerHTML = BLD[2];
      $("#recommendDietName").append(row_2_data);
      $("#recommendDiet").append(row_3_data);
      $("#rDB").append(row_4_data);
      $("#rDL").append(row_5_data);
      $("#rDD").append(row_6_data);
    }
  }
  console.log(recommendExUnit);
  function divide3part(dummy) {
    let BLD = [0, 0, 0];
    if (dummy % 1.5 === 0) {
      BLD[0] = dummy / 3;
      BLD[1] = BLD[0];
      BLD[2] = BLD[0];
    } else {
      BLD[0] = Math.round(dummy / 3);
      BLD[1] = dummy - 2 * BLD[0];
      BLD[2] = BLD[0];
      BLD.sort(function (a, b) {
        return b - a;
      });
    }
    return BLD;
  }

  //----추정진단명 찾아보기----//
  $("#PDGuide").append(catchPatientInfo.name + "님의 추정 진단:");
  if (catchPatientInfo.diabetesCondition != "정상")
    putativeDiagnosis.push(catchPatientInfo.diabetesCondition);
  if (catchPatientInfo.BPCondition != "정상")
    putativeDiagnosis.push(catchPatientInfo.BPCondition);
  if (catchPatientInfo.ElectricCondition.Sodium != "정상")
    putativeDiagnosis.push(catchPatientInfo.ElectricCondition.Sodium);
  if (catchPatientInfo.ElectricCondition.Potassium != "정상")
    putativeDiagnosis.push(catchPatientInfo.ElectricCondition.Potassium);
  if (catchPatientInfo.ElectricCondition.Chloride != "정상")
    putativeDiagnosis.push(catchPatientInfo.ElectricCondition.Chloride);
  if (catchPatientInfo.ElectricCondition.Phosphorous != "정상")
    putativeDiagnosis.push(catchPatientInfo.ElectricCondition.Phosphorous);
  if (catchPatientInfo.LipidCondition[0] != "정상")
    putativeDiagnosis.push(...catchPatientInfo.LipidCondition);
  if (catchPatientInfo.LiverCondition[0] != "정상")
    putativeDiagnosis.push(...catchPatientInfo.LiverCondition);
  if (catchPatientInfo.gout != "정상")
    putativeDiagnosis.push(catchPatientInfo.gout);
  if (putativeDiagnosis.length == 0) {
    putativeDiagnosis = ["정상"];
  }
  for (let i = 0; i < putativeDiagnosis.length; i++) {
    if (i > 0) {
      $("#putativeDiagnosis").append(", ");
    }
    $("#putativeDiagnosis").append(putativeDiagnosis[i]);
  }

  localStorage.removeItem("patient-info");
});

function proteinIntake(dm, w, p1, p2) {
  if (dm == "당뇨") {
    return w * p1;
  } else {
    return w * p2;
  }
}
