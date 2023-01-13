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
  const tab = $('.vs_indi li');
  const vs_sheet = $('.visual_main li');
  const onBar = $('.vs_bar li');

  tab.click(function() {
    let target = $(this);
    let i = target.index();

    tab.removeClass('bright');
    tab.eq(i).addClass('bright');

    vs_sheet.removeClass(`vs_main`)
    vs_sheet.eq(i).addClass(`vs_main`);

    onBar.removeClass('on');
    onBar.eq(i).addClass('on');
  })
});






$(function() {

  const tab = $('.recommend_program .rec_pro_top .program_tab li');
  const sheet = $('.recommend_program .program_sheet>div');
  tab.click(function() {
    let target = $(this);
    let i = target.index();

    tab.removeClass('show');
    tab.eq(i).addClass('show'); 
    
    sheet.removeClass('show_sheet');
    sheet.eq(i).addClass('show_sheet');
  });//tab click event

});
