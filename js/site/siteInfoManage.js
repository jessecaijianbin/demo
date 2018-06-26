$(function(){
    // 站点信息列表-全选
    selectAll("#siteInfoAll",".siteInfoCon td input[type='checkbox']",".siteInfoCon tbody tr",".siteInfoCon tbody td input:checked");
    // 新增站点
    $(".siteInfo-add").click(function(){
        var html = template("addNew");
        dialog({
            title: "新增站点",
            content: html,
            okValue: "确定",
            cancelValue: "返回",
            cancel: true,
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
    // 站点详情
    $(".siteInfo-detail").click(function(){
        var html = template("siteDetail");
        dialog({
            title: "编辑站点",
            content: html,
            okValue: "保存",
            cancelValue: "返回",
            cancel: true,
            ok: function(){
                console.log($(".notNull").val());
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
    // 删除
    $(".siteInfo-delete").click(function(){
        var siteName = $(this).parent().siblings(".siteName").html();
        dialog({
            title: "删除提示",
            content: "确定要删除"+siteName+"的站点数据吗？",
            cancelValue: "取消",
            cancel: true,
            okValue: "确定",
            ok: function(){

            }
        }).showModal();
        deleteCss();//删除的样式
    })
    // 批量删除
    $(".deleteBatch").click(function(){
        var checkedArr = [];
        $(".tbodyCon tr").each(function(){
            if($(this).find("input").is(":checked")){
                checkedArr.push($(this).find(".siteName").html());
            }
        })
        if(checkedArr.length <= 0){
            dialog({
                title: "提示",
                content: "请选择要删除的站点",
                okValue: "确定",
                ok: true,
                cancelValue: "取消",
                cancel: true,
            }).showModal();
        }else{
            dialog({
                title: "删除提示",
                content: "确定要删除这些站点的数据吗？",
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
