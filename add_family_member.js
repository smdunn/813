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
        var relationship = $('input:radio[name=optradio]').filter(":checked").val()
        console.log(relationship);
        if (relationship=="spouse"){
            $("#"+child+"div").append("<li><a>"+grandchild+"<br>1. Peacoat<br>2. Ovenmitt<br>3. Red Sox Tickets</a></li>");
        }
        else{
            $('#'+child+"kids").append("<li><a>"+grandchild+"<br>1. Sneakers<br>2. Beats<br>3. Frisbee</a></li>");
    }
    });
});
