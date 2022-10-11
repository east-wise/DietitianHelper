function handleOnInput(el, maxlength) {
  if (el.value.length > maxlength) {
    el.value = el.value.substr(0, maxlength);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  $("#resulturl").hide();
  $("#resumebutton").hide();
  $("#resetPage").hide();
  $("#physicalActivity").hide();
  $(".electroBattery").hide();
  $(".bloodGlucoseTest").hide();
  $(".bloodPresure").hide();
  $(".liverFunctionTest").hide();
  $(".lipidBattery").hide();
  $(".uricAcid").hide();
  $(".eGFR").hide();

  $("input[type=radio][name=diabetes]").change(function () {
    let radioSeletion = $("input[name=diabetes]:checked").val();
    if (radioSeletion == "c") {
      $(".bloodGlucoseTest").show();
    } else {
      $(".bloodGlucoseTest").hide();
    }
  });
  $("input[type=radio][name=hypertention]").change(function () {
    let radioSeletion = $("input[name=hypertention]:checked").val();
    if (radioSeletion == "c") {
      $(".bloodPresure").show();
    } else {
      $(".bloodPresure").hide();
    }
  });
  $("input[type=radio][name=fattyLiver]").change(function () {
    let radioSeletion = $("input[name=fattyLiver]:checked").val();
    if (radioSeletion == "c") {
      $(".liverFunctionTest").show();
    } else {
      $(".liverFunctionTest").hide();
    }
  });
  $("input[type=radio][name=dislipidemia]").change(function () {
    let radioSeletion = $("input[name=dislipidemia]:checked").val();
    if (radioSeletion == "c") {
      $(".lipidBattery").show();
    } else {
      $(".lipidBattery").hide();
    }
  });
  $("input[type=radio][name=gout]").change(function () {
    let radioSeletion = $("input[name=gout]:checked").val();
    if (radioSeletion == "c") {
      $(".uricAcid").show();
    } else {
      $(".uricAcid").hide();
    }
  });
  $("input[type=radio][name=isDialysis]").change(function () {
    let radioSeletion = $("input[name=isDialysis]:checked").val();
    if (radioSeletion == "y" || radioSeletion == "n") {
      $(".electroBattery").show();
      $(".eGFR").show();
    } else {
      document.getElementById("glomerular").value = "";
      $(".electroBattery").hide();
      $(".eGFR").hide();
    }
  });
});
/**
 * 신장 상태 확인 및 혈액수치 검색창 열어주는 함수
 */
function diagKidneyFunction() {
  let glomerular = String($("#glomerular").val());
  if (glomerular <= 60 && glomerular > 0) {
    $(".electroBattery").show();
  } else {
    $(".electroBattery").hide();
  }
}
/**
 * 비만도 판정 함수
 */
function ObesityJudgement() {
  $("#physicalActivity").show();
  $("#resumebutton").show();
  $("#resetPage").show();
  let height = $("#Height").val() / 100;
  let weight = $("#Weight").val();
  const today = new Date();
  let nowyear = today.getFullYear();
  let nowmonth = today.getMonth() + 1;
  let nowday = today.getDay();
  let birthyear = parseInt($("#birthYear").val());
  let birthmonth = parseInt($("#birthMonth").val());
  let birthday = parseInt($("#birthDay").val());
  let age = 0;
  if (birthyear > 0) {
    age = nowyear - birthyear;
    if (birthmonth > 0) {
      if (nowmonth - birthmonth < 0) age--;
      else if (
        nowmonth - birthmonth == 0 &&
        birthday > 0 &&
        nowday - birthday < 0
      )
        age--;
    }
  }
  // else{

  // }

  Patient.sex = $("input[name=healthy_gender]:checked").val();
  if (Patient.sex == "male") {
    IdealBodyWeight = height * height * 22;
  } else if (Patient.sex == "female") {
    IdealBodyWeight = height * height * 21;
  }
  $("#LightActivity").empty();
  $("#ModerateActivity").empty();
  $("#SevereActivity").empty();
  $("#ObesityState").empty();
  PIBWCondition = PIBWObesity((weight / IdealBodyWeight) * 100, age);
  $("#ObesityState").append("상태: " + PIBWCondition);
  // console.log(WeightCondition);
  // console.log(BMI);
}
/**
 * 총 혈액수치 분석 함수
 */
