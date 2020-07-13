// Store references to ul, input and add button in variables

let listItem = document.getElementById("listItem");
let addButton = document.querySelector("#listItem + input");
let ul = document.querySelector("ul");

//register an event handler

addButton.onclick = (e) => {
    //Prevent default behaviour
    e.preventDefault();

    //create elements to add to the list li
    let li = document.createElement("li");
    let delButton = document.createElement("button");

    //build out the list item
    let item = listItem.value;
    li.textContent = item;
    delButton.textContent = "Got It!";

    //append things
    li.appendChild(delButton);
    ul.appendChild(li);

    //add event listener
    delButton.onclick = deleteIt;
};

//define the deleteIt function
function deleteIt(e) {
    alert("Are you sure you want to Delete?");
    let deleteItem = e.target.closest('li');
    deleteItem.remove();
}