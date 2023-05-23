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

$(document).ready(function() { /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
  $('.azul').click(function(event) { /* Seleccionamos el elemento que queremos que realice la función */
  $('h1, h2, h3, h4, h6, p, span').css('color', '#33B0BE'); 
  $('body').css('background', '#242635' ); /* La función a realizar añadir CSS al body previamente seleccionado */
  });
  $('.blanco').click(function(event) { /* Seleccionamos el elemento que queremos que realice la función */
    $('h1, h2, h3, h4, h6, p, span').css('color', '#242635'); 
  $('body').css('background','#fff'); /* La función a realizar añadir CSS al body previamente seleccionado */
 });

});
