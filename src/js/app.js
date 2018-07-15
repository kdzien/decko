import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../styles/variables.scss';
import '../styles/mixins.scss';
import '../styles/style.scss';
import '../styles/welcome.scss';
import 'jquery';
import 'jquery.scrollto';

//menu scroll
$('nav').find('li').each(function(){
    $(this).click(function(){
        $('body').scrollTo(`#${$(this).attr("data-scroll")}`,800);
    })
})