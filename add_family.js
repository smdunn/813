$(function() {
    $("#btnAddFamily").click(function() {
        $("#dialogAddFamily").show();
    });
    $("#btnOK").click(function() {
        var child = $('#childs_name').val();
        if (child.length > 0) {
        	$("#dialogAddFamily").hide();
        	$('#sidebar_order').append('<tr><td><input type="button" id="events_button" value="' + child + '\'s Family"></input></td></tr>');
        	$('#childs_name').val('');
            $('#monthInputFam').val('');
            $('#dayInputFam').val('');
            $('#yearInputFam').val('');
            $('#childs_email').val('');
        }
    });
    $('#btnCancel').click(function() {
        $("#dialogAddFamily").hide();
        $('#childs_name').val('');
        $('#monthInputFam').val('');
        $('#dayInputFam').val('');
        $('#yearInputFam').val('');
        $('#childs_email').val('');
    });
});
