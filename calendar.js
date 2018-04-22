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
    };
    return {
        init: function() {
            datePickerHandler();
        }
    };
}();
