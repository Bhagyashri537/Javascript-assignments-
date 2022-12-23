

    function saveToLocalStorage(event){
      event.preventDefault();
      var amount = event.target.amount.value;
      var description = event.target.description.value;
      var category= event.target.category.value;
    
    const obj = {
      amount,
      description,
      category
    }
    localStorage.setItem(obj.amount, JSON.stringify(obj))
    showOnScreen(obj)
  }
  window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)
    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const expenceDetailsObj = JSON.parse(userDetailsString);
        showOnScreen(expenceDetailsObj)
    }
})

  function showOnScreen(expence){
    

    const parentNode = document.getElementById('listOfExpence');
    const childHTML = `<li id =${expence.amount}>${expence.amount} - ${expence.description} - ${expence.category} <button onclick =DeleteExpence('${expence.amount}') class='btn btn-outline-primary btn-sm'>Delete</button><button onclick = editExpence('${expence.amount}','${expence.description}','${expence.category}') class='btn btn-outline-primary btn-sm'>Edit</button> </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
   
  }

  function editExpence(amount,description,category){
    document.getElementById('number').value = amount;
   document.getElementById('text1').value = description;
    document.getElementById('text2').value = category;
   DeleteExpence(amount);
   
}


  function DeleteExpence(amount){
    console.log(amount);
    localStorage.removeItem(amount);
    removeFromScreen(amount);
  }
  
  function removeFromScreen(amount){
    const parent = document.getElementById('listOfExpence');
    const element = document.getElementById(amount);
    console.log(element, 'abc');
    console.log(parent, 'xde');
    parent.removeChild(element);
  }
 