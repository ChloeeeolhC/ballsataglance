import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '羽毛球项目各国奥运奖牌总数'
  },
  xAxis: {
    type: 'category',
    data: [
      'CHN',
      'INA',
      'KOR',
      'DEN',
      'USA',
      'MAS',
      'GBR',
      'JPN',
      'India',
      'ESP',
      'NED',
      'RUS'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        32,
        18,
        17,
        8,
        7,
        6,
        3,
        3,
        {
          value: 2,
          itemStyle: {
            color: '#a90000'
          }
        },
        1,
        1,
        1
      ],
      type: 'bar'
    }
  ]
};

option && myChart.setOption(option);
