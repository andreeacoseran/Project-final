const sing = document.querySelector('.sing');

$(document).ready(function(){
    $("li").click(function(){
      $("audio").toggle();
    });
  });

const btn = document.querySelector('i');

btn.addEventListener('click', function(){

  $("html, body").animate({scrollTop: 0}, "slow");

})