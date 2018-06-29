$(function () {
    $(".dataAndLongRange span").click(function(){
        $(this).addClass("selected").siblings("span").removeClass("selected").parent().siblings(".dataAndLongRangeCon").children("div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
        _initChart($(this).index())
    })
    _initChart(0);
})

var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
        left: '4%',
        right: '4%',
        top: '2%',
        bottom: '5%'
    },
    xAxis: [
        {
            type: 'category',
            data: ['白马河站','省电大站','五四河站','瀛洲河站','凤坂河站','彬德闸排涝站'],
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
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位：mg/L',
            min: 0,
            max: 1,
            interval: 0.1,
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
            splitLine:{show: false} //去除网格线
        },
        {
            type: 'value',
            name: '增长率',
            min: -60,
            max: 60,
            interval: 20,
            splitLine:{show: false}, //去除网格线
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'2016',
            type:'bar',
            barWidth: 40,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#378dfe'
                    }, {
                        offset: 1,
                        color: '#40c5ff'
                    }])
                }
            },
            data:[0.24, 0.58, 0.22, 0.45, 0.5, 0.9]
        },
        {
            name:'2017',
            type:'bar',
            barWidth: 40,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#ff4e00'
                    }, {
                        offset: 1,
                        color: '#ff8000'
                    }])
                }
            },
            data:[0.14, 0.3, 0.2, 0.65, 0.75, 0.83]
        },
        {
            name:'增长率',
            type:'line',
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#f6c42e'
                }
            },
            data:[-50, -40, -10, 40, 30, -20]
        }
    ]
};

function _initChart(index) {
    var myChart
    if (index == 0) {
        myChart = echarts.init(document.getElementById('chart1'))
    }
    if (index == 1) {
        myChart = echarts.init(document.getElementById('chart2'))
    }
    myChart.setOption(option)
    // 根据屏幕自适应
    $(window).on('resize', function () {
        initChartWH()
        myChart.resize()
    })
}