function Examination() {
  Patient.name = String($("#Name").val());
  Patient.height = String($("#Height").val());
  Patient.weight = String($("#Weight").val());
  let age = 0;
  const today = new Date();
  let nowyear = today.getFullYear();
  let nowmonth = today.getMonth() + 1;
  let nowday = today.getDay();
  let birthyear = parseInt($("#birthYear").val());
  let birthmonth = parseInt($("#birthMonth").val());
  let birthday = parseInt($("#birthDay").val());
  if (birthyear > 0) {
    age = nowyear - birthyear;
    if (birthmonth > 0) {
      if (nowmonth - birthmonth < 0) age--;
      else if (
        nowmonth - birthmonth == 0 &&
        birthday > 0 &&
        nowday - birthday < 0
      )
        age--;
    }
  }
  Patient.age = String(age);
  Patient.sex = $("input[name=healthy_gender]:checked").val();
  Patient.activityindex = String($("#ActivityIndex").val());
  Patient.diabetes = $("input[name=diabetes]:checked").val();
  Patient.isDialysis = $("input[name=isDialysis]:checked").val();
  Patient.hypertention = $("input[name=hypertention]:checked").val();
  Patient.fattyLiver = $("input[name=fattyLiver]:checked").val();
  Patient.dislipidemia = $("input[name=dislipidemia]:checked").val();
  Patient.gout = $("input[name=gout]:checked").val();
  Patient.SBP = String($("#SBP").val());
  Patient.DBP = String($("#DBP").val());
  Patient.glomerular = String($("#glomerular").val());
  Patient.FBS = String($("#FBS").val());
  Patient.PP2 = String($("#PP2").val());
  Patient.HbA1c = String($("#HbA1c").val());
  Patient.glucatedAlbumin = String($("#glucatedAlbumin").val());
  Patient.Potassium = String($("#Potassium").val());
  Patient.Sodium = String($("#Sodium").val());
  Patient.Phosphorous = String($("#Phosphorous").val());
  Patient.Chloride = String($("#Chloride").val());
  Patient.TG = String($("#TG").val());
  Patient.Tchol = String($("#TChol").val());
  Patient.LDL = String($("#LDL").val());
  Patient.HDL = String($("#HDL").val());
  Patient.AST = String($("#AST").val());
  Patient.ALT = String($("#ALT").val());
  Patient.ALP = String($("#ALP").val());
  Patient.GGT = String($("#GGT").val());
  Patient.totalBilirubin = String($("#totalBilirubin").val());
  Patient.uricAcid = String($("#uricAcid").val());
  // console.log(Patient);
  if (Patient.sex == "male") {
    IdealBodyWeight = (Patient.height * Patient.height * 22) / 10000;
  } else if (Patient.sex == "female") {
    IdealBodyWeight = (Patient.height * Patient.height * 21) / 10000;
  }
  $("#LightActivity").empty();
  $("#ModerateActivity").empty();
  $("#SevereActivity").empty();
  PCondition.PIBWCondition = PIBWObesity(
    (Patient.weight / IdealBodyWeight) * 100,
    Patient.age
  );
  Patient.IdealBodyWeight = IdealBodyWeight;
  [PCondition.BMI, PCondition.BMICondition, PCondition.BMIactivity] =
    BMIObesity(Patient.weight, Patient.height);
  PCondition.KidneyCondition = CKDgrade(Patient.glomerular);
  if (Patient.isDialysis == "y") PCondition.KidneyCondition = 99;
  PCondition.diabetesCondition = diabetesJudgement(
    Patient.diabetes,
    Patient.FBS,
    Patient.PP2,
    Patient.HbA1c,
    Patient.glucatedAlbumin
  );
  PCondition.BPCondition = HTNJudgement(
    Patient.hypertention,
    Patient.SBP,
    Patient.DBP
  );
  PCondition.ElectricCondition = ElectricBattery(
    Patient.Sodium,
    Patient.Potassium,
    Patient.Chloride,
    Patient.Phosphorous
  );
  PCondition.LipidCondition = LipidBattery(
    Patient.dislipidemia,
    Patient.TG,
    Patient.LDL,
    Patient.Tchol,
    Patient.HDL
  );
  PCondition.LiverCondition = LiverDiseaseDig(
    Patient.sex,
    Patient.age,
    Patient.fattyLiver,
    Patient.AST,
    Patient.ALT,
    Patient.ALP,
    Patient.GGT,
    Patient.totalBilirubin
  );
  PCondition.gout = diagGout(Patient.gout, Patient.uricAcid);
  // console.log(PCondition);
  // console.log(DietNutrient);
  const patientInfo = { ...Patient, ...PCondition };
  console.log(patientInfo);
  localStorage.setItem("patient-info", JSON.stringify(patientInfo));
  window.open("DietDiagnosisResult.html");
}
/**
 * 비만판정 및 신체활동계수 참고표 출력
 * @param {number} PIBW %
 * @param {number} age 나이
 * @returns 비만정도
 */
