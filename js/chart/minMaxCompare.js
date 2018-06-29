$(function () {
    _initChart()
})

function _initChart() {
    var myChart = echarts.init(document.getElementById('chart1'))
    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type : 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#E3E3E3'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#666666'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            data : ['白马河站','五四河站','瀛洲河站','凤坂河站','彬德闸排涝站']
        },
        yAxis: {
            type : 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#E3E3E3'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#666666'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        series: [
            {
                name: '辅助',
                type: 'bar',
                barWidth: 30,
                stack:  '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [0.003, 0.003, 0.0025, 0.004, 0.002]
            },
            {
                name: '最大值最小值',
                type: 'bar',
                barWidth: 30,
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#ff4e00'},
                                {offset: 0.5, color: '#ff6700'},
                                {offset: 1, color: '#ff8000'}
                            ]
                        )
                    },
                },
                data:[0.006, 0.008, 0.0055, 0.0048, 0.007]
            },
            {
                name:'',
                type:'line',
                itemStyle: {
                    normal: {
                        color: '#f6c42e'
                    }
                },
                data:[0.006, 0.009, 0.0055, 0.0048, 0.007]
            }
        ]
    };
    myChart.setOption(option)
    // 根据屏幕自适应
    $(window).on('resize', function () {
        initChartWH()
        myChart.resize()
    })
}