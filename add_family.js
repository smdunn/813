
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


    $('#btnAddFamily').popover({
        html: true,
        title: 'Add Child<a class="close" href="#");">&times;</a>',
        content: $('#popoverAddFamily').html(),
        placement: 'auto',
        callback: function() { 
            $('.datepicker-child').datepicker({
                changeYear: true,
                yearRange: "-100:+0",
                changeMonth: true,
                showButtonPanel: true
            }); 
        } 
    });
    $(document).on('click', '#btnOkFam', function(){
        console.log("please");
        var lchild = $('#namefam').val();
        var date = $('#inputDateChild').val();
        var eventDate = new Date(date);
        var month = getMonth(eventDate.getMonth() + 1);
        var day = eventDate.getDate();
        var year = eventDate.getFullYear();

        // Show wishlist request was sent
        $( "#dialog" ).dialog();

        if (lchild.length > 0) {
    persondict=null;
                here=false;
                for (i=0;i<people.length;i++){
                    if (lchild==people[i].name){
                        persondict=people[i];
                        here=true;
                    }
                }
            if (here){

                $('#childappend').append("<ul><div id='"+lchild+"div'><li><a><h3>"+lchild+"</h3><div align='left'>1. "+
                    persondict.wishlist[0]+"<br>2. "+persondict.wishlist[1]+"<br>3. "+persondict.wishlist[2]+"</div></a><ul><div id='"+
                    lchild+"kids'></div></ul></li></div></ul>");
             //       $('#inputPerson').append('<option value="'+lchild+'">'+lchild+'</option>');
            }
            else{



                    list=[];
    ran= Math.random();
    if (ran<.2){
        list.push("Waiting for Response");
        list.push("...");
        list.push("...");
        }
        else{
            for (i=0;i<3;i++){
            ran=Math.random()*length;
            list.push(wishlists[ran]);
        }

        }
    var person = {
        name: $('#namefam').val(), 
        email: $('#emailfam').val(), 
        events: {'Birthday': [month, day, year]}, 
        wishlist: list, 
        spouse: '', 
        children: []
    };

    people.push(person);
                    persondict=null;
                here=false;
                for (i=0;i<people.length;i++){
                    if (lchild==people[i].name){
                        persondict=people[i];
                        here=true;
                    }
                }

                 $('#childappend').append("<ul><div id='"+lchild+"div'><li><a><h3>"+lchild+"</h3><div align='left'>1. "+
                    persondict.wishlist[0]+"<br>2. "+persondict.wishlist[1]+"<br>3. "+persondict.wishlist[2]+
                    "</div></a><ul><div id='"+lchild+"kids'></div></ul></li></div></ul>");
            }
            $('#fams').append('<li><input type="button" class="btn btn-default btn-block fam_btn" id='+lchild+' value='+lchild+'></input></li>');
            $("#btnAddFamily").popover('hide');
        }
        $("#famDiv").removeClass("hide");
        $("#famDiv").hide();
        $("#"+lchild+"").click(function(){
            $("#btnAddEvent").css("visibility","invisible");
            $("#famDiv").show();
            $("#eventDiv").hide();
            $('#btnAddEvent').hide();
            $('#popoverAddEvent').hide();
            len= people.length;
            for (i=0;i<len;i++){
                $("#"+people[i].name+"div").hide();
            }
            $("#"+lchild+"div").show();
            child=lchild;

        });     
        $("#"+lchild+"div").hide();

    });

    // when Add Child popover is opened, close Add Event popover
    $(document).on('click', '#btnAddFamily', function() {
        $('#btnAddEvent').popover('hide');
    });

    // when Add Child popover is opened, close Add Family Member popover
    $(document).on('click', '#btnAddFamily', function() {
        $('#btnAddFamilyMember').popover('hide');
    });
});


