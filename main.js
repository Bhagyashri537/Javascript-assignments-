var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var list = document.getElementsByClassName('list-group-item')

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

//add edit button


for(var i=0; i<list.length; i++){
 
  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-sm float-right editBtn';
  editBtn.appendChild(document.createTextNode('EDIT'));

  list[i].appendChild(editBtn);

}

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-sm float-right editBtn';
  editBtn.appendChild(document.createTextNode('EDIT'));
  li.appendChild(editBtn)
  
}



// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

  









