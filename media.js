let imageLink =$('.media-nav li a')[0];
let videoLink =$('.media-nav li a')[1];
let moreLink = $('.media-nav li a')[2];
$(videoLink).on('click',function(){
    $('.videos').toggleClass('d-none');
})

$(moreLink).on('click',function(){
    $('.more').toggleClass('d-none');
})

