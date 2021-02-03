'use strict';

let n = 0;
let input = document.querySelector("#add_item");
let btn = document.querySelector("#add_btn")
let item_list = document.querySelector("#item_list");
let list = []
btn.addEventListener("click", function (e) {
    e.preventDefault();
    list.push(input.value)
    let item = document.createElement("p");
    item.innerText = input.value;
    item_list.appendChild(item);
}
)
// btn.addEventListner(

// )