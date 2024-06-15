$(document).ready(function (){

   //to get the values of html element
   console.log($("#para").html());
   console.log($("#para").text());
   console.log($("#para").val());


   //to set value of html element

   $(".heading").html("Heading using html()");
   $(".heading").text("heading using text()");
   $(".heading").val("Heading using val()");

   // set and get attribute
   console.log($("#para").attr("id"));
   $("#para").attr("class", "heading");

})