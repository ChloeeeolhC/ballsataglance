import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '奥运网球项目奖牌总数前五的国家'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['Spain', 'Germany', 'France', 'UK', 'USA']
  },
  series: [
    {
      name: '奖牌总数',
      type: 'bar',
      data: [10, 11, 19, 35, 65]
    }
  ]
};

option && myChart.setOption(option);
