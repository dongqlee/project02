
  let userId = document.getElementById('user_id');
  let btnId = document.querySelector('.btn_chk_id');
  let userPw = document.getElementById('user_pw');
  let userPw02 = document.getElementById('user_pw02');
  let btnPw = document.querySelector('.btn_chk_pw');
  let userName = document.getElementById('user_name');
  let telNum02 = document.getElementById('tel_02');
  let telNum03 = document.getElementById('tel_03');

  userId.addEventListener('change', checkId);
  userPw.addEventListener('change', checkPw);
  btnPw.addEventListener('click', comparePw);
  telNum02.addEventListener('keyup', moveTelNum);
 
  let domainName = document.getElementById('domain_blank');
  
  function checkId() {
    if(userId.value.length < 6 || userId.value.length > 15) {
      document.querySelector('.id_alarm').textContent = '아이디는 6 ~ 15자로 입력하세요.'
      userId.value = ''
      userId.focus();
    } else {
      document.querySelector('.id_alarm').textContent = '';
    }
  }
  function checkPw() {
    if(userPw.value.length < 4) {
      document.querySelector('.pw_alarm').textContent = '비밀번호는 4자리 이상 입력하세요.';
      userPw.value= '';
      userPw.focus();
    } else {
      document.querySelector('.pw_alarm').textContent = '사용가능한 비밀번호 입니다.'
    }
  }
  function comparePw() {
    if(userPw.value != userPw02.value) {
      document.querySelector('.pw_chk_alarm').textContent = '비밀번호가 일치하지 않습니다. 다시 확인하세요.';
      userPw02.select();
    } else {
      document.querySelector('.pw_chk_alarm').textContent = '비밀번호가 일치합니다.';
      userName.focus();
    }
  }
  function moveTelNum() {
    if(telNum02.value.length >= 4 ) {
      telNum03.focus();
    }
  }
  
  let allTerms = document.getElementById('all_terms');
  let termsEls = document.querySelectorAll('.terms_el')
  let terms01 = document.getElementById('terms_01');
  let terms02 = document.getElementById('terms_02');
  let terms03 = document.getElementById('terms_03');
  let terms04 = document.getElementById('terms_04');

  allTerms.addEventListener('click', allChk);
  terms01.addEventListener('click', termsChk);
  terms02.addEventListener('click', termsChk);
  terms03.addEventListener('click', termsChk);
  terms04.addEventListener('click', termsChk);
  
  function allChk() {
    if(allTerms.checked ==true) {
      termsEls.forEach((termsEl) => {
        termsEl.checked = true
      })
    } else {
      termsEls.forEach((termsEl) => {
        termsEl.checked = false
      })
    }
  }

  function termsChk() {
    if(terms01.checked == true && terms02.checked == true && terms03.checked == true && terms04.checked == true) {
      allTerms.checked = true
    } else {
      allTerms.checked = false
    }
  }