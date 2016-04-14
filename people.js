// person = {name:Eileen, events:[],bday:[],wishlist:[],email:weflj@mit.edu,spouse:{name:Tom,bday:[],email,wishlist},kids:[{},{}]}
// date = [month, date, year] --> ['12', '16', '1995']

people = [];

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