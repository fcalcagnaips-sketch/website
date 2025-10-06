 $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.social_links').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })


    $('.menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.social_links').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
 });