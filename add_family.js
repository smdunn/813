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

        $("#btnAddFamily").popover('hide');
        var lchild = $('#namefam').val();
        var month= $('#monthfam').val();
        var day= $("#dayfam").val();
        var year= $("#yearfam").val();
        $('#fams').append('<li><input type="button" class="btn btn-default" id='+lchild+' value='+lchild+'></input></li>');

        $('#childappend').append("<ul><div id='"+lchild+"div'><li><a>"+lchild+"</a><ul><div id='"+lchild+"kids'></div></ul></li></div></ul>");
        $("#famDiv").removeClass("hide");
        $("#famDiv").hide();
        $("#"+lchild+"").click(function(){
            $("#btnAddEvent").css("visibility","invisible");
            $("#famDiv").show();
            $("#eventDiv").hide();
            len= people.length;
            for (i=0;i<len;i++){
                $("#"+people[i].name+"div").hide();
            }
            $("#"+lchild+"div").show();
            child=lchild;

        });


        
        $("#"+lchild+"div").hide();

    });
});


