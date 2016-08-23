
if($('.ct-chart-browser').length) { 
  let data = {
    series: [1000, 480, 705, 105, 50]
  };

  let sum = (a, b) => { return a + b };

  new Chartist.Pie('.ct-chart-browser', data, {
    labelInterpolationFnc: (value) => {
      return Math.round(value / data.series.reduce(sum) * 100) + '%';
    },
    donut: true,
    donutWidth: 40,
    labelPosition: 'outside'
  });
}

if($('.ct-chart-os').length) { 
  let data = {
    series: [1300, 200, 605, 205, 100, 50]
  };

  let sum = (a, b) => { return a + b };

  new Chartist.Pie('.ct-chart-os', data, {
    labelInterpolationFnc: (value) => {
      return Math.round(value / data.series.reduce(sum) * 100) + '%';
    },
    donut: true,
    donutWidth: 40,
    labelPosition: 'outside'
  });
}

$(".tab-stats a[data-toggle='tab']").on("shown.bs.tab", (e) => {
  $(e.currentTarget.hash).find('.chart').each(function(el, tab) {
    tab.__chartist__.update();
  });
})


if($('.ct-chart-sale').length) {
  new Chartist.Line('.ct-chart-sale', {
    labels: ["","MicroSD","Bike", "Flashdrive", "Notebook", "Gamepad", "MiniPC i5", "RPi2",""],
    series: [
      [103560,103560,91008,75008,69808,62000, 45000, 29601,29601],
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
    ['screen and (max-width: 481px)', {
      axisX: {
        showLabel: false
      }
    }]
  ])
}