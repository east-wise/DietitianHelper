function makeKPATQuestion() {
    const qusetionNumber=39;
    const frequency = [
        ["한달 1회", "한달 2회", "한달 3회",
        "일주일 1회", "일주일 2회", "일주일 3회", "일주일 4회", "일주일 5회", "일주일 6회",
            "하루 1회", "하루 2회", "하루 3회"],
        [0.033333, 0.066667, 0.1,
            0.142857, 0.285714, 0.428571, 0.571429, 0.714286, 0.857143,
            1, 2, 3]
    ];
    let count1 = 0, count2 = 0;
    for (let j = 1; j <= qusetionNumber; j++) {
        count1 = 0;
        count2 = 0;
        for (let i = 0; i < frequency[0].length; i++) {
            if (count1 % 3 == 0) {
                count2++;
                $("#q" + j).append("<div id='q" + j + "_" + count2 + "'></div>");
            }
            $("#q" + j + "_" + count2).append(
                "<input type='radio' id='q" + j + "intake" + i
                + "' name='q" + j + "intake' value='" + frequency[1][i] + "'/>"
                + "<label for='q" + j + "intake" + i + "'>"
                + frequency[0][i]
                + "</label>"
            );
            count1++;
        }
    }
}

function calculateProteinIntake() {
    const qusetionNumber=39;
    let fdint = [];
    let fpi = [], pi = 0;
    const fdp = [5.13, 7.23, 8.255714286, 10.32, 1.89, 4.5, 24.75, 17.11, 8.45, 5.895, 8.716666667, 0.961666667,
         15.2, 4.3875, 7.2, 26.66875, 30.46666667, 10.09083333, 7.455, 37.6, 10.95, 12.42857143, 6.78, 4.8, 3.425,
         4.675, 2.96, 2.6, 4.35, 6.4, 1.2, 3.5, 6, 3.54, 1.477909091, 1.88, 1.720833333, 3.855, 3.36];
    for (let i = 0; i < qusetionNumber; i++) {
        if ($("input[name=q" + (i + 1) + "intake]:checked").val() == undefined) fdint.push(0);
        else fdint.push(parseFloat($("input[name=q" + (i + 1) + "intake]:checked").val()));
        fpi.push(fdint[i] * fdp[i]);
        pi = pi + fpi[i];
    }
    console.log(fpi);
    console.log(pi);
    alert("당신은 하루에 " + Math.round(pi) + "g의 단백질을 섭취하고 있어요.");

}
