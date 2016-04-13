$(function(){
    $('#btnAddFamilyMember').popover({
        html: true,
        // title: 'Popover Title<a class="close" href="#");"></a>',
        content: $('#popoverAddFamilyMember').html(),
        placement: 'auto'
    });

    $(document).on('click', '#btnOkFamMember', function(){ //
        $("#btnAddFamilyMember").popover('hide');

        var grandchild = $('#namefammember').val();
        var month= $('#monthfammember').val();
        var day= $("#dayfammember").val();
        var year= $("#yearfammember").val();
        var relationship = $("#relationship").val();
        $('#'+child+"kids").append("<li><a>"+grandchild+"</a></li>");

    });
});
