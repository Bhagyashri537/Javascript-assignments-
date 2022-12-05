//console.dir(document);
/*console.log(document.URL);
console.log(document.title)
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms);
console.log(document.links)
*/

//GET ELEMENT BY ID

 //document.getElementById("add-item").style.color = "green"
 //document.getElementById("add-item").style.fontWeight = "900"
// document.getElementById("header-title").style.borderBottom = " solid black";

//GET ELEMENT BY CLASS NAME

var items = document.getElementsByClassName('list-group-item')
console.log(items)
items[2].style.backgroundColor = "green";

for(var i=0; i<items.length; i++)
{
    items[i].style.fontWeight = "bold";
}


