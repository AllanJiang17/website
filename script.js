$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    $('.menu-button').click(function(){
        $('.navbar .nav').toggleClass("active")
        $('.menu-button i').toggleClass("active")
    });
});

var typed = new Typed(".intro", {
    strings: ["Designer", "Developer", "Tester"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
});
