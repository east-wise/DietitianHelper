function ObesityJudgement() {
    $("#physicalActivity").show();
    $("#resumebutton").show();
    let height = $("#Height").val() / 100;
    let weight = $("#Weight").val();
    Patient.sex = $('input[name=healthy_gender]:checked').val();
    if (Patient.sex == "male") {
        IdealBodyWeight = height * height * 22;
    }
    else if (Patient.sex == "female") {
        IdealBodyWeight = height * height * 21;
    }
    $('#LightActivity').empty();
    $('#ModerateActivity').empty();
    $('#SevereActivity').empty();
    $('#ObesityState').empty();
    PIBWCondition = PIBWObesity(weight / IdealBodyWeight * 100);
    $('#ObesityState').append("상태: " + PIBWCondition);
    // console.log(WeightCondition);
    // console.log(BMI);
}

function Examination() {
    Patient.name = String($('#Name').val());
    Patient.height = String($('#Height').val());
    Patient.weight = String($('#Weight').val());
    Patient.age = String($('#Age').val());
    Patient.sex = $('input[name=healthy_gender]:checked').val();
    Patient.activityindex = String($('#ActivityIndex').val());
    Patient.diabetes = $('input[name=diabetes]:checked').val();
    Patient.isDialysis = $('input[name=isDialysis]:checked').val();
    Patient.SBP = String($('#SBP').val());
    Patient.DBP = String($('#DBP').val());
    Patient.glomerular = String($('#glomerular').val());
    Patient.FBS = String($('#FBS').val());
    Patient.PP2 = String($('#PP2').val());
    Patient.HbA1c = String($('#HbA1c').val());
    Patient.Potassium = String($('#Potassium').val());
    Patient.Sodium = String($('#Sodium').val());
    Patient.Phosphorous = String($('#Phosphorous').val());
    Patient.Chloride = String($('#Chloride').val());
    Patient.TG = String($('#TG').val());
    Patient.Tchol = String($('#TChol').val());
    Patient.LDL = String($('#LDL').val());
    Patient.HDL = String($('#HDL').val());
    Patient.AST = String($('#AST').val());
    Patient.ALT = String($('#ALT').val());
    // console.log(Patient);
    if (Patient.sex == "male") {
        IdealBodyWeight = Patient.height * Patient.height * 22 / 10000;
    }
    else if (Patient.sex == "female") {
        IdealBodyWeight = Patient.height * Patient.height * 21 / 10000;
    }
    $('#LightActivity').empty();
    $('#ModerateActivity').empty();
    $('#SevereActivity').empty();
    PCondition.PIBWCondition = PIBWObesity(
        Patient.weight / IdealBodyWeight * 100);
    Patient.IdealBodyWeight = IdealBodyWeight;
    let dummy = [];
    dummy = BMIObesity(Patient.weight, Patient.height);
    PCondition.BMICondition = dummy[1];
    PCondition.BMIactivity = dummy[0];
    PCondition.KidneyCondition = CKDgrade(Patient.glomerular);
    if (Patient.isDialysis == "y") PCondition.KidneyCondition = 99;
    PCondition.diabetesCondition =
        diabetesJudgement(Patient.diabetes, Patient.FBS, Patient.PP2, Patient.HbA1c);
    PCondition.BPCondition = HTNJudgement(Patient.SBP, Patient.DBP);
    PCondition.ElectricCondition =
        ElectricBattery(Patient.Sodium, Patient.Potassium, Patient.Chloride);
    PCondition.LipidCondition =
        LipidBattery(
            Patient.TG,
            Patient.LDL,
            Patient.Tchol,
            Patient.HDL,
            Patient.Phosphorous);
    PCondition.LiverCondition = LiverDiseaseDig(Patient.AST, Patient.ALT);
    // console.log(PCondition);
    // console.log(DietNutrient);
    $("#resulturl").show();
}
function OpenResultPage() {
    const patientInfo = { ...Patient, ...PCondition };
    console.log(patientInfo);
    localStorage.setItem("patient-info", JSON.stringify(patientInfo));
    window.open('DietDiagnosisResult.html');
    $("#resulturl").hide();
}

