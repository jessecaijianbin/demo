$(function () {
    _initChart()
})
function _initChart () {
    var myChart = echarts.init(document.getElementById('chart1'));
    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params) {
                return params[0].name + '：' + params[0].data
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
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
                data : ['总磷', '总氮', '溶解氧', '电导率', '浊度']
            }
        ],
        yAxis : [
            {
                name: '次数',
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
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: 30,
                data:[400, 350, 300, 380, 200],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#ff4e00'},
                                {offset: 1, color: '#ff8000'}
                            ]
                        )
                    }
                }
            }
        ]
    };
    myChart.setOption(option)
    // 根据屏幕自适应
    window.onresize = myChart.resize;
}