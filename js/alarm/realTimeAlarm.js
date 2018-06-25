$(function(){
    // 不同告警切换
    $(".alarmTab span").click(function(){
        $(this).addClass("selected").siblings("span").removeClass("selected").parent().siblings(".alarmCon").children("div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    })
    // 告警通知配置-表格全选
    selectAll("#messageAll",".messageAlarmListCon td input[type='checkbox']",".messageAlarmListCon tbody tr",".messageAlarmListCon td input:checked");

    $(".selectpicker").selectpicker({});

    // 编辑通知规则
    $(".message-detail").click(function(){
        var html = template("editRule");
        dialog({
            title: "编辑通知规则",
            content: html,
            okValue: "确定",
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

})
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