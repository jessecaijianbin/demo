/*
* @Author: caijianbin
* @Date:   2018-05-29 9:00:56
*/

$(function(){
    $(".dataAndLongRange span").click(function(){
        $(this).addClass("selected").siblings("span").removeClass("selected").parent().siblings(".dataAndLongRangeCon").children("div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    })
    // 初始化拖拽插件
    $('#ssi-upload').ssi_uploader({
        url: '#',
        maxNumberOfFiles: 1,
        maxFileSize:60,
        allowed:['xls','xlsx'],
        onUpload: function () { // 文件上传后执行的回调函数
            alert(1)
        }
    });
    $('#clickUpload').click(function () {
        $('.ssi-InputLabel .ssi-button').click()
    })
    $('.entry').click(function () {
        if (!$('#ssi-uploadBtn').hasClass('ssi-hidden')) {
            $('#ssi-uploadBtn').click() // js控制点击上传文件
        } else {
            alert('请先选择要上传的文件')
        }

    })
})