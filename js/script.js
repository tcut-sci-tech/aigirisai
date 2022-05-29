/*---------- ボタン 背景 ---------- */
$(".openbtn").click(function () {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
  $(".circle-bg").toggleClass('circleactive');
});

$("#g-nav a").click(function () {
  $(".openbtn").removeClass('active');
  $("#g-nav").removeClass('panelactive');
  $(".circle-bg").removeClass('circleactive');
});
