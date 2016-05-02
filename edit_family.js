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
                console.log(people);
            }
        }
        $("#"+child+"").remove();
        console.log("here");

        table = document.getElementById("events_table");
        console.log(table);
        console.log(table.rows);
        list=[];
            for (i = 0; i<table.rows.length; i++) {
                row=table.rows[i];
                //iterate through rows
                //rows would be accessed using the "row" variable assigned in the for loop
                console.log(row);
                len= child.length;
                rightcol=true;
                for (var x=0;x<len;x++){
                    if (child[x]==row.id[x]){
                        console.log(child[x]);

                    }else{
                        rightcol=false;
                    }
                }
                if (rightcol){
                    list.push(row.id);
                }
            }
        for (y=0;y<list.length;y++){
            $("#"+list[y]+"").detach();
        }
        $("#btnDeleteFamily").popover('hide');
        $("#famDiv").hide();
        $("#eventDiv").show();  
        $("#btnAddEvent").show();

    });
});