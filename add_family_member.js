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
        placement: 'auto'
    });

    $(document).on('click', '#btnOkFamMember', function(){ //
        var grandchild = $('#namefammember').val();
        var month= $('#monthfammember').val();
        var day= $("#dayfammember").val();
        var year= $("#yearfammember").val();
        var relationship = $('input:radio[name=optradio]').filter(":checked").val();
        if (grandchild.length > 0) {
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
                $("#"+child+"div").append("<li><a><h3>"+grandchild+"</h3>1."+persondict.spouse.wishlist[0]+"<br>2."+persondict.spouse.wishlist[1]+"<br>3. "+persondict.spouse.wishlist[2]+"</a></li>");


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
                $('#'+child+"kids").append("<li><a><h3>"+grandchild+"</h3>1."+grandchilddict.wishlist[0]+"<br>2."+grandchilddict.wishlist[1]+"<br>3. "+grandchilddict.wishlist[2]+"</a></li>");
            }

            $('#events_table').append('<tr><td>' + getMonth(month) + ' ' + day + '</td><td>' + grandchild
               + '\'s ' + 'Birthday' + '</td><td id="'+grandchild+'col"><input type="button" class="btn btn-default" id="btn'+grandchild+'view"  value="View"></input></td></tr><tr class="collapse out" id="'+grandchild+'list"><td></td><td></td><td><ul><li>1.'+grandchilddict.wishlist[0]+'<br>2.'+grandchilddict.wishlist[1]+'<br>3. '+grandchilddict.wishlist[2]+'</li></ul></td></tr>');
            $("#btnAddFamilyMember").popover('hide');
        }
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
