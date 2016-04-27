// person = {name:Eileen, events:[],bday:[],wishlist:[],email:weflj@mit.edu,spouse:{name:Tom,bday:[],email,wishlist},kids:[{},{}]}
// date = [month, date, year] --> ['12', '16', '1995']

people = [];
wishlists=[];
wishlists.push(["Patagonia Fleece","Rainboots","Headphones"]);
wishlists.push(["Fitbit","Headbands","Running Shoes"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["Knee Pads","Baseball Bat","Cleats"]);
wishlists.push(["Macbook Laptop","Keyboard Cover","Screen Wipes"]);
wishlists.push(["Easel","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["IPhone Case","Paint Brushes","Acrylic Paint"]);
wishlists.push(["Waiting for Response","...","..."]);
wishlists.push(["Waiting for Response","...","..."]);
wishlists.push(["Waiting for Response","...","..."]);
wishlists.push(["Waiting for Response","...","..."]);
wishlists.push(["Waiting for Response","...","..."]);



$(document).on('click', '#btnOkFam', function(){
    var b_month = $('#monthfam').val();
    var b_day = $('#dayfam').val();
    var b_year = $('#yearfam').val();

    var person = {
    	name: $('#namefam').val(), 
    	email: $('#emailfam').val(), 
    	events: {'Birthday': [b_month, b_day, b_year]}, 
    	wishlist: ["Patagonia Fleece","Rainboots","Headphones"], 
    	spouse: '', 
    	children: []
    };

    people.push(person);

});