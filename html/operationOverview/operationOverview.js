
$(function () {
    initWH()
    _initChart1()
    _initChart2()
    _initChart3()
    _initChart4()
    _initChart5()

    // 按最近时间查询
    $(".timeTab").click(function (){
        addSelected($(this))
    })

    // 数据质量tab点击事件
    $(".dataQualityTab").click(function (){
        addSelected($(this))
    })

    // 数据质量统计
    $(".qualityStatistics").click(function () {
        addSelected($(this))
    })
})

// tab加选中效果
function addSelected ($obj) {
    $obj.addClass("selected").siblings("span").removeClass("selected")
}
// 初始化图表宽高
function initWH () {
    var width = (($(document).width() * 0.85 - 70) / 2 -10) + 'px'
    $('.h1').css({width: width, height: '405px'})
    $('.h2').css({width: width, height: '365px'})
    $('.h3').css({width: width, height: '285px'})
    $('.h4').css({width: width, height: '315px'})
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
            top: '2%',
            right: 26,
            itemWidth: 12,
            itemHeight: 12,
            data:['不合格数','合格数']
        },
        series : [
            {
                name: '运维次数',
                type: 'pie',
                radius : '65%',
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
            left: 55,
            itemWidth: 12,
            itemHeight: 12,
            data:['待接收','任务准备中','准备单审核中','准备单驳回中','任务执行中', '运维报告待提交', '运维报告审核中', '运维报告驳回中']
        },
        color:['#6092ff', '#ff635b', '#fded3a', '#e081ff', '#65d547', '#45cce0', '#8969f0', '#f58f57'],
        series: [
            {
                name:'任务状态比例',
                type:'pie',
                radius: [0, '65%'],
                center: ['50%','55%'],
                label: {
                    normal: {
                        formatter: '{b}：{d}%'
                    }
                },
                roseType: 'radius',
                data:[
                    {
                        value:19,
                        name:'待接收'
                    },
                    {
                        value:15,
                        name:'任务准备中'
                    },
                    {
                        value:14,
                        name:'准备单审核中'
                    },
                    {
                        value:13,
                        name:'准备单驳回中'
                    },
                    {
                        value:12,
                        name:'任务执行中'
                    },
                    {
                        value:11,
                        name:'运维报告待提交'
                    },
                    {
                        value:10,
                        name:'运维报告审核中'
                    },
                    {
                        value:6,
                        name:'运维报告驳回中'
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
        right: '13%',
        bottom: '6%',
        top: '8%',
        containLabel: true
    },
    yAxis : [
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
            data : ['白马河站1', '白马河站2', '白马河站3', '白马河站4', '白马河站5', '白马河站6']
        }
    ],
    xAxis : [
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
            data:[100, 80, 85, 40, 60, 55],
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
    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            itemWidth: 12,
            itemHeight: 12,
            data: ['常规', '超标','掉线','仪器故障','缺试剂']
        },
        color: ['#6092ff', '#52cfd5', '#f7d864', '#f49476', '#78d85f'],
        grid: {
            left: '3%',
            right: '13%',
            top: '10%',
            bottom: '6%',
            containLabel: true
        },
        xAxis:  {
            type: 'value',
            name: '单位：%',
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
        },
        yAxis: {
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
            data: ['白马河站1','白马河站2','白马河站3','白马河站4','白马河站5']
        },
        series: [
            {
                name: '常规',
                type: 'bar',
                stack: '总量',
                barWidth: 24,
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                    }
                },
                data: [80, 50, 50, 50, 30]
            },
            {
                name: '超标',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [60, 50, 50, 50, 40]
            },
            {
                name: '掉线',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [100, 60, 60, 60, 36]
            },
            {
                name: '仪器故障',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [60, 100, 110, 40, 40]
            },
            {
                name: '缺试剂',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [130, 80, 42, 60, 60]
            }
        ]
    };
    var myChart = echarts.init(document.getElementById('operationReason'));
    myChart.setOption(option)
    chartResize(myChart)
}

// 运维质量
function _initChart5 () {
    var option = $.extend(true, {}, barOption)
    option.xAxis[0].name = '单位：天'
    option.series[0].data = [8, 6, 10, 5, 4]
    option.yAxis[0].data = ['白马河站1', '白马河站2', '白马河站3', '白马河站4', '白马河站5']
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