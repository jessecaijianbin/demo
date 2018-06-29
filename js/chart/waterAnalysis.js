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


function _initChart (index) {
    if (index == 0) {
        _initChart1()
    }
    if (index == 1) {
        _initChart2()
    }
}

// 水质比例分析图表
function _initChart1 () {
    var myChart = echarts.init(document.getElementById('chart1'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            itemWidth: 12,
            itemHeight: 12,
            data:['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','劣Ⅴ']
        },
        color:['#FFA94C', '#00eadd', '#d28fff', '#ff709c', '#20bbfe', '#d0ef4b'],
        series: [
            {
                name:'水质比例',
                type:'pie',
                radius: ['20%', '65%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: '{b}：{d}%'
                    }
                },
                labelLine: {
                    normal: {
                        length: 55
                    }
                },
                data:[
                    {
                        value:80,
                        name:'Ⅰ'
                    },
                    {
                        value:5,
                        name:'Ⅱ'
                    },
                    {
                        value:5,
                        name:'Ⅲ'
                    },
                    {
                        value:5,
                        name:'Ⅳ'
                    },
                    {
                        value:5,
                        name:'Ⅴ'
                    },
                    {
                        value: 0,
                        name: '劣Ⅴ'
                    }
                ]
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

// 水质评价图表
function _initChart2 () {
    var myChart = echarts.init(document.getElementById('chart2'));
    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params) {
                return params[0].name + '：' + transformValue(params[0].data)
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
                data : ['总磷', '总氮', '溶解氧', '氨氮', '浊度'],
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
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                min : 0,
                max : 6,
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle: {
                        color: '#666666'
                    },
                    formatter: function (value) {
                        return transformValue(value)
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
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: 40,
                data:[4, 5, 6, 3, 2],
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = ['#2eadfc','#5056b8','#7160af','#ff8401','#80adc6', '#B74AE5'];
                            return colorList[params.dataIndex]
                        }
                    }
                }
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

// 把数值转换为罗马数字
function transformValue(value) {
    var text = '';
    switch (value) {
        case 1:
            text = 'Ⅰ'
            break;
        case 2:
            text = 'Ⅱ'
            break;
        case 3:
            text = 'Ⅲ'
            break;
        case 4:
            text = 'Ⅳ'
            break;
        case 5:
            text = 'Ⅴ'
            break;
        case 6:
            text = '劣Ⅴ'
            break;
    }
    return text
}