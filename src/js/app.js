import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../styles/wm.scss';
import '../styles/variables.scss';
import '../styles/mixins.scss';
import '../styles/style.scss';
import '../styles/welcome.scss';
import 'jquery';
import 'jquery.scrollto';
import {nav} from './nav';
import {dataFill} from './dataFill';
window.onload = function() {
    $( document ).ready(function() {
        nav();
        dataFill();
        $("#body-wrapper").show();
        $("body").css({overflow:"hidden"})
        $("#waiting-modal").show().delay(1500).fadeOut(1000,function(){
            $("body").css({overflow:"auto"})
        });
    });
};