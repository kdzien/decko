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
        if($(this).scrollTop()>2){
            if(is_sticky === false){
                is_sticky=true;
                $('nav').animate({
                    "padding": "0px 0px"
                },0,()=>{
                }).css({
                    "background-color":"rgba(53, 43, 68, 0.7)"
                })
            }
        }else{
            is_sticky=false;
            $('nav').animate({
                "padding": "30px 50px",
            },0,()=>{
            }).css({
                "background-color":"rgba(0,0,0,0)"
            })
        }
    })
}