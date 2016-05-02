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

var tmp = $.fn.popover.Constructor.prototype.show;
$.fn.popover.Constructor.prototype.show = function () {
  tmp.call(this);
  if (this.options.callback) {
    this.options.callback();
  }
}

$(function(){
	$('#btnAddEvent').popover({
        html: true,
        title: 'Add Event<a class="close" href="#");">&times;</a>',
        placement: 'bottom',

        content: function() { return $('#popoverAddEvent').html(); } ,

        callback: function() { 
            $('.datepicker').datepicker({
                changeYear: true,
                yearRange: "-100:+0",
                changeMonth: true,
                showButtonPanel: true
            }); 
        } 
	});

    $(document).on("click", ".close" , function(){
        $(this).parents(".popover").popover('hide');
    });

	$(document).on('click', '#btnOkEvent', function(){
        var date = $('#inputDate').val();
        var eventDate = new Date(date);
        // var month = getMonth(eventDate.getMonth() + 1);
        // var day = eventDate.getDate();
        // var year = eventDate.getFullYear();
        var month = getMonth($('#monthInputEvent').val());
        var day = $('#dayInputEvent').val();
        var year = $('#yearInputEvent').val();
        var person = $('#inputPerson').val(); 
        var e = $('#inputEvent').val();


        if (person.length > 0 && e.length > 0) {

            persondict=null;
                here=false;
                for (i=0;i<people.length;i++){
                    if (person==people[i].name){
                        persondict=people[i];
                        here=true;
                    }
                }

                $('#events_table').append('<tr id="' +person+
                    'tr'+e+'"><td>' + month + ' ' + day + '</td><td><input type="button" class="link" id="' +person+
                    'link'+e+'" value=" '+person+'\'s ">'+ '</input>' + e + '</td><td id="'+person+'col"><input type="button" class="btn btn-default" id="btn'
                    +person+'view'+e+'" value="View"></input><input type="button" class="btn btn-default" id="btn'
                    +person+'delete'+e+'" value="Delete"></input><div class="collapse out" id="'+person+'list'+e+'"><ul><li>'+persondict.wishlist[0]+'</li><li>'+persondict.wishlist[1]+'</li><li>'+persondict.wishlist[2]+'</li></ul></div></td></tr>');

                $('select.inputPerson').append('<option value="'+person+'">'+person+'</option>');



 // <span class="glyphicon glyphicon-delete"></span>
//</button></input><div class="collapse out" id="'+person+'list"><ul><li>'+persondict.wishlist[0]+'</li><li>'
  //                  +persondict.wishlist[1]+' </li><li> '+persondict.wishlist[2]+'</li></ul></div></td></tr>');

            $('#person').val('');
            $('#events_table').tablesorter({ 
                           headers: {
                    0: {
                            sorter: 'date'
                    }
                },
            // sort on the first column and third column, order asc 
                sortList: [[0,0],[2,0]] 
            }); 
            //$("#"+person+"list").css("visibility","hidden");
            $("#btn"+person+"view"+e+"").click(function(evt){
                //e.stopPropagation();
                if ($("#"+person+"list"+e+"").hasClass("out")){
                    $("#"+person+"list"+e+"").addClass("in");
                    $("#"+person+"list"+e+"").removeClass("out");
                    $("#btn"+person+"view"+e+"").val("Hide");
                }
                else{
                    $("#"+person+"list"+e+"").addClass("out");
                    $("#"+person+"list"+e+"").removeClass("in");
                    $("#btn"+person+"view"+e+"").val("View");
                }
            });

            $("#btn"+person+"delete"+e+"").click(function(evt){
                //e.stopPropagation();
                $("#"+person+'tr'+e+"").remove();
            });
            //This makes a person's name link to their fam div
            $("#"+person+"link"+e+"").click(function(e){
                $("#btnAddEvent").css("visibility","invisible");
                $("#famDiv").show();
                $("#eventDiv").hide();
                $('#btnAddEvent').hide();
                $('#popoverAddEvent').hide();
                len= people.length;
                parent = null;
                for (i=0;i<len;i++){
                    $("#"+people[i].name+"div").hide();
                    if((people[i].spouse.name==person)||(people[i].name==person)){
                        parent=people[i].name;
                    }
                    for (j=0;j<people[i].children.length;j++){
                        if (people[i].children[j].name==person){
                            parent=people[i].name;
                        }
                    }
                }
                $("#"+parent+"div").show();
                child=parent;
            });

            $('#inputEvent').val('');

            $(this).parents(".popover").popover('hide');
        }
        
	});
    
    // when Add Event popover is opened, close Add Child popover
    $(document).on('click', '#btnAddEvent', function() {
        $('#btnAddFamily').popover('hide');
    });

    // when child is added add their birthday to upcoming events
    $(document).on('click', '#btnOkFam', function(){
        var person = $("#namefam").val();
        var date = $('#inputDateChild').val();
        // var eventDate = new Date(date);
        // var month = getMonth(eventDate.getMonth() + 1);
        // var day = eventDate.getDate();
        // var year = eventDate.getFullYear();
        var month = getMonth($('#monthInputFam').val());
        var day = $('#dayInputFam').val();
        var year = $('#yearInputFam').val();
        var email = $('#emailfam').val();

        if (person.length > 0 && email.length > 0) {
                persondict=null;
                here=false;
                for (i=0;i<people.length;i++){
                    if (person==people[i].name){
                        persondict=people[i];
                        here=true;
                    }
                }
            if (here){
            $('#events_table').append('<tr><td id="date">' + month + ' ' + day + '</td><td><input type="button" class="link" id="'+person+
                'linkBirthday" value=" '+person+'\'s ">'+ '</input>' + 'Birthday' + '</td><td id="'+person+'col"><input type="button" class="btn btn-default" id="btn'
                +person+'view"  value="View"></input><div class="collapse out" id="'+person+'list"><ul><li>'+persondict.wishlist[0]+'</li><li> '+
                persondict.wishlist[1]+'</li><li> '+persondict.wishlist[2]+'</li></ul></div></td></tr>');


                $('select.inputPerson').append('<option value="'+person+'">'+person+'</option>');

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
                    if (person==people[i].name){
                        persondict=people[i];
                        here=true;
                    }
                }

                $('#events_table').append('<tr><td id="date">' + month + ' ' + day + '</td><td>' + person
     + '\'s ' + 'Birthday' + '</td><td id="'+person+'col"><input type="button" class="btn btn-default" id="btn'+person+
     'view"  value="View"></input><div class="collapse out" id="'+person+'list"><td></td><td></td><td><ul><li>'+persondict.wishlist[0]+
     '</li><li> '+persondict.wishlist[1]+'</li><li> '+persondict.wishlist[2]+'</li></ul></td></div></td></tr>');
console.log("foo");
                $('select.inputPerson').append('<option value="'+person+'">'+person+'</option>');

           
}
            $('#events_table').tablesorter({ 
        // sort on the first column and third column, order asc 
                   headers: {
                    0: {
                            sorter: 'date'
                    }
                    },
            sortList: [[0,0],[2,0]] 
            });
        
    }



            $("#"+person+"linkBirthday").click(function(e){
                $("#btnAddEvent").css("visibility","invisible");
                $("#famDiv").show();
                $("#eventDiv").hide();
                $('#btnAddEvent').hide();
                $('#popoverAddEvent').hide();
                len= people.length;
                for (i=0;i<len;i++){
                    $("#"+people[i].name+"div").hide();
                }
                $("#"+person+"div").show();
                child=person;
            });

        $("#btn"+person+"view").click(function(e){
            //e.stopPropagation();
            if ($("#"+person+"list").hasClass("out")){
                $("#"+person+"list").addClass("in");
                $("#"+person+"list").removeClass("out");
                $("#btn"+person+"view").val("Hide");
            }
            else{
                $("#"+person+"list").addClass("out");
                $("#"+person+"list").removeClass("in");
                $("#btn"+person+"view").val("View");
            }
        });




    });

});

function getMonth(month) {
    if (month == 1) {
        month = "January";
    }
    if (month == 2) {
        month = "February";
    }
    if (month == 3) {
        month = "March";
    }
    if (month == 4) {
        month = "April";
    }
    if (month == 5) {
        month = "May";
    }
    if (month == 6) {
        month = "June";
    }
    if (month == 7) {
        month = "July";
    }
    if (month == 8) {
        month = "August";
    }
    if (month == 9) {
        month = "September";
    }
    if (month == 10) {
        month = "October";
    }
    if (month == 11) {
        month = "November";
    }
    if (month == 12) {
        month = "December";
    }
    return month;
}

