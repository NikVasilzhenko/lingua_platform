$(document).ready(function () {  
  //formstyler
  $(function() {
    $('.js-select').styler({
      selectSearch: true,
      onFormStyled: function(){
        $('.jq-selectbox__select').each(function(){
          var thisTxt = $(this).prev('.js-select').attr('data-placeholder');
          $(this).find('.jq-selectbox__select-text').attr('data-txt', thisTxt);
        });
      }
    });
  });
  
  //pop courses slider
  $('#js-pop-courses-sec-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  //reviews slider
  $('#js-reviews-sec-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });
  
  //ui slider
  $('.js-filter-rang').each(function(){
    var $this = $(this),
        dataStep = $this.find('.js-handle-input-min').attr('data-step'),
        dataMin = $this.find('.js-handle-input-min').attr('data-min'),
        dataMax = $this.find('.js-handle-input-max').attr('data-max');

        $( function() {
            var minVal = $this.find('.js-handle-input-min'),
                maxVal = $this.find('.js-handle-input-max');
            function buildSlider( val1, val2){
                $this.find( ".js-slider-bar").slider({
                    range: true,
                    min: +dataMin,
                    max: +dataMax,
                    values: [ val1, val2 ],                
                    step: +dataStep,
                    create: function() {
                      $this.find( ".js-handle-bar" ).html('<span>' + minVal.attr('data-val') + '₽</span>');
                      $this.find( "a.ui-slider-handle" ).html('<span>' + maxVal.attr('data-val') + '₽</span>');
                    },
                    slide: function( event, ui ) {
                        var handle = $this.find( ".js-handle-bar" ),
                            handle2 = $this.find( "a.ui-slider-handle" );                        
                        minVal.val( ui.values[ 0 ] );
                        maxVal.val( ui.values[ 1 ] );    
                      handle.html('<span>' + ui.values[ 0 ] + '₽</span>');
                      handle2.html('<span>' + ui.values[ 1 ] + '₽</span>');
                    },
                });
            }

            buildSlider(minVal.attr('data-val'), maxVal.attr('data-val'));
        });
    });
  
  //school slider
  $('#js-school-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          initialSlide: 0
        }
      }
    ]
  });
  $('#js-school-slider').on('swipe', function(event, slick, direction){
    $(this).addClass('is-swiped');
  });
  
  //doc sec slider
  $('#js-doc-sec-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  
  //colorbox
  $('.js-gallery').colorbox({
    opacity: 0.5,
    current: 'фото {current} из {total}',
    rel: 'group1'
  });
  
});
