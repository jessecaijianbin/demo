
$(function() {
    $('#myChart').css({height: '320px'})
    _initChart()
})

function _initChart() {
    var myChart = echarts.init(document.getElementById('myChart'));
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '故障类型',
                type: 'pie',
                radius : '75%',
                center: ['50%', '50%'],
                label: {
                    normal: {
                        formatter: '{b}：{c}'
                    }
                },
                data:[
                    {
                        value:5,
                        name:'故障类型填充',
                        itemStyle: {
                            normal: {color: '#20bbfe'}
                        }
                    },
                    {
                        value:26,
                        name:'故障类型填充',
                        itemStyle: {
                            normal: {color: '#ffa94c'}
                        }
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