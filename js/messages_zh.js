(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        define( ["jquery", "../jquery.validate"], factory );
    } else {
        factory( jQuery );
    }
}(function( $ ) {

    /*
     * Translated default messages for the jQuery validation plugin.
     * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
     */
    $.extend($.validator.messages, {
        required: "必填字段",
        remote: "请修正此字段",
        email: "请输入有效的电子邮件地址",
        url: "请输入有效的网址",
        date: "请输入有效的日期",
        dateISO: "请输入有效的日期 (YYYY-MM-DD)",
        number: "请输入有效的数字",
        digits: "只能输入数字",
        creditcard: "请输入有效的信用卡号码",
        equalTo: "你的输入不相同",
        extension: "请输入有效的后缀",
        maxlength: $.validator.format("最多可以输入 {0} 个字符"),
        minlength: $.validator.format("最少要输入 {0} 个字符"),
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),
        range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
        max: $.validator.format("请输入不大于 {0} 的数值"),
        min: $.validator.format("请输入不小于 {0} 的数值")
    });

}));
// 多个name相同的input不能为空的时候判断根据id不根据name
$(function(){
    if ($.validator) {
        //fix: when several input elements shares the same name, but has different id-ies....
        $.validator.prototype.elements = function () {

            var validator = this,
                rulesCache = {};

            // select all valid inputs inside the form (no submit or reset buttons)
            // workaround $Query([]).add until http://dev.jquery.com/ticket/2114 is solved
            return $([]).add(this.currentForm.elements)
                .filter(":input")
                .not(":submit, :reset, :image, [disabled]")
                .not(this.settings.ignore)
                .filter(function () {
                    var elementIdentification = this.id || this.name;


                    !elementIdentification && validator.settings.debug && window.console && console.error("%o has no id nor name assigned", this);


                    // select only the first element for each name, and only those with rules specified
                    if (elementIdentification in rulesCache || !validator.objectLength($(this).rules()))
                        return false;


                    rulesCache[elementIdentification] = true;
                    return true;
                });
        };
    }
})