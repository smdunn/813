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
        var relationship = $('input:radio[name=optradio]').filter(":checked").val();
        if (relationship=="spouse"){

            $("#"+child+"div").append("<li><a><h4>"+grandchild+"</h4><br>1. Peacoat<br>2. Ovenmitt<br>3. Red Sox Tickets</a></li>");
            len= people.length;
            for (i=0;i<len;i++){

            if (people[i].name==child){
                people[i].spouse={name: grandchild, email: $('#emailfammember').val(), events: {'Birthday': [month, day, year]}, wishlist: ["Peacoat","Ovenmitt","Red Sox Tickets"] };
            }
            else{
            }
        }
        }
        else{
            $('#'+child+"kids").append("<li><a><h4>"+grandchild+"</h4><br>1. Sneakers<br>2. Beats<br>3. Frisbee</a></li>");
                    len= people.length;
                    for (i=0;i<len;i++){
                        if (people[i].name==child){
                            obj={name: grandchild, email: $('#emailfammember').val(), events: {'Birthday': [month, day, year]}, wishlist: ["Sneakers","Beats","Frisbee"] };
                            people[i].children.push(obj);
                        }
                        else{
                        }
                    }
        }

        $('#events_table').append('<tr><td>' + getMonth(month) + ' ' + day + '</td><td>' + grandchild
           + '\'s ' + 'Birthday' + '</td><td id="'+grandchild+'col"><input type="button" class="btn btn-default" id="btn'+grandchild+'view"  value="View"></input></td></tr><tr class="collapse out" id="'+grandchild+'list"><td></td><td></td><td><ul><li> Peacoat</li><li> Ovenmitt</li><li> Red Sox Tickets</li></ul></td></tr>');
        $("#btn"+grandchild+"view").click(function(e){
            //e.stopPropagation();
            
            if ($("#"+grandchild+"list").hasClass("out")){
                $("#"+grandchild+"list").addClass("in");
                $("#"+grandchild+"list").removeClass("out");
                $("#btn"+grandchild+"view").val("Hide");
            }
            else{
                $("#"+grandchild+"list").addClass("out");
                $("#"+grandchild+"list").removeClass("in");
                $("#btn"+grandchild+"view").val("View");
            }
        });

    });
});