function PIBWObesity(PIBW, age) {
  let judge = "정상";
  if (age < 65) {
    if (PIBW >= 130) {
      judge = "고도비만";
      $("#LightActivity").append("20");
      $("#ModerateActivity").append("25");
      $("#SevereActivity").append("30");
    } else if (PIBW >= 120) {
      judge = "비만";
      $("#LightActivity").append("20~25");
      $("#ModerateActivity").append("30");
      $("#SevereActivity").append("35");
    } else if (PIBW >= 109) {
      judge = "과체중";
      $("#LightActivity").append("20~25");
      $("#ModerateActivity").append("30");
      $("#SevereActivity").append("35");
    } else if (PIBW >= 90) {
      judge = "정상";
      $("#LightActivity").append("30");
      $("#ModerateActivity").append("35");
      $("#SevereActivity").append("40");
    } else if (PIBW < 90) {
      judge = "저체중";
      $("#LightActivity").append("35");
      $("#ModerateActivity").append("40");
      $("#SevereActivity").append("40");
    }
  } else if (age >= 65) {
    if (PIBW >= 130) {
      judge = "고도비만";
      $("#LightActivity").append("20");
      $("#ModerateActivity").append("25");
      $("#SevereActivity").append("30");
    } else if (PIBW >= 120) {
      judge = "비만";
      $("#LightActivity").append("20");
      $("#ModerateActivity").append("25");
      $("#SevereActivity").append("30");
    } else if (PIBW >= 109) {
      judge = "과체중";
      $("#LightActivity").append("20");
      $("#ModerateActivity").append("25");
      $("#SevereActivity").append("30");
    } else if (PIBW >= 90) {
      judge = "정상";
      $("#LightActivity").append("20~25");
      $("#ModerateActivity").append("30");
      $("#SevereActivity").append("35");
    } else if (PIBW < 90) {
      judge = "저체중";
      $("#LightActivity").append("30");
      $("#ModerateActivity").append("35");
      $("#SevereActivity").append("40");
    }
  }
  return judge;
}
/**
 * BMI를 통한 비만도 및 활동량 계산
 * @param {number} weight 몸무게 (kg)
 * @param {number} height 키 (cm)
 * @returns [BMI, 비만도, 활동량]
 */
function BMIObesity(weight, height) {
  let BMI = 0;
  let judge = "정상";
  let activityindex = 28;
  BMI = weight / ((height * height) / 10000);
  if (BMI >= 35) {
    judge = "고도비만";
    activityindex = 25;
  } else if (BMI >= 25) {
    judge = "비만";
    activityindex = 28;
  } else if (BMI >= 18.5) {
    judge = "정상";
    activityindex = 30;
  } else if (BMI < 18.5) {
    judge = "저체중";
    activityindex = 32;
  }
  return [BMI, judge, activityindex];
}
/**
 * CKD stage 평가
 * @param {number} glomerular 신장 GFR 수치
 * @returns {number} CKD stage (1, 2, 3, 3.5, 4, 5)
 */
