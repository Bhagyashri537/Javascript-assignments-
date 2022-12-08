var itemlist = document.querySelector('#items');

 //PARENT ELEMENT
 console.log(itemlist.parentElement);
 itemlist.parentElement.style.backgroundColor = "grey";
 console.log(itemlist.parentElement.parentElement.parentElement);

 //LASTELEMENTCHILD
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = "hello 1";

//CREATE CHILD
console.log(itemlist.childNodes);
itemlist.childNodes.textContent = 'sure'

//LASTCHILD
console.log(itemlist.lasttChild);

//FIRST ELEMENT CHILD
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = "hello";

//FIRSTCHILD
console.log(itemlist.firstChild);

//NEXT SIBLING
console.log(itemlist.nextSibling);

//NEXT ELEMENT SIBLING
console.log(itemlist.nextElementSibling);

//PREVIOUS SIBLING
console.log(itemlist.previousSibling);

//PREVIOUS ELEMET SIBLING
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = "green";

//create div
var newdiv = document.createElement('div');
//add class
newdiv.className = "hello";
//add id
newdiv.id = "HELLO";
//add attr
newdiv.setAttribute("title", "hello");
//create text node
var  newdivText = document.createTextNode('Hello');
//add text to div
newdiv.appendChild(newdivText);
//display on dom
var container = document.querySelector("header .container");
var h1 = document.querySelector('header h1');

console.log(newdiv)
container.insertBefore(newdiv, h1)


let ul = document.querySelector('ul.list-group')

ul.prepend('hello')
