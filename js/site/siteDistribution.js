
$(document).ready(function(){
    // 常规配置方式和区域配置方式切换
    $(".dataAndLongRange span").click(function(){
        $(this).addClass("selected").siblings("span").removeClass("selected").parent().siblings(".dataAndLongRangeCon").children("div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    })
    var data = [
        {
        "importUnitId": '1',
        "importUnitName": "站点1",
        "flag": false
        },
        {
            "importUnitId": '2',
            "importUnitName": "站点2",
            "flag": false
        },
        {
            "importUnitId": '3',
            "importUnitName": "站点3",
            "flag": false,
        },
        {
            "importUnitId": '4',
            "importUnitName": "站点4",
            "flag": false
        },
        {
            "importUnitId": '5',
            "importUnitName": "站点5",
            "flag": true
        },
        {
            "importUnitId": '6',
            "importUnitName": "站点6",
            "flag": true
        }
    ]

    transfer(data)

    // 保存
    $('#save').click(function () {
        var data= $('#tran').transfer('getData', 'selectData', 'importUnitId');
        console.log(data)
    })
});

// 给穿梭框赋值
function transfer(data) {
    // 销毁实例
    $('#tran').transfer('destroy')
    // 重新渲染
    $('#tran').transfer({
        titles: ['无权限站点列表', '已有权限站点列表'],
        search: true,
        uniqueId: "importUnitId",//唯一id
        dataSource: data,
        maxSelect: 6,
        diffKey: 'flag',
        unselectColumns: [{
            field: 'flag',
            checkbox: true
        },
            {
                field: 'importUnitName',
                title: '站点列表'
            }
        ]
    });
}


