const addItemsBtn = document.querySelector('button:first-of-type');
const userInput = document.getElementById('addItems');  

class listItem {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}



class shoppingList {
    shoppingListItems = [];
   constructor(type) {
    this.type = type;

   }

  

   addStuffToList() {  
    const newItem = new listItem(userInput.value, `${new Date().getTime()}`);
    const section = document.getElementById('need-items');
    const listNode = section.querySelector('ul');
    const liNode = document.createElement('li');
    listNode.appendChild(liNode);
    liNode.innerHTML = `
    <li
     class="card" 
     draggable="true"
     id="${newItem.id}"
    >
        <h3>${newItem.name}</h3>
        <button>Add</button>
    </li>`; 
}
   
}

const itemsToBuy = new shoppingList('need');

addItemsBtn.addEventListener('click', itemsToBuy.addStuffToList);

