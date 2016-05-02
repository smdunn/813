$(function(){
    $('#btnEditFamily').popover({
        html: true,
        title: 'Edit Family<a class="close" href="#");">&times;</a>',
        content: function() { return $('#popoverEditFamily').html(); } ,
        placement: 'left',
    });
});