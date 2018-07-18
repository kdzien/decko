export function nav(){
    //morebutton
    $('#more').click(function(){
        $('body').scrollTo(`#content-services`,800);
    })
    //smoothscrol
    $('nav').find('li').each(function(){
        $(this).click(function(){
            $('body').scrollTo(`#${$(this).attr("data-scroll")}`,800);
        })
    })
    //sticky navbar
    let is_sticky = false;
    $(window).scroll(function(){
        if($(this).scrollTop()>5){
            if(is_sticky === false){
                is_sticky=true;
                $(".logo").css({"background-color":"rgb(251, 192, 45)"})
                $('nav').animate({
                    "padding": "0px 0px"
                },0,()=>{
                }).css({
                    "background-color":"#333333",
                    "position":"fixed",
                })
            }
        }else{
            is_sticky=false;
            $(".logo").css({"background-color":"rgba(0, 0, 0,0)"})
            $('nav').animate({
                "padding": "30px 50px",
            },0,()=>{
            }).css({
                "background-color":"rgba(0, 0, 0, 0)",
                "position":"absolute",
            })
        }
    })
}