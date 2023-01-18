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
});


$(function() { 
  $(window).scroll(function() {
    if($(window).scrollTop() >= 200) {
      $('.lnb').addClass('fixed');
    } else {
      $('.lnb').removeClass('fixed');
    }
  });
});


let iconMLogin = document.querySelector('.m_gnb_icon .user_icon');
let btnMLogIn = document.querySelector('.btn_m_login');
let btnWLogIn = document.querySelector('.btn_w_login');
let LogInBox = document.querySelector('.login_bg');
let btnLogInClose = document.querySelector('.btn_login_close .icon');

iconMLogin.addEventListener('click', () => {
  LogInBox.style.display = 'block'
});
btnMLogIn.addEventListener('click', () => {
  LogInBox.style.display = 'block'
});
btnWLogIn.addEventListener('click', () => {
  LogInBox.style.display = 'block'
});
btnLogInClose.addEventListener('click', () => {
  LogInBox.style.display = 'none'
})
//login_bg

let loginId = document.getElementById('user_id');
let loginPw = document.getElementById('user_pw');
let btnLogIn = document.querySelector('.btn_login');

let id = 'green';
let pw = 1234;
btnLogIn.addEventListener('click', () => {
  if(loginId.value == id) {
    if(loginPw.value == 1234 ) {
      alert('환영합니다.');
    } else if(loginPw.value != 1234 ) {
      alert('비밀번호가 틀렸습니다.');
      loginPw.select()
    }
  } else {
    alert('등록된 아이디가 아닙니다.');
    loginId.select()
  }
});
//login

let btnYear = document.querySelector('.w_hs_contents .btn_year_tab');
let isShow = false;
btnYear.addEventListener('click', function() {
  if(!isShow) {
    document.querySelector('.w_hs_contents .w_year_sheet').style.display ='block';
    isShow = true;
  } else {
    document.querySelector('.w_hs_contents .w_year_sheet').style.display = 'none'
    isShow = false;
  }
});
let tab01 = document.querySelector('.tab01')
let tab02 = document.querySelector('.tab02')
let tab03 = document.querySelector('.tab03')
tab01.addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.w_hs_contents .hs_22').offsetTop,
    left:0,
    behavior: 'smooth'
  })
})
tab02.addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.w_hs_contents .hs_18').offsetTop,
    left:0,
    behavior: 'smooth'
  })
})
tab03.addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.w_hs_contents .hs_14').offsetTop,
    left:0,
    behavior: 'smooth'
  })
})



let btnRelMore = document.querySelector('.btn_rel_more')
let showRel = document.querySelector('.all_rel_bg')
let btnRelClose = document.querySelector('.all_rel_bg .btn_rel_close .icon')

btnRelMore.addEventListener('click', function() {
  showRel.style.display ='block'
})
btnRelClose.addEventListener('click', function() {
  showRel.style.display ='none'
})
//rel_more  


let btnMecMore = document.querySelector('.btn_mecenat_more')
let showMec = document.querySelector('.all_mec_bg')
let btnMecClose = document.querySelector('.all_mec_bg .btn_mec_close .icon')

btnMecMore.addEventListener('click', function() {
  showMec.style.display ='block'
})
btnMecClose.addEventListener('click', function() {
  showMec.style.display ='none'
})
//mec_more

let btnWishW = document.querySelector('.wish_list_box .txt')
let btnWishM = document.querySelector('.heart_icon')
let showWish = document.querySelector('.wish_bg')
let btnWishClose = document.querySelector('.btn_close_wish')

btnWishW.addEventListener('click', () => {
  showWish.style.display = 'block'
})
btnWishM.addEventListener('click', () => {
  showWish.style.display = 'block'
})
btnWishClose.addEventListener('click', () => {
  showWish.style.display = 'none'
})

let btnQuick = document.querySelector('.quick_box')
let showQuick = document.querySelector('.quick_bg')
let btnQuickClose = document.querySelector('.btn_close_quick .icon')

