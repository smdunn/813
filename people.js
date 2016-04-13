// var person= {name:Eileen, events:[],bday:[],wishlist:[],email:weflj@mit.edu,spouse:{name:Tom,bday:[],email,wishlist},kids:[{},{}]}
people = [];

$(document).on('click', '#btnOkFam', function(){
    var b_month = $('#monthfam').val();
    var b_day = $('#dayfam').val();
    var b_year = $('#yearfam').val();

    var person = {name:$('#namefam').val(), birthday:[b_month, b_day, b_year], email:$('#emailfam').val(), wishlist:[]};
    console.log(person);
});