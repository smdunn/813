// person = {name:Eileen, events:[],bday:[],wishlist:[],email:weflj@mit.edu,spouse:{name:Tom,bday:[],email,wishlist},kids:[{},{}]}
// date = [month, date, year] --> ['12', '16', '1995']

people = [];
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



$(document).on('click', '#btnOkFam', function(){
    var b_month = $('#monthfam').val();
    var b_day = $('#dayfam').val();
    var b_year = $('#yearfam').val();
    var person= $('#namefam').val(), 
    length= wishlists.length;
    list=[];
    ran= Math.random();
       persondict=null;
                here=false;
                for (i=0;i<people.length;i++){
                    if (person==people[i].name){
                        persondict=people[i];
                        here=true;
                    }
                }
            if (here){
            }
            else{
    if (ran<.2){
        list.push("Waiting for Response");
        list.push("...");
        list.push("...");
        }
        else{
            for (i=0;i<3;i++){
            ran=Math.round(Math.random()*length);
            list.push(wishlists[ran]);
        }

        }
    var person = {
    	name: $('#namefam').val(), 
    	email: $('#emailfam').val(), 
    	events: {'Birthday': [b_month, b_day, b_year]}, 
        wishlist: list, 
        
    	
    	spouse: '', 
    	children: []
    };

    people.push(person);
}
});