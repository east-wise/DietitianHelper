document.addEventListener("DOMContentLoaded", function () {
  const NQresult = {
    adult: {
      total: {
        middle: 68.483,
        low: 52.738,
      },
      balance: {
        middle: 55.8,
        low: 30.863,
        url: "https://youtu.be/OXwFi-hOzJI",
        qrcode: "NQQRcode/adult_balance.png",
      },
      moderation: {
        middle: 85.3,
        low: 66.123,
        url: "https://youtu.be/EceIDhOveJU",
        qrcode: "NQQRcode/adult_moderation.png",
      },
      practice: {
        middle: 74.495,
        low: 51.805,
        url: "https://youtu.be/Ub0Zo7W8W1g",
        qrcode: "NQQRcode/adult_practice.png",
      },
    },
    elder: {
      total: {
        middle: 58.546,
        low: 44.723,
      },
      balance: {
        middle: 54.65,
        low: 34.188,
        url: "https://youtu.be/Umm7GGk8w5o",
        qrcode: "NQQRcode/elder_balance.png",
      },
      moderation: {
        middle: 75,
        low: 30.8,
        url: "https://youtu.be/opuroPjMiQk",
        qrcode: "NQQRcode/elder_moderation.png",
      },
      practice: {
        middle: 71.255,
        low: 53.524,
        url: "https://youtu.be/YFgqyAm2PAA",
        qrcode: "NQQRcode/elder_practice.png",
      },
    },
    child: {
      total: {
        middle: 58.594,
        low: 44.007,
      },
      balance: {
        middle: 50.225,
        low: 32.338,
        url: "https://youtu.be/CpYOhu2SDw4",
        qrcode: "NQQRcode/child_balance.png",
      },
      moderation: {
        middle: 64.363,
        low: 47.313,
        url: "https://youtu.be/dsbOEI_FV9M",
        qrcode: "NQQRcode/child_moderation.png",
      },
      practice: {
        middle: 62,
        low: 41.574,
        url: "https://youtu.be/4Bsjf9o1S18",
        qrcode: "NQQRcode/child_practice.png",
      },
    },
    comment: {
      total: {
        high: "좋은 식습관과 식생활을 유지하고 있습니다.<br> 앞으로도 계속 유지해주세요.",
        middle:
          "식습관과 식생활에 부족한 점이 있습니다.<br> 아래의 내용을 읽어보시고 안내사항에 따르시길 바랍니다.",
        low: "현재 식습관과 식행동에 문제가 있습니다.<br> 아래의 내용을 읽어보시고 안내사항에 따르시길 바랍니다.",
      },
      balance: {
        high: "현재 균형 잡힌 식사를 하고 있습니다.<br> 잡곡밥, 과일, 흰우유, 콩제품, 달걀 등 여러 종류의 식품을 골고루 섭취하고 있습니다.<br> 앞으로도 계속 골고루 섭취 할 수 있도록 노력해주세요.",
        middle:
          "균형 잡힌 식사를 위해 조금 더 노력해주세요.<br> 매일 잡곡밥, 과일, 흰우유, 콩제품, 달걀 등 여러 종류의 식품을 골고루 섭취할 수 있도록 노력하십시오.",
        low: "현재 균형 잡힌 식사를 하고 있지 않습니다.<br> 매일 잡곡밥, 과일, 흰우유, 콩제품, 달걀 등 여러 종류의 식품을 골고루 섭취하고 편식하지 마십시오.",
      },
      moderation: {
        high: "현재 에너지를 적절히 섭취하고 있습니다.<br> 과자, 패스트푸드, 탄산음료, 튀김과 같은 음식들은 열량이 높습니다.<br> 이러한 식품들을 주의하며 앞으로도 적절한 열량을 섭취를 할 수 있도록 노력해주세요.",
        middle:
          "에너지를 많이 섭취하고 있습니다.<br> 과자, 패스트푸드, 탄산음료, 튀김과 같이 열량이 높은 음식의 섭취를 줄이도록 노력하십시오.",
        low: "에너지를 너무 많이 섭취하고 있습니다.<br> 과자, 패스트푸드, 탄산음료, 튀김과 같이 열량이 높은 음식의 섭취를 줄이도록 노력하십시오.",
      },
      practice: {
        high: "현재 올바른 식생활을 실천하고 있습니다.<br> 음식을 먹기 전에 손 씻기, 꼭꼭 십어 먹기, 영양표시를 확인하기 등의 식습관을 잘 실천하고 있습니다.<br> 앞으로도 이러한 식습관을 잘 유지할 수 있도록 노력해주세요.",
        middle:
          "올바른 식생활을 위해 조금 더 노력해주세요.<br> 음식을 먹기 전에 손 씻기, 꼭꼭 씹어 먹기, 영양표시를 확인하기 등의 식습관을 실천하십시오.",
        low: "현재 올바른 식생활의 실천이 부족합니다.<br> 음식을 먹기 전에 손 씻기, 꼭꼭 씹어 먹기, 영양표시를 확인하기 등의 식습관을 실천하십시오. ",
      },
    },
  };
  const clientInfo = JSON.parse(localStorage.getItem("client-info"));
  localStorage.removeItem("client-info");
//   let clientInfo = {
//       age: 50,
//       name: '김필립',
//       sex: 'male',
//       height: 170,
//       weight: 80,
//       total: 60,
//       balance: 20,
//       moderation: 70.3,
//       practice: 20,
//       additional: [['귀하는 가당음료(탄산음료, 믹스커피, 유자차 등)를 얼마나 자주 마십니까?', '일주일에 1~3번'], ['귀하는 30분 이상 숨이 찰 정도의 운동을 얼마나 자주 하십니까?', '일주일에 5~6번']]
//   };
  console.log(clientInfo);

  $("#name").append(clientInfo.name);
  $("#age").append(clientInfo.age + "세");
  if (clientInfo.sex == "male") {
    $("#sex").append("남성");
  } else if (clientInfo.sex == "female") {
    $("#sex").append("여성");
  }
  $("#height").append(clientInfo.height + "cm");
  $("#weight").append(clientInfo.weight + "kg");

  //추가 질문 문항 답변-----------
  let ol = document.createElement("ol");
  for (let i = 0; i < clientInfo.additional.length; i++) {
    let li = document.createElement("li");
    li.append(clientInfo.additional[i][0]);
    let ul = document.createElement("ul");
    let li2 = document.createElement("li");
    li2.setAttribute("list-style-type", "circle");
    li2.append(clientInfo.additional[i][1]);
    ul.appendChild(li2);
    li.appendChild(ul);
    ol.appendChild(li);
  }
  $(".additionalQuestion").append(ol);

  if (clientInfo.age >= 20 && clientInfo.age < 65) {
    drowChart(NQresult.adult, clientInfo);
    dietGrading(NQresult.adult, clientInfo,NQresult.comment);
  } else if (clientInfo.age >= 65) {
    drowChart(NQresult.elder, clientInfo);
    dietGrading(NQresult.elder, clientInfo,NQresult.comment);
  } else if (clientInfo.age < 20) {
    drowChart(NQresult.child, clientInfo);
    dietGrading(NQresult.child, clientInfo,NQresult.comment);
  }
});
function drowChart(ageArea, clientInfo) {
  let middle = [
    ageArea.total.middle,
    ageArea.balance.middle,
    ageArea.moderation.middle,
    ageArea.practice.middle,
  ];
  let low = [
    ageArea.total.low,
    ageArea.balance.low,
    ageArea.moderation.low,
    ageArea.practice.low,
  ];
  let currentMyGrade = [
    Math.round(clientInfo.total),
    Math.round(clientInfo.balance),
    Math.round(clientInfo.moderation),
    Math.round(clientInfo.practice),
  ];
  new Chart(document.getElementById("radar-chart"), {
    type: "radar",
    data: {
      labels: ["총점", "균형", "절제", "실천"],
      datasets: [
        {
          label: "현재 점수",
          fill: true,
          backgroundColor: "rgba(102,051,255,0.2)",
          borderColor: "rgba(102,051,255,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(102,051,255,1)",
          data: currentMyGrade,
        },
        {
          label: "상위권",
          fill: true,
          backgroundColor: "rgba(0,255,102,0)",
          borderColor: "rgba(0,255,102,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(0,255,102,1)",
          data: [100, 100, 100, 100],
        },
        {
          label: "중위권",
          fill: true,
          backgroundColor: "rgba(255,215,0,0.2)",
          borderColor: "rgba(255,215,0,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,215,0,1)",
          data: middle,
        },
        {
          label: "하위권",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: low,
        },
        {
          label: "0",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [0, 0, 0, 0],
        },
      ],
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: "영양지수 영역분포",
        fontSize: 20,
      },
      scale: {
        pointLabels: {
          fontfamily: "'Poor Story', cursive",
          fontSize: 20 /* must be a number it translates to pixels */,
        },
        ticks: {
          fontSize: 13,
        },
      },
    },
  });
}
function dietGrading(ageArea, clientInfo, comment) {
  printGrade(clientInfo.total, ageArea.total, comment.total, "total");
  printGrade(
    clientInfo.balance,
    ageArea.balance,
    comment.balance,
    "balance"
  );
  printGrade(
    clientInfo.moderation,
    ageArea.moderation,
    comment.moderation,
    "moderation"
  );
  printGrade(
    clientInfo.practice,
    ageArea.practice,
    comment.practice,
    "practice"
  );

  // 영역별 강의 영상 링크 출력---------------------------------
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let exec1 = document.createElement("p");
  let exec2 = document.createElement("p");
  let exec3 = document.createElement("p");
  exec1.append("균형편");
  exec2.append("절제편");
  exec3.append("실천편");
  th1.appendChild(exec1);
  th2.appendChild(exec2);
  th3.appendChild(exec3);
  $(".NQvideoURL").append(th1);
  $(".NQvideoURL").append(th2);
  $(".NQvideoURL").append(th3);
  // 영역별 강의 QR코드 출력--------------------------------------
  let tr = document.createElement("tr");
  tr.setAttribute("class", "NQvideoQRcode");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let exec4 = document.createElement("a");
  let exec5 = document.createElement("a");
  let exec6 = document.createElement("a");
  exec4.setAttribute("href", ageArea.balance.url);
  exec5.setAttribute("href", ageArea.moderation.url);
  exec6.setAttribute("href", ageArea.practice.url);
  exec4.setAttribute("target", "_blank");
  exec5.setAttribute("target", "_blank");
  exec6.setAttribute("target", "_blank");
  var img1 = document.createElement("IMG");
  var img2 = document.createElement("IMG");
  var img3 = document.createElement("IMG");
  img1.setAttribute("src", ageArea.balance.qrcode);
  img2.setAttribute("src", ageArea.moderation.qrcode);
  img3.setAttribute("src", ageArea.practice.qrcode);
  img1.setAttribute("class", "QRcode");
  img2.setAttribute("class", "QRcode");
  img3.setAttribute("class", "QRcode");
  img1.setAttribute("alt", "균형편");
  img2.setAttribute("alt", "절제편");
  img3.setAttribute("alt", "실천편");
  exec4.appendChild(img1);
  exec5.appendChild(img2);
  exec6.appendChild(img3);
  td1.appendChild(exec4);
  td2.appendChild(exec5);
  td3.appendChild(exec6);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  $(".NQvideoURL").append(tr);
}

function printGrade(score, standard, comment, location) {
  if (score < standard.low) {
    $("." + location).append(comment.low);
    $("#" + location + "Grade").append("하");
  } else if (score < standard.middle) {
    $("." + location).append(comment.middle);
    $("#" + location + "Grade").append("중");
  } else if (score >= standard.middle) {
    $("." + location).append(comment.high);
    $("#" + location + "Grade").append("상");
  }
}
