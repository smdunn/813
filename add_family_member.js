$(function() {
    $("#btnAddFamilyMember").click(function() {
        $("#dialogAddFamily").show();
    });
    $("#btnOK").click(function() {
        var child = $('#childs_name').val();
        if (child.length > 0) {
        	$("#dialogAddFamily").hide();
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
