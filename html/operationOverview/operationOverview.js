
$(function () {
    initWH()
    _initChart1()
    _initChart2()
    _initChart3()
    _initChart4()
    _initChart5()
})

// 初始化图表宽高
function initWH () {
    var width = (($(document).width() * 0.85 - 70) / 2 -10) + 'px'
    $('.h1').css({width: width, height: '271px'})
    $('.h2').css({width: width, height: '196px'})
    $('.h3').css({width: width, height: '226px'})
}

// 运维次数
function _initChart1() {
    var myChart = echarts.init(document.getElementById('operationTimes'));
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            x: 'right',
            top: '2%',
            itemWidth: 12,
            itemHeight: 12,
            data:['不合格数','合格数']
        },
        series : [
            {
                name: '运维次数',
                type: 'pie',
                radius : '70%',
                center: ['50%', '50%'],
                label: {
                    normal: {
                        formatter: '{b}：{c}'
                    }
                },
                data:[
                    {
                        value:5,
                        name:'不合格数',
                        itemStyle: {
                            normal: {color: '#ff6d6d'}
                        }
                    },
                    {
                        value:15,
                        name:'合格数',
                        itemStyle: {
                            normal: {color: '#539FFF'}
                        }
                    }
                ]
            }
        ]
    };
    myChart.setOption(option)
    chartResize(myChart)
}

// 任务状态比例图
function _initChart2 () {
    var myChart = echarts.init(document.getElementById('taskState'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            x: 'center',
            top: '2%',
            itemWidth: 12,
            itemHeight: 12,
            data:['待接收','任务准备中','准备单审核中','任务执行中','运维报告审核中']
        },
        color:['#71d671', '#ffeb44', '#f39fff', '#ff3e36', '#ff6d6d'],
        series: [
            {
                name:'任务状态比例',
                type:'pie',
                radius: ['20%', '55%'],
                label: {
                    normal: {
                        formatter: '{b}：{d}%'
                    }
                },
                labelLine: {
                    normal: {
                        length: 25
                    }
                },
                data:[
                    {
                        value:25,
                        name:'待接收'
                    },
                    {
                        value:18,
                        name:'任务准备中'
                    },
                    {
                        value:15,
                        name:'准备单审核中'
                    },
                    {
                        value:22,
                        name:'任务执行中'
                    },
                    {
                        value:20,
                        name:'运维报告审核中'
                    }
                ]
            }
        ]
    };
    myChart.setOption(option)
    chartResize(myChart)
}

// 柱状图公用配置
var barOption = {
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
        bottom: '6%',
        top: '18%',
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
            data : ['联网率', '数据传输率', '数据有效率', '质控合格率']
        }
    ],
    yAxis : [
        {
            name: '单位：%',
            type : 'value',
            axisTick: {
                show: false
            },
            nameTextStyle: {
                color: '#666666'
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
        }
    ],
    series : [
        {
            type:'bar',
            barWidth: 30,
            data:[60, 100, 40, 80],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#378ffe'},
                            {offset: 1, color: '#40c4ff'}
                        ]
                    )
                }
            }
        }
    ]
};

// 数据质量
function _initChart3 () {
    var option = $.extend(true, {}, barOption)
    var myChart = echarts.init(document.getElementById('dataQuality'));
    myChart.setOption(option)
    chartResize(myChart)
}

// 运维原因统计
function _initChart4 () {
    var option = $.extend(true, {}, barOption)
    option.xAxis[0].data = ['常规运维', '超标运维', '掉线运维', '仪器故障运维', '缺试剂运维']
    option.series[0].data = [80, 60, 100, 85, 85]
    option.series[0].itemStyle.normal.color = new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
            {offset: 0, color: '#28b70f'},
            {offset: 1, color: '#81dc2a'}
        ]
    )
    var myChart = echarts.init(document.getElementById('operationReason'));
    myChart.setOption(option)
    chartResize(myChart)
}

// 运维质量
function _initChart5 () {
    var option = $.extend(true, {}, barOption)
    option.yAxis[0].name = '单位：天'
    option.series[0].data = [8, 6, 10]
    option.xAxis[0].data = ['平均维护周期', '平均响应时常', '平均异常解决时间']
    option.series[0].itemStyle.normal.color = new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
            {offset: 0, color: '#ff7936'},
            {offset: 1, color: '#ffba44'}
        ]
    )
    var myChart = echarts.init(document.getElementById('operationQuality'));
    myChart.setOption(option)
    chartResize(myChart)
}

// 根据屏幕自适应
function chartResize (chart) {
    $(window).on('resize', function () {
        initWH()
        chart.resize()
    })
}