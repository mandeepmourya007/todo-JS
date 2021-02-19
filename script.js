'use strict';

let n = 0;
let input = document.querySelector("#add_item");
let btn = document.querySelector("#add_btn")
let item_list = document.querySelector("#item_list");
let list = []
let item;
let id = 1;

btn.addEventListener("click", function (e) {
    e.preventDefault();
    list.push(input.value);
    item = document.createElement("p");
    let edit_btn = document.createElement("BUTTON");

    let delete_btn = document.createElement("BUTTON");
    edit_btn.textContent = `  edit`;
    delete_btn.innerText = "done";
    console.log(item);

    item_list.append(item);

    item.textContent = input.value;

    item.id = id++;
    item.append(edit_btn);
    item.appendChild(delete_btn);

    delete_btn.addEventListener("click", function () {

        delete_btn.parentElement.remove();

    })
    edit_btn.addEventListener("click", function () {
        console.log("yoyo")
    })

}
)
// btn.addEventListner(

// )