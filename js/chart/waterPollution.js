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
                data : ['总磷', 'CODmn', '挥发酚', '氟化物', '总锌', '总磷', '氨氮', '总镉', 'pH']
            }
        ],
        yAxis : [
            {
                name: '超标站点个数',
                nameLocation:'middle',
                nameGap: 35,
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
                },
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: 30,
                data:[4, 5, 6, 3, 2, 1, 3, 2, 4],
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = ['#5082e4','#5056b8','#dce292','#7160af','#4d8cae', '#ff8401', '#71c8f2', '#80adc6', '#026bc2'];
                            return colorList[params.dataIndex]
                        }
                    }
                }
            }
        ]
    };
    myChart.setOption(option)
    // 根据屏幕自适应
    window.onresize = myChart.resize;
}