$(function () {
    $(".dataAndLongRange span").click(function(){
        $(this).addClass("selected").siblings("span").removeClass("selected").parent().siblings(".dataAndLongRangeCon").children("div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    })
    // 实时监控参数选择全选
    selectAll("#all",".params-c",".params-c",".params-c:checked");
})