$(document).ready(function (){

   $(".table_of_content_title").waypoint(function (){
      $(".table_of_content_title").addClass("animate__animated animate__fadeInLeft")
   }, {offset : "80%"})
   $("#intro").waypoint(function (){
      $("#intro").addClass("animate__animated animate__fadeInLeft")
   }, {offset : "80%"})
   $("#history").waypoint(function (){
      $("#history").addClass("animate__animated animate__fadeInLeft")
   }, {offset : "80%"})
   $("#features").waypoint(function (){
      $("#features").addClass("animate__animated animate__fadeInLeft")
   }, {offset : "80%"})
})