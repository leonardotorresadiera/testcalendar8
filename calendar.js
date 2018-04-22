var CalendarTest = function() {
    "use strict";
    var datePickerHandler = function() {
        $('.datepickerBoot').datepicker({
            autoclose: true,
            todayHighlight: true,
            todayBtn: true,
        });
        var startDate = new Date();
        $("#inputDateStart").datepicker("update", startDate);
        $("#inputNumberDays").inputmask({"alias": "integer","autoGroup": false,"autoUnmask": true,"noshift": true});
    };
    return {
        init: function() {
            datePickerHandler();
        }
    };
}();
