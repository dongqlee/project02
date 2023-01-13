$(function() {
  const lnbLi = $('.lnb>li');
  const ul = $('.lnb>li>ul');
  const lnbMin = $('.lnb').height();
  const lnbMax = lnbMin + ul.innerHeight();

  let state = false;

  lnbLi.mouseenter(function() {
    if(!state) {
      $('.lnb').stop().animate({
        height: lnbMax
      }, 150, function() {
        ul.stop().fadeIn(150);
      });
      state = true;
    }
  });

  $('.lnb').mouseleave(function() {
    ul.stop().fadeOut(150, function() {
      $('.lnb').stop().animate({
        height: lnbMin
      }, 150);
    });
    state = false;
  });

  $(window).scroll(function() {
    if($(window).scrollTop() >= 200) {
      $('.lnb').addClass('fixed');
    } else {
      $('.lnb').removeClass('fixed');
    }
  });

}); //lnb


$(function() {
  const eleWidth = $('.m_movie_box .movie_contents_box').width();

  let state = false;
  let direction = 'left';

  function right() {
    direction = 'left';
    $('.m_movie_box .movie_contents_box .movie_contents').animate({
      left: eleWidth * -1
    }, 300, function() {
      $(this).children('div:first').insertAfter($(this).children('div:last'));
      $(this).css('left', 0);
      state = false;
    });
  } // right()
  
  function left() {
    direction = 'right';  
    $('.movie_contents>div:last').insertBefore($('.movie_contents>div:first'));
    $('.m_movie_box .movie_contents_box .movie_contents').css('left', eleWidth * -1);
    $('.m_movie_box .movie_contents_box .movie_contents').animate({left: 0}, 300, 
      function() {
        state = false;
      })
  } //left()

  $('.l_arr').click(function() {
    if(!state) {
      state = true;  
      left(); 
    }
  });
  $('.r_arr').click(function() {
    if(!state) {
      state = true;
      right();
    }
  });
}); //m_movie_box

$(function() {
  const tab = $('.recommend_section .rec_top .btn_box li');
  const sheet = $('.recommend_section .rec_bg>div');

  tab.click(function() {
    let target = $(this);
    let i = target.index();

    tab.removeClass('on');
    tab.eq(i).addClass('on'); 
    
    sheet.removeClass('show_sheet');
    sheet.eq(i).addClass('show_sheet');
  });//tab click event
});
//recommend_section

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
  } // right()

  function left() {
    direction = 'right';   
    $('.critic_frame .critic_sheet>div:last').insertBefore($('.critic_frame .critic_sheet>div:first'));
    $('.critic_frame .critic_sheet').css('left', eleWidth * -1);
    $('.critic_frame .critic_sheet').animate({left: 0}, 500, 
      function() {
        state = false;
      })
  } //left()

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

});//critic

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
  } // right()

  function left() {
    direction = 'right';  
    $('.event .event_slide div:last').insertBefore($('.event .event_slide div:first'));
    $('.event .event_slide').css('left', eleWidth * -1);
    $('.event .event_slide').animate({left: 0}, 300, 
      function() {
        state = false;
      })
  } //left()

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

});//event

$(function() {
  const tab = $('.con_title li');
  const list = $('.list_box>div');

  tab.click(function() {
    let target = $(this);
    let i = target.index();

    tab.removeClass('btn_ch');
    tab.eq(i).addClass('btn_ch'); 
    
    list.removeClass('show_list');
    list.eq(i).addClass('show_list');
  });
});//quick

$(function() {
  $('.top_box').click(function(e) {
    e.preventDefault();
    $(window).scrollTo(this.hash || 0, 1000);
  })

  $('.down_box').click(function(e) {
    e.preventDefault();
    $(window).scrollTo(this.hash || 10000, 1000);
  })
})//btn top bottom 