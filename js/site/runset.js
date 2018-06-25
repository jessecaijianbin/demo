/* 
* @Author: 杨玉飞
* @Date:   2018-05-28 11:21:56
* @Last Modified by:   anchen
* @Last Modified time: 2018-05-31 15:00:38
*/

$(document).ready(function(){
    // 不同设置模式切换
    $(".runsetTab span").click(function(){
        $(this).addClass("selected").siblings("span").removeClass("selected").parent().siblings(".runsetTabCon").children("div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    })
    // 常规监测模式设置-同步站点-全选
    selectAll("#all",".select ul li input[type='checkbox']",".select ul li",".select ul li input:checked");
    // 数据异常运行设置-表格全选
    selectAll("#tableAll",".dataAbnormalCon td input[type='checkbox']",".dataAbnormalCon tbody tr",".dataAbnormalCon td input:checked");
    // 数据异常运行设置-同步站点-全选
    selectAll("#abnormalall",".abnormalselect ul li input[type='checkbox']",".abnormalselect ul li",".abnormalselect ul li input:checked");
    // 参数超标设置-同步站点-全选
    selectAll("#exceedStandardall",".exceedStandardselect ul li input[type='checkbox']",".exceedStandardselect ul li",".exceedStandardselect ul li input:checked");
    // 应急模式运行设置-表格全选
    selectAll("#emergencyAll",".emergencySelectCon td input[type='checkbox']",".emergencySelectCon tbody tr",".emergencySelectCon td input:checked");
    // 应急模式运行设置-同步站点-全选
    selectAll("#emergencyall",".emergencyselect ul li input[type='checkbox']",".emergencyselect ul li",".emergencyselect ul li input:checked");

    // 数据监测模式-点击设置出现弹窗
    $(".set").click(function(){
        var para = $(this).siblings(".parameter").html();
        var html = template("setContent");
        dialog({
            title: para + "常规质控模式",
            content: html,
            okValue: "确定",
            cancelValue: "返回",
            cancel: true,
            ok: function(){
                console.log($("#dayAfter1 option:checked").html());
            }
        }).showModal();
    })
    // 数据异常运行设置-select选择历史经验值的话输入框不能输入
    $(".dataAbnormalCon td select").change(function(){
        var type = $(this).find("option:checked").attr("type");
        console.log(type);
        if(type == "nochange"){
            $(this).siblings(".dataValue").prop("disabled",true);
        }else{
            $(this).siblings(".dataValue").prop("disabled",false);
        }
    })
    // 数据异常运行设置-点击设置出现弹窗
    $(".dataAbnormal-set").click(function(){
        var para = $(this).siblings(".abnormal-parameter").html();
        var html = template("abnormalSetContent");
        dialog({
            title: para + "确认异常后运行",
            content: html,
            okValue: "确定",
            cancelValue: "返回",
            cancel: true,
            ok: function(){

            }
        }).showModal();
    })
    // 参数超标设置-告警参数与阀值变更
    $(".parameterChange").click(function(){
        var html = template("exceedStandardContent");
        dialog({
            title: "告警参数与阈值变更",
            content: html,
            okValue: "确定",
            cancelValue: "返回",
            cancel: true,
            ok: function(){

            }
        }).showModal();
    })
    // 应急模式运行设置-点击设置出现弹窗
    $(".emergency-set").click(function(){
        var para = $(this).siblings(".emergency-parameter").html();
        var html = template("emergencySetContent");
        dialog({
            title: para + "确认异常后运行",
            content: html,
            okValue: "确定",
            cancelValue: "返回",
            cancel: true,
            ok: function(){

            }
        }).showModal();
    })
    // 搜索树
    treeSearch();
});
// 常规监测模式设置-设置-按次数和按天数的切换
function secondOrDay(){
    if($("#second").is(":checked")){
        $(".accordionToSecond").addClass("selected").siblings().removeClass("selected");
    }else{
        $(".accordionToDay").addClass("selected").siblings().removeClass("selected");
    }
}



