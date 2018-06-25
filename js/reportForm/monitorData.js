/**
 * @author caijianbin
 * @date 2018-5-28
 */

$(function () {
    // 报表类型选择
    $('#dateType1').change(function () {
        if ($(this).val() == 3) {
            $('.date-wrap').hide().siblings('.week-wrap').show()
        } else {
            $('.date-wrap').show().siblings('.week-wrap').hide()
        }
    })
    setWeekOption(new Date().getFullYear());

})
// 时间插件确认选择完年份后重新计算当前年份的周
function changeWeekList (db) {
    setWeekOption(db.cal.getNewDateStr())
}
// 给选择周的下拉框重新赋值
function setWeekOption (year) {
    var weekList = getWeekList(year), html = ''
    for (var i = 0; i < weekList.length; i++) {
        html += '<option value="'+weekList[i]+'">'+weekList[i]+'</option>'
    }
    $('#weekList').empty().append(html).selectpicker('val', '').selectpicker('refresh').selectpicker('render');
}