function CKDgrade(glomerular) {
  let judge = 0;
  if (glomerular == 0) judge = 0;
  else if (glomerular <= 15) judge = 5;
  else if (glomerular <= 30) judge = 4;
  else if (glomerular <= 45) judge = 3.5;
  else if (glomerular <= 60) judge = 3;
  else if (glomerular <= 90) judge = 2;
  else if (glomerular > 90) judge = 1;
  return judge;
}
/**
 * 당뇨진단함수
 * @param {string} Hxdiabetes
 * @param {number} FBS
 * @param {number} PP2
 * @param {number} HbA1c
 * @param {number} glucatedAlbumin
 * @returns {string} 당뇨판정
 */
function diabetesJudgement(Hxdiabetes, FBS, PP2, HbA1c, glucatedAlbumin) {
  // HbA1c 반감기 3개월, glucatedAlbumin 반감기 2~3주
  let judge = "정상";
  if (
    Hxdiabetes == "y" ||
    FBS >= 126 ||
    PP2 >= 200 ||
    HbA1c >= 6.5 ||
    glucatedAlbumin >= 16
  )
    judge = "당뇨";
  else if (
    (HbA1c < 6.5 && HbA1c >= 5.6) ||
    (FBS < 126 && FBS >= 100) ||
    (PP2 < 200 && PP2 >= 140)
  )
    judge = "당뇨 전단계";
  else if ((FBS <= 70 && FBS > 0) || (PP2 <= 70 && PP2 > 0)) judge = "저혈당";
  return judge;
}
/**
 * 혈압 진단 함수 (대한고혈압학회 분류 2018년 기준)
 * @param {string} HxHTN
 * @param {number} SBP
 * @param {number} DBP
 * @returns {string} 고혈압 진단
 */
function HTNJudgement(HxHTN, SBP, DBP) {
  let judge = "정상";
  if (HxHTN == "y") {
    judge = "고혈압";
  } else {
    if ((SBP >= 90 && SBP < 120) || (DBP >= 60 && DBP < 80)) judge = "정상";
    else if (SBP == 0 || DBP == 0) judge = "정상";
    else if (SBP >= 120 && SBP < 130 && DBP < 80) judge = "주의혈압";
    else if ((SBP >= 130 && SBP < 140) || (DBP >= 80 && DBP < 90))
      judge = "고혈압전단계";
    else if ((SBP >= 140 && SBP < 160) || (DBP >= 90 && DBP < 100))
      judge = "고혈압 1기";
    else if (SBP >= 160 || DBP >= 100) judge = "고혈압 2기";
    else if (SBP < 90 && DBP < 60) judge = "저혈압";
  }
  return judge;
}

/**
 * 이상지질혈증 진단 함수
 * @param {string} HxHLP
 * @param {number} TG
 * @param {number} LDL 없을 시 LDL Cholesterol 계산함 (Friedewald 공식)
 * @param {number} Tchol
 * @param {number} HDL
 * @returns {[string]} 이상지질혈증 판정
 */
function LipidBattery(HxHLP, TG, LDL, Tchol, HDL) {
  let judge = [];
  if (HxHLP == "y") {
    judge.push("고지혈증");
  } else {
    if (LDL == 0) {
      if (TG < 400) LDL = TG - (TG / 5 + HDL);
      else if (TG >= 400) judge.push("TG>400 !! LDL 직접 측정 요망");
    }
    let dummy = [];
    if (TG > 150) dummy.push("고중성지방혈증");
    else if ((TG <= 150 && TG > 30) || TG == 0) dummy.push("정상");
    else if (TG <= 30 && TG > 0) dummy.push("저중성지방혈증");
    if (Tchol > 200 || LDL > 130) dummy.push("고콜레스테롤혈증");
    else if (
      (Tchol <= 200 && Tchol > 115 && LDL <= 130 && LDL > 50) ||
      (Tchol == 0 && LDL == 0)
    )
      dummy.push("정상");
    else if ((Tchol <= 115 && Tchol > 0) || (LDL <= 50 && LDL > 0))
      dummy.push("저콜레스체롤혈증");
    if (dummy[0] == "정상" && dummy[1] == "정상") judge.push("정상");
    else {
      for (let i = 0; i < 2; i++) {
        if (dummy[i] != "정상") judge.push(dummy[i]);
      }
    }
  }
  return judge;
}
/**
 * 전해질 상태 진단
 * @param {number} Sodium
 * @param {number} Potassium
 * @param {number} Chloride
 * @param {number} Phosphorous
 * @returns {JSON} {Sodium, Potassium, Chloride, Phosphorous} 전해질 상태 판정
 */
