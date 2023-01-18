$(function() {
  const eleWidth = $('.program_outter .program_sheet .show_sheet>div>div').width();

  let state = false;
  let direction = 'left';

  function right() {
    direction = 'left';
    $('.program_outter .program_sheet .show_sheet>div').animate({
      left: eleWidth * -1
    }, 300, function() {
      $(this).children('div:first').insertAfter($(this).children('div:last'));
      $(this).css('left', 0);
      state = false;
    });
  }
  
  function left() {
    direction = 'right';
    $('.show_sheet>div>div:last').insertBefore($('.show_sheet>div>div:first'));
    $('.program_outter .program_sheet .show_sheet').css('left', eleWidth * -1);
    $('.program_outter .program_sheet .show_sheet').animate({left: 0}, 300, 
      function() {
        state = false;
      })
  }

  $('.btn_rec_left').click(function() {
    if(!state) {
      state = true;
      left();
    }
  });
  $('.btn_rec_right').click(function() {
    if(!state) {
      state = true;
      right();
    }
  });

});


$(function() {
  const eleWidth = $('.critic_frame .critic_sheet div').width();

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
  } 

  function left() {
    direction = 'right';
    $('.critic_frame .critic_sheet>div:last').insertBefore($('.critic_frame .critic_sheet>div:first'));
    $('.critic_frame .critic_sheet').css('left', eleWidth * -1);
    $('.critic_frame .critic_sheet').animate({left: 0}, 500, 
      function() {
        state = false;
      })
  }

  $('.btn_critic_left').click(function() {
    if(!state) {
      state = true;
      left();
    }
  });
  $('.btn_critic_right').click(function() {
    if(!state) {
      state = true;
      right();
    }
  });

});

$(function() {
  const eleWidth = $('.event .event_slide div').width();

  let state = false;
  let direction = 'left';

  function right() {
    direction = 'left';
    $('.event .event_slide').animate({
      left: eleWidth * -1
    }, 300, function() {
      $(this).children('div:first').insertAfter($(this).children('div:last'));
      $(this).css('left', 0);
      state = false;
    });
  }

  function left() {
    direction = 'right'; 
    $('.event .event_slide div:last').insertBefore($('.event .event_slide div:first'));
    $('.event .event_slide').css('left', eleWidth * -1);
    $('.event .event_slide').animate({left: 0}, 300, 
      function() {
        state = false;
      })
  }

  $('.btn_event_left').click(function() {
    if(!state) {
      state = true; 
      left(); 
    }
  });
  $('.btn_event_right').click(function() {
    if(!state) {
      state = true;
      right();
    }
  });

});



