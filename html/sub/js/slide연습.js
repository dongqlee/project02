$(function() {
  const eleWidth = $('.critic_frame .critic_sheet div').innerWidth();

  let state = false;
  let direction = 'left';

  function right() {
    direction = 'left';
    $('.critic_frame .critic_sheet').animate({
      left: eleWidth * -1
    }, 500, function() {
      $(this).children('div:first').insertAfter($(this).children('div:last'));
      $(this).css('left', 0);
      state = false;
    });
  } // left()

  function left() {
    direction = 'right';  //제어를 위한 변수 
    $('.critic_frame .critic_sheet>div:last').insertBefore($('.critic_frame .critic_sheet>div:first'));
    $('.critic_frame .critic_sheet').css('left', eleWidth * -1);
    $('.critic_frame .critic_sheet').animate({left: 0}, 500, 
      function() {
        state = false;
      })
  } //right()

  $('.btn_critic_left').click(function() {
    if(!state) {
      state = true;  //동작 시작했다 알리고
      left(); //호출
    }
  });
  $('.btn_critic_right').click(function() {
    if(!state) {
      state = true;
      right();
    }
  });

});
  