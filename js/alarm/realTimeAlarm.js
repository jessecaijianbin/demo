$(function(){
    // 不同告警切换
    $(".alarmTab span").click(function(){
        $(this).addClass("selected").siblings("span").removeClass("selected").parent().siblings(".alarmCon").children("div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    })
    // 告警通知配置-表格全选
    selectAll("#messageAll",".messageAlarmListCon td input[type='checkbox']",".messageAlarmListCon tbody tr",".messageAlarmListCon td input:checked");

    $(".selectpicker").selectpicker({});
    // 告警类型和超标程度显示关系
    alarmRelation("#alarmType",".outStandardLevel");
    alarmRelation("#historyAlarmType",".alarmLevel");
    // 编辑通知规则
    $(".message-detail").click(function(){
        var html = template("editRule");
        dialog({
            title: "编辑通知规则",
            content: html,
            okValue: "保存",
            cancelValue: "返回",
            cancel: true,
            ok: function(){
                console.log($("#dayAfter1 option:checked").html());
            }
        }).showModal();
    })
    // 新增通知规则
    $(".messageAdd").click(function(){
        var html = template("addRule");
        dialog({
            title: "新增通知规则",
            content: html,
            okValue: "确定",
            cancelValue: "返回",
            cancel: true,
            ok: function(){

            }
        }).showModal();
    })
    // 告警删除
    $(".message-delete").click(function(){
        dialog({
            title: "删除提示",
            content: "确定删除告警吗？",
            okValue: "确定",
            cancelValue: "返回",
            cancel: true,
            ok: true
        }).showModal();
    })
    // 批量删除
    $(".message-deleteBatch").click(function(){
        var checkedArr = [];
        $(".tbodyCon tr").each(function(){
            if($(this).find("input").is(":checked")){
                checkedArr.push($(this).attr("id"));
            }
        })
        if(checkedArr.length <= 0){
            dialog({
                title: "提示",
                content: "请选择要删除的告警",
                okValue: "确定",
                ok: true,
                cancelValue: "取消",
                cancel: true,
            }).showModal();
        }else{
            dialog({
                title: "删除提示",
                content: "确定要删除这些告警的数据吗？",
                cancelValue: "取消",
                cancel: true,
                okValue: "确定",
                ok: function(){

                }
            }).showModal();
            deleteCss(); //删除的样式
        }
    })
})
function alarmRelation(select,next){
    $(select).change(function(){
        var html = $(this).find("option:checked").html();
        if(html == "所有类型" || html == "超标告警"){
            $(next).show();
        }else{
            $(next).hide();
        }
    })
}
// 编辑-添加人员
function addPeople(){
    var liLength = $(".peopleList ol li").length;
    var index = liLength + 1;
    console.log(index);
    var html = '<li><div><label for="telPeople-'+index+'">通知人员：</label><input type="text" id="telPeople-'+index+'"><span onclick="delLi(this)"></span></div><div><label for="telPhone-'+index+'">手机号码：</label><input type="text" id="telPhone-'+index+'"></div><div><label for="email-'+index+'">电子邮箱：</label><input type="text" id="email-'+index+'"></div></li>';
    $(".peopleList ol").prepend(html);
}
// 编辑-从组织机构中选择
function treeSelect(){
    var html = template("treeSelect");
    dialog({
        title: "组织机构",
        content: html,
        okValue: "确定",
        cancelValue: "返回",
        cancel: true,
        ok: function(){
            var treeObj = $.fn.zTree.getZTreeObj("tree");
            var nodes = treeObj.getCheckedNodes(true);
            console.log(nodes);

            var selectArr = [];
            for(var i = 0; i < nodes.length; i++){
                selectArr.push(nodes[i].name);
            }
            console.log(selectArr);
        }
    }).showModal();
    var zTreeObj;
    var setting = {
        check: {
            enable: true,
            chkStyle: "checkbox",
            chkboxType: { "Y": "s", "N": "s" }
        }
    };
    var zNodes = [
        {name:"test1", open:false, children:[
                {name:"杨洋"}, {name:"test1_2"}]}
    ];
    zTreeObj = $.fn.zTree.init($("#tree"), setting, zNodes);
    // zTreeObj.expandAll(false);
    // zTreeObj.checkAllNodes(true);
    // zTreeObj.refresh();

}
// 编辑-删除人员
function delLi(_this){
    $(_this).parents("li").remove();
}