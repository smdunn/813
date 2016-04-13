// $(function() {
//     $("#btnAddFamily").click(function() {
//         $("#dialogAddFamily").show();
//     });
//     $("#btnOK").click(function() {
//         var child = $('#childs_name').val();
//         if (child.length > 0) {
//         	$("#dialogAddFamily").hide();
//         	$('#sidebar_order').append('<tr><td><input type="button" id="events_button" value="' + child + '\'s Family"></input></td></tr>');
//         	$('#childs_name').val('');
//             $('#monthInputFam').val('');
//             $('#dayInputFam').val('');
//             $('#yearInputFam').val('');
//             $('#childs_email').val('');
//         }
//     });
//     $('#btnCancel').click(function() {
//         $("#dialogAddFamily").hide();
//         $('#childs_name').val('');
//         $('#monthInputFam').val('');
//         $('#dayInputFam').val('');
//         $('#yearInputFam').val('');
//         $('#childs_email').val('');
//     });
// });
$(function(){
    $('#btnAddFamily').popover({
        html: true,
        // title: 'Popover Title<a class="close" href="#");"></a>',
        content: $('#popoverAddFamily').html(),
        placement: 'auto'
    });
    $(document).on('click', '#btnOkFam', function(){
        $("#btnAddEvent").popover('hide');
        var child = $('#namefam').val();
        var month= $('#monthfam').val();
        var day= $("#dayfam").val();
        var year= $("#yearfam").val();
        $('#fams').append('<li><input type="button" class="btn btn-default" id='+child+' value='+child+'></input></li>');
        $("#"+child+"").click(function(){
            $("#"+child+"div").show();
        });
        $('#treepage').append()

    });
});
//ideas: have all family tree info in famtree.html
// on new family, add to outermost div, add a child tag :
//     "<li><a href="#" id="#"+child+"">"+child+"</a></li> " 
//when button on sidebar is clicked, make $("#childname").show() and when leave it, $("#childname").hide()
//add family member button will do similar
