// while loop

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//events link

// function kaif(){
//     console.log("kaif");
// }

// DOM

const title = document.getElementById("title")

// title.style.backgroundColor = "green"
// title.style.height = "100px"
// title.style.padding = "10px"
// title.style.borderRadius = "10px"

// const a = title.innerHTML
// const b = title.innerText
// const c = title.textContent
// console.log(a);
// console.log(b);
// console.log(c);

//Dom Create new element

const parent = document.querySelector(".parent");

// console.log(parent.children[0].innerHTML);

for (i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color = "orange"