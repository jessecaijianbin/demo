$(function(){
    // 关联站点
    $(".linkSite").click(function(){
        var html =template("linkSiteList");
        dialog({
            title: "地表水环境质量标准",
            content: html,
            cancelValue: "取消",
            cancel: true,
            okValue: "确定",
            ok: function(){

            }
        }).showModal();
        $(".selectpicker").selectpicker({});
        // 关联站点-表格全选
        selectAll("#linkSiteAll",".linkSiteListCon td input[type='checkbox']",".linkSiteListCon tbody tr",".linkSiteListCon td input:checked");
    })
    // 编辑监测标准配置
    $(".monitor-detail").click(function(){
        var html =template("editStandard");
        dialog({
            title: "编辑监测标准配置",
            content: html,
            cancelValue: "取消",
            cancel: true,
            okValue: "确定",
            ok: function(){
                $("input[type=submit]").click();
                var cb = $(".form").validate().form();
                console.log(cb);
                if(!cb){
                    return false;
                }else{

                }
            }
        }).showModal();
    })
    // 新增监测标准配置
    $(".addMonitor").click(function(){
        var html =template("addStd");
        dialog({
            title: "新增监测标准配置",
            content: html,
            cancelValue: "取消",
            cancel: true,
            okValue: "确定",
            ok: function(){
                $("input[type=submit]").click();
                var cb = $(".form").validate().form();
                console.log(cb);
                if(!cb){
                    return false;
                }else{

                }
            }
        }).showModal();
    })
    // 删除列表的监测标准
    $(".monitor-delete").click(function(){
        dialog({
            title: "删除提示",
            content: "确定要删除该监测标准的数据吗？",
            cancelValue: "取消",
            cancel: true,
            okValue: "确定",
            ok: function(){

            }
        }).showModal();
        deleteCss(); //删除的样式
    })
})
// 编辑-添加子标准
function addStandard(){
    var twoTypeLength = $(".editStandard .twoType").length; //用于判断是几类标准
    if(!twoTypeLength){
        twoTypeLength = 0;
    }
    console.log(twoTypeLength);
    var index = "";
    if(twoTypeLength == 0){
        index = "二";
    }else if(twoTypeLength == 1){
        index = "三";
    } else if(twoTypeLength == 2){
        index = "四";
    } else {
        index = "五";
    }
    var th1 = "<th colspan='2' class='twoType'><var>地表水环境质量"+index+"类标准</var><span onclick='delStandard()'></span></th>";
    var th2 = "<th>下限(>)</th><th>上限(≤)</th>";
    var td = "<td class='addInput'><input type='text'></td>";
    $(".editStandard thead tr:nth-child(1)").append(th1);
    $(".editStandard thead tr:nth-child(2)").append(th2);
    $(".editStandard tbody tr").append(td);
    $(".editStandard tbody tr").append(td);
}
// 编辑-删除子标准
function delStandard(){
    var twoTypeLength = $(".twoType").length;
    // console.log(twoTypeLength);
    if(twoTypeLength > 0){
        $(".editStandard thead tr:nth-child(1) th:last-child").remove();
        $(".editStandard thead tr:nth-child(2) th:last-child").remove();
        $(".editStandard thead tr:nth-child(2) th:last-child").remove();
        $(".editStandard tbody tr td:last-child").remove();
        $(".editStandard tbody tr td:last-child").remove();
    }
}
// 新增-添加子标准
function newStandard(){
    var twoTypeLength = $(".twoType").length; //用于判断是几类标准
    if(!twoTypeLength){
        twoTypeLength = 0;
    }
    console.log(twoTypeLength);
    var index = "";
    if(twoTypeLength == 0){
        index = "二";
    }else if(twoTypeLength == 1){
        index = "三";
    } else if(twoTypeLength == 2){
        index = "四";
    } else {
        index = "五";
    }
    var th1 = "<th colspan='2' class='twoType'><var>地表水环境质量"+index+"类标准</var><span onclick='newdelStandard()'></span></th>";
    var th2 = "<th>下限(>)</th><th>上限(≤)</th>";
    var td = "<td class='addInput'><input type='text'></td>";
    $(".addStd thead tr:nth-child(1)").append(th1);
    $(".addStd thead tr:nth-child(2)").append(th2);
    $(".addStd tbody tr").append(td);
    $(".addStd tbody tr").append(td);
}
// 新增-删除子标准
function newdelStandard(){
    var twoTypeLength = $(".twoType").length;
    // console.log(twoTypeLength);
    if(twoTypeLength > 0){
        $(".addStd thead tr:nth-child(1) th:last-child").remove();
        $(".addStd thead tr:nth-child(2) th:last-child").remove();
        $(".addStd thead tr:nth-child(2) th:last-child").remove();
        $(".addStd tbody tr td:last-child").remove();
        $(".addStd tbody tr td:last-child").remove();
    }
}
