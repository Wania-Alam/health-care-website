$(document).ready(function(){
    $('#main').hide();
    
    $('.login').click(function(){
        $('#main').show();
        $('#close').click(function(){
            $('#main').hide();
        })
    })

    $('.search').hide();
    $('.searchicon').click(function(){
        $('.search').show();
    })  
})