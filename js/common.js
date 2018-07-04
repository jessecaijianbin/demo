/* 
* @Author: 杨玉飞
* @Date:   2018-05-23 09:13:20
* @Last Modified by:   anchen
* @Last Modified time: 2018-06-06 10:41:02
*/

$(function(){
    $(".headTitle").load("../tpl/header.html");
    $(".nav").load("../tpl/nav.html", function () {

    });
    initChartWH(0)
});
// 全选
function selectAll(all,childInput,childrenInputLength,inputCheckedLength){
    // alert("我被调用了");
    $(all).change(function(){
        var isCheck=$(all).is(':checked');
        $(childInput).each(function() {
            this.checked = isCheck;
        });
    })
    $(childInput).change(function(){
        var liLength = $(childrenInputLength).length;
        var inputSelected = $(inputCheckedLength).length;
        console.log(liLength);
        console.log(inputSelected);
        if(inputSelected == liLength){
            $(all).prop("checked",true);
        }else{
            $(all).prop("checked",false);
        }
    })
}
// 删除的单独样式
function deleteCss(){
    $(".ui-dialog-header").css({
        "background": "white"
    })
    $(".ui-dialog-close").css({
        "color": "#333"
    })
    $(".ui-dialog-title").css({
        "font-size": "20",
        "color": "#333"
    })
    $(".ui-dialog-footer button.ui-dialog-autofocus").css({
        "color": "#2eadfc",
        "background": "transparent",
        "outline": "none"
    })
    $(".ui-dialog-footer button").css({
        "border": "0",
        "font-size": "16",
        "padding": "8px 7px"
    })
    $(".ui-dialog-button").css({
        "float": "right",
        "width": "106px"
    })
}

