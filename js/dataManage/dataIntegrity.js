$(function() {
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
                name: '数据完整性',
                type: 'pie',
                radius : '67%',
                center: ['50%', '50%'],
                label: {
                    normal: {
                        formatter: '{b}：{c}'
                    }
                },
                data:[
                    {
                        value:5,
                        name:'数据缺失数量',
                        itemStyle: {
                            normal: {color: '#fe5766'}
                        }
                    },
                    {
                        value:26,
                        name:'数据上传数量',
                        itemStyle: {
                            normal: {color: '#20bbfe'}
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