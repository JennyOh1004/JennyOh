//flat skill chart

// Hide Legend
Chart.defaults.global.legend.display = false;
// Create Chart
var riskMeterctx = document.getElementById("myHtml");
var myChart = new Chart(riskMeterctx, {
  type: "doughnut",
  data: {
    labels: ["HTML"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#E57373"],
        hoverBackgroundColor: ["#36A2EB"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    animation: {
      animateScale: true,
      cutoutPercentage: 80,
    },
    title: {
      display: true,
      text: "HTML",
      fontSize: 17,
    },
  },
});

// Hide Legend
Chart.defaults.global.legend.display = false;
// Create Chart
var riskMeterctx = document.getElementById("myCss");
var myChart = new Chart(riskMeterctx, {
  responsive: true,
  type: "doughnut",
  data: {
    labels: ["CSS"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#FF8A65"],
        hoverBackgroundColor: ["#36A2EB"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    animation: {
      animateScale: true,
    },
    title: {
      display: true,
      text: "CSS",
      fontSize: 17,
    },
  },
});

// Hide Legend
Chart.defaults.global.legend.display = false;
// Create Chart
var riskMeterctx = document.getElementById("myJs");
var myChart = new Chart(riskMeterctx, {
  responsive: true,
  type: "doughnut",
  data: {
    labels: ["JS"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#FFF176"],
        hoverBackgroundColor: ["#36A2EB"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    animation: {
      animateScale: true,
    },
    title: {
      display: true,
      text: "JavaScript",
      fontSize: 17,
    },
  },
});

// Hide Legend
Chart.defaults.global.legend.display = false;
// Create Chart
var riskMeterctx = document.getElementById("myReact");
var myChart = new Chart(riskMeterctx, {
  responsive: true,
  type: "doughnut",
  data: {
    labels: ["React"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#81C784"],
        hoverBackgroundColor: ["#36A2EB"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    animation: {
      animateScale: true,
    },
    title: {
      display: true,
      text: "React",
      fontSize: 17,
    },
  },
});

// Hide Legend
Chart.defaults.global.legend.display = false;
// Create Chart
var riskMeterctx = document.getElementById("myRuby");
var myChart = new Chart(riskMeterctx, {
  responsive: true,
  type: "doughnut",
  data: {
    labels: ["Ruby"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#64B5F6"],
        hoverBackgroundColor: ["#36A2EB"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    animation: {
      animateScale: true,
    },
    title: {
      display: true,
      text: "Ruby",
      fontSize: 17,
    },
  },
});

// Hide Legend
Chart.defaults.global.legend.display = false;
// Create Chart
var riskMeterctx = document.getElementById("myRails");
var myChart = new Chart(riskMeterctx, {
  responsive: true,
  type: "doughnut",
  data: {
    labels: ["Rails"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#BA68C8"],
        hoverBackgroundColor: ["#36A2EB"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    animation: {
      animateScale: true,
    },
    title: {
      display: true,
      text: "Rails",
      fontSize: 17,
    },
  },
});
