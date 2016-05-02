wishlists=[];
wishlists.push("Patagonia Fleece");
wishlists.push("Rainboots");
wishlists.push("Headphones");
wishlists.push("Fitbit");
wishlists.push("Headbands");
wishlists.push("Running Shoes");
wishlists.push("IPhone Case");
wishlists.push("Paint Brushes");
wishlists.push("Acrylic Paint");
wishlists.push("Running Shoes");
wishlists.push("Knee Pads");
wishlists.push("Baseball Bat");
wishlists.push("Cleats");
wishlists.push("Macbook Laptop");
wishlists.push("Keyboard Cover");
wishlists.push("Screen Wipes");
wishlists.push("Easel");
wishlists.push("Paint Brushes");
wishlists.push("Acrylic Paint");
wishlists.push("Itunes Gift Card");
wishlists.push("Apple Watch");
wishlists.push("Headphones");
wishlists.push("Silverware");
wishlists.push("Rug");
wishlists.push("Refrigerator");
wishlists.push("Canon Camera");
wishlists.push("Wide Angle Lens");
wishlists.push("Trifold");
wishlists.push("Xbox");
wishlists.push("Legend of Zelda");
wishlists.push("Xbox Controller");
wishlists.push("Backpack");
wishlists.push("Nike Socks");
wishlists.push("Athletic Shorts");
wishlists.push("Umbrella");
wishlists.push("Nike Socks");
wishlists.push("Raincoat");
wishlists.push("IPhone");
wishlists.push("Headphones");
wishlists.push("Speakers");
wishlists.push("Techcash");
wishlists.push("Notebooks");
wishlists.push("Caligraphy Pens");


$(function(){
    $('#btnAddFamilyMember').popover({
        html: true,
        title: 'Add Family Member<a class="close" href="#");">&times;</a>',
        content: $('#popoverAddFamilyMember').html(),
        placement: 'auto',
        callback: function() { 
            $('.datepicker-fammember').datepicker({
                changeYear: true,
                yearRange: "-100:+0",
                changeMonth: true,
                showButtonPanel: true
            }); 
        } 
    });

    $(document).on('click', '#btnOkFamMember', function(){ //
        var grandchild = $('#namefammember').val();
        var date = $('#inputDateFamMember').val();
        var eventDate = new Date(date);
        var month = getMonth(eventDate.getMonth() + 1);
        var day = eventDate.getDate();
        var year = eventDate.getFullYear();
        var relationship = $('input:radio[name=optradio]').filter(":checked").val();
        var email = $('#emailfammember').val();

        // check that all fields in popover filled in
        if (grandchild.length > 0 && !isNaN(eventDate.getMonth()) && email.length > 0 && !(!relationship)) {
            // Show wishlist request was sent
            $( "#dialog" ).dialog({
                open: function() {
                    $(this).closest(".ui-dialog")
                    .find(".ui-dialog-titlebar-close")
                    .removeClass("ui-dialog-titlebar-close")
                    .html("<span class='ui-button-icon-primary ui-icon ui-icon-closethick'></span>");
                },
                draggable: false,
                resizable: false
            });

            if (relationship=="spouse"){
                len= people.length;
                for (i=0;i<len;i++){

                if (people[i].name==child){
                        persondict=people[i];
                        length= wishlists.length;
                        list=[];
                        ran= Math.random();

                        if (ran<.2){
                            list.push("Waiting for Response");
                            list.push("...");
                            list.push("...");
                            }
                            else{
                                for (x=0;x<3;x++){
                                ran=Math.round(Math.random()*length);
                                list.push(wishlists[ran]);
                            }

                            }
                    people[i].spouse={name: grandchild, email: $('#emailfammember').val(), events: {'Birthday': [month, day, year]}, wishlist: list};
                    grandchilddict=people[i].spouse;
                }
            }
                $("#"+child+"div").append("<li><a><h3>"+grandchild+"</h3><div align='left'>1. "+persondict.spouse.wishlist[0]+"<br>2. "+
                    persondict.spouse.wishlist[1]+"<br>3. "+persondict.spouse.wishlist[2]+"</div></a></li>");



            }
            else{
                len= people.length;
                for (i=0;i<len;i++){

                if (people[i].name==child){
                        persondict=people[i];
                        length= wishlists.length;
                        list=[];
                        ran= Math.random();

                        if (ran<.2){
                            list.push("Waiting for Response");
                            list.push("...");
                            list.push("...");
                            }
                            else{
                                for (x=0;x<3;x++){
                                ran=Math.round(Math.random()*length);
                                list.push(wishlists[ran]);
                            }

                            }
                            if (people[i].children===undefined){
                                people[i].children=[];
                            }
                    people[i].children.push({name: grandchild, email: $('#emailfammember').val(), events: {'Birthday': [month, day, year]}, wishlist: list});
                }
            }
            length=persondict.children.length;
            for (i=0;i<length;i++){
                if (persondict.children[i].name==grandchild){
                    grandchilddict=persondict.children[i];
                }
            }
                $('#'+child+"kids").append("<li><a><h3>"+grandchild+"</h3><div align='left'>1. "+grandchilddict.wishlist[0]+"<br>2. "+
                    grandchilddict.wishlist[1]+"<br>3. "+grandchilddict.wishlist[2]+"</div></a></li>");
            }

            $('#events_table').append('<tr><td id="date">' + month + ' ' + day + '</td><td><input type="button" class="link" id="'+grandchild+
                'linkBirthday" value=" '+grandchild+'\'s ">'+ '</input>' + 'Birthday' + '</td><td id="'+grandchild+'col"><input type="button" class="btn btn-default" id="btn'
                +grandchild+'view"  value="View"></input><div class="collapse out" id="'+grandchild+'list"><ul><li>'+grandchilddict.wishlist[0]+'</li><li> '+
                grandchilddict.wishlist[1]+'</li><li> '+grandchilddict.wishlist[2]+'</li></ul></div></td></tr>');


                        $('#events_table').tablesorter({ 
                           headers: {
                    0: {
                            sorter: 'date'
                    }
                },
            // sort on the first column and third column, order asc 
                sortList: [[0,0],[2,0]] 
            }); 

            $('select.inputPerson').append('<option value="'+grandchild+'">'+grandchild+'</option>');

            $("#btnAddFamilyMember").popover('hide');
        }

            $("#"+grandchild+"linkBirthday").click(function(e){
                $("#btnAddEvent").css("visibility","invisible");
                $("#famDiv").show();
                $("#eventDiv").hide();
                $('#btnAddEvent').hide();
                len= people.length;
                parent = null;
                for (i=0;i<len;i++){
                    $("#"+people[i].name+"div").hide();
                    if(people[i].spouse.name==grandchild){
                        parent=people[i].name;
                    }
                    else{
                        console.log(people[i].spouse.name);
                    }
                    for (j=0;j<people[i].children.length;j++){
                        if (people[i].children[j].name==grandchild){
                            parent=people[i].name;
                        }
                    }
                }
                $("#"+parent+"div").show();
            });

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

    // when Add Family Member popover is opened, close Add Child popover
    $(document).on('click', '#btnAddFamilyMember', function() {
        $('#btnAddFamily').popover('hide');
    });
});
