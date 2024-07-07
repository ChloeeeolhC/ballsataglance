import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '高尔夫球项目奥运奖牌总数占比情况'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 12, name: 'USA' },
        { value: 3, name: 'UK' },
        { value: 1, name: 'CAN' },
        { value: 1, name: 'CHN' },
        { value: 1, name: 'KOR' },
        { value: 1, name: 'NZL' },
        { value: 1, name: 'SWE' }
      ]
    }
  ]
};

option && myChart.setOption(option);
