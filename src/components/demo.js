
if($('.ct-chart-browser').length) { 
  let data = {
    series: [1000, 480, 705, 105, 50]
  };

  let sum = (a, b) => { return a + b };

  new Chartist.Pie('.ct-chart-browser', data, {
    labelInterpolationFnc: (value) => {
      return Math.round(value / data.series.reduce(sum) * 100) + '%';
    },
    labelPosition: 'inside',
    startAngle: 270
  });
}

if($('.ct-chart-os').length) { 
  let data = {
    series: [1300, 200, 605, 205, 100]
  };

  let sum = (a, b) => { return a + b };

  new Chartist.Pie('.ct-chart-os', data, {
    labelInterpolationFnc: (value) => {
      return Math.round(value / data.series.reduce(sum) * 100) + '%';
    },
    startAngle: 270,
    donut: true,
    donutWidth: 20,
    labelPosition: 'outside',
    labelOffset: -30
  });
}

$(".tab-stats a[data-toggle='tab']").on("shown.bs.tab", (e) => {
  $(e.currentTarget.hash).find('.chart').each(function(el, tab) {
    tab.__chartist__.update();
  });
})


if($('.ct-chart-sale').length) {
  new Chartist.Line('.ct-chart-sale', {
    labels: ["10:20", "10:30", "10:40", "10:50", "11:00", "11:10", "11:20", "11:30", "11:40", "11:50", "12:00", "12:10", "12:20", "12:30", "12:40", "12:50", "13:00", "13:10", "13:20", "13:30"],
    series: [
      [2710 ,2810 ,4210 ,8010 ,19158 ,35326 ,80837 ,79477 ,88561 ,67807 ,70837 ,55261 ,66216 ,10516 ,13493 ,12000 ,14253 ,33506 ,56326 ,78986 ,20747 ,44165 ,13817],
    ]
  }, {
    axisX: {
      position: 'center'
    },
    axisY: {
      offset: 0,
      showLabel: false,
      labelInterpolationFnc: function(value) {
        return (value / 1000) + 'k';
      }
    },
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    height: 250,
    high: 120000,
    showArea: true,
    stackBars: true,
    fullWidth: true,
    lineSmooth: false,
    plugins: [
      Chartist.plugins.ctPointLabels({
        textAnchor: 'left',
        labelInterpolationFnc: function(value) {
          return '$' + parseInt(value / 1000) + 'k'
        }
      })
    ]
  }, [
    ['screen and (max-width: 768px)', {
      axisX: {
        offset: 0,
        showLabel: false
      },
      height: 180
    }]
  ])
}


if($('#flot-chart-dashboard').length) { 
  var data = [],
    data2 = [],
    totalPoints = 50,
    updateInterval = 1000;

  function getRandomData() {

    if (data.length > 0)
      data = data.slice(1);

    // Do a random walk

    while (data.length < totalPoints) {

      var prev = data.length > 0 ? data[data.length - 1] : 50,
        y = prev + Math.random() * 10 - 5;

      if (y < 0) {
        y = 0;
      } else if (y > 100) {
        y = 100;
      }

      data.push(y);
    }

    // Zip the generated y values with the x values

    var res = [];
    for (var i = 0; i < data.length; ++i) {
      res.push([i, data[i]])
    }

    return res;
  }

  // Set up the control widget

  var plot = $.plot("#flot-chart-dashboard", [ {
    data: getRandomData(),
    bars: {
      show: true
    }
  }], {
    series: {
      shadowSize: 0, // Drawing is faster without shadows
      bars: {
        lineWidth: 1,
        fill: true,
        fillColor: "#39c3da"
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      show: false
    },
    xaxis: {
      show: false,
      min: 0,
      max: 50
    },
    colors: ["#FFF"],
    grid: {
      margin: 0,
      axisMargin: 0,
      borderWidth: 0
    }
  });

  function update() {

    plot.setData([{
      data: getRandomData(),
      bars: {
        show: true
      }
    }]);

    // Since the axes don't change, we don't need to call plot.setupGrid()

    plot.draw();
    setTimeout(update, updateInterval);
  }

  update();
}


if($('#flot-chart-monitoring').length) { 
  var data2 = [],
    totalPoints = 50,
    updateInterval = 1000;

  function getRandomData2() {

    if (data2.length > 0)
      data2 = data2.slice(1);

    // Do a random walk

    while (data2.length < totalPoints) {

      var prev = data2.length > 0 ? data2[data2.length - 1] : 50,
        y = prev + Math.random() * 10 - 5;

      if (y < 0) {
        y = 0;
      } else if (y > 100) {
        y = 100;
      }

      data2.push(y);
    }

    // Zip the generated y values with the x values

    var res = [];
    for (var i = 0; i < data2.length; ++i) {
      res.push([i, data2[i]])
    }

    return res;
  }

  // Set up the control widget

  var plot2 = $.plot("#flot-chart-monitoring", [ {
    data: getRandomData2(),
    bars: {
      show: true
    }
  }], {
    series: {
      shadowSize: 0, // Drawing is faster without shadows
      bars: {
        lineWidth: 1,
        fill: true,
        fillColor: "#FFBC11"
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      show: false
    },
    xaxis: {
      show: false,
      min: 0,
      max: 50
    },
    colors: ["#FFF"],
    grid: {
      margin: 0,
      axisMargin: 0,
      borderWidth: 0
    }
  });

  function updateMonitoring() {

    plot2.setData([{
      data: getRandomData2(),
      bars: {
        show: true
      }
    }]);

    // Since the axes don't change, we don't need to call plot.setupGrid()

    plot2.draw();
    setTimeout(updateMonitoring, updateInterval);
  }

  updateMonitoring();
}