$(document).ready(function(){
    setTimeout(function(){
        $('.tag-line').addClass('active');
    },1500);

    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       100,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    $('a[class="scroll-to-block"]').on('click',function(event){
        event.preventDefault();
        var target = $(this).attr('data-scroll');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });


});