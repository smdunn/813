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
        var day = $('#inputDayEvent').val();
        var person = $('#inputPerson').val(); 
        var e = $('#inputEvent').val();
        $('#events_table').append('<tr><td>' + month + ' ' + day + '</td><td>' + person
           + '\'s ' + e + '</td><td><button type="button" class="btn btn-default">View</button></td></tr>');
        $('#person').val('');
        $('#monthInputEvent').val('');
        $('#dayInputEvent').val('');
        $('#yearInputEvent').val('');
        $('#inputEvent').val('');


	});

    $(document).on('click', '#btnOkFam', function(){
        var person = people[0];
        console.log(person.events);
        console.log(person.events['Birthday']);
        $('#events_table').append('<tr><td>' + person.events['Birthday'][0] + ' ' + person.events['Birthday'][1] + '</td><td>' + person.name
           + '\'s ' + 'Birthday' + '</td><td><button type="button" class="btn btn-default">View</button></td></tr>');
    });
});

