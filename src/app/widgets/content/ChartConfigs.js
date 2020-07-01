export const Pie = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
  },
  title: {
    text: "Browser<br>shares<br>2017",
    align: "center",
    verticalAlign: "middle",
    y: 60,
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: "bold",
          color: "white",
        },
      },
      startAngle: -90,
      endAngle: 90,
      center: ["50%", "75%"],
      size: "110%",
    },
  },
  series: [
    {
      type: "pie",
      name: "Browser share",
      innerSize: "50%",
      data: [
        ["Chrome", 58.9],
        ["Firefox", 13.29],
        ["Internet Explorer", 13],
        ["Edge", 3.78],
        ["Safari", 3.42],
        {
          name: "Other",
          y: 7.61,
          dataLabels: {
            enabled: false,
          },
        },
      ],
    },
  ],
};

export const Line = {
  chart: {
    type: "area",
  },
  title: {
    text: "Historic and Estimated Worldwide Population Growth by Region",
  },
  subtitle: {
    text: "Source: Wikipedia.org",
  },
  xAxis: {
    categories: ["1750", "1800", "1850", "1900", "1950", "1999", "2050"],
    tickmarkPlacement: "on",
    title: {
      enabled: false,
    },
  },
  yAxis: {
    title: {
      text: "Billions",
    },
    labels: {
      formatter: function () {
        return this.value / 1000;
      },
    },
  },
  tooltip: {
    split: true,
    valueSuffix: " millions",
  },
  plotOptions: {
    area: {
      stacking: "normal",
      lineColor: "#666666",
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: "#666666",
      },
    },
  },
  series: [
    {
      name: "Asia",
      data: [502, 635, 809, 947, 1402, 3634, 5268],
    },
    {
      name: "Africa",
      data: [106, 107, 111, 133, 221, 767, 1766],
    },
    {
      name: "Europe",
      data: [163, 203, 276, 408, 547, 729, 628],
    },
    {
      name: "America",
      data: [18, 31, 54, 156, 339, 818, 1201],
    },
    {
      name: "Oceania",
      data: [2, 2, 2, 6, 13, 30, 46],
    },
  ],
};
