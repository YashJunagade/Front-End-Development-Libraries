$(document).ready(function (){

// Fade Effects
   $("#fadein").click(function (){
      $("p").fadeIn();
   })
   $("#fadeout").click(function (){
      $("p").fadeOut();
   })
   $("#fadetoggle").click(function (){
      $("p").fadeToggle();
   })
   $("#fadeto").click(function (){
      $("p").fadeTo("slow", 0.5);
   })

   // Slide Effects
   $("#slideup").click(function (){
      $("h1").slideUp();
   })
   $("#slidedown").click(function (){
      $("h1").slideDown();
   })
   $("#slidetoggle").click(function (){
      $("h1").slideToggle();
   })
})