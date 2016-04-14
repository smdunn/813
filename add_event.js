// $(function() {
//     $("#add_event").click(function() {
//         $("#dialogAddEvent").show();
//     });
//     $("#addEventOk").click(function() {
//         $("#dialogAddEvent").hide();
//         var month = $('#monthInputEvent').val();
//         var day = $('#dayInputEvent').val();
//         var person = $('#person').val();
//         var e = $('#event').val();
//         $('#events_table tr.add_event_row').before('<tr class="border"><td class="date">' + month + day + '</td><td class="event">' + person
//            + '\'s ' + e + '</td><td class="wishlist"><input type="button" id="view_wishlist" value="View"></input></td>)</tr>');
//         $('#person').val('');
//         $('#monthInputEvent').val('');
//         $('#dayInputEvent').val('');
//         $('#yearInputEvent').val('');
//         $('#event').val('');
//     });
//     $('#addEventCancel').click(function() {
//         $("#dialogAddEvent").hide();
//         $('#person').val('');
//         $('#monthInputEvent').val('');
//         $('#dayInputEvent').val('');
//         $('#yearInputEvent').val('');
//         $('#event').val('');
//     });
// });


$(function(){
	$('#btnAddEvent').popover({
        html: true,
        title: 'Add Event<a class="close" href="#");">&times;</a>',
        placement: 'bottom',
        content: $('#popoverAddEvent').html(),
	});

    $(document).on("click", ".close" , function(){
        $(this).parents(".popover").popover('hide');
    });

	$(document).on('click', '#btnOkEvent', function(){
		//$("#btnAddEvent").popover('hide');
        var month = $('#inputMonthEvent').val();
        month = getMonth(month);
        var day = $('#inputDayEvent').val();
        var person = $('#inputPerson').val(); 
        var e = $('#inputEvent').val();
        $('#events_table').append('<tr><td>' + month + ' ' + day + '</td><td>' + person
           + '\'s ' + e + '</td><td id="'+person+'col"><input type="button" class="btn btn-default" id="btn'+person+'view"  value="View"></input></td></tr><tr class="collapse out" id="'+person+'list"><td></td><td></td><td><ul><li> Peacoat</li><li> Ovenmitt</li><li> Red Sox Tickets</li></ul></td></tr>');
        $('#person').val('');
        //$("#"+person+"list").css("visibility","hidden");
        $("#btn"+person+"view").click(function(e){
            //e.stopPropagation();
            
            if ($("#"+person+"list").hasClass("out")){
                $("#"+person+"list").addClass("in");
                $("#"+person+"list").removeClass("out");
                $("#btn"+person+"view").val("Hide");
            }
            else{
                $("#"+person+"list").addClass("out");
                $("#"+person+"list").removeClass("in");
                $("#btn"+person+"view").val("View");
            }
        });
        $('#monthInputEvent').val('');
        $('#dayInputEvent').val('');
        $('#yearInputEvent').val('');
        $('#inputEvent').val('');


	});

    // when child is added add their birthday to upcoming events
    $(document).on('click', '#btnOkFam', function(){
        var person = $("#namefam").val();
        var month= $('#monthfam').val();
        var day= $("#dayfam").val();
        $('#events_table').append('<tr><td>' + getMonth(month) + ' ' + day + '</td><td>' + person
           + '\'s ' + 'Birthday' + '</td><td id="'+person+'col"><input type="button" class="btn btn-default" id="btn'+person+'view"  value="View"></input></td></tr><tr class="collapse out" id="'+person+'list"><td></td><td></td><td><ul><li> Peacoat</li><li> Ovenmitt</li><li> Red Sox Tickets</li></ul></td></tr>');
        $("#btn"+person+"view").click(function(e){
            //e.stopPropagation();
            
            if ($("#"+person+"list").hasClass("out")){
                $("#"+person+"list").addClass("in");
                $("#"+person+"list").removeClass("out");
                $("#btn"+person+"view").val("Hide");
            }
            else{
                $("#"+person+"list").addClass("out");
                $("#"+person+"list").removeClass("in");
                $("#btn"+person+"view").val("View");
            }
        });
    });
    // when family member is added add their birthday to upcoming events
    $(document).on('click', '#btnOkFamMember', function(){
        var person = $("#namefammember").val();
        var month= $('#monthfammember').val();
        var day= $("#dayfammember").val();
        $('#events_table').append('<tr><td>' + getMonth(month) + ' ' + day + '</td><td>' + person
           + '\'s ' + 'Birthday' + '</td><td id="'+person+'col"><input type="button" class="btn btn-default" id="btn'+person+'view"  value="View"></input><ul><li> Peacoat</li><li> Ovenmitt</li><li> Red Sox Tickets</li></ul></td></tr>');
    });
});

function getMonth(month) {
    if (month == 1) {
        month = "January";
    }
    if (month == 2) {
        month = "February";
    }
    if (month == 3) {
        month = "March";
    }
    if (month == 4) {
        month = "April";
    }
    if (month == 5) {
        month = "May";
    }
    if (month == 6) {
        month = "June";
    }
    if (month == 7) {
        month = "July";
    }
    if (month == 8) {
        month = "August";
    }
    if (month == 9) {
        month = "September";
    }
    if (month == 10) {
        month = "October";
    }
    if (month == 11) {
        month = "November";
    }
    if (month == 12) {
        month = "December";
    }
    return month;
}

