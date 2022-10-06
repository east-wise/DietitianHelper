function makeKCATquestion() {
  const qusetionNumber = 48;
  const frequency = [
    [
      "한달 1회 미만",
      "한달 1회",
      "한달 2회",
      "한달 3회",
      "일주일 1회",
      "일주일 2회",
      "일주일 3회",
      "일주일 4~5회",
      "일주일 6회",
      "하루 1회",
      "하루 2회",
      "하루 3회",
    ],
    [
      0, 0.033333, 0.066667, 0.1, 0.142857, 0.285714, 0.428571, 0.65,
      0.857143, 1, 2, 3, 
    ],
  ];
  let count1 = 0,
    count2 = 0;
  for (let j = 1; j <= qusetionNumber; j++) {
    count1 = 0;
    count2 = 0;
    for (let i = 0; i < frequency[0].length; i++) {
      if (count1 % 3 == 0) {
        count2++;
        $("#q" + j).append("<div id='q" + j + "_" + count2 + "'></div>");
      }
      $("#q" + j + "_" + count2).append(
        "<input type='radio' id='q" +
          j +
          "intake" +
          i +
          "' name='q" +
          j +
          "intake' value='" +
          frequency[1][i] +
          "'/>" +
          "<label for='q" +
          j +
          "intake" +
          i +
          "'>" +
          frequency[0][i] +
          "</label>"
      );
      count1++;
    }
  }
}

function calculateCalssiumIntake() {
  const qusetionNumber = 48;
  let fdint = [];
  let ci = 0,
    vdi = 0;
  const fdvd = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 39.6, 0.14, 1.29, 0, 0, 0, 6, 10.8, 19.2, 6.6,
    13.2, 9.9, 0, 1.1, 2.7, 0, 2.9, 8.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27.3,
    0.9, 0, 0, 0, 2, 0, 0, 0, 0,
  ];
  const fdca = [
    5.8, 8, 20, 32.5, 63.5, 22.5, 35, 132, 13.5, 18, 0.9, 31.8, 15, 59.2, 114,
    4.8, 12.6, 15.2, 15.6, 21.8, 26.4, 28.8, 105, 135, 183, 495, 507, 13.8, 66,
    25.23, 9.3, 22.17, 29.7, 42.5, 147.7, 238.7, 10.3, 81.42, 17.5, 2, 62,
    144.8, 139, 210, 412, 12, 18.7, 15,
  ];
  for (let i = 0; i < qusetionNumber; i++) {
    if ($("input[name=q" + (i + 1) + "intake]:checked").val() == undefined)
      fdint.push(0);
    else
      fdint.push(
        parseFloat($("input[name=q" + (i + 1) + "intake]:checked").val())
      );

    ci = ci + fdint[i] * fdca[i];
    vdi = vdi + fdint[i] * fdvd[i];
  }
  // console.log(fdint);
  alert(
    "당신은 하루에 칼슘 " +
      Math.round(ci) +
      "mg과 비타민D " +
      Math.round(vdi) +
      "µg를 섭취하고 있어요."
  );
}