// 树显示和隐藏
function showOrNot(){
    if($(".showOrNotButton").hasClass("show")){
        $(".showOrNotButton").removeClass("show").parents(".treeSearch").removeClass("show").parent(".treeSearchContain").removeClass("show");
    }else{
        $(".showOrNotButton").addClass("show").parents(".treeSearch").addClass("show").parent(".treeSearchContain").addClass("show");
    }
}
// 树搜索
function treeSearch(){
    $(".treecon >div span").click(function(){
        $(this).parent().addClass("show").siblings("div").removeClass("show");
        if($(".treeOne").hasClass("show")){
            $(".inputValue").show();
            $(".inputValue2").hide();
        }else{
            $(".inputValue").hide();
            $(".inputValue2").show();
        }
    })
    var zTreeObj;
    var zTreeObj2;
    var setting = {
        callback: {
            onClick: zTreeOnClick
        }
    };
    var zNodes = [
        {name:"test1", open:false, children:[
                {name:"杨洋"}, {name:"test1_2"}]},
        {name:"test2", open:false, children:[
                {name:"test2_1"}, {name:"test2_2"},{name:"乔安"}]}
    ];
    var zNodes2 = [
        {name:"111", open:false, children:[
                {name:"杨洋"}, {name:"222"}]},
        {name:"333", open:false, children:[
                {name:"444"}, {name:"555"},{name:"乔安"}]}
    ];
    // $(document).ready(function(){
    zTreeObj = $.fn.zTree.init($("#organIds"), setting, zNodes);
    zTreeObj2 = $.fn.zTree.init($("#organIds2"), setting, zNodes2);
    console.log(zTreeObj);
    // });
    // 树模糊查询
    document.getElementById("key").value = ""; //清空搜索框中的内容
    document.getElementById("key2").value = "";
    //绑定事件
    key = $("#key");
    key.bind("propertychange", searchNode) //property(属性)change(改变)的时候，触发事件
        .bind("input", searchNode);

    key2 = $("#key2");
    key2.bind("propertychange", searchNode2) //property(属性)change(改变)的时候，触发事件
        .bind("input", searchNode2);

    var nodeList = [], fontCss = {};


}
function zTreeOnClick(event, treeId, treeNode){
    console.log(treeNode);
}
function callNumber(){
    var zTree = $.fn.zTree.getZTreeObj("organIds");
    console.log(zTree);
    //如果结果有值，则显示比例；如果结果为0，则显示"[0/0]"；如果结果为空，则清空标签框；
    if(nodeList.length){
        //让结果集里边的第一个获取焦点（主要为了设置背景色），再把焦点返回给搜索框
        zTree.selectNode(nodeList[0],false );
        document.getElementById("key").focus();
        clickCount=1; //防止重新输入的搜索信息的时候，没有清空上一次记录
        //显示当前所在的是第一条
        // document.getElementById("number").innerHTML="["+clickCount+"/"+nodeList.length+"]";
    }else if(nodeList.length == 0){
        alert("没有搜索结果！");
        return ;
        // document.getElementById("number").innerHTML="[0/0]";
        zTree.cancelSelectedNode(); //取消焦点
    }
    //如果输入框中没有搜索内容，则清空标签框
    if(document.getElementById("key").value ==""){
        // document.getElementById("number").innerHTML="";
        zTree.cancelSelectedNode();
    }
}
//搜索节点
function searchNode(e) {
    var zTree = $.fn.zTree.getZTreeObj("organIds");
    var value = $.trim(key.get(0).value);
    var keyType = "name";
    if (value === ""){
        updateNodes(false);
        return;
    };
    nodeList = zTree.getNodesByParamFuzzy(keyType, value);
    // console.log(nodeList);
    updateNodes(true); //更新节点
}
//高亮显示被搜索到的节点
function updateNodes(highlight) {
    console.log(nodeList[i]);
    var zTree = $.fn.zTree.getZTreeObj("organIds");
    for( var i=0, l=nodeList.length; i<l; i++) {
        nodeList[i].highlight = highlight; //高亮显示搜索到的节点(highlight是自己设置的一个属性)
        zTree.expandNode(nodeList[i].getParentNode(), true, true, false); //将搜索到的节点的父节点展开
        zTree.updateNode(nodeList[i]); //更新节点数据，主要用于该节点显示属性的更新
    }
}
//设置颜色
function getFontCss(treeId, treeNode) {
    return (!!treeNode.highlight) ? {color:"#A60000", "font-weight":"bold"} : {color:"#333", "font-weight":"normal"};
}
function callNumber2(){
    var zTree = $.fn.zTree.getZTreeObj("organIds2");
    console.log(nodeList);
    //如果结果有值，则显示比例；如果结果为0，则显示"[0/0]"；如果结果为空，则清空标签框；
    if(nodeList.length){
        //让结果集里边的第一个获取焦点（主要为了设置背景色），再把焦点返回给搜索框
        zTree.selectNode(nodeList[0],false );
        document.getElementById("key2").focus();
        clickCount=1; //防止重新输入的搜索信息的时候，没有清空上一次记录
    }else if(nodeList.length == 0){
        alert("没有搜索结果！");
        return ;
        zTree.cancelSelectedNode(); //取消焦点
    }
    //如果输入框中没有搜索内容，则清空标签框
    if(document.getElementById("key2").value ==""){
        zTree.cancelSelectedNode();
    }
}
//搜索节点
function searchNode2(e) {
    var zTree = $.fn.zTree.getZTreeObj("organIds2");
    var value = $.trim(key2.get(0).value);
    var keyType = "name";
    if (value === ""){
        updateNodes2(false);
        return;
    };
    // console.log(value);
    nodeList = zTree.getNodesByParamFuzzy(keyType, value);
    updateNodes2(true); //更新节点
}
//高亮显示被搜索到的节点
function updateNodes2(highlight) {
    var zTree = $.fn.zTree.getZTreeObj("organIds2");
    for( var i=0, l=nodeList.length; i<l; i++) {
        nodeList[i].highlight = highlight; //高亮显示搜索到的节点(highlight是自己设置的一个属性)
        zTree.expandNode(nodeList[i].getParentNode(), true, true, false); //将搜索到的节点的父节点展开
        zTree.updateNode(nodeList[i]); //更新节点数据，主要用于该节点显示属性的更新
    }
}
//设置颜色
function getFontCss2(treeId, treeNode) {
    return (!!treeNode.highlight) ? {color:"#A60000", "font-weight":"bold"} : {color:"#333", "font-weight":"normal"};
}

/*获取某一年的周数、每一周的日期区间*/
function getWeekList(year) {
    year = parseInt(year)
    var d = new Date(year, 0, 1),
        to = new Date(year + 1, 0, 1),
        i = 1,
        weekList = new Array();
    while (d.getDay() != 1) {
        d.setDate(d.getDate() + 1);
    }
    for (var from = d; from < to;) {
        var date = "第" + i + "周 "
            + ((from.getMonth() + 1) < 10 ? '0' + (from.getMonth() + 1) : from.getMonth() + 1)
            + "-"
            + (from.getDate() < 10 ? '0' + from.getDate() : from.getDate()) + " ~ "
        from.setDate(from.getDate() + 6);
        if (from < to) {
            date += ((from.getMonth() + 1) < 10 ? '0' + (from.getMonth() + 1) : from.getMonth() + 1)
                + "-"
                + (from.getDate() < 10 ? '0' + from.getDate() : from.getDate())
            from.setDate(from.getDate() + 1);
        } else {
            to.setDate(to.getDate() - 1);
            date += ((to.getMonth() + 1) < 10 ? '0' + (to.getMonth() + 1) : to.getMonth() + 1)
                + "-"
                + (to.getDate() < 10 ? '0' + to.getDate() : to.getDate())
        }
        weekList.push(date)
        i++;
    }
    return weekList
}

// 初始化图表宽度高度
function initChartWH (type) {
    var width = '100%'
    if (parseInt(type) == 0) {
        width = $(document).width() * 0.85 - 88 + 'px'
    }
    $('.chartBox').css({width: width, height: '400px'})
}
