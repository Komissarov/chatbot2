$(".form").on('click', function(){
  $(this).addClass('active');
  alert("фыв");
});

$(".submit").on('click', function() {
  $(this).parent().parent().hide(300);
  $(".ok_message").addClass("active");
  alert("фыв");
});

$(".ok_message").on('click', function() {
  $(this).removeClass("active");
  $(".form").removeClass("active").show();
  alert("фыв");
});