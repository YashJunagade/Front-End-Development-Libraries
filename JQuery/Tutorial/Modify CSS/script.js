$(document).ready(function (){

   $("ul").addClass("list");
   $(".container").removeClass();

   //set or get css property of the html element
   console.log($(".list").css("background-color"));
   $(".list li").css("color", "black");
})