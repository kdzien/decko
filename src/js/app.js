import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../styles/variables.scss'
import '../styles/mixins.scss'
import '../styles/style.scss'
import 'jquery'
$('.carousel').carousel({
    interval: false
}).on('slide.bs.carousel', function (e) {
    var nextH = $(e.relatedTarget).height();
    console.log(nextH)
    console.log( $(this).find('.active.item').parent() )
    $(this).find('.carousel-item.active').parent().animate({
        height: nextH
    }, 500);
});