$(function () {
    _initChart()
    $('#dateType1').change(function () {
        $('.date-wrap').hide()
        $('.date-wrap' + $(this).val()).show()
    })
})

function _initChart () {
    var myChart = echarts.init(document.getElementById('chart1'))
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }

        },
        calculable: true,
        xAxis: [{
            type: 'category',
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
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月"]
        }],
        grid: { // 控制图的大小，调整下面这些值就可以，
            top: '2%',
            bottom: 20
        },
        yAxis: [{
            type: 'value',
            min: 0,
            max: 100,
            splitNumber: 10,
            axisTick: {
                show: false
            },
            axisLabel:{
                formatter: '{value} %',
                textStyle: {
                    color: '#666666'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#E3E3E3'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        }],
        series: [
            {
                name: 'Ⅰ～Ⅲ类水',
                type: 'bar',
                barWidth: 60,
                stack: '总量',
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: 'insideRight'
                        },
                        color: '#2eadfc'
                    }
                },
                data: [85, 95, 88, 98, 94, 91, 97, 99, 99]
            },
            {
                name: 'Ⅳ～Ⅴ类水',
                type: 'bar',
                barWidth: 60,
                stack: '总量',
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: 'insideRight'
                        },
                        color: '#f29c15'
                    }
                },
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: '劣Ⅴ类水',
                type: 'bar',
                barWidth: 60,
                stack: '总量',
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: 'insideRight'
                        },
                        color: '#f35352'
                    }
                },
                data: [15, 5, 12, 2, 6, 9, 3, 1, 1]
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