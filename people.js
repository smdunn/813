// var person= {name:Eileen, events:[],bday:[],wishlist:[],email:weflj@mit.edu,spouse:{name:Tom,bday:[],email,wishlist},kids:[{},{}]}
people = [];

$(document).on('click', '#btnOkFam', function(){
    var b_month = $('#monthfam').val();
    var b_day = $('#dayfam').val();
    var b_year = $('#yearfam').val();

<<<<<<< HEAD
    var person = {name:$('#namefam').val(), birthday:[b_month, b_day, b_year], email:$('#emailfam').val(), wishlist:[]};
    people.push(person);
=======
    var person = {name:$('#namefam').val(), birthday:[b_month, b_day, b_year], email:$('#emailfam').val(), wishlist:[], spouse:'', children:[]};
    people.push(person)
>>>>>>> 89f5821721d427ae3f453ddbd374ec9fc868c552
});