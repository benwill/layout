export const Sankey = {
  title: {
    text: "Highcharts Sankey Diagram",
  },
  accessibility: {
    point: {
      valueDescriptionFormat:
        "{index}. {point.from} to {point.to}, {point.weight}.",
    },
  },
  series: [
    {
      keys: ["from", "to", "weight"],
      data: [
        ["Brazil", "Portugal", 5],
        ["Brazil", "France", 1],
        ["Brazil", "Spain", 1],
        ["Brazil", "England", 1],
        ["Canada", "Portugal", 1],
        ["Canada", "France", 5],
        ["Canada", "England", 1],
        ["Mexico", "Portugal", 1],
        ["Mexico", "France", 1],
        ["Mexico", "Spain", 5],
        ["Mexico", "England", 1],
        ["USA", "Portugal", 1],
        ["USA", "France", 1],
        ["USA", "Spain", 1],
        ["USA", "England", 5],
        ["Portugal", "Angola", 2],
        ["Portugal", "Senegal", 1],
        ["Portugal", "Morocco", 1],
        ["Portugal", "South Africa", 3],
        ["France", "Angola", 1],
        ["France", "Senegal", 3],
        ["France", "Mali", 3],
        ["France", "Morocco", 3],
        ["France", "South Africa", 1],
        ["Spain", "Senegal", 1],
        ["Spain", "Morocco", 3],
        ["Spain", "South Africa", 1],
        ["England", "Angola", 1],
        ["England", "Senegal", 1],
        ["England", "Morocco", 2],
        ["England", "South Africa", 7],
        ["South Africa", "China", 5],
        ["South Africa", "India", 1],
        ["South Africa", "Japan", 3],
        ["Angola", "China", 5],
        ["Angola", "India", 1],
        ["Angola", "Japan", 3],
        ["Senegal", "China", 5],
        ["Senegal", "India", 1],
        ["Senegal", "Japan", 3],
        ["Mali", "China", 5],
        ["Mali", "India", 1],
        ["Mali", "Japan", 3],
        ["Morocco", "China", 5],
        ["Morocco", "India", 1],
        ["Morocco", "Japan", 3],
      ],
      type: "sankey",
      name: "Sankey demo series",
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
