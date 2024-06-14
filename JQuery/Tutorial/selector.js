// *	$("*")	All elements
// #id	$("#lastname")	The element with id="lastname"
// .class	$(".intro")	All elements with class="intro"
// .class,.class	$(".intro,.demo")	All elements with the class "intro" or "demo"
// element	$("p")	All <p> elements
// el1,el2,el3	$("h1,div,p")	All <h1>, <div> and <p> elements
 	 	 
// :first	$("p:first")	The first <p> element
// :last	$("p:last")	The last <p> element
// :even	$("tr:even")	All even <tr> elements
// :odd	$("tr:odd")	All odd <tr> elements
 	 	 
// :first-child	$("p:first-child")	All <p> elements that are the first child of their parent
// :first-of-type	$("p:first-of-type")	All <p> elements that are the first <p> element of their parent
// :last-child	$("p:last-child")	All <p> elements that are the last child of their parent
// :last-of-type	$("p:last-of-type")	All <p> elements that are the last <p> element of their parent
// :nth-child(n)	$("p:nth-child(2)")	All <p> elements that are the 2nd child of their parent

// there are many selectors of JQuery 

$("*").hide();

$("#first").show();

$(".second").toggle();