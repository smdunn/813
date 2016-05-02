$(function(){
    $('#btnDeleteFamily').popover({
        html: true,
        title: 'Delete Family<a class="close" href="#");">&times;</a>',
        content: $('#popoverDeleteFamily').html(),
        placement: 'auto',
    });

    $(document).on('click', '#btnDeleteFamilyConfirm', function(){
        for (i=0;i<people.length;i++){
            if (people[i].name==child){
                $("#"+child+"div").remove();
                people.splice(i,1);
            }
        }
        $("#"+child+"").remove();
        console.log("here");
        $("#btnDeleteFamily").popover('hide');
        $("#famDiv").hide();
        $("#eventDiv").show();  
        $("#btnAddEvent").show();

    });
});