function ElectricBattery(Sodium, Potassium, Chloride, Phosphorous) {
  let judge = {
    Sodium: "정상",
    Potassium: "정상",
    Chloride: "정상",
    Phosphorous: "정상",
  };
  if (Sodium == 0 || (Sodium >= 135 && Sodium <= 145)) judge.Sodium = "정상";
  else if (Sodium < 135) judge.Sodium = "저나트륨혈증";
  else if (Sodium > 145) judge.Sodium = "고나트륨혈증";
  if (Potassium == 0 || (Potassium >= 3.5 && Potassium <= 5.5))
    judge.Potassium = "정상";
  else if (Potassium < 3.5) judge.Potassium = "저칼륨혈증";
  else if (Potassium > 5.5) judge.Potassium = "고칼륨혈증";
  if (Chloride == 0 || (Chloride >= 98 && Chloride <= 110))
    judge.Chloride = "정상";
  else if (Chloride < 98) judge.Chloride = "저클로린혈증";
  else if (Chloride > 110) judge.Chloride = "고클로린혈증";
  if (Phosphorous == 0 || (Phosphorous >= 3 && Phosphorous <= 5))
    judge.Phosphorous = "정상";
  else if (Phosphorous < 3) judge.Phosphorous = "저인산혈증";
  else if (Phosphorous > 5) judge.Phosphorous = "고인산혈증";
  return judge;
}

/**
 * 간 상태 이상 진단 함수
 * @param {string} sex
 * @param {number} age
 * @param {string} HxFLD
 * @param {number} AST
 * @param {number} ALT
 * @param {number} ALP
 * @param {number} GGT
 * @param {number} TBili
 * @returns {[string]} 간 판정 결과
 */
function LiverDiseaseDig(sex, age, HxFLD, AST, ALT, ALP, GGT, TBili) {
  let judge = [];
  if (HxFLD == "y") judge.push("지방간");
  else {
    if (sex == "female") {
      if (AST > 31 || ALT > 31) {
        if (AST < ALT) judge.push("급성간손상");
        else if (AST >= ALT) judge.push("만성간손상");
        if (GGT >= 42) {
          judge.push("음주");
          if (age >= 20 && ALP > 104) judge.push("간염 의심");
        }
        judge.push("지방간 의심");
      } else if (ALP >= 312 && age >= 20 && GGT > 42 && TBili >= 1.2)
        judge.push("쓸개즙 분비장애 의심");
      else if (ALP > 208 && ALP < 312 && age >= 20 && GGT < 42)
        judge.push("임신, 뼈질환 의심");
      else judge.push("정상");
    } else if (sex == "male") {
      if (AST > 37 || ALT > 41) {
        if (AST < ALT) judge.push("급성간손상");
        else if (AST >= ALT) judge.push("만성간손상");
        if (GGT >= 71) {
          judge.push("음주");
          if (age >= 20 && ALP > 129) judge.push("간염 의심");
        }
        judge.push("지방간 의심");
      } else if (ALP >= 390 && age >= 20 && GGT > 71 && TBili >= 1.2)
        judge.push("쓸개즙 분비장애 의심");
      else if (ALP > 260 && ALP < 390 && age >= 20 && GGT < 71)
        judge.push("뼈질환 의심");
      else judge.push("정상");
    }
  }
  return judge;
}

/**
 * 통풍 진단 함수
 * @param {string} HxGout
 * @param {number} uricAcid
 * @returns {string} 통풍 판정
 */
function diagGout(HxGout, uricAcid) {
  let judge = "정상";
  if (HxGout == "y") judge = "통풍";
  else if (uricAcid > 7) judge = "통풍 의심";
  return judge;
}
