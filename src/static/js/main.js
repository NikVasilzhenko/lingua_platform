$(document).ready(function () {
  //video-popup
  if($('#js-video-vrapper').length){
    var iframe = $('#js-video-container iframe');
	$('.js-blind').on('click', function(){
      var winHeight = $(window).height() / 2,
		  blinPos = $(this).offset().top + ($(this).height() / 2),
		  scrollPos = blinPos - winHeight;
      $('#js-video-vrapper').fadeIn(250).addClass('show');
      $('html, body').animate({ scrollTop: scrollPos}, 250);
      //$('html').add('body').addClass('no-scroll');          

      var srcAttr = $(this).attr('data-href');
      iframe.attr("src", srcAttr + "?autohide=1&amp;autoplay=1");
	});

    $('.js-video-close').on('click', function(){
      $('#js-video-vrapper').fadeOut(250).removeClass('show');
      //$('html').add('body').removeClass('no-scroll');
      iframe.removeAttr("src");
    });
  }
  
  //кнопка скролл
  $('.js-scroll').click(function(e){
    e.preventDefault();
    var anchor = $(this).attr("href");
    var scroll_el = $(anchor);
    if ($(scroll_el).length != 0) { 
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 250); 
    }
  });  
  
  //input
  $('.js-input').on('focus', function(){
    $(this).closest('.js-input-wrap').addClass('on-focuse');
  });
  $('.js-input').on('blur', function(){
    $(this).closest('.js-input-wrap').removeClass('on-focuse');
  });
  $('.js-input').on('input', function(){
    if($(this).val().trim()){
      $(this).closest('.js-input-wrap').addClass('on-val');
    } else{
      $(this).closest('.js-input-wrap').removeClass('on-val');
    }    
  });
  
  //accordion
  $('.js-accordion-title').on('click', function(){
    $(this).closest('.js-accordion-item').toggleClass('open');
    $(this).next('.js-accordion-main').slideToggle(250);
  });
  
  //mob menu
  $('.js-mob-menu-btn').on('click', function(){
    $('#js-mob-menu').toggleClass('open');
  });
  $('.js-search-btn').on('click', function(){
    $('#js-popup-search').toggleClass('open');
  });
  $('.js-filter-btn').on('click', function(){
    $('#js-mob-filter').toggleClass('open');
  });
  $('.js-sort-btn').on('click', function(){
    $('#js-sort-mob').toggleClass('open');
  });
});