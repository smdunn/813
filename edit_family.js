$(function(){
    $('#btnDeleteFamily').popover({
        html: true,
        title: 'Delete Family<a class="close" href="#");">&times;</a>',
        content: $('#popoverDeleteFamily').html(),
        placement: 'auto',
    });

    $(document).on('click', '#btnDeleteFamilyConfirm', function(){
        related=[];
        for (i=0;i<people.length;i++){
            if (people[i].name==child){
                if (people[i].spouse!=''){
                related=[people[i], people[i].spouse].concat(people[i].children);
            }
            else{
                related=[people[i]].concat(people[i].children);
            }
                $("#"+child+"div").remove();
                people.splice(i,1);
              //  console.log(people);
            }
        }
        $("#"+child+"").remove();
        console.log(people)
        $("#inputPerson option[value='"+child+"']").remove();
       // console.log(document.getElementById("inputPerson"));

        for (i=0;i<related.length;i++){
            $('#inputPerson option[value="'+related[i].name+'"]').remove();
        
    }
        table = document.getElementById("events_table");
       // console.log(table);
       // console.log(table.rows);
       list=[];
       for (b=0;b<related.length;b++){
        console.log(related);
            for (j=0;j<people.length;j++){
                if (people[j].name==related[b].name){
                    people.splice(j,1);
                }
            }
            for (i = 0; i<table.rows.length; i++) {
                row=table.rows[i];
                //iterate through rows
                //rows would be accessed using the "row" variable assigned in the for loop
               // console.log(row);
                len= related[b].name.length;
                console.log(related[b].name);
                rightcol=true;
                for (var x=0;x<len;x++){
                    if (related[b].name[x]==row.id[x]){
                       // console.log(child[x]);

                    }else{
                        rightcol=false;
                    }
                }
                if (rightcol){
                    list.push(row.id);
                    // console.log("adding");
                    // console.log(i);

                }
            }
        }
        list.sort(function(a,b){return b-a});
        for (y=0;y<list.length;y++){


            

            $("#"+list[y]+"").hide();

        }
        $("events_table").html(table);
        $("#btnDeleteFamily").popover('hide');
        $("#famDiv").hide();
        $("#eventDiv").show();  
        $("#btnAddEvent").show();
        console.log(people);

    });
});