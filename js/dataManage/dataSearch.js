/*
* @Author: caijianbin
* @Date:   2018-05-29 9:00:56
*/

$(function(){
    $(".dataAndLongRange span").click(function(){
        $(this).addClass("selected").siblings("span").removeClass("selected").parent().siblings(".dataAndLongRangeCon").children("div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
        _initChart($(this).index())
    })
    // 数据质量报告弹窗切换
    $(".data-tab-wrap .tab").on('click', function () {
        $(this).addClass("selected").siblings(".tab").removeClass("selected").parent().siblings(".modal-body").children(".data-quality-wrap").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    })
    // 数据专家修正模式
    $("input[name='correct']").on('change', function () {
        if ($('#batchCorrect').prop('checked')) {
            $('.batch-correct-wrap').show()
        } else {
            $('.batch-correct-wrap').hide()
        }
    })
    // 是否可输入修正值
    $('#correctionValcb').on('change', function () {
        if ($(this).prop('checked')) {
            $('#correctionVal').prop('disabled', false).siblings('label').removeClass('text-disable')
        } else {
            $('#correctionVal').prop('disabled', true).siblings('label').addClass('text-disable')
        }
    })
});

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
                color: '#fd1818'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#666666'
            }
        },
        data: ["05-21 9:00","05-21 10:00","05-21 11:00","05-21 12:00","05-21 13:00","05-21 14:00","05-21 15:00"]
    }],
    grid: { // 控制图的大小，调整下面这些值就可以，
        top: 35,
        bottom: 20
    },
    yAxis: [{
        type: 'value',
        name: '单位：mg/L',
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
            show: false
        }
    }],
    series: [
        {
            name: '正常',
            type: 'bar',
            barWidth: 20,
            stack: '总量',
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#40c5ff'
                    }, {
                        offset: 1,
                        color: '#378dfe'
                    }])
                }
            },
            data: [-10,9,8,5,6,4,2],
            markLine : {
                itemStyle: {
                    normal: {
                        color:'#fd1818',
                        label: {

                            formatter: '{c}'
                        }
                    }
                },
                data : [
                    {
                        type: 'max',
                        yAxis: 10
                    },
                    {
                        type: 'min',
                        yAxis: -10
                    }
                ]
            }
        },
        {
            name: '超标',
            type: 'bar',
            barWidth: 10,
            stack: '总量',
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'insideRight'
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#ff8000'
                    }, {
                        offset: 0.47,
                        color: '#ff6700'
                    }, {
                        offset: 1,
                        color: '#ff4e00'
                    }])
                }
            },
            data: [-2,5,4,5,8,6,4]
        }
    ]

};
// 初始化图表
var _initChart = function (index) {
    if (index == 0) {
        return
    }
    var myChart;
    if (index == 1) {
        myChart = echarts.init(document.getElementById('chart1'));
        option.yAxis[0]['name'] = '单位：mg/L'
    } else {
        myChart = echarts.init(document.getElementById('chart2'));
        option.yAxis[0]['name'] = '单位：%'
    }

    myChart.setOption(option)
    // 根据屏幕自适应
    window.onresize = myChart.resize;
}