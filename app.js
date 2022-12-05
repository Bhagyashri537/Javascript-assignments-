var li = document.getElementsByClassName('list-group-item')
console.log(li)
li[1].style.backgroundColor = "red";

for(var i=0; i<li.length; i++)
{
    li[i].style.fontWeight = "bold";
}

