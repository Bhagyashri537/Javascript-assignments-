//var seconditem = document.querySelector(".list-group-item:nth-child(2)")
//seconditem.style.background = "green"
 
//var thirditem = document.querySelector(".list-group-item:nth-child(3)")
//thirditem.style.display = "none"

//queryselecterall

var item = document.querySelectorAll(".list-group-item")
console.log(item);
item[1].style.color = "green";

var odd = document.querySelectorAll("li:nth-Child(odd)")
for(var i=0; i<odd.length; i++){
    odd[i].style.background = "green"
}