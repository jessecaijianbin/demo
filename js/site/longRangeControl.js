/*
* @Author: 杨玉飞
* @Date:   2018-05-28 11:21:56
* @Last Modified by:   anchen
* @Last Modified time: 2018-05-31 10:29:11
*/

$(document).ready(function(){
    // 数据采集和远程控制切换
    $(".dataAndLongRange span").click(function(){
        $(this).addClass("selected").siblings("span").removeClass("selected").parent().siblings(".dataAndLongRangeCon").children("div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    })
    // 按时间段采集和自定义时间段选择
    $("input[name=checkOne]").change(function(){
        if($("#accordingToTime").is(":checked")){
            $("#startTime, #endTime").attr("disabled",true);
            $("label[for=startTime],label[for=endTime],.Wdate").addClass("noChecked");
            $("label[for=selectTime], #selectTime").removeClass("noChecked");
            $("#selectTime").attr("disabled",false);
        }else{
            $("#startTime, #endTime").attr("disabled",false);
            $("label[for=startTime],label[for=endTime],.Wdate").removeClass("noChecked");
            $("label[for=selectTime], #selectTime").addClass("noChecked");
            $("#selectTime").attr("disabled",true);
        }
    })
    // 搜索树
    treeSearch();
});
//用于单位选择更换赋值给文本框
function volumeChange(){
    var text=$("#volumeValue").find("option:checked").html();
    $("#volumeInput").val(text);
}




