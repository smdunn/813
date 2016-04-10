$(function() {
    $("#btnAddFamily").click(function() {
        $("#dialogAddFamily").show();
    });
    $("#btnOK").click(function() {
        $("#dialogAddFamily").hide();
        var child = $('#childs_name').val();
        $('#sidebar_order').append('<tr><td><input type="button" id="events_button" value="' + child + '\'s Family"></input></td></tr>');
        $('#childs_name').val('');
    });
});
