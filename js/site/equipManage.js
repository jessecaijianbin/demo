$(function(){
    // 不同管理模式切换
    $(".equipTab span").click(function(){
        $(this).addClass("selected").siblings("span").removeClass("selected").parent().siblings(".equipTabCon").children("div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    })
    // 监测设备信息-表格全选
    selectAll("#equipAll",".equipInfoCon td input[type='checkbox']",".equipInfoCon tbody tr",".equipInfoCon td input:checked");
    // 监测设备管理-新增-添加参数-表格全选
    selectAll("#addPeraAll",".equipInfoCon td input[type='checkbox']",".equipInfoCon tbody tr",".equipInfoCon td input:checked");
    // 监测设备管理-编辑-添加参数-表格全选
    selectAll("#editPeraAll",".editPerameter td input[type='checkbox']",".editPerameter tbody tr",".editPerameter td input:checked");
    // 数采仪管理-表格全选
    selectAll("#instrumentAll",".instrumentCon td input[type='checkbox']",".instrumentCon tbody tr",".instrumentCon td input:checked");
    // 视频监控设备管理-表格全选
    selectAll("#videoAll",".videoCon td input[type='checkbox']",".videoCon tbody tr",".videoCon td input:checked");

    // 监测设备管理-新增监测设备管理
    $(".equipInfo-add").click(function(){
        var html = template("addNew");
        dialog({
            title: "新增监测设备",
            content: html,
            cancel: true,
            cancelValue: "返回",
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
        $(".selectpicker").selectpicker({});
    })
    // 监测设备管理-编辑监测设备管理
    $(".equipInfo-detail").click(function(){
        var html = template("editEquip");
        dialog({
            title: "编辑监测设备",
            content: html,
            cancel: true,
            cancelValue: "返回",
            okValue: "保存",
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
        $(".selectpicker").selectpicker({});
    })
    //监测设备管理- 删除
    $(".equipInfo-delete").click(function(){
        var paraName = $(this).parent().siblings(".paraName").html();
        dialog({
            title: "删除提示",
            content: "确定要删除"+paraName+"监测设备的数据吗？",
            cancelValue: "取消",
            cancel: true,
            okValue: "确定",
            ok: function(){

            }
        }).showModal();
        deleteCss();//删除的样式
    })
    // 监测设备管理-批量删除
    $(".equipInfo-deleteBatch").click(function(){
        var checkedArr = [];
        $(".tbodyCon tr").each(function(){
            if($(this).find("input").is(":checked")){
                checkedArr.push($(this).attr("id"));
            }
        })
        if(checkedArr.length <= 0){
            dialog({
                title: "提示",
                content: "请选择要删除的监测设备",
                okValue: "确定",
                ok: true,
                cancelValue: "取消",
                cancel: true,
            }).showModal();
        }else{
            dialog({
                title: "删除提示",
                content: "确定要删除这些监测设备的数据吗？",
                cancelValue: "取消",
                cancel: true,
                okValue: "确定",
                ok: function(){

                }
            }).showModal();
            deleteCss(); //删除的样式
        }
    })

    // 数采仪管理-编辑数采仪设备
    $(".instrument-detail").click(function(){
        var html = template("editInstrument");
        dialog({
            title: "编辑数采仪设备",
            content: html,
            cancel: true,
            cancelValue: "返回",
            okValue: "保存",
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
        $(".selectpicker").selectpicker({});
    })
    // 数采仪管理-新增数采仪设备
    $(".instrument-add").click(function(){
        var html = template("addInstrument");
        dialog({
            title: "新增数采仪设备",
            content: html,
            cancel: true,
            cancelValue: "返回",
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
        $(".selectpicker").selectpicker({});
    })
    //数采仪管理- 删除
    $(".instrument-delete").click(function(){
        var paraName = $(this).parent().siblings(".paraName").html();
        dialog({
            title: "删除提示",
            content: "确定要删除"+paraName+"的数据吗？",
            cancelValue: "取消",
            cancel: true,
            okValue: "确定",
            ok: function(){

            }
        }).showModal();
        deleteCss();//删除的样式
    })
    // 数采仪管理-批量删除
    $(".instrument-deleteBatch").click(function(){
        var checkedArr = [];
        $(".tbodyCon tr").each(function(){
            if($(this).find("input").is(":checked")){
                checkedArr.push($(this).attr("id"));
            }
        })
        if(checkedArr.length <= 0){
            dialog({
                title: "提示",
                content: "请选择要删除的数采仪设备",
                okValue: "确定",
                ok: true,
                cancelValue: "取消",
                cancel: true,
            }).showModal();
        }else{
            dialog({
                title: "删除提示",
                content: "确定要删除这些数采仪设备的数据吗？",
                cancelValue: "取消",
                cancel: true,
                okValue: "确定",
                ok: function(){

                }
            }).showModal();
            deleteCss(); //删除的样式
        }
    })

    // 视频监控设备管理-新增视频监控设备
    $(".video-add").click(function(){
        var html = template("addVideo");
        dialog({
            title: "新增视频监控设备",
            content: html,
            cancel: true,
            cancelValue: "返回",
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
        $(".selectpicker").selectpicker({});
    })
    // 视频监控设备管理-编辑视频监控设备
    $(".video-detail").click(function(){
        var html = template("editVideo");
        dialog({
            title: "编辑视频监控设备",
            content: html,
            cancel: true,
            cancelValue: "返回",
            okValue: "保存",
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
        $(".selectpicker").selectpicker({});
    })
    //视频监控设备管理- 删除
    $(".video-delete").click(function(){
        dialog({
            title: "删除提示",
            content: "确定要删除该视频监控设备的数据吗？",
            cancelValue: "取消",
            cancel: true,
            okValue: "确定",
            ok: function(){

            }
        }).showModal();
        deleteCss();//删除的样式
    })
    // 视频监控设备管理-批量删除
    $(".video-deleteBatch").click(function(){
        var checkedArr = [];
        $(".tbodyCon tr").each(function(){
            if($(this).find("input").is(":checked")){
                checkedArr.push($(this).attr("id"));
            }
        })
        if(checkedArr.length <= 0){
            dialog({
                title: "提示",
                content: "请选择要删除的视频监控设备",
                okValue: "确定",
                ok: true,
                cancelValue: "取消",
                cancel: true,
            }).showModal();
        }else{
            dialog({
                title: "删除提示",
                content: "确定要删除这些视频监控设备的数据吗？",
                cancelValue: "取消",
                cancel: true,
                okValue: "确定",
                ok: function(){

                }
            }).showModal();
            deleteCss(); //删除的样式
        }
    })
    // 搜索树
    treeSearch();
})
// 监测设备管理-添加参数
function addNewPerameter(){
    var html = template("addPerameter");
    dialog({
        title: "添加参数",
        content: html,
        cancel: true,
        cancelValue: "返回",
        okValue: "保存",
        ok: function(){
            var index = parseInt($(".monitorData tbody tr:last-child td:nth-child(1)").html()) + 1;
            // 测试添加到“新增监测设备”
            var tr = "<tr><td>"+index+"</td><td>测试</td><td>测试</td><td>测试</td><td>测试</td><td>测试</td><td>测试</td><td>测试</td></tr>";
            $(".monitorData table tbody").append(tr);
        }
    }).showModal();
}
// 监测设备管理-编辑设备-添加参数
function editPerameter(){
    var html = template("editPerameter");
    dialog({
        title: "添加参数",
        content: html,
        cancel: true,
        cancelValue: "返回",
        okValue: "保存",
        ok: function(){
            var index = parseInt($(".editmonitorData tbody tr:last-child td:nth-child(1)").html()) + 1;
            // 测试添加到“新增监测设备”
            var tr = "<tr><td>"+index+"</td><td>测试编辑</td><td>测试</td><td>测试</td><td>测试</td><td>测试</td><td>测试</td><td>测试</td></tr>";
            $(".editmonitorData table tbody").append(tr);
        }
    }).showModal();
}
//因子查询
function itemQuery(arrays,condition) {
    //查询出满足条件的因子

}
