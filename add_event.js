$(function() {
    $("#add_event").click(function() {
        $("#dialogAddEvent").show();
    });
    $("#addEventOk").click(function() {
        $("#dialogAddEvent").hide();
        var month = $('#monthInput').val();
        var day = $('#dayInput').val();
        var person = $('#person').val();
        var event = $('#event').val();
        $('#events_table tr.add_event_row').before('<tr class="border"><td class="date">' + month + day + '</td><td class="event">' + person
           + '\'s ' + event + '</td><td class="wishlist"><input type="button" id="view_wishlist" value="View"></input></td>)</tr>');
    });
});