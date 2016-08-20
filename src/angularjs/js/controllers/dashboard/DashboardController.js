import { sum } from '../../utils/chart'

class DashboardController {
  constructor($timeout) {
    this.sales = {
      today: {
        title: "Sale Today",
        value: 420
      },
      like: {
        title: "Page Likes",
        value: 2340
      },
      registration: {
        title: "New Registration",
        value: 53
      }
    }

    this.saleChart = {
      data: {
        labels: ["","MicroSD 64Gb","Mountain Bike", "Flashdrive 128Mb", "Notebook", "MiniPC i5", "Raspberry Pi2",""],
        series: [
          [103560,103560,91008,75008,69808, 45000, 29601,29601],
        ]
      },
      config: {
        axisX: {
          position: 'center'
        },
        axisY: {
          offset: 0,
          showLabel: false,
          labelInterpolationFnc: function(value, index, labels) {
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
              return '$' + value.toFixed(2)
            }
          })
        ]
      }
    }

    this.browserChart = {
      data: {
        series: [1000, 480, 705, 105, 50]
      },
      config: {
        labelInterpolationFnc: (value) => {
          return Math.round(value / this.browserChart.data.series.reduce(sum) * 100) + '%';
        },
        donut: true,
        donutWidth: 40,
        labelPosition: 'outside'
      }
    }

    this.osChart = {
      data: {
        series: [1300, 200, 605, 205, 100, 50]
      },
      config: {
        labelInterpolationFnc: (value) => {
          return Math.round(value / this.osChart.data.series.reduce(sum) * 100) + '%';
        },
        donut: true,
        donutWidth: 40,
        labelPosition: 'outside'
      }
    }

    this.chartReload = () => {
      $timeout(() => {
        angular.element('chartist').each(function(i, elm) {
          elm.__chartist__.update();
        });
      }, 0);
    }
  }
}

export default DashboardController