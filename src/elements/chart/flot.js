
if($('#flot-chart').length) { 
  var data = [],
    data2 = [],
    totalPoints = 300,
    updateInterval = 250;

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
    for (var i = 0; i < data.length; ++i) {
      res.push([i, data2[i]])
    }

    return res;
  }

  // Set up the control widget

  var plot = $.plot("#flot-chart", [ getRandomData(), getRandomData2()], {
    series: {
      shadowSize: 0 // Drawing is faster without shadows
    },
    yaxis: {
      min: 0,
      max: 100,
      color: "#BBB",
      tickColor: "#EEE"
    },
    xaxis: {
      show: false
    },
    colors: ["#29c75f", "#39c3da"],
    grid: {
      margin: 0,
      borderWidth: 0
    }
  });

  function update() {

    plot.setData([getRandomData(), getRandomData2()]);

    // Since the axes don't change, we don't need to call plot.setupGrid()

    plot.draw();
    setTimeout(update, updateInterval);
  }

  update();
}