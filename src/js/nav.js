export function nav(){
    let is_sticky = false;
    navScroll();
    //morebutton
    $('#more').click(function(){
        $('body').scrollTo($(`#content-services`).offset().top-52,800);
    })
    //smoothscrol
    $('nav').find('li').each(function(){
        $(this).click(function(){
            $('body').scrollTo($(`#${$(this).attr("data-scroll")}`).offset().top-52,800);
        })
    })
    //sticky navbar
    $(window).scroll(navScroll)

    function navScroll(){
        if($(this).scrollTop()>5){
            if(is_sticky === false){
                is_sticky=true;
                let nav_padding = $( window ).width()<767 ? "0px 0px" : "0px 50px";
                $("nav ul li").css({"background-color":"rgba(0,0,0,0)"})
                $('nav').animate({
                    "padding": nav_padding
                },100,()=>{
                }).css({
                    "background-color":"#333333",
                    "position":"fixed",
                })
            }
        }else{
            is_sticky=false;
            let nav_padding = $( window ).width()<767 ? "0px 0px" : "30px 50px";
            $("nav ul li").css({"background-color":"rgba(255,255,255,0.3)"})
            $("nav ul li:first").css({"background-color":"rgba(255,255,255,0.5)"})
            $('nav').animate({
                "padding": nav_padding,
            },0,()=>{
            }).css({
                "background-color":"rgba(0, 0, 0, 0)",
                "position":"absolute",
            })
        }
    }
}