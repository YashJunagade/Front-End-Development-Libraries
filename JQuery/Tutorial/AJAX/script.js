$(document).ready(function (){

   $(".output").load("sample.txt", function (response, statusTxt, xhr){
      console.log(response)
      console.log(statusTxt)
      console.log(xhr)
   })

   $.get("https://jsonplaceholder.typicode.com/users", function (data, status){
      console.log(status, data);
   })

   $.post("https://jsonplaceholder.typicode.com/posts", {name:"yash junagade", 
      age:"19" }, function (data, status){
         console.log(status, data);
      })
})