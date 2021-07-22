$(function(){
  $('.toggle_btn').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });
});