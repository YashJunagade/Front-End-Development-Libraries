$('.hide').click(function () {
   $('p').hide();
 });

 // Show all <p> elements
 $('.show').click(function () {
   $('p').show();
 });

 // Remove all heading elements
 $('.remove').click(function () {
   $('h1, h2, h3').remove();
 });

 // Add heading elements back to the DOM
 $('.add').click(function () {
   if ($('h1').length === 0 && $('h2').length === 0 && $('h3').length === 0) {
     $('body').append('<h1>this is heading 1</h1><h2>this is heading 2</h2><h3>this is heading 3</h3>');
   }
 });