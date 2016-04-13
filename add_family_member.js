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
        if (relationship=="spouse"){
            $("#"+child+"div").append("<li><a>"+grandchild+"</a><ul><div id='"+grandchild+"kids'></div></ul></li>");
        }
        else{
        $('#'+child+"kids").append("<li><a>"+grandchild+"</a></li>");
    }
    });
});
