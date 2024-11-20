let items = [];
function addItem() {
const newItem = document.getElementById('new-item').value;
if (newItem) {
items.push({ name: newItem, purchased: false });
document.getElementById('new-item').value = '';
renderList();
    }
}

function toggleItem(index) {
items[index].purchased = !items[index].purchased;
renderList();
}

function renderList() {
const list = document.getElementById('grocery-list');
list.innerHTML = '';
items.forEach((item, index) => {
const listItem = document.createElement('li');
listItem.textContent = item.name;
listItem.className = item.purchased ? 'completed' : '';
listItem.onclick = () => toggleItem(index);
list.appendChild(listItem);
    });
}


function viewUnpurchased() {
const list = document.getElementById('grocery-list');
list.innerHTML = '';
items.forEach((item, index) => {
if (!item.purchased) {
const listItem = document.createElement('li');
listItem.textContent = item.name;
listItem.onclick = () => toggleItem(index);
list.appendChild(listItem);
        }
    });
}


function viewPurchased() {
const list = document.getElementById('grocery-list');
list.innerHTML = '';
items.forEach((item, index) => {
if (item.purchased) {
const listItem = document.createElement('li');
listItem.textContent = item.name;
listItem.className = 'completed';
listItem.onclick = () => toggleItem(index);
list.appendChild(listItem);
        }
    });
}
