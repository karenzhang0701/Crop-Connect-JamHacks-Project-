document.getElementById('searchInput').addEventListener('input', function() {
    let input = this.value.toLowerCase();
    let dropdown = document.getElementById('dropdown');
    if (input.length > 0) {
        dropdown.style.display = 'block';
        // Filter items here (you can replace this with your own filtering logic)
        let items = [
            'Apples', 'Carrots', 'Lettuce', 'Bananas', 'Oranges', 'Strawberries', 'Blueberries',
            'Tomatoes', 'Potatoes', 'Onions', 'Garlic', 'Broccoli', 'Cucumber', 'Spinach',
            'Milk', 'Eggs', 'Bread', 'Butter', 'Cheese', 'Yogurt'
        ];

        let filteredItems = items.filter(item => item.toLowerCase().includes(input));
        dropdown.innerHTML = filteredItems.map(item => `<div onclick="selectItem('${item}')">${item}</div>`).join('');
    } else {
        dropdown.style.display = 'none';
    }
});

document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let item = this.value.trim();
        if (item) {
            addItemToList(item);
            this.value = '';
        }
    }
});

function selectItem(item) {
    document.getElementById('searchInput').value = item;
    document.getElementById('dropdown').style.display = 'none';
    addItemToList(item);
}


let cart = {};

let farmerInventory = { 'Doe - 10 km away':'Jane','Carrots': 3, 'Lettuce': 5 };
let farmerInventory1 = {'Smith - 15 km away':'John','Milk': 4, 'Carrots':1, 'Eggs':2};

document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('nextPageButton');
    let clickcount = 0;

    button.addEventListener('click', function() {
        clickcount++;
        match(farmerInventory);
        match(farmerInventory1);
        
        if (clickcount > 1) {
            output.textContent = "";
            match();
            
        }
    })
});

function match(farmerInventory) {
    let count = 0;
    
    for (let key in cart) {
        let value = cart[key];
        if (farmerInventory.hasOwnProperty(key)) {

            if (farmerInventory[key] >= value) {
                count++;
                if (count == 1) {
                    printKeyValuePair(farmerInventory[, "Jane");
                }
                
                printKeyValuePair(key, farmerInventory[key]);
            }
        }
    }
}
match();

function printKeyValuePair(key, value) {


    let outputDiv = document.getElementById('output');

    let paragraph = document.createElement('p');
    paragraph.textContent = value + ' ' + key;
    outputDiv.appendChild(paragraph);
}

var firstbutton = document.getElementById("nextPageButton");
var secondbutton = document.getElementById("contactFarmerButton");
firstbutton.addEventListener("click", function() {
    secondbutton.style.display = "block";
});

function addItem(item) {

    if (cart[item]) {
        cart[item]++;
    } else {
        cart[item] = 1;
    }
    updateItemCount(item);
}

function removeItem(item) {
    if (cart[item]) {
        cart[item]--;
        if (cart[item] <= 0) {
            delete cart[item];
        }
    }
    updateItemCount(item);
}

function updateItemCount(item) {
    const itemCountElement = document.getElementById(`count-${item}`);
    if (itemCountElement) {
        itemCountElement.textContent = cart[item] || 0;
    }
}

function addItemToList(item) {
    if (!document.getElementById(`count-${item}`)) {
        let li = document.createElement('li');
        li.setAttribute('data-item', item);
        li.innerHTML = `
            ${item}
            <button class="remove-btn" onclick="removeItem('${item}')">-</button>
            <span id="count-${item}">0</span>
            <button class="add-btn" onclick="addItem('${item}')">+</button>
        `;
        document.getElementById('groceryItems').appendChild(li);
        cart[item] = 0;
    }
}



// ----------------messaging.html----------------

let isCustomerTurn = true;

function sendMessage() {
    let message = document.getElementById('message').value.trim();
    if (message) {
        addMessage(message, isCustomerTurn);
        document.getElementById('message').value = '';
        if (isCustomerTurn) {
            setTimeout(() => {
                addMessage("Hello! Yes, we have a variety of fresh vegetables available. What specifically are you looking for?", false);
            }, 1000);
        }
        isCustomerTurn = !isCustomerTurn;
    }
}

function addMessage(message, isCustomer) {
    let messagesDiv = document.getElementById('messages');
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', isCustomer ? 'customer-message' : 'farmer-message');
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Simulate initial message from customer
addMessage("Hi, I'm interested in purchasing some fresh vegetables. Do you have any available?", true);