function PIBWObesity(PIBW) {
    let judge = "정상"
    if (PIBW >= 160) {
        judge = "고도비만";
        $('#LightActivity').append("20");
        $('#ModerateActivity').append("25");
        $('#SevereActivity').append("30");
    }
    else if (PIBW >= 120) {
        judge = "비만";
        $('#LightActivity').append("20~25");
        $('#ModerateActivity').append("30");
        $('#SevereActivity').append("35");
    }
    else if (PIBW >= 109) {
        judge = "과체중";
        $('#LightActivity').append("20~25");
        $('#ModerateActivity').append("30");
        $('#SevereActivity').append("35");
    }
    else if (PIBW >= 90) {
        judge = "정상";
        $('#LightActivity').append("30");
        $('#ModerateActivity').append("35");
        $('#SevereActivity').append("40");
    }
    else if (PIBW < 90) {
        judge = "저체중";
        $('#LightActivity').append("35");
        $('#ModerateActivity').append("40");
        $('#SevereActivity').append("40");
    }
    return judge;
}
function BMIObesity(weight, height) {
    let BMI = 0;
    let judge = "정상";
    let activityindex = 28;
    BMI = weight / (height * height / 10000);
    if (BMI >= 35) {
        judge = "고도비만";
        activityindex = 25;
    }
    else if (BMI >= 25) {
        judge = "비만";
        activityindex = 28;
    }
    else if (BMI >= 18.5) {
        judge = "정상";
        activityindex = 28;
    }
    else if (BMI < 18.5) {
        judge = "저체중";
        activityindex = 25;
    }
    return [BMI, judge, activityindex];
}
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
function diabetesJudgement(Hxdiabetes, FBS, PP2, HbA1c) {
    let judge = "정상";
    if (Hxdiabetes == "y" || FBS >= 126 || PP2 >= 200 || HbA1c >= 6.5) judge = "당뇨";
    else if (FBS <= 70 && FBS > 0 || PP2 <= 70 && PP2 > 0) judge = "저혈당";
    return judge;
}
function HTNJudgement(SBP, DBP) {
    // 대한고혈압학회 분류 2018년
    let judge = [,];
    if (SBP >= 90 && SBP < 120 || DBP >= 60 && DBP < 80) judge[0] = "정상";
    else if (SBP == 0 || DBP == 0) judge[0] = "정상";
    else if (SBP >= 120 && SBP < 130 && DBP < 80) judge[0] = "주의혈압";
    else if (SBP >= 130 && SBP < 140 || DBP >= 80 && DBP < 90) judge[0] = "고혈압전단계";
    else if (SBP >= 140 && SBP < 160 || DBP >= 90 && DBP < 100) judge[0] = "고혈압 1기";
    else if (SBP >= 160 || DBP >= 100) judge[0] = "고혈압 2기";
    else if (SBP < 90 && DBP < 60) judge[0] = "저혈압";
    else if (SBP >= 140 && DBP < 90) judge[1] = "수축기단독고혈압";
    return judge;
}
function LipidBattery(TG, LDL, Tchol, HDL, Phosphorous) {
    let judge = {
        Cholesterol: "정상",
        Triglyceride: "정상",
        Phosphorous: "정상",
        Warning: ""
    };
    // LDL Cholesterol 계산 (Friedewald 공식)
    if (LDL == 0) {
        if (TG < 400) LDL = TG - (TG / 5 + HDL);
        else if (TG >= 400) judge.Warning = "TG>400 !! LDL 직접 측정 요망";
    }
    if (TG > 150) judge.Triglyceride = "고중성지방혈증";
    else if (TG <= 150 && TG > 30) judge.Triglyceride = "정상";
    else if (TG <= 30 && TG > 0) judge.Triglyceride = "저중성지방혈증";
    if (Tchol > 200 || LDL > 130) judge.Cholesterol = "고콜레스테롤혈증";
    else if (
        Tchol <= 200 &&
        Tchol > 115 &&
        LDL <= 130 &&
        LDL > 50) judge.Cholesterol = "정상";
    else if (
        Tchol <= 115 && Tchol > 0 ||
        LDL <= 50 && LDL > 0) judge.Cholesterol = "저콜레스체롤혈증";
    if (
        Phosphorous == 0 ||
        Phosphorous >= 3 && Phosphorous <= 5) judge.Phosphorous = "정상";
    else if (Phosphorous < 3) judge.Phosphorous = "저인산혈증";
    else if (Phosphorous > 5) judge.Phosphorous = "고인산혈증";
    return judge;
}
function ElectricBattery(Sodium, Potassium, Chloride) {
    let judge = {
        Sodium: "정상",
        Potassium: "정상",
        Chloride: "정상"
    };
    if (Sodium == 0 || Sodium >= 135 && Sodium <= 145) judge.Sodium = "정상";
    else if (Sodium < 135) judge.Sodium = "저나트륨혈증";
    else if (Sodium > 145) judge.Sodium = "고나트륨혈증";
    if (Potassium == 0 || Potassium >= 3.5 && Potassium <= 5.5) judge.Potassium = "정상";
    else if (Potassium < 3.5) judge.Potassium = "저칼륨혈증";
    else if (Potassium > 5.5) judge.Potassium = "고칼륨혈증";
    if (Chloride == 0 || Chloride >= 98 && Chloride <= 110) judge.Chloride = "정상";
    else if (Chloride < 98) judge.Chloride = "저클로린혈증";
    else if (Chloride > 110) judge.Chloride = "고클로린혈증";
    return judge;
}
function LiverDiseaseDig(AST, ALT) {
    let judge = "정상";
    if (AST > 31 || ALT > 31) {
        if(AST<ALT) judge = "급성간손상 또는 지방간 의심";
        else judge = "만성간손상 또는 지방간 의심";
    }
    return judge;
}