$(function () {
    'use strict';
    
    
    var email = 'info{arroba}naboomanagement.com'.replace('{arroba}', '@');
    
    
//    setTimeout(function () {
//        $('body').addClass('active');
//    }, 1000);
    

    var Loading = {
        total: $('img').length,
        loaded: 0,
        init: function () {
            var $this = this;
            $('img').each(function (index) {
                var img = new Image();
                img.src = $(this).attr('src');
                img.onload = function () {
                    $this.loaded++;
                    if ($this.loaded === $this.total - 1) {

                        setTimeout(function () {

                            $('body').addClass('active');

                            var delay = 700;
                            var duration = 400;
                            $('.fade').each(function () {
                                var $this = $(this);
                                setTimeout(function () {
                                    $this.addClass('active');
                                }, delay);
                                delay += duration;
                            });

                        }, 1000);

                    }
                };
            });
        }

    };
    
    
    Loading.init();

    $('.email').attr('href', 'mailto:' + email).html(email);


});


