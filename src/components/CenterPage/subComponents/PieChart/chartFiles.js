export const options = {
  cutoutPercentage: 70,
  maintainAspectRatio: false,
  responsive: true,
  rotation: Math.PI * -29,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
      },
    },
  },
};

export const chartData = (aug) => {
  let labels = [];
  let dataValues = [];
  let backgroundColor = [];

  if (aug.chart.classTime) {
    if (aug.selected === "All") {
      labels = ["Class", "Study", "Free"];
      dataValues = [
        aug.chart.classTime.total,
        aug.chart.studyTime.total,
        aug.chart.freeTime.total,
      ];
      backgroundColor = ["#2196f3", "#ff9800", "#8bc34a"];
    }
    if (aug.selected === "Class-time only") {
      labels = ["Class", "Rest total"];
      dataValues = [
        aug.chart.classTime.total,
        parseInt(aug.chart.totalTime.total) -
          parseInt(aug.chart.classTime.total),
      ];
      backgroundColor = ["#2196f3", "#c5c5c5"];
    }
    if (aug.selected === "Study-time only") {
      labels = ["Study", "Rest total"];
      dataValues = [
        aug.chart.studyTime.total,
        parseInt(aug.chart.totalTime.total) -
          parseInt(aug.chart.studyTime.total),
      ];
      backgroundColor = ["#ff9800", "#c5c5c5"];
    }
    if (aug.selected === "Free-time only") {
      labels = ["Free", "Rest total"];
      dataValues = [
        aug.chart.freeTime.total,
        parseInt(aug.chart.totalTime.total) -
          parseInt(aug.chart.freeTime.total),
      ];
      backgroundColor = ["#8bc34a", "#c5c5c5"];
    }
  }
  let data = {
    labels: labels,
    datasets: [
      {
        label: "Time spent",
        data: dataValues,
        backgroundColor: backgroundColor,
      },
    ],
  };
  return data;
};
