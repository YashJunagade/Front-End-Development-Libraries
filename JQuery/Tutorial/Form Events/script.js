$(document).ready(function (){

   $("input").focus(function (){
      $(this).css("background-color", "grey");
   })
   $("input").blur(function (){
      $(this).css("background-color", "");
   })

   $("input").change(function (){
      alert($(this).val());
   })

   $("#regi-form").submit(function (e){
      e.preventDefault();
      alert("form is submitted");
   })
})