document.addEventListener("DOMContentLoaded", function () {
  const catchPatientInfo = JSON.parse(localStorage.getItem("patient-info"));
  /**
   * DMDiet
   ** [Hash table =>> 1200->1]
   ** ["곡류군", "어육류군", "채소군", "지방군", "우유군", "과일군"]
   */
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
  /**
   * growthDiet
   ** [Hash table =>> 1000->1]
   ** ["곡류군", "어육류군", "채소군", "지방군", "우유군", "과일군"]
   */
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
  ];
  /**
   * growthDiet
   ** [Hash table =>> 1000->1]
   ** ["곡류군", "어육류군", "채소군", "지방군", "우유군", "과일군"]
   */
  const growthDietB = [
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
  /**
   * proteinControledDiet
   ** [Hash table =>> protein 30->1]
   ** [Hash table =>> 1300kcal->0]
   ** ["곡류군", "어육류군", "채소군", "지방군", "우유군", "과일군","열량보충군"]
   */
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
      [7.0, 1.0, 6.0, 7.0, 0.0, 2.0, 0.0],
      [8.0, 1.0, 6.0, 7.0, 0.0, 2.0, 0.0],
      [9.0, 1.0, 6.0, 7.0, 0.0, 2.0, 0.0],
      [10.0, 1.0, 6.0, 7.0, 0.0, 2.0, 0.0],
      [10.0, 1.0, 6.0, 7.0, 0.0, 2.0, 1.0],
      [10.0, 1.0, 6.0, 7.0, 0.0, 2.0, 2.0],
      [10.0, 1.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [12.0, 0.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [12.5, 0.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [13.5, 0.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 3.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 4.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 5.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 6.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 7.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 8.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 9.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 10.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 11.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 12.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 13.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 14.0],
      [14.0, 0.0, 6.0, 8.0, 0.0, 3.0, 15.0],
    ],
    [
      [7.0, 2.5, 6.0, 6.0, 0.0, 1.0, 0.0],
      [7.5, 2.0, 6.0, 7.0, 0.0, 1.0, 0.0],
      [8.0, 2.0, 6.0, 7.0, 0.0, 2.0, 0.0],
      [9.0, 2.0, 6.0, 7.0, 0.0, 2.0, 0.0],
      [10.0, 2.0, 6.0, 7.0, 0.0, 2.0, 0.0],
      [11.0, 2.0, 6.0, 7.0, 0.0, 2.0, 0.0],
      [11.0, 2.0, 6.0, 7.0, 0.0, 2.0, 1.0],
      [11.0, 2.0, 6.0, 7.0, 0.0, 2.0, 2.0],
      [11.0, 2.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [13.0, 1.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [14.0, 1.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [15.0, 1.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [16.0, 0.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [17.0, 0.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [18.0, 0.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [19.0, 0.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [19.0, 0.0, 6.0, 8.0, 0.0, 2.0, 4.0],
      [19.0, 0.0, 6.0, 8.0, 0.0, 2.0, 5.0],
      [19.0, 0.0, 6.0, 8.0, 0.0, 2.0, 6.0],
      [19.0, 0.0, 6.0, 8.0, 0.0, 2.0, 7.0],
      [19.0, 0.0, 6.0, 8.0, 0.0, 2.0, 8.0],
      [19.0, 0.0, 6.0, 8.0, 0.0, 2.0, 9.0],
      [19.0, 0.0, 6.0, 8.0, 0.0, 2.0, 10.0],
    ],
    [
      [6.0, 4.0, 6.0, 4.0, 0.5, 1.0, 0.0],
      [7.0, 3.0, 6.0, 5.0, 0.5, 2.0, 0.0],
      [8.0, 3.0, 6.0, 5.0, 0.5, 2.0, 0.0],
      [9.0, 3.0, 6.0, 5.0, 0.5, 2.0, 0.0],
      [9.5, 3.0, 6.0, 6.0, 0.5, 2.0, 0.0],
      [10.0, 3.0, 6.0, 7.0, 0.5, 2.0, 0.0],
      [10.0, 3.0, 6.0, 7.0, 0.5, 2.0, 1.0],
      [10.5, 3.0, 6.0, 7.0, 0.5, 2.0, 1.0],
      [10.5, 3.0, 6.0, 7.0, 0.5, 2.0, 2.0],
      [10.5, 3.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [12.5, 2.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [13.5, 2.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [14.5, 2.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [16.0, 1.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [17.0, 1.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [18.0, 1.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [20.0, 1.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [21.0, 0.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [22.0, 0.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [23.0, 0.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [24.0, 0.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [24.0, 0.0, 6.0, 8.0, 0.0, 2.0, 4.0],
      [24.0, 0.0, 6.0, 8.0, 0.0, 2.0, 5.0],
    ],
    [
      [5.0, 5.0, 6.0, 4.0, 0.5, 1.0, 0.0],
      [6.0, 5.0, 6.0, 4.0, 0.5, 2.0, 0.0],
      [7.0, 4.5, 6.0, 4.0, 0.5, 2.0, 0.0],
      [8.0, 4.5, 6.0, 4.0, 0.5, 2.0, 0.0],
      [9.0, 4.0, 6.0, 5.0, 0.5, 2.0, 0.0],
      [10.0, 4.0, 6.0, 5.0, 0.5, 2.0, 0.0],
      [10.5, 4.0, 6.0, 6.0, 0.5, 2.0, 0.0],
      [11.5, 4.0, 6.0, 6.0, 0.5, 2.0, 0.0],
      [11.5, 4.0, 6.0, 6.0, 0.5, 2.0, 1.0],
      [11.5, 4.0, 6.0, 6.0, 0.5, 2.0, 2.0],
      [11.5, 4.0, 6.0, 6.0, 0.5, 2.0, 3.0],
      [13.0, 3.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [14.0, 3.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [15.0, 3.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [16.5, 2.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [17.5, 2.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [18.5, 2.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [19.5, 2.0, 6.0, 7.0, 0.5, 2.0, 3.0],
      [20.5, 2.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [21.5, 1.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [23.5, 1.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [24.5, 1.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [26.0, 0.0, 6.0, 8.0, 0.0, 2.0, 3.0],
    ],
    [
      [4.0, 6.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [5.0, 6.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [6.0, 6.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [7.0, 5.0, 6.0, 4.0, 1.0, 2.0, 0.0],
      [8.0, 5.0, 6.0, 4.0, 1.0, 2.0, 0.0],
      [9.0, 5.0, 6.0, 4.0, 1.0, 2.0, 0.0],
      [10.0, 4.5, 6.0, 5.0, 1.0, 2.0, 0.0],
      [11.0, 4.5, 6.0, 5.0, 1.0, 2.0, 0.0],
      [12.0, 4.0, 6.0, 6.0, 1.0, 2.0, 0.0],
      [12.0, 4.0, 6.0, 6.0, 1.0, 2.0, 1.0],
      [13.0, 4.0, 6.0, 6.0, 1.0, 2.0, 1.0],
      [13.0, 4.0, 6.0, 6.0, 1.0, 2.0, 2.0],
      [13.5, 4.0, 6.0, 7.0, 1.0, 2.0, 2.0],
      [13.5, 4.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [14.5, 4.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [16.0, 3.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [17.0, 3.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [18.0, 3.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [19.0, 3.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [21.0, 3.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [22.0, 3.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [24.0, 2.0, 6.0, 8.0, 0.0, 2.0, 3.0],
      [25.0, 2.0, 6.0, 8.0, 0.0, 2.0, 3.0],
    ],
    [
      [4.0, 7.0, 6.0, 2.0, 1.0, 1.0, 0.0],
      [5.0, 7.0, 6.0, 2.0, 1.0, 1.0, 0.0],
      [6.0, 7.0, 6.0, 2.0, 1.0, 1.0, 0.0],
      [7.0, 7.0, 6.0, 2.0, 1.0, 1.0, 0.0],
      [8.0, 6.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [9.0, 6.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [10.0, 6.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [11.0, 6.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [11.5, 6.0, 6.0, 5.0, 1.0, 1.0, 0.0],
      [12.0, 6.0, 6.0, 5.0, 1.0, 1.0, 0.0],
      [13.0, 5.0, 6.0, 6.0, 1.0, 2.0, 0.0],
      [13.0, 5.0, 6.0, 6.0, 1.0, 2.0, 1.0],
      [13.0, 5.0, 6.0, 7.0, 1.0, 2.0, 2.0],
      [13.5, 5.0, 6.0, 7.0, 1.0, 2.0, 2.0],
      [13.5, 5.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [14.5, 5.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [16.0, 5.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [18.0, 5.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [19.0, 5.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [21.0, 4.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [22.0, 4.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [23.0, 4.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [23.0, 4.0, 6.0, 8.0, 0.0, 2.0, 3.0],
    ],
    [
      [3.0, 9.0, 6.0, 2.0, 1.0, 0.0, 0.0],
      [4.0, 9.0, 6.0, 2.0, 1.0, 0.0, 0.0],
      [5.0, 8.0, 6.0, 3.0, 1.0, 1.0, 0.0],
      [6.0, 8.0, 6.0, 3.0, 1.0, 1.0, 0.0],
      [7.0, 8.0, 6.0, 3.0, 1.0, 1.0, 0.0],
      [8.0, 8.0, 6.0, 3.0, 1.0, 1.0, 0.0],
      [9.0, 7.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [10.0, 7.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [11.0, 7.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [11.5, 7.0, 6.0, 5.0, 1.0, 1.0, 0.0],
      [12.0, 7.0, 6.0, 5.0, 1.0, 2.0, 0.0],
      [12.0, 7.0, 6.0, 5.0, 1.0, 2.0, 1.0],
      [13.0, 6.0, 6.0, 5.0, 1.0, 2.0, 2.0],
      [13.0, 6.0, 6.0, 7.0, 1.0, 2.0, 2.0],
      [13.0, 6.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [14.0, 6.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [15.0, 6.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [16.0, 6.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [17.0, 6.0, 6.0, 7.0, 1.0, 2.0, 3.0],
      [19.0, 6.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [20.0, 6.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [22.0, 5.0, 6.0, 7.0, 0.0, 2.0, 3.0],
      [23.0, 5.0, 6.0, 7.0, 0.0, 2.0, 3.0],
    ],
    [
      [2.0, 10.0, 6.0, 2.0, 1.0, 0.0, 0.0],
      [3.0, 10.0, 6.0, 2.0, 1.0, 0.0, 0.0],
      [4.0, 10.0, 6.0, 2.0, 1.0, 0.0, 0.0],
      [5.0, 10.0, 6.0, 2.0, 1.0, 0.0, 0.0],
      [6.0, 9.0, 6.0, 3.0, 1.0, 1.0, 0.0],
      [7.0, 9.0, 6.0, 3.0, 1.0, 1.0, 0.0],
      [8.0, 9.0, 6.0, 3.0, 1.0, 1.0, 0.0],
      [9.0, 9.0, 6.0, 3.0, 1.0, 1.0, 0.0],
      [10.5, 8.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [11.5, 8.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [11.5, 8.0, 6.0, 5.0, 1.0, 2.0, 0.0],
      [12.5, 8.0, 6.0, 5.0, 1.0, 2.0, 0.0],
      [13.0, 8.0, 6.0, 6.0, 1.0, 2.0, 0.0],
      [13.0, 8.0, 6.0, 6.0, 1.0, 2.0, 1.0],
      [13.5, 8.0, 6.0, 7.0, 1.0, 2.0, 1.0],
      [13.5, 7.0, 6.0, 7.0, 1.0, 2.0, 2.0],
      [15.5, 7.0, 6.0, 7.0, 1.0, 2.0, 2.0],
      [16.5, 7.0, 6.0, 7.0, 1.0, 2.0, 2.0],
      [17.5, 7.0, 6.0, 7.0, 1.0, 2.0, 2.0],
      [19.5, 7.0, 6.0, 7.0, 0.0, 2.0, 2.0],
      [20.5, 7.0, 6.0, 7.0, 0.0, 2.0, 2.0],
      [21.5, 6.0, 6.0, 7.0, 0.0, 2.0, 2.0],
      [22.5, 6.0, 6.0, 7.0, 0.0, 2.0, 2.0],
    ],
    [
      [2.0, 12.0, 6.0, 1.0, 0.5, 0.0, 0.0],
      [3.0, 11.0, 6.0, 1.0, 1.0, 0.0, 0.0],
      [4.0, 11.0, 6.0, 1.0, 1.0, 0.0, 0.0],
      [5.0, 11.0, 6.0, 1.0, 1.0, 0.0, 0.0],
      [6.0, 11.0, 6.0, 1.0, 1.0, 0.0, 0.0],
      [7.0, 10.0, 6.0, 2.0, 1.0, 1.0, 0.0],
      [8.0, 10.0, 6.0, 2.0, 1.0, 1.0, 0.0],
      [9.0, 10.0, 6.0, 2.0, 1.0, 1.0, 0.0],
      [10.0, 10.0, 6.0, 2.0, 1.0, 1.0, 0.0],
      [10.5, 9.0, 6.0, 4.0, 1.0, 1.0, 0.0],
      [11.0, 9.0, 6.0, 4.0, 1.0, 2.0, 0.0],
      [11.5, 9.0, 6.0, 5.0, 1.0, 2.0, 0.0],
      [12.5, 9.0, 6.0, 5.0, 1.0, 2.0, 0.0],
      [13.0, 9.0, 6.0, 6.0, 1.0, 2.0, 0.0],
      [13.0, 9.0, 6.0, 6.0, 1.0, 2.0, 1.0],
      [14.0, 9.0, 6.0, 7.0, 1.0, 2.0, 1.0],
      [15.0, 9.0, 6.0, 7.0, 1.0, 2.0, 1.0],
      [16.0, 8.0, 6.0, 7.0, 1.0, 2.0, 1.0],
      [17.0, 8.0, 6.0, 7.0, 1.0, 2.0, 1.0],
      [18.0, 8.0, 6.0, 7.0, 1.0, 2.0, 1.0],
      [19.0, 8.0, 6.0, 7.0, 1.0, 2.0, 1.0],
      [21.0, 7.0, 6.0, 7.0, 1.0, 2.0, 1.0],
      [22.0, 7.0, 6.0, 7.0, 1.0, 2.0, 1.0],
    ],
    [
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [1.0, 13.0, 6.0, 2.0, 1.5, 1.0, 0.0],
      [2.0, 12.0, 6.0, 4.0, 1.5, 1.0, 0.0],
      [3.0, 12.0, 6.0, 4.0, 1.5, 1.0, 0.0],
      [4.0, 12.0, 6.0, 4.0, 1.5, 1.0, 0.0],
      [5.0, 12.0, 6.0, 4.0, 1.5, 1.0, 0.0],
      [6.0, 11.0, 6.0, 4.0, 1.5, 1.0, 0.0],
      [7.0, 11.0, 6.0, 4.0, 1.5, 1.0, 0.0],
      [8.0, 11.0, 6.0, 4.0, 1.5, 1.0, 0.0],
      [9.0, 11.0, 6.0, 5.0, 1.5, 1.0, 0.0],
      [10.0, 10.0, 6.0, 5.0, 1.5, 2.0, 0.0],
      [11.0, 10.0, 6.0, 5.0, 1.5, 2.0, 0.0],
      [12.0, 10.0, 6.0, 5.0, 1.5, 2.0, 0.0],
      [13.0, 10.0, 6.0, 6.0, 1.5, 2.0, 0.0],
      [14.0, 9.0, 6.0, 6.0, 1.5, 2.0, 0.0],
      [15.0, 9.0, 6.0, 6.0, 1.5, 2.0, 0.0],
      [16.0, 9.0, 6.0, 7.0, 1.5, 2.0, 0.0],
      [17.0, 9.0, 6.0, 7.0, 1.5, 2.0, 0.0],
      [18.0, 8.0, 6.0, 7.0, 2.0, 2.0, 0.0],
      [19.0, 8.0, 6.0, 7.0, 2.0, 2.0, 0.0],
      [20.0, 8.0, 6.0, 7.0, 2.0, 2.0, 0.0],
      [21.0, 8.0, 6.0, 7.0, 2.0, 2.0, 0.0],
    ],
    [
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [1.0, 14.0, 6.0, 3.0, 1.0, 1.0, 0.0],
      [2.0, 13.0, 6.0, 3.0, 2.0, 1.0, 0.0],
      [3.0, 13.0, 6.0, 3.0, 2.0, 1.0, 0.0],
      [4.0, 13.0, 6.0, 3.0, 2.0, 1.0, 0.0],
      [5.0, 13.0, 6.0, 3.0, 2.0, 1.0, 0.0],
      [6.0, 12.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [7.0, 12.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [8.0, 12.0, 6.0, 5.0, 2.0, 1.0, 0.0],
      [9.0, 12.0, 6.0, 5.0, 2.0, 1.0, 0.0],
      [10.0, 11.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [11.0, 11.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [12.0, 11.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [13.0, 11.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [14.0, 11.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [15.0, 10.0, 6.0, 6.0, 2.0, 2.0, 0.0],
      [16.0, 10.0, 6.0, 6.0, 2.0, 2.0, 0.0],
      [17.0, 10.0, 6.0, 6.0, 2.0, 2.0, 0.0],
      [18.0, 10.0, 6.0, 6.0, 2.0, 2.0, 0.0],
      [19.0, 9.0, 6.0, 7.0, 2.0, 2.0, 0.0],
      [20.0, 9.0, 6.0, 7.0, 2.0, 2.0, 0.0],
    ],
    [
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [1.5, 14.5, 6.0, 4.0, 2.0, 1.0, 0.0],
      [2.5, 14.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [3.5, 14.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [4.5, 14.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [5.5, 14.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [6.5, 14.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [8.0, 13.0, 6.0, 4.0, 2.0, 2.0, 0.0],
      [9.0, 13.0, 6.0, 4.0, 2.0, 2.0, 0.0],
      [10.0, 13.0, 6.0, 4.0, 2.0, 2.0, 0.0],
      [11.0, 12.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [12.0, 12.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [13.0, 12.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [14.0, 12.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [15.0, 12.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [16.0, 11.0, 6.0, 6.0, 2.0, 2.0, 0.0],
      [17.0, 11.0, 6.0, 6.0, 2.0, 2.0, 0.0],
      [18.0, 11.0, 6.0, 7.0, 2.0, 2.0, 0.0],
      [19.0, 11.0, 6.0, 7.0, 2.0, 2.0, 0.0],
    ],
    [
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [1.0, 16.0, 6.0, 2.0, 2.0, 1.0, 0.0],
      [2.0, 16.0, 6.0, 2.0, 2.0, 1.0, 0.0],
      [3.0, 16.0, 6.0, 2.0, 2.0, 1.0, 0.0],
      [4.0, 15.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [5.0, 15.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [6.0, 15.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [7.0, 15.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [8.0, 14.0, 6.0, 4.0, 2.0, 2.0, 0.0],
      [9.0, 14.0, 6.0, 4.0, 2.0, 2.0, 0.0],
      [10.0, 14.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [11.0, 14.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [12.0, 14.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [13.0, 13.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [14.0, 13.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [15.0, 13.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [16.0, 13.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [17.0, 12.0, 6.0, 7.0, 2.0, 2.0, 0.0],
      [18.0, 12.0, 6.0, 7.0, 2.0, 2.0, 0.0],
    ],
    [
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0],
      [1.0, 17.0, 6.0, 3.0, 2.0, 1.0, 0.0],
      [2.0, 17.0, 6.0, 3.0, 2.0, 1.0, 0.0],
      [3.0, 17.0, 6.0, 3.0, 2.0, 1.0, 0.0],
      [4.0, 17.0, 6.0, 3.0, 2.0, 1.0, 0.0],
      [5.0, 16.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [6.0, 16.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [7.0, 16.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [8.0, 16.0, 6.0, 4.0, 2.0, 1.0, 0.0],
      [9.0, 15.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [10.0, 15.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [11.0, 15.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [12.0, 15.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [13.0, 15.0, 6.0, 5.0, 2.0, 2.0, 0.0],
      [14.0, 14.0, 6.0, 6.0, 2.0, 2.0, 0.0],
      [15.0, 14.0, 6.0, 6.0, 2.0, 2.0, 0.0],
      [16.0, 14.0, 6.0, 6.0, 2.0, 2.0, 0.0],
      [17.0, 14.0, 6.0, 6.0, 2.0, 2.0, 0.0],
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
      catchPatientInfo.weight,
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
    if (catchPatientInfo.PIBWCondition != "정상")
      putativeDiagnosis.push(catchPatientInfo.PIBWCondition);
  }

  //----계산한 영양소 출력하기----//
  $("#recommendDiet2").hide();
  $(".weightModify").hide();
  $("#Targht6mWeight").hide();
  $("#EastimateEnergy").hide();
  $("#guideParagraph").append(catchPatientInfo.name + "님의 분석결과");
  $("#guideParagraph3").append(catchPatientInfo.name + "님 맞춤 예시 식단");
  $("#guideParagraph4").append(catchPatientInfo.name + "님 맞춤 예시 식단");
  if (catchPatientInfo.sex == "male")
    $("#nowSexAge").append("남성 / " + catchPatientInfo.age + "세");
  else $("#nowSexAge").append("여성 / " + catchPatientInfo.age + "세");
  $("#nowHeight").append(catchPatientInfo.height + "cm");
  $("#nowWeight").append(catchPatientInfo.weight + "kg / ");
  $("#idealBodyWeight").append(
    Math.round(catchPatientInfo.IdealBodyWeight * 10) / 10 + "kg"
  );
  $(".underWeight").append(
    "~" + Math.round(catchPatientInfo.IdealBodyWeight * 0.9) + "kg"
  );
  $(".normalWeight").append(
    Math.round(catchPatientInfo.IdealBodyWeight * 0.9) +
      "~" +
      Math.round(catchPatientInfo.IdealBodyWeight * 1.09) +
      "kg"
  );
  $(".overWeight").append(
    Math.round(catchPatientInfo.IdealBodyWeight * 1.1) +
      "~" +
      Math.round(catchPatientInfo.IdealBodyWeight * 1.2) +
      "kg"
  );
  $(".obesityWeight").append(
    Math.round(catchPatientInfo.IdealBodyWeight * 1.2) +
      "~" +
      Math.round(catchPatientInfo.IdealBodyWeight * 1.3) +
      "kg"
  );
  if (catchPatientInfo.KidneyCondition > 2)
    $("#nowWeight").append(catchPatientInfo.BMICondition);
  else if (catchPatientInfo.KidneyCondition <= 2)
    $("#nowWeight").append(catchPatientInfo.PIBWCondition);

  //----권장 영양소 섭취량 출력----//
  // console.log(DietNutrient.Protein);
  const hashCKDProteinIndex = Math.round(DietNutrient.Protein / 10) - 2;
  const goalEnergy = Math.round(DietNutrient.Energy / 100) * 100;

  $("#calorie").append(goalEnergy + "kcal");
  $("#protein").append(Math.round(DietNutrient.Protein * 10) / 10 + "g");
  if (DietNutrient.Potassium == 0) {
    $("#RNKrow").hide();
    $("#RNProw").hide();
  } else {
    $("#potassium").append(DietNutrient.Potassium + "mg");
    $("#phosphorous").append(DietNutrient.Phosphorous + "mg");
  }

  //----권장 식품교환단위 계산----//
  let recommendExUnit = [, ,];
  if (catchPatientInfo.KidneyCondition <= 2) {
    if (catchPatientInfo.age > 19 || catchPatientInfo.age == 0) {
      const hashDMdiet = goalEnergy / 100 - 11;
      recommendExUnit[0] = DMDiet[0];
      recommendExUnit[1] = DMDiet[hashDMdiet];
      recommendExUnit = outputExUnit(recommendExUnit);
    } else if (catchPatientInfo.age < 20) {
      const hashGrowD = goalEnergy / 100 - 9;
      $("#recommendDiet2").show();
      recommendExUnit[0] = growthDietA[0];
      recommendExUnit[1] = growthDietA[hashGrowD];
      recommendExUnit[2] = growthDietB[hashGrowD];
      recommendExUnit = outputExUnit(recommendExUnit);
      for (i in recommendExUnit[0]) {
        let row_7_data = document.createElement("td");
        row_7_data.innerHTML = recommendExUnit[2][i];
        $("#recommendDiet2").append(row_7_data);
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
    if (goalEnergy < 1300) hashCKDD = 0;
    recommendExUnit[0] = proteinControledDiet[0];
    recommendExUnit[1] = proteinControledDiet[hashCKDProteinIndex][hashCKDD];
    recommendExUnit = outputExUnit(recommendExUnit);
  }
  console.log(recommendExUnit);

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
  let DMRFswitch = false;
  for (i in putativeDiagnosis) {
    if (i > 0) {
      $("#putativeDiagnosis").append(", ");
    }
    $("#putativeDiagnosis").append(putativeDiagnosis[i]);
    if (
      putativeDiagnosis[i] == "혈액투석" ||
      putativeDiagnosis[i] == "만성콩팥병"
    )
      DMRFswitch = true;
  }

  document.getElementById("DietGeneratorButton").addEventListener(
    "click",
    function () {
      DietGenerator(recommendExUnit, DMRFswitch);
    },
    false
  );

  localStorage.removeItem("patient-info");
});
/**
 * 식단 생성 함수
 * @param {array} REU 식품군 권장섭취 단위수
 * @param {boolean} DMRFswitch 콩팥병 있으면 true, 없으면 false
 */
function DietGenerator(REU, DMRFswitch) {
   /**
   * 당뇨 Example Menu
   ** [한식 = 0, 양식 = 1, 일품 = 2, 간식 = 3]
   ** [아침 = 0, 점심 = 1, 저녁 = 2]
   ** [단백질 단위수 (0.5, 1, 1.5) => 1, (2~) => 2]
   ** [메뉴 5,6개 탄수화물 = 0, 단백질= 1 or 2]
   ** {음식명 = menu, 사진위치 = photo, 단위수 = exchange, 분량 = weight, 눈대중분량 = serve, 분류 = type}
   */
   const DMEXD = [
    [
      [
        ["당뇨는 단백질 0단위 없음"],
        [
          {
            menu: "잡곡밥",
            photo: "foodpicture/grain/Ex1_wholegrainRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "닭찜",
            photo: "foodpicture/protein/Ex1_chickinBraise_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "김구이",
            photo: "foodpicture/vegetable/Ex1_seaweed_5g.png",
            exchange: 1,
            weight: 2,
            serve: "1장",
            type: "vegetable",
          },
          {
            menu: "깻잎지",
            photo: "foodpicture/vegetable/Ex1_sesameLevesJi_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "된장찌개",
            photo: "foodpicture/liquid/doenjangsoup.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "잡곡밥",
            photo: "foodpicture/grain/Ex1_wholegrainRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "닭찜",
            photo: "foodpicture/protein/Ex1_chickinBraise_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "장조림",
            photo: "foodpicture/rawpork40g.png",
            exchange: 1,
            weight: 20,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "깻잎지",
            photo: "foodpicture/vegetable/Ex1_sesameLevesJi_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "된장찌개",
            photo: "foodpicture/liquid/doenjangsoup.png",
            type: "liquid",
          },
        ],
      ],
      [
        ["당뇨는 단백질 0단위 없음"],
        [
          {
            menu: "잡곡밥",
            photo: "foodpicture/grain/Ex1_wholegrainRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "달걀찜",
            photo: "foodpicture/protein/Ex1_eggsteamed_60g.png",
            exchange: 1,
            weight: 70,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "오이생채",
            photo: "foodpicture/vegetable/Ex1_cucumber_70g.png",
            exchange: 1,
            weight: 70,
            serve: "중1/3개",
            type: "vegetable",
          },
          {
            menu: "돌나물무침",
            photo: "foodpicture/vegetable/Ex1_dolNaMul_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "곰국",
            photo: "foodpicture/liquid/gomguk.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "잡곡밥",
            photo: "foodpicture/grain/Ex1_wholegrainRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "달걀찜",
            photo: "foodpicture/protein/Ex1_eggsteamed_60g.png",
            exchange: 1,
            weight: 70,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "진미채무침",
            photo: "foodpicture/protein/Ex1_squid_15g.png",
            exchange: 1,
            weight: 15,
            type: "meat",
          },
          {
            menu: "돌나물무침",
            photo: "foodpicture/vegetable/Ex1_dolNaMul_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "곰국",
            photo: "foodpicture/liquid/gomguk.png",
            type: "liquid",
          },
        ],
      ],
      [
        ["당뇨는 단백질 0단위 없음"],
        [
          {
            menu: "잡곡밥",
            photo: "foodpicture/grain/Ex1_wholegrainRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "제육볶음",
            photo: "foodpicture/protein/Ex1_seasoningpork_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "고구마순볶음",
            photo: "foodpicture/vegetable/Ex1_swtpotatoStalks_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "시금치나물",
            photo: "foodpicture/vegetable/Ex1_spinach_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "미역국",
            photo: "foodpicture/liquid/seaweedsoup.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "잡곡밥",
            photo: "foodpicture/grain/Ex1_wholegrainRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "제육볶음",
            photo: "foodpicture/protein/Ex1_seasoningpork_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "갈치무조림",
            photo: "foodpicture/protein/Ex1_galchiJoRim_35g.png",
            exchange: 1,
            weight: 50,
            type: "meat",
          },
          {
            menu: "시금치나물",
            photo: "foodpicture/vegetable/Ex1_spinach_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "미역국",
            photo: "foodpicture/liquid/seaweedsoup.png",
            type: "liquid",
          },
        ],
      ],
    ],
    [
      [
        ["당뇨는 단백질 0단위 없음"],
        [
          {
            menu: "샌드위치(식빵)",
            photo: "foodpicture/grain/Ex1_bread_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1개",
            type: "grain",
          },
          {
            menu: "스크램블에그",
            photo: "foodpicture/protein/Ex1_scrambledEgg_40g.png",
            exchange: 1,
            weight: 50,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "양파",
            photo: "foodpicture/vegetable/Ex1_onion_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "상추",
            photo: "foodpicture/vegetable/Ex1_lettuce_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "피클",
            photo: "foodpicture/vegetable/Ex1_pickle_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
        ],
        [
          {
            menu: "토스트",
            photo: "foodpicture/grain/Ex1_bread_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1개",
            type: "grain",
          },
          {
            menu: "스크램블에그",
            photo: "foodpicture/protein/Ex1_scrambledEgg_40g.png",
            exchange: 1,
            weight: 50,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "햄(로스)",
            photo: "foodpicture/protein/Ex1_lowSaltHam_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "양파",
            photo: "foodpicture/vegetable/Ex1_onion_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "피클",
            photo: "foodpicture/vegetable/Ex1_pickle_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
        ],
      ],
      [
        ["당뇨는 단백질 0단위 없음"],
        [
          {
            menu: "베이글",
            photo: "foodpicture/grain/Ex1_bagel_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1/2개",
            type: "grain",
          },
          {
            menu: "크림치즈",
            photo: "foodpicture/protein/Ex1_cremeCheeze_30g.png",
            exchange: 1,
            weight: 30,
            type: "meat",
          },
          {
            menu: "야채샐러드",
            photo: "foodpicture/vegetable/Ex1_salad_56g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "피클",
            photo: "foodpicture/vegetable/Ex1_pickle_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "커피 (차)",
            photo: "foodpicture/liquid/coffee.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "베이글",
            photo: "foodpicture/grain/Ex1_bagel_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1/2개",
            type: "grain",
          },
          {
            menu: "크림치즈",
            photo: "foodpicture/protein/Ex1_cremeCheeze_30g.png",
            exchange: 1,
            weight: 30,
            type: "meat",
          },
          {
            menu: "연어구이",
            photo: "foodpicture/protein/Ex1_salmon_grill_40g.png",
            exchange: 1,
            weight: 50,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "야채샐러드",
            photo: "foodpicture/vegetable/Ex1_salad_56g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "피클",
            photo: "foodpicture/vegetable/Ex1_pickle_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "커피 (차)",
            photo: "foodpicture/liquid/coffee.png",
            type: "liquid",
          },
        ],
      ],
      [
        ["당뇨는 단백질 0단위 없음"],
        [
          {
            menu: "모닝빵",
            photo: "foodpicture/grain/Ex1_morningBread_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1개",
            type: "grain",
          },
          {
            menu: "풀드포크",
            photo: "foodpicture/protein/Ex1_pulledpork_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "코울슬로",
            photo: "foodpicture/vegetable/Ex1_coleslaw_40g.png",
            exchange: 1,
            weight: 40,
            type: "vegetable",
          },
          {
            menu: "아스파라거스",
            photo: "foodpicture/vegetable/Ex1_asparagus_34g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "송이버섯구이",
            photo: "foodpicture/vegetable/Ex1_kingoystermushroom_33g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "야채스프",
            photo: "foodpicture/liquid/tomatoSoup.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "모닝빵",
            photo: "foodpicture/grain/Ex1_morningBread_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1개",
            type: "grain",
          },
          {
            menu: "안심스테이크",
            photo: "foodpicture/protein/Ex2_tenderloinsteak_80g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "코울슬로",
            photo: "foodpicture/vegetable/Ex1_coleslaw_40g.png",
            exchange: 1,
            weight: 40,
            type: "vegetable",
          },
          {
            menu: "아스파라거스",
            photo: "foodpicture/vegetable/Ex1_asparagus_34g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "송이버섯구이",
            photo: "foodpicture/vegetable/Ex1_kingoystermushroom_33g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "야채스프",
            photo: "foodpicture/liquid/tomatoSoup.png",
            type: "liquid",
          },
        ],
      ],
    ],
    [
      [
        ["당뇨는 단백질 0단위 없음"],
        [
          {
            menu: "스파게티",
            photo: "foodpicture/grain/Ex1_linguini_30g.png",
            exchange: 1,
            weight: 35,
            serve: "1인분",
            type: "grain",
          },
          {
            menu: "조개살",
            photo: "foodpicture/protein/Ex1_clam_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3컵",
            type: "meat",
          },
          {
            menu: "양송이버섯",
            photo: "foodpicture/vegetable/Ex1_buttonmushroom_50g.png",
            exchange: 1,
            weight: 50,
            serve: "3개",
            type: "vegetable",
          },
          {
            menu: "마늘",
            photo: "foodpicture/vegetable/Ex1_garlic_7g.png",
            exchange: 1,
            weight: 7,
            type: "vegetable",
          },
          {
            menu: "피클",
            photo: "foodpicture/vegetable/Ex1_pickle_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "봉골레소스",
            photo: "foodpicture/liquid/vongole.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "스파게티",
            photo: "foodpicture/grain/Ex1_linguini_30g.png",
            exchange: 1,
            weight: 35,
            serve: "1인분",
            type: "grain",
          },
          {
            menu: "관자",
            photo: "foodpicture/protein/Ex1_scallup_30g.png",
            exchange: 1,
            weight: 30,
            type: "meat",
          },
          {
            menu: "조개살",
            photo: "foodpicture/protein/Ex1_clam_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3컵",
            type: "meat",
          },
          {
            menu: "마늘",
            photo: "foodpicture/vegetable/Ex1_garlic_7g.png",
            exchange: 1,
            weight: 7,
            type: "vegetable",
          },
          {
            menu: "피클",
            photo: "foodpicture/vegetable/Ex1_pickle_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "봉골레소스",
            photo: "foodpicture/liquid/vongole.png",
            type: "liquid",
          },
        ],
      ],
      [
        ["당뇨는 단백질 0단위 없음"],
        [
          {
            menu: "비빔밥(잡곡밥)",
            photo: "foodpicture/grain/Ex1_wholegrainRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "계란후라이",
            photo: "foodpicture/protein/Ex1_egg_fry_60g.png",
            exchange: 1,
            weight: 70,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "콩나물",
            photo: "foodpicture/vegetable/Ex1_sprouts_70g.png",
            exchange: 1,
            weight: 70,
            serve: "익혀서2/5컵",
            type: "vegetable",
          },
          {
            menu: "오색나물",
            photo: "foodpicture/vegetable/Ex1_5colorNamul_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "고추장(알룰로스)",
            photo: "foodpicture/liquid/redChiliPaste.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "비빔밥(잡곡밥)",
            photo: "foodpicture/grain/Ex1_wholegrainRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "고기",
            photo: "foodpicture/protein/Ex1_beefBulgogi_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "계란후라이",
            photo: "foodpicture/protein/Ex1_egg_fry_60g.png",
            exchange: 1,
            weight: 70,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "오색나물",
            photo: "foodpicture/vegetable/Ex1_5colorNamul_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "고추장(알룰로스)",
            photo: "foodpicture/liquid/redChiliPaste.png",
            type: "liquid",
          },
        ],
      ],
      [
        ["당뇨는 단백질 0단위 없음"],
        [
          {
            menu: "떡국(떡)",
            photo: "foodpicture/grain/Ex1_ttukgug_50g.png",
            exchange: 1,
            weight: 50,
            serve: "썰은 것 11개",
            type: "grain",
          },
          {
            menu: "계란지단",
            photo: "foodpicture/protein/Ex1_eggpan_ 50g.png",
            exchange: 1,
            weight: 50,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "대파",
            photo: "foodpicture/vegetable/Ex1_springonion_55g.png",
            exchange: 1,
            weight: 55,
            type: "vegetable",
          },
          {
            menu: "김",
            photo: "foodpicture/vegetable/Ex1_seaweed_5g.png",
            exchange: 1,
            weight: 2,
            type: "vegetable",
          },
          {
            menu: "김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          { menu: "멸치육수", photo: null, type: "liquid" },
        ],
        [
          {
            menu: "떡국(떡)",
            photo: "foodpicture/grain/Ex1_ttukgug_50g.png",
            exchange: 1,
            weight: 50,
            serve: "썰은 것 11개",
            type: "grain",
          },
          {
            menu: "고기고명",
            photo: "foodpicture/protein/Ex1_pork_ballBraise_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "계란지단",
            photo: "foodpicture/protein/Ex1_eggpan_ 50g.png",
            exchange: 1,
            weight: 50,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "대파",
            photo: "foodpicture/vegetable/Ex1_springonion_55g.png",
            exchange: 1,
            weight: 55,
            type: "vegetable",
          },
          {
            menu: "김",
            photo: "foodpicture/vegetable/Ex1_seaweed_5g.png",
            exchange: 1,
            weight: 2,
            type: "vegetable",
          },
          {
            menu: "김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
        ],
      ],
    ],
    [
      {
        menu: "우유",
        photo: "foodpicture/milk200ml.png",
        exchange: 1,
        weight: 200,
        serve: "1잔",
        type: "milk",
      },
      {
        menu: "사과",
        photo: "foodpicture/fruit/Ex1_apple_100g.png",
        exchange: 1,
        weight: 80,
        serve: "1/3개",
        type: "fruit",
      },
      {
        menu: "참외",
        photo: "foodpicture/fruit/Ex1_orientalMelon_150g.png",
        exchange: 1,
        weight: 150,
        serve: "1/2개",
        type: "fruit",
      },
      {
        menu: "토마토",
        photo: "foodpicture/fruit/EX1_tomato_300g.png",
        exchange: 1,
        weight: 300,
        serve: "2개",
        type: "fruit",
      },
    ],
  ];
/**
   * 당뇨 & 콩팥병 Example Menu
   ** [한식 = 0, 양식 = 1, 일품 = 2, 간식 = 3]
   ** [아침 = 0, 점심 = 1, 저녁 = 2]
   ** [단백질 단위수 0 => 0 (0.5, 1, 1.5) => 1, (2~) => 2]
   ** [메뉴 5,6개 탄수화물 = 0, 단백질= 1 or 2]
   ** {음식명 = menu, 사진위치 = photo, 단위수 = exchange, 분량 = weight, 눈대중분량 = serve, 분류 = type}
   */
  const DMLP = [
    [
      [
        [
          {
            menu: "흰밥",
            photo: "foodpicture/grain/Ex1_whiteRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "도토리묵",
            photo: "foodpicture/grain/Ex1_acornjelly_200g.png",
            exchange: 1,
            weight: 200,
            type: "grain",
          },
          {
            menu: "가지나물",
            photo: "foodpicture/vegetable/Ex1_eggplantNamul_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/2컵",
            type: "vegetable",
          },
          {
            menu: "상추",
            photo: "foodpicture/vegetable/Ex1_lettuce_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "콩나물국",
            photo: "foodpicture/liquid/beansproutsoup.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "흰밥",
            photo: "foodpicture/grain/Ex1_whiteRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "계란후라이",
            photo: "foodpicture/protein/Ex1_egg_fry_60g.png",
            exchange: 1,
            weight: 50,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "깻잎튀김",
            photo: "foodpicture/vegetable/Ex1_sesameLeafFry_24g.png",
            exchange: 1,
            weight: 20,
            type: "vegetable",
          },
          {
            menu: "상추",
            photo: "foodpicture/vegetable/Ex1_lettuce_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "콩나물국",
            photo: "foodpicture/liquid/beansproutsoup.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "흰밥",
            photo: "foodpicture/grain/Ex1_whiteRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "돈육찜",
            photo: "foodpicture/protein/Ex1_porkbraise_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "계란후라이",
            photo: "foodpicture/protein/Ex1_egg_fry_60g.png",
            exchange: 1,
            weight: 50,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "상추",
            photo: "foodpicture/vegetable/Ex1_lettuce_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "콩나물국",
            photo: "foodpicture/liquid/beansproutsoup.png",
            type: "liquid",
          },
        ],
      ],
      [
        [
          {
            menu: "흰밥",
            photo: "foodpicture/grain/Ex1_whiteRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "고사리볶음",
            photo: "foodpicture/vegetable/Ex1_seasonedBracken_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "도라지생채",
            photo: "foodpicture/vegetable/Ex1_ballonflowerrootsalad_70g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "얼갈이나물",
            photo: "foodpicture/vegetable/Ex1_winterPlowing_70g.png",
            exchange: 1,
            weight: 63,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "무국",
            photo: "foodpicture/liquid/radishsoup.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "흰밥",
            photo: "foodpicture/grain/Ex1_whiteRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "닭찜",
            photo: "foodpicture/protein/Ex1_chickinBraise_40g.png",
            exchange: 1,
            weight: 40,
            serve: "3/4덩이",
            type: "meat",
          },
          {
            menu: "도라지생채",
            photo: "foodpicture/vegetable/Ex1_ballonflowerrootsalad_70g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "얼갈이나물",
            photo: "foodpicture/vegetable/Ex1_winterPlowing_70g.png",
            exchange: 1,
            weight: 63,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "무국",
            photo: "foodpicture/liquid/radishsoup.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "흰밥",
            photo: "foodpicture/grain/Ex1_whiteRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "닭찜",
            photo: "foodpicture/protein/Ex1_chickinBraise_40g.png",
            exchange: 1,
            weight: 40,
            serve: "3/4덩이",
            type: "meat",
          },
          {
            menu: "갈치구이",
            photo: "foodpicture/protein/Ex1_cutlassfish_grill_40g.png",
            exchange: 1,
            weight: 50,
            serve: "1토막",
            type: "meat",
          },
          {
            menu: "얼갈이나물",
            photo: "foodpicture/vegetable/Ex1_winterPlowing_70g.png",
            exchange: 1,
            weight: 63,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "무국",
            photo: "foodpicture/liquid/radishsoup.png",
            type: "liquid",
          },
        ],
      ],
      [
        [
          {
            menu: "흰밥",
            photo: "foodpicture/grain/Ex1_whiteRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "궁중떡볶이",
            photo: "foodpicture/grain/Ex1_ttuk_50g.png",
            exchange: 1,
            weight: 50,
            type: "grain",
          },
          {
            menu: "더덕구이",
            photo: "foodpicture/vegetable/Ex1_grilleddeodeok_42g.png",
            exchange: 1,
            weight: 42,
            type: "vegetable",
          },
          {
            menu: "양배추찜",
            photo: "foodpicture/vegetable/Ex1_cabbage_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "미역국",
            photo: "foodpicture/liquid/seaweedsoup.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "흰밥",
            photo: "foodpicture/grain/Ex1_whiteRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "소불고기",
            photo: "foodpicture/protein/Ex1_beefBulgogi_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "팽이버섯전",
            photo: "foodpicture/vegetable/Ex1_enokitakemushroomPancake_40g.png",
            exchange: 1,
            weight: 40,
            type: "vegetable",
          },
          {
            menu: "양배추찜",
            photo: "foodpicture/vegetable/Ex1_cabbage_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "미역국",
            photo: "foodpicture/liquid/seaweedsoup.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "흰밥",
            photo: "foodpicture/grain/Ex1_whiteRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "소불고기",
            photo: "foodpicture/protein/Ex1_beefBulgogi_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "두부전",
            photo: "foodpicture/protein/Ex1_tufuFry_80g.png",
            exchange: 1,
            weight: 80,
            serve: "1/6모",
            type: "meat",
          },
          {
            menu: "양배추찜",
            photo: "foodpicture/vegetable/Ex1_cabbage_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "미역국",
            photo: "foodpicture/liquid/seaweedsoup.png",
            type: "liquid",
          },
        ],
      ],
    ],
    [
      [
        [
          {
            menu: "샌드위치(식빵)",
            photo: "foodpicture/grain/Ex1_bread_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1장",
            type: "grain",
          },
          {
            menu: "상추",
            photo: "foodpicture/vegetable/Ex1_lettuce_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "양파",
            photo: "foodpicture/vegetable/Ex1_onion_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "올리브소스",
            photo: "foodpicture/liquid/olivesauce.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "샌드위치(식빵)",
            photo: "foodpicture/grain/Ex1_bread_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1장",
            type: "grain",
          },
          {
            menu: "오믈렛",
            photo: "foodpicture/protein/Ex1_omelet_50g.png",
            exchange: 1,
            weight: 50,
            type: "meat",
          },
          {
            menu: "양파",
            photo: "foodpicture/vegetable/Ex1_onion_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "상추",
            photo: "foodpicture/vegetable/Ex1_lettuce_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "저염피클",
            photo: "foodpicture/vegetable/Ex1_pickle_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
        ],
        [
          {
            menu: "샌드위치(식빵)",
            photo: "foodpicture/grain/Ex1_bread_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1장",
            type: "grain",
          },
          {
            menu: "오믈렛",
            photo: "foodpicture/protein/Ex1_omelet_50g.png",
            exchange: 1,
            weight: 50,
            type: "meat",
          },
          {
            menu: "저염햄",
            photo: "foodpicture/protein/Ex1_lowSaltHam_40g.png",
            exchange: 1,
            weight: 40,
            type: "meat",
          },
          {
            menu: "상추",
            photo: "foodpicture/vegetable/Ex1_lettuce_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "저염피클",
            photo: "foodpicture/vegetable/Ex1_pickle_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
        ],
      ],
      [
        [
          {
            menu: "베이글",
            photo: "foodpicture/grain/Ex1_bagel_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1/2개",
            type: "grain",
          },
          {
            menu: "바질페스토",
            photo: "foodpicture/liquid/baselpesto.png",
            exchange: 1,
            weight: 29,
            type: "vegetable",
          },
          {
            menu: "야채샐러드",
            photo: "foodpicture/vegetable/Ex1_salad_56g.png",
            exchange: 1,
            weight: 56,
            type: "vegetable",
          },
          {
            menu: "저염피클",
            photo: "foodpicture/vegetable/Ex1_pickle_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "커피(차)",
            photo: "foodpicture/liquid/coffee.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "베이글",
            photo: "foodpicture/grain/Ex1_bagel_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1/2개",
            type: "grain",
          },
          {
            menu: "브리치즈",
            photo: "foodpicture/protein/Ex1_bricheeze_30g.jpg",
            exchange: 1,
            weight: 30,
            type: "meat",
          },
          {
            menu: "야채샐러드",
            photo: "foodpicture/vegetable/Ex1_salad_56g.png",
            exchange: 1,
            weight: 56,
            type: "vegetable",
          },
          {
            menu: "저염피클",
            photo: "foodpicture/vegetable/Ex1_pickle_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "커피(차)",
            photo: "foodpicture/liquid/coffee.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "베이글",
            photo: "foodpicture/grain/Ex1_bagel_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1/2개",
            type: "grain",
          },
          {
            menu: "브리치즈",
            photo: "foodpicture/protein/Ex1_bricheeze_30g.jpg",
            exchange: 1,
            weight: 30,
            type: "meat",
          },
          {
            menu: "연어구이",
            photo: "foodpicture/protein/Ex1_salmon_grill_40g.png",
            exchange: 1,
            weight: 50,
            type: "meat",
          },
          {
            menu: "야채샐러드",
            photo: "foodpicture/vegetable/Ex1_salad_56g.png",
            exchange: 1,
            weight: 56,
            type: "vegetable",
          },
          {
            menu: "저염피클",
            photo: "foodpicture/vegetable/Ex1_pickle_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "커피(차)",
            photo: "foodpicture/liquid/coffee.png",
            type: "liquid",
          },
        ],
      ],
      [
        [
          {
            menu: "모닝빵",
            photo: "foodpicture/grain/Ex1_morningBread_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1개",
            type: "grain",
          },
          {
            menu: "마카로니범벅",
            photo: "foodpicture/grain/Ex1_macaroni_30g.png",
            exchange: 1,
            weight: 30,
            type: "grain",
          },
          {
            menu: "코울슬로",
            photo: "foodpicture/vegetable/Ex1_coleslaw_40g.png",
            exchange: 1,
            weight: 40,
            type: "vegetable",
          },
          {
            menu: "아스파라거스",
            photo: "foodpicture/vegetable/Ex1_asparagus_34g.png",
            exchange: 1,
            weight: 40,
            type: "vegetable",
          },
          {
            menu: "새송이버섯구이",
            photo: "foodpicture/vegetable/Ex1_kingoystermushroom_33g.png",
            exchange: 1,
            weight: 33,
            type: "highPotassium",
          },
        ],
        [
          {
            menu: "모닝빵",
            photo: "foodpicture/grain/Ex1_morningBread_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1개",
            type: "grain",
          },
          {
            menu: "감자으깸",
            photo: "foodpicture/vegetable/Ex1_meshedPotato_50g.png",
            exchange: 1,
            weight: 50,
            type: "grain",
          },
          {
            menu: "풀드포크",
            photo: "foodpicture/protein/Ex1_pulledpork_40g.png",
            exchange: 1,
            weight: 40,
            type: "meat",
          },
          {
            menu: "코울슬로",
            photo: "foodpicture/vegetable/Ex1_coleslaw_40g.png",
            exchange: 1,
            weight: 40,
            type: "vegetable",
          },
          {
            menu: "아스파라거스",
            photo: "foodpicture/vegetable/Ex1_asparagus_34g.png",
            exchange: 1,
            weight: 40,
            type: "vegetable",
          },

          {
            menu: "새송이버섯구이",
            photo: "foodpicture/vegetable/Ex1_kingoystermushroom_33g.png",
            exchange: 1,
            weight: 33,
            type: "highPotassium",
          },
        ],
        [
          {
            menu: "모닝빵",
            photo: "foodpicture/grain/Ex1_morningBread_35g.png",
            exchange: 1,
            weight: 35,
            serve: "1개",
            type: "grain",
          },
          {
            menu: "감자으깸",
            photo: "foodpicture/vegetable/Ex1_meshedPotato_50g.png",
            exchange: 1,
            weight: 50,
            type: "grain",
          },
          {
            menu: "스테이크",
            photo: "foodpicture/protein/Ex2_tenderloinsteak_80g.png",
            exchange: 1,
            weight: 40,
            type: "meat",
          },
          {
            menu: "코울슬로",
            photo: "foodpicture/vegetable/Ex1_coleslaw_40g.png",
            exchange: 1,
            weight: 40,
            type: "vegetable",
          },
          {
            menu: "아스파라거스",
            photo: "foodpicture/vegetable/Ex1_asparagus_34g.png",
            exchange: 1,
            weight: 40,
            type: "vegetable",
          },
          {
            menu: "새송이버섯구이",
            photo: "foodpicture/vegetable/Ex1_kingoystermushroom_33g.png",
            exchange: 1,
            weight: 33,
            type: "highPotassium",
          },
        ],
      ],
    ],
    [
      [
        [
          {
            menu: "스파게티(링귀니)",
            photo: "foodpicture/grain/Ex1_linguini_30g.png",
            exchange: 1,
            weight: 30,
            serve: "1인분",
            type: "grain",
          },
          {
            menu: "가지",
            photo: "foodpicture/vegetable/Ex1_eggplant_45g.png",
            exchange: 1,
            weight: 70,
            serve: "1/2컵",
            type: "vegetable",
          },
          {
            menu: "파프리카",
            photo: "foodpicture/vegetable/Ex1_paprika_45g.png",
            exchange: 1,
            weight: 45,
            type: "vegetable",
          },
          {
            menu: "마늘",
            photo: "foodpicture/vegetable/Ex1_garlic_20g.png",
            exchange: 1,
            weight: 19,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "알리오올리오 소스",
            photo: "foodpicture/liquid/aglioolio.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "스파게티(링귀니)",
            photo: "foodpicture/grain/Ex1_linguini_30g.png",
            exchange: 1,
            weight: 30,
            serve: "1인분",
            type: "grain",
          },
          {
            menu: "새우",
            photo: "foodpicture/protein/Ex1_shrimp_40g.png",
            exchange: 1,
            weight: 40,
            serve: "중하3마리, 보리새우10마리",
            type: "meat",
          },
          {
            menu: "파프리카",
            photo: "foodpicture/vegetable/Ex1_paprika_45g.png",
            exchange: 1,
            weight: 45,
            type: "vegetable",
          },
          {
            menu: "마늘",
            photo: "foodpicture/vegetable/Ex1_garlic_20g.png",
            exchange: 1,
            weight: 19,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "알리오올리오 소스",
            photo: "foodpicture/liquid/aglioolio.png",
            type: "liquid",
          },
        ],
        [
          {
            menu: "스파게티(링귀니)",
            photo: "foodpicture/grain/Ex1_linguini_30g.png",
            exchange: 1,
            weight: 30,
            serve: "1인분",
            type: "grain",
          },
          {
            menu: "관자",
            photo: "foodpicture/protein/Ex1_scallup_30g.png",
            exchange: 1,
            weight: 30,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "새우",
            photo: "foodpicture/protein/Ex1_shrimp_40g.png",
            exchange: 1,
            weight: 40,
            serve: "중하3마리, 보리새우10마리",
            type: "meat",
          },
          {
            menu: "마늘",
            photo: "foodpicture/vegetable/Ex1_garlic_20g.png",
            exchange: 1,
            weight: 19,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "알리오올리오 소스",
            photo: "foodpicture/liquid/aglioolio.png",
            type: "liquid",
          },
        ],
      ],
      [
        [
          {
            menu: "덮밥(흰밥)",
            photo: "foodpicture/grain/Ex1_whiteRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "가지튀김",
            photo: "foodpicture/vegetable/Ex1_eggplantFry_45g.png",
            exchange: 1,
            weight: 70,
            serve: "1/2컵",
            type: "vegetable",
          },
          {
            menu: "애호박",
            photo: "foodpicture/vegetable/Ex1_zucchini_45g.png",
            exchange: 1,
            weight: 45,
            type: "vegetable",
          },
          {
            menu: "양파",
            photo: "foodpicture/vegetable/Ex1_onion_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "양송이버섯",
            photo: "foodpicture/vegetable/Ex1_buttonmushroom_50g.png",
            exchange: 1,
            weight: 30,
            type: "highPotassium",
          },
        ],
        [
          {
            menu: "덮밥(흰밥)",
            photo: "foodpicture/grain/Ex1_whiteRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "돈까스",
            photo: "foodpicture/protein/Ex1_porkFried_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "양파",
            photo: "foodpicture/vegetable/Ex1_onion_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "양송이버섯",
            photo: "foodpicture/vegetable/Ex1_buttonmushroom_50g.png",
            exchange: 1,
            weight: 30,
            type: "highPotassium",
          },
        ],
        [
          {
            menu: "덮밥(흰밥)",
            photo: "foodpicture/grain/Ex1_whiteRice_70g.png",
            exchange: 1,
            weight: 70,
            serve: "1/3공기",
            type: "grain",
          },
          {
            menu: "돈까스",
            photo: "foodpicture/protein/Ex1_porkFried_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "계란후라이",
            photo: "foodpicture/protein/Ex1_egg_fry_60g.png",
            exchange: 1,
            weight: 50,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "양파",
            photo: "foodpicture/vegetable/Ex1_onion_70g.png",
            exchange: 1,
            weight: 70,
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
        ],
      ],
      [
        [
          {
            menu: "떡국(떡)",
            photo: "foodpicture/grain/Ex1_ttukgug_50g.png",
            exchange: 1,
            weight: 50,
            serve: "10개",
            type: "grain",
          },
          {
            menu: "대파",
            photo: "foodpicture/vegetable/Ex1_springonion_55g.png",
            exchange: 1,
            weight: 55,
            type: "vegetable",
          },
          {
            menu: "김",
            photo: "foodpicture/vegetable/Ex1_seaweed_5g.png",
            exchange: 1,
            weight: 5,
            serve: "2장",
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
          {
            menu: "표고버섯",
            photo: "foodpicture/vegetable/Ex1_shiitake_30g.png",
            exchange: 1,
            weight: 30,
            serve: "2개",
            type: "highPotassium",
          },
        ],
        [
          {
            menu: "떡국(떡)",
            photo: "foodpicture/grain/Ex1_ttukgug_50g.png",
            exchange: 1,
            weight: 50,
            serve: "10개",
            type: "grain",
          },
          {
            menu: "고기고명",
            photo: "foodpicture/protein/Ex1_pork_ballBraise_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "대파",
            photo: "foodpicture/vegetable/Ex1_springonion_55g.png",
            exchange: 1,
            weight: 55,
            type: "vegetable",
          },
          {
            menu: "김",
            photo: "foodpicture/vegetable/Ex1_seaweed_5g.png",
            exchange: 1,
            weight: 5,
            serve: "2장",
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
        ],
        [
          {
            menu: "떡국(떡)",
            photo: "foodpicture/grain/Ex1_ttukgug_50g.png",
            exchange: 1,
            weight: 50,
            serve: "10개",
            type: "grain",
          },
          {
            menu: "고기고명",
            photo: "foodpicture/protein/Ex1_pork_ballBraise_40g.png",
            exchange: 1,
            weight: 40,
            serve: "1덩이",
            type: "meat",
          },
          {
            menu: "계란지단",
            photo: "foodpicture/protein/Ex1_eggpan_ 50g.png",
            exchange: 1,
            weight: 50,
            serve: "1개",
            type: "meat",
          },
          {
            menu: "대파",
            photo: "foodpicture/vegetable/Ex1_springonion_55g.png",
            exchange: 1,
            weight: 55,
            type: "vegetable",
          },
          {
            menu: "김",
            photo: "foodpicture/vegetable/Ex1_seaweed_5g.png",
            exchange: 1,
            weight: 5,
            serve: "2장",
            type: "vegetable",
          },
          {
            menu: "저염김치",
            photo: "foodpicture/vegetable/Ex1_kimchi_50g.png",
            exchange: 1,
            weight: 50,
            type: "vegetable",
          },
        ],
      ],
    ],
    [
      {
        menu: "우유",
        photo: "foodpicture/milk200ml.png",
        exchange: 1,
        weight: 200,
        serve: "1잔",
        type: "milk",
      },
      {
        menu: "사과",
        photo: "foodpicture/fruit/Ex1_apple_100g.png",
        exchange: 1,
        weight: 100,
        serve: "1/2개",
        type: "fruit",
      },
      {
        menu: "배",
        photo: "foodpicture/fruit/Ex1_pear_100g.png",
        exchange: 1,
        weight: 100,
        serve: "1/4개",
        type: "fruit",
      },
    ],
  ];
  for (let i = 1; i < 5; i++) {
    $("#dietEx" + i + "Name").empty();
    $("#dietEx" + i + "Weight").empty();
    $("#dietEx" + i + "Picture").empty();
    // addRowtd("#dietEx" + i + "Name", "메뉴");
    // addRowtd("#dietEx" + i + "Weight", "중량(g)");
    // addRowtd("#dietEx" + i + "Picture", " ");
  }
  let mealSelection = [];
  mealSelection.push($("input[name=breakfast]:checked").val());
  mealSelection.push($("input[name=lunch]:checked").val());
  mealSelection.push($("input[name=dinner]:checked").val());
  if ($("input[name=breakfast]:checked").val() == null) {
    document.getElementById("breakfastSelection").className += " text_under";
    let location = document.querySelector("#breakfastSelection").offsetTop;
    window.scrollTo({
      top: location - window.innerHeight / 2,
      behavior: "smooth",
    });
  } else if ($("input[name=lunch]:checked").val() == null) {
    document.getElementById("lunchSelection").className += " text_under";
    let location = document.querySelector("#lunchSelection").offsetTop;
    window.scrollTo({
      top: location - window.innerHeight / 2,
      behavior: "smooth",
    });
  } else if ($("input[name=dinner]:checked").val() == null) {
    document.getElementById("dinnerSelection").className += " text_under";
    let location = document.querySelector("#dinnerSelection").offsetTop;
    window.scrollTo({
      top: location - window.innerHeight / 2,
      behavior: "smooth",
    });
  } else {
    document.getElementById("breakfastSelection").className = "center";
    document.getElementById("lunchSelection").className = "center";
    document.getElementById("dinnerSelection").className = "center";
    let location = document.querySelector(".page2").offsetTop;
    window.scrollTo({
      top: location + window.innerHeight * 1.3,
      behavior: "smooth",
    });
    let exampleDiet = [];
    // console.log(exampleDiet);
    if (DMRFswitch == true) {
      let hashprotein = 0;
      for (let i = 0; i < 3; i++) {
        hashprotein = hashProExch(REU[i + 2]);
        exampleDiet.push(
          dietMultiple(DMLP[mealSelection[i]][i][hashprotein], REU[i + 2])
        );
      }
      exampleDiet.push(sneckMultiple(DMLP[3], REU));
    } else if (DMRFswitch == false) {
      let hashprotein = 0;
      for (let i = 0; i < 3; i++) {
        hashprotein = hashProExch(REU[i + 2]);
        exampleDiet.push(
          dietMultiple(DMEXD[mealSelection[i]][i][hashprotein], REU[i + 2])
        );
      }
      exampleDiet.push(sneckMultiple(DMEXD[3], REU));
    }
    // console.log(exampleDiet);
    for (let i = 0; i < 4; i++) {
      printPhoto(exampleDiet[i], i + 1);
    }
  }
}
/**
 * 권장량에 맞는 식사 메뉴 양 설정
 * @param {array} EXD 식단 메뉴 구성
 * @param {array} reu 식품군 권장섭취 단위수
 * @returns {array} 식사메뉴 리스트
 */
function dietMultiple(EXD, reu) {
  let ed = [];
  ed = makecopy(EXD);
  let grain = [];
  let vege = [];
  let meat = [];
  for (j in ed) {
    if (ed[j].type == "grain") grain.push(j);
    else if (ed[j].type == "vegetable") vege.push(j);
    else if (ed[j].type == "meat") meat.push(j);
  }
  if (grain.length == 1) {
    ed[grain[0]].exchange = reu[0];
    ed[grain[0]].weight = Math.round(
      ed[grain[0]].weight * ed[grain[0]].exchange
    );
  } else if (grain.length == 2) {
    ed[grain[0]].exchange = reu[0] - 1;
    ed[grain[0]].weight = Math.round(
      ed[grain[0]].weight * ed[grain[0]].exchange
    );
  }
  if (meat.length == 1) {
    ed[meat[0]].exchange = reu[1];
    ed[meat[0]].weight = Math.round(ed[meat[0]].weight * ed[meat[0]].exchange);
  } else if (meat.length == 2) {
    ed[meat[0]].exchange = divide2part(reu[1]);
    ed[meat[0]].weight = Math.round(ed[meat[0]].weight * ed[meat[0]].exchange);
    ed[meat[1]].exchange = reu[1] - ed[meat[0]].exchange;
    ed[meat[1]].weight = Math.round(ed[meat[1]].weight * ed[meat[1]].exchange);
  }
  return ed;
}
/**
 * 권장량에 맞는 간식 메뉴 양 설정
 * @param {array} EXD 간식 메뉴 구성
 * @param {array} REU 식품군 권장섭취 단위수
 * @returns {array} 간식메뉴리스트
 */
function sneckMultiple(EXD, REU) {
  let sneck = [];
  let snectCopy = makecopy(EXD);
  /* 우유 권장량 설정 */
  if (REU[1][4] > 0) {
    snectCopy[0].exchange = REU[1][4];
    snectCopy[0].weight = snectCopy[0].weight * snectCopy[0].exchange;
    sneck.push(snectCopy[0]);
  }
  /* 과일 권장량 설정 */
  for (let i = 0; i < REU[1][5]; i++) {
    sneck.push(snectCopy[i + 1]);
  }
  return sneck;
}
/**
 * make deep array copy
 * @param {[json]} originalContent 복사할 변수
 * @returns {array} 복사된 변수
 */
function makecopy(originalContent) {
  let cloneBag = {
    a: originalContent,
  };
  const deepClone = JSON.parse(JSON.stringify(cloneBag));
  return deepClone.a;
}
/**
 * 0.5 진수 정수로 숫자를 둘로 나눠주는 함수
 * @param {number} a 둘로 나눌 숫자
 * @returns 둘 중 큰 숫자
 */
function divide2part(a) {
  let b = 0;
  let c = 0;
  b = Math.round(a / 2);
  c = a - b;
  if (b > c) c = b;
  return c;
}
/**
 * protein hash tag 변환 함수
 * @param {[...number]} reu 식품군 권장 섭취 단위수
 * @returns {number} 해시태그 숫자
 */
function hashProExch(reu) {
  let a = 0;
  if (reu[1] == 0) a = 0;
  else if (reu[1] > 0 && reu[1] < 2) a = 1;
  else if (reu[1] >= 2) a = 2;
  return a;
}
/**
 * 음식이름, 권장섭취량(무게), 음식사진 출력하는 함수
 * @param {[...json]} ed 해당 식사 메뉴
 * @param {number} meal 식사 아침=1, 점심=2, 저녁=3
 */
function printPhoto(ed, meal) {
  for (i in ed) {
    addRowtd("#dietEx" + meal + "Name", ed[i].menu, ed[i].type);
    if (ed[i].weight == undefined)
      addRowtd("#dietEx" + meal + "Weight", " ", ed[i].type);
    else addRowtd("#dietEx" + meal + "Weight", ed[i].weight, ed[i].type);
    let foodimg = "";
    if (ed[i].photo != null) {
      foodimg = document.createElement("IMG");
      foodimg.setAttribute("src", ed[i].photo);
      foodimg.setAttribute("class", "foodPhoto");
      foodimg.setAttribute("alt", ed[i].menu);
      let rowdata = document.createElement("td");
      rowdata.append(foodimg);
      $("#dietEx" + meal + "Picture").append(rowdata);
    } else addRowtd("#dietEx" + meal + "Picture", foodimg);
  }
}
/**
 * 식품군 권장 섭취량 출력하는 함수
 * @param {[[...number]]} reu 식품군 권장섭취 단위수
 * @returns {[...[...number]]}식품군 권장섭취량을 아침,점심,저녁으로 쪼갠 배열
 */
function outputExUnit(reu) {
  let breakfestExUnit = [];
  let lunchExUnit = [];
  let dinnerExUnit = [];
  for (i in reu[0]) {
    let BLD = divide3part(reu[1][i]);
    addRowtd("#recommendDietName", reu[0][i]);
    addRowtd("#recommendDiet", reu[1][i]);
    breakfestExUnit.push(BLD[1]);
    lunchExUnit.push(BLD[0]);
    dinnerExUnit.push(BLD[2]);
    addRowtd("#rDB", breakfestExUnit[i]);
    addRowtd("#rDL", lunchExUnit[i]);
    addRowtd("#rDD", dinnerExUnit[i]);
  }
  return [...reu, breakfestExUnit, lunchExUnit, dinnerExUnit];
}
/**
 * 0.5 진수 정수로 숫자를 셋으로 나눠주는 함수
 * @param {number} num 셋으로 나눌 숫자
 * @returns [a,b,c] //a >= b >= c
 */
function divide3part(num) {
  let BLD = [0, 0, 0];
  if (num % 1.5 === 0) {
    BLD[0] = num / 3;
    BLD[1] = BLD[0];
    BLD[2] = BLD[0];
  } else {
    BLD[0] = Math.round(num / 3);
    BLD[1] = num - 2 * BLD[0];
    BLD[2] = BLD[0];
    BLD.sort(function (a, b) {
      return b - a;
    });
  }
  return BLD;
}
/**
 * HTML에 글자 추가 하는 함수
 * @param {string} location 출력할 위치
 * @param {string} content 출력할 내용
 * @param {string} className 출력할 때 cass이름을 달고 싶으면 추가
 */
function addRowtd(location, content, className) {
  let rowdata = document.createElement("td");
  if (className != undefined) {
    rowdata.setAttribute("class", className);
  }
  rowdata.innerHTML = content;
  $(location).append(rowdata);
}

function proteinIntake(dm, w, p1, p2) {
  if (dm == "당뇨") {
    return w * p1;
  } else {
    return w * p2;
  }
}
