// //your code here!
// const list = document.getElementById("infi-list"); // assuming ul has id="list"
// let itemCount = 0;

// // Function to create and add items
// function addItems(count) {
//     for (let i = 0; i < count; i++) {
//         itemCount++;

//         const li = document.createElement("li");
//         li.textContent = "List Item " + itemCount;

//         list.appendChild(li);
//     }
// }

// // 1️⃣ Add 10 items by default
// addItems(10);

// // let isLoading = false;

// window.addEventListener("scroll", function () {
//     if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
//         // isLoading = true;
//         addItems(2);
//         // isLoading = false;
//     }
// });


//your code here!
const list = document.getElementById("infi-list"); // assuming ul has id="list"
let itemCount = 0;

// Function to create and add items
function addItems(count) {
    for (let i = 0; i < count; i++) {
        itemCount++;

        const li = document.createElement("li");
        li.textContent = "List Item " + itemCount;

        list.appendChild(li);
    }
}

// 1️⃣ Add 10 items by default
addItems(10);

let isLoading = false;

list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
        isLoading = true;
        addItems(2);
        isLoading = false;
    }
});
