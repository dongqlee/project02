let btnClose = document.querySelector('.popup_box .pop_close');
let popBox = document.querySelector('.popup_box');

btnClose.addEventListener('click', function() {
  popBox.style.display = 'none';
});

let btnCloseBan = document.querySelector('.pop_ban_close');
let popBan = document.querySelector('.pop_banner_box');
btnCloseBan.addEventListener('click', function() {
  popBan.style.display = 'none';
});
//popup

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

let btnMov = document.querySelector('.btn_movie');
let btnCon = document.querySelector('.btn_concert');
let btnEX = document.querySelector('.btn_exhib');
let btnRL01 = document.querySelector('.swiper2 .btn_rl01');
let btnRL02 = document.querySelector('.swiper3 .btn_rl02');

btnMov.addEventListener('click', function() {
  btnRL01.style.display = 'block'
  btnRL02.style.display = 'none'
})
btnCon.addEventListener('click', function() {
  btnRL01.style.display = 'none'
  btnRL02.style.display = 'block'
})
btnEX.addEventListener('click', function() {
  btnRL01.style.display = 'none'
  btnRL02.style.display = 'none'
})
//recommend_section

let btnCriticMore = document.querySelector('.btn_critic_more')
let showCritic = document.querySelector('.all_critics_bg')
let btnCriticClose = document.querySelector('.all_critics_bg .btn_close .icon')
btnCriticMore.addEventListener('click', function() {
  showCritic.style.display ='block'
})
btnCriticClose.addEventListener('click', function() {
  showCritic.style.display ='none'
})
//critic_more


let btnEveMore = document.querySelector('.btn_event_more')
let showEve = document.querySelector('.all_event_bg')
let btnEveClose = document.querySelector('.all_event_bg .btn_all_eve_close .close_icon')

btnEveMore.addEventListener('click', function() {
  showEve.style.display ='block'
})
btnEveClose.addEventListener('click', function() {
  showEve.style.display ='none'
})
//event_more  


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
