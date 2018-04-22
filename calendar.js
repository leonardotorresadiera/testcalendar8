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
    var createMonth =  function() {
        var numberOfDays = $("#inputNumberDays").val();
        var dateInput = moment($("#inputDateStart").val(),"MM/DD/YYYY");
        var monthName = dateInput.format("MMMM YYYY");
        var dayOfMonth = dateInput.format("D"); 
        var dayOfWeek = dateInput.format("d");
        console.log("dayOfWeek:"+dayOfWeek);
        var html = '<br><center>'+monthName+'</center><div class="row"><div class="col-sm-6" style="background-color:azure">';
        var i,j=0;
        html+='<div class="row"><div class="col-sm-1">S</div><div class="col-sm-1">M</div><div class="col-sm-1">T</div><div class="col-sm-1">W</div><div class="col-sm-1">T</div><div class="col-sm-1">F</div><div class="col-sm-1">S</div></div>';

        for (i = 0; i < 4; i++) { 
            html+='<div class="row">';
            for (j = 0; j< 7; j++) { 
                html+='<div class="col-sm-1">'+i+j+'</div>';
            }    
            html+='</div>';
        }            
        
        html +="</div></div>";
        return html;
    };
    var eventsHandler = function() {
        $("#buttonCreate").click(function () {
            console.log("test");
            var htmlString = createMonth();
            $("#contentCalendar").html(htmlString);
        });
    }
    return {
        init: function() {
            datePickerHandler();
            eventsHandler();
        }
    };
}();