btnQuick.addEventListener('click', function() {
  showQuick.style.display ='block'
})
btnQuickClose.addEventListener('click', function() {
  showQuick.style.display ='none'
})
//quick



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
/*
let hsContent = document.querySelectorAll('.w_hs_contents .history_content')

document.addEventListener('scroll', () => {
  for(let i=0; i<hsContent.length; i++){
    if(window.scrollY > 1600 + i * 200){
      hsContent[i].fadeIn(500);
    }
  }
})
*/

    $(function() { 
      $(window).scroll(function() {
        if($(window).scrollTop() >= 500) {
          $('.w_hs_contents .history_box').fadeIn(500);
        } else {
          $('.w_hs_contents .history_box').fadeOut(300)
        }
        if($(window).scrollTop() >= 1600) {
          $('.w_hs_contents .hs_22').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_22').fadeOut(300)
        }
        if($(window).scrollTop() >= 1800) {
          $('.w_hs_contents .hs_21').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_21').fadeOut(300)
        }
        if($(window).scrollTop() >= 1900) {
          $('.w_hs_contents .box01').fadeIn(500);
        } else {
          $('.w_hs_contents .box01').fadeOut(300)
        }
        if($(window).scrollTop() >= 2000) {
          $('.w_hs_contents .hs_20').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_20').fadeOut(300)
        }
        if($(window).scrollTop() >= 2500) {
          $('.w_hs_contents .hs_19').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_19').fadeOut(300)
        }
        if($(window).scrollTop() >= 2800) {
          $('.w_hs_contents .hs_18').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_18').fadeOut(300)
        }
        if($(window).scrollTop() >= 3100) {
          $('.w_hs_contents .hs_17').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_17').fadeOut(300)
        }
        if($(window).scrollTop() >= 3200) {
          $('.w_hs_contents .box02').fadeIn(500);
        } else {
          $('.w_hs_contents .box02').fadeOut(300)
        }
        if($(window).scrollTop() >= 3300) {
          $('.w_hs_contents .hs_16').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_16').fadeOut(300)
        }
        if($(window).scrollTop() >= 3700) {
          $('.w_hs_contents .hs_15').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_15').fadeOut(300)
        }
        if($(window).scrollTop() >= 3900) {
          $('.w_hs_contents .hs_14').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_14').fadeOut(300)
        }
        if($(window).scrollTop() >= 4200) {
          $('.w_hs_contents .hs_13').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_13').fadeOut(300)
        }
        if($(window).scrollTop() >= 4500) {
          $('.w_hs_contents .hs_12').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_12').fadeOut(300)
        }
        if($(window).scrollTop() >= 4800) {
          $('.w_hs_contents .hs_11').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_11').fadeOut(300)
        }
        if($(window).scrollTop() >= 5000) {
          $('.w_hs_contents.box03').fadeIn(500);
        } else {
          $('.w_hs_contents .box03').fadeOut(300)
        }
        if($(window).scrollTop() >= 5100) {
          $('.w_hs_contents .hs_08').fadeIn(500);
        } else {
          $('.w_hs_contents .hs_08').fadeOut(300)
        }
      });
    });

/*
$(function() { 
  if($(window).width() >= 600) {
    $(window).scroll(function() {
      if($(window).scrollTop() >= 500) {
        $('.history_box').fadeIn(500);
      } else {
        $('.history_box').fadeOut(300)
      }
      if($(window).scrollTop() >= 1600) {
        $('.hs_22').fadeIn(500);
      } else {
        $('.hs_22').fadeOut(300)
      }
      if($(window).scrollTop() >= 1800) {
        $('.hs_21').fadeIn(500);
      } else {
        $('.hs_21').fadeOut(300)
      }
      if($(window).scrollTop() >= 1900) {
        $('.box01').fadeIn(500);
      } else {
        $('.box01').fadeOut(300)
      }
      if($(window).scrollTop() >= 2000) {
        $('.hs_20').fadeIn(500);
      } else {
        $('.hs_20').fadeOut(300)
      }
      if($(window).scrollTop() >= 2500) {
        $('.hs_19').fadeIn(500);
      } else {
        $('.hs_19').fadeOut(300)
      }
      if($(window).scrollTop() >= 2800) {
        $('.hs_18').fadeIn(500);
      } else {
        $('.hs_18').fadeOut(300)
      }
      if($(window).scrollTop() >= 3100) {
        $('.hs_17').fadeIn(500);
      } else {
        $('.hs_17').fadeOut(300)
      }
      if($(window).scrollTop() >= 3200) {
        $('.box02').fadeIn(500);
      } else {
        $('.box02').fadeOut(300)
      }
      if($(window).scrollTop() >= 3300) {
        $('.hs_16').fadeIn(500);
      } else {
        $('.hs_16').fadeOut(300)
      }
      if($(window).scrollTop() >= 3700) {
        $('.hs_15').fadeIn(500);
      } else {
        $('.hs_15').fadeOut(300)
      }
      if($(window).scrollTop() >= 3900) {
        $('.hs_14').fadeIn(500);
      } else {
        $('.hs_14').fadeOut(300)
      }
      if($(window).scrollTop() >= 4200) {
        $('.hs_13').fadeIn(500);
      } else {
        $('.hs_13').fadeOut(300)
      }
      if($(window).scrollTop() >= 4500) {
        $('.hs_12').fadeIn(500);
      } else {
        $('.hs_12').fadeOut(300)
      }
      if($(window).scrollTop() >= 4800) {
        $('.hs_11').fadeIn(500);
      } else {
        $('.hs_11').fadeOut(300)
      }
      if($(window).scrollTop() >= 5000) {
        $('.box03').fadeIn(500);
      } else {
        $('.box03').fadeOut(300)
      }
      if($(window).scrollTop() >= 5100) {
        $('.hs_08').fadeIn(500);
      } else {
        $('.hs_08').fadeOut(300)
      }
    })  
  } else {
    
  }
});
*/