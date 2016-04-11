$(function() {
    $("#add_event").click(function() {
        $("#dialogAddEvent").show();
    });
    $("#addEventOk").click(function() {
        $("#dialogAddEvent").hide();
        var month = $('#monthInputEvent').val();
        var day = $('#dayInputEvent').val();
        var person = $('#person').val();
        var e = $('#event').val();
        $('#events_table tr.add_event_row').before('<tr class="border"><td class="date">' + month + day + '</td><td class="event">' + person
           + '\'s ' + e + '</td><td class="wishlist"><input type="button" id="view_wishlist" value="View"></input></td>)</tr>');
        $('#person').val('');
        $('#monthInputEvent').val('');
        $('#dayInputEvent').val('');
        $('#yearInputEvent').val('');
        $('#event').val('');
    });
    $('#addEventCancel').click(function() {
        $("#dialogAddEvent").hide();
        $('#person').val('');
        $('#monthInputEvent').val('');
        $('#dayInputEvent').val('');
        $('#yearInputEvent').val('');
        $('#event').val('');
    });
});