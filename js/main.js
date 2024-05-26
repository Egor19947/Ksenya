$(function () {

  $('.header__inner-btn').on('click', function () {
    $('.prize').toggleClass('prize--active');
    $('body').toggleClass('body--fix');
  });

  $('.prize--close').on('click', function () {
    $('.prize').removeClass('prize--active');
    $('body').removeClass('body--fix');
  });

  $('.person__items').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.info__item-title').on('click', function () {
    if ($('.info__items').hasClass('one')) {
      $('.info__item-title').not($(this)).removeClass('info__item--acive');
      $('.info__item-box').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('info__item--acive').next().slideToggle(300);
  });


});