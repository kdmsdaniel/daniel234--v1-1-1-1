let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
let toggle_close = document.getElementById('toggle_close');
toggle_open.addEventListener('click', toggleMenu);
toggle_close.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('show-menu');

  if(menu.classList.contains('show-menu')) {
    toggle_open.style.display = 'none';
    toggle_close.style.display = 'block';
  }
  else {
    toggle_open.style.display = 'block';
    toggle_close.style.display = 'none';
  }
}

$(document).ready(function(){

  $("#myCarousel").carousel();
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  })
 
});

$(document).ready(function(){

  $("#myCarouselcerti").carousel();
  // $(".cert1").click(function(){
  //   $("#myCarouselcerti").carousel(0);
  // });
  // $(".certi2").click(function(){
  //   $("#myCarouselcerti").carousel(1);
  // });
  // $(".cert3").click(function(){
  //   $("#myCarouselcerti").carousel(2);
  // })
 
});


