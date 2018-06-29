/**
 * @author caijianbin
 * @date 2018-5-28
 */

$(function () {
    // 水质比例分析和水质评价切换
    $(".dataAndLongRange span").click(function(){
        $(this).addClass("selected").siblings("span").removeClass("selected").parent().siblings(".dataAndLongRangeCon").children("div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
        _initChart($(this).index())
    })

    // 报表类型选择
    $('#dateType1').change(function () {
        if ($(this).val() == 3) {
            $('.date-wrap').hide().siblings('.week-wrap').show()
        } else {
            $('.date-wrap').show().siblings('.week-wrap').hide()
        }
    })

    //初始化
    setWeekOption(new Date().getFullYear());
    _initChart(0)

})

// 时间插件确认选择完年份后重新计算当前年份的周
function changeWeekList (db) {
    setWeekOption(db.cal.getNewDateStr())
}

// 给选择周的下拉框重新赋值
function setWeekOption (year) {
    var weekList = getWeekList(year), html = ''
    for (var i = 0; i < weekList.length; i++) {
        html += '<option value="'+weekList[i]+'">'+weekList[i]+'</option>'
    }
    $('#weekList').empty().append(html).selectpicker('val', '').selectpicker('refresh').selectpicker('render');
}

var colors = ['#f88d47', '#68d4db', '#ce62d6', '#3fb27e', '#20bbfe', '#f7cc49'];
var option = {
    color: colors,
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '8%',
        top: '8%'
    },
    xAxis: [
        {
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
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            data: ["05-19 9:00", "05-19 13:00", "05-20 10:00", "05-20 15:00", "05-21 8:00"]
        }
    ],
    yAxis: [
        {
            type: 'value',
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
    series: [
        {
            name:'白马河站',
            type:'line',
            smooth: true,
            data: [2.6, 5.9, 20, 14, 2]
        },
        {
            name:'凤坂河站',
            type:'line',
            smooth: true,
            data: [2.6, 6.9, 19, 16, 2.1]
        }
    ]
};

function _initChart (index) {
    var myChart, smooth = true
    if (index == 0) {
        myChart = echarts.init(document.getElementById('chart1'));
    }
    if (index == 1) {
        smooth = false
        myChart = echarts.init(document.getElementById('chart2'));
    }
    option.series.forEach(function (v) {
        v.smooth = smooth
    })
    myChart.setOption(option)
    // 根据屏幕自适应
    $(window).on('resize', function () {
        initChartWH()
        myChart.resize()
    })
}