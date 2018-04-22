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
    var getNewDateEnd = function() {
        var numberOfDays = $("#inputNumberDays").val();
        var d1 = moment($("#inputDateStart").val(),"MM/DD/YYYY");
        var tmp1 = d1.add(numberOfDays, 'days');
        var dateEnd = tmp1.toDate();
        console.log("dateEnd:"+dateEnd);
    };
    var getDayEndMonth = function() {
        var d1 = moment($("#inputDateStart").val(),"MM/DD/YYYY");
        var endDaysMonth = d1.endOf('month').format('DD');
        console.log("endDaysMonth:"+endDaysMonth);
        return endDaysMonth;
    };
    var createMonth =  function() {
        var dateInput = moment($("#inputDateStart").val(),"MM/DD/YYYY");
        var endDaysMonth = getDayEndMonth();
        var monthName = dateInput.format("MMMM YYYY");
        var dayOfMonth = dateInput.format("D"); 
        var dayOfWeek = dateInput.format("d");

        var html = '<br><center>'+monthName+'</center><div class="row"><div class="col-sm-6" style="background-color:azure">';
        var i,j=0;
        html+='<div class="row"><div class="col-sm-1">S</div><div class="col-sm-1">M</div><div class="col-sm-1">T</div><div class="col-sm-1">W</div><div class="col-sm-1">T</div><div class="col-sm-1">F</div><div class="col-sm-1">S</div></div>';

        var flag = true;
        for (i = 0; i < 4; i++) { 
            html+='<div class="row">';
            for (j = 0; j< 7; j++) { 
                if (flag==true) {
                    if (j>=dayOfWeek) {
                        html+='<div class="col-sm-1">'+dayOfMonth+'</div>';        
                        dayOfMonth++;
                        flag=false;
                    }
                    else {
                        html+='<div class="col-sm-1">&nbsp;</div>';
                    }
                } 
                else {
                    if (dayOfMonth>endDaysMonth) {
                        html+='<div class="col-sm-1">&nbsp;</div>';        
                    }
                    else {
                        html+='<div class="col-sm-1">'+dayOfMonth+'</div>';        
                    }
                    dayOfMonth++;
                }
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
