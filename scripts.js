$(function(){

/* Header
__________________________________________________________________________________*/

    let header = $('#header');
    let intro = $('#intro');
    let intro_h = intro.innerHeight();
    let scroll_pos = $(window).scrollTop();

    function checkScroll(intro_h, scroll_pos){
        if(scroll_pos > intro_h){
            header.addClass('fixed');
        }
        else{
            header.removeClass('fixed');
        }
    }
    checkScroll(intro_h, scroll_pos);

    $(window).on('scroll resize', function(){
        scroll_pos = $(this).scrollTop();

        checkScroll(intro_h, scroll_pos);
    });

/* Smooth scroll
__________________________________________________________________________________*/

    $('[data-scroll]').on('click', function(e){
        e.preventDefault();

        let elm_id = $(this).data('scroll');
        let elm_offset = $(elm_id).offset().top;

        $('html, body').animate({
            scrollTop: elm_offset - 140
        }, 700);

        //Nav toggle element
        nav.removeClass('show');
    });

/* Drop menu
__________________________________________________________________________________*/

    let btn_menu = $('#burger_menu');
    let nav = $('#navigation');

    btn_menu.click(function(e){
        e.preventDefault();

        nav.toggleClass('show');
    });

    $(document).click(function(e){
        if(! btn_menu.is(e.target) && btn_menu.has(e.target).length === 0 &&          
        ! nav.is(e.target) && nav.has(e.target).length === 0){

            nav.removeClass('show');
        }
    });  
});