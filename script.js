// // while loop

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }


// function kaif(){
//     console.log("kaif");
// }

// // DOM

// const title = document.getElementById("title")

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

// //Dom Create new element

// const parent = document.querySelector(".parent");

// console.log(parent.children[0].innerHTML);

// for (i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
// }

// parent.children[1].style.color = "orange";
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const days = document.querySelector(".day");

// console.log(days.parentElement);
// console.log(days.nextElementSibling);

// console.log("NODES: " , parent.childNodes);

// const div = document.createElement("h1");
// div.className = "main"
// div.id = Math.round(Math.random() * 10 + 1)
// div.setAttribute("title", "kaif")
// div.innerText = "practice DOM"
// const addText = document.createTextNode("parctice DOM");
// div.appendChild(addText)
// console.log(div);

// function addLanguage(lang) {
//     const li = document.createElement("li")
//     li.innerHTML = lang
//     document.querySelector('.language').appendChild(li)
// }

// addLanguage("python")
// addLanguage("typescript")

// //OBJECTS
// const mySym = Symbol("mykey1")
// const myObjects = {
//     [mySym]: "mykey1",
//     name: "kaif",
//     age: "15",
//     location: "karachi",
//     email: "kaif@gmail.com",
//     online: true,
//     lastOnlineDays: ["monday", "thursday", "saturday"],
//     siblings: { sister: "1", brother: "0" }
// }

// console.log(myObjects.location);
// console.log(myObjects[location]);
// console.log(myObjects[mySym]);

// Object.freeze(myObjects)
// myObjects.email = "kaif@google.com"
// myObjects.email = "kaif@chatgpt.com"
// console.log(myObjects);

// const kaifApp = new Object();
// const kaifApps = {};
// console.log(kaifApp); //singleTone
// console.log(kaifApps);//nonSingletone

// // square brakets wale kisse mai nested objects mai error ata hai
// // aur sirf object mai undefined ata hai

// localStorage.setItem("name" , "kaif");

// const key = prompt("enetr key you want to set");
// const value = prompt("enter value you want to set");

// localStorage.setItem(key, value)
// console.log(` the value is set ${key} is  ${localStorage.getItem(key)}`)

// if (key == "red" || key == "blue") {
//     localStorage.removeItem(key)
// }

// if(key == 0){
//     localStorage.clear(key)
// }

// //Global And Local Varibles
// if (true) {
//     var aa = 10;
//     let b = 10;
//     const c = 10
// }
// console.log(aa);
// console.log(b);
// console.log(c);

// function one(){
//     const userName  = "kaif";

//     function two(){
//         const age  = 15
//         console.log(userName);
//     }

//     // console.log(age);
//     two()
// }

// one()

// if(true){
//     const username = "kaif";
//     if(username === "kaif"){
//         const website = " youtube"
//         console.log(username + website);
//     }
//     console.log(website);
// }
// console.log(username);

// function fillCity() {
//      var cityName;
//      var zipEntered = document.getElementById("zip").value;
//      switch (zipEntered) {
//      case "60608" :
//      cityName = "Chicago";
//      break;
//      case "68114" :
//      cityName = "Omaha";
//     break;
//      case "53212" :
//     cityName = "Milwaukee";
// }
// document.getElementById("city").value = cityName;
//      }

// const par  = document.getElementsByTagName("p")

// console.log(par);

// const kidNode = document.getElementById("div2");
// const pNode = kidNode.parentNode;

// console.log(pNode);