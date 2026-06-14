// Level 1: BASIC(10 QUESTIONS)

// set1
// Qs1
// let btn=document.querySelector("button");
// btn.addEventListener("click",()=>{
// console.log("hello world")
// })

// Qs2
// let head=document.getElementById("head");
// head.textContent="Hello World";

// Qs3
// let para=document.querySelector("p")

// let btn=document.querySelector("button");
// btn.addEventListener("click",()=>{
// para.style.color="red"
// });

// Qs4
// let div=document.querySelector("div");
// div.style.width="200px";
// div.style.height="200px";
// div.style.backgroundColor="yellow";

// Qs5
// let inp=document.querySelector("input");
// let btn=document.querySelector("button");
// let val;
// inp.addEventListener("input",(e)=>{
// val=e.target.value;
// })
// btn.addEventListener("click",()=>{
// console.log(val);
// })

// Qs6
// let btn=document.querySelector("button");
// btn.addEventListener("click",()=>{
// document.querySelector("img").src=" ";//OR
// document.querySelector("img").style.background="none";
// })

// Qs7
// let btn=document.querySelector("button");
// document.querySelector("img").hidden=true;
// btn.addEventListener("click",()=>{
// document.querySelector("img").hidden=false
// })

// Qs8
// let h2=document.querySelector("h2");//"Hello World"
// h2.innerText="Welcome to the DOM";

// Qs9
// let btn=document.querySelector("button");
// btn.addEventListener("click",()=>{
//     document.body.style.backgroundColor="lightblue";
// })

// Qs10
// let button=document.querySelector("button");
//   let count=document.querySelector("span");
// button.addEventListener("click",()=>{
//     count.textContent=parseInt(count.textContent) + 1;
// })

// LEVEL 2: MEDIUM QUESTIONS 10

// Qs1
// let h2=document.querySelector("h2");
// h2.classList.add("stl");

// Qs2

// let h2=document.querySelector("h2");
// h2.classList.remove("stl");

// Qs3
// let h2=document.querySelector("h2");
// h2.classList.toggle("stl");

// Qs4
// let h2=document.querySelector("h2");
// let input=document.querySelector("input");
// input.addEventListener("input",()=>{
// h2.textContent=input.value;
// })

// Qs5
// let input=document.querySelector("input");
// let btn=document.querySelector("button");
// btn.addEventListener("click",(e)=>{
// console.log(input.value);
// })

// Qs6
// let p=document.createElement("p");
// p.textContent="This is a new paragraph.";

// Qs7
// let p=document.createElement("p");
//  p.textContent="This is a new paragraph.";
// document.body.appendChild(p);

// Qs8
// let ul=document.querySelector("ul");
// let li=document.createElement("li");
// li.textContent="New Item";
// ul.appendChild(li);

// Qs9
// let btn=document.querySelector("button");
// let div=document.querySelector("div");
// btn.addEventListener("click",()=>{
// div.remove();
// })

// Qs10
// let input=document.querySelector("input");
// let h2=document.createElement("h2");
// h2.textContent="Default Text";
// let btn=document.querySelector("button");
// document.body.appendChild(h2);
// btn.addEventListener("click",(e)=>{
//   h2.textContent=input.value;
// })




// Qs1 Ek button banao. Click karne par console me "Button Clicked" print karo.

// Ans
// let btn = document.createElement("button");
// btn.textContent = "Click";
// document.querySelector("body").append(btn);
// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// function pritnBtn() {
//   h1.textContent = "Danish padhne me bhut acha larka hai aur Aaliya bhi hai";
// }

// btn.addEventListener("click", pritnBtn);

// Q2 Ek button par click karne par background color red kar do.

// Ans

// function changeBgrdcl() {
//   document.body.style.background = "black";
// }
// btn.addEventListener("click", changeBgrdcl);

// Qs3 Ek button par mouseover listener lagao aur text change karo.
// let h1 = document.querySelector("h1");
// h1.addEventListener("mouseover", () => {
//   h1.textContent = "hello everyone";
// });

// Qs4 Ek button par click event add karo aur dusre button se us event ko remove karo.
// let add_Event = document.getElementById("start");
// let check_result = document.getElementById("result");
// let Remove = document.getElementById("remove");

// function showMassege() {
//   alert("this is a alert");
// }

// add_Event.addEventListener("click", () => {
//   check_result.addEventListener("click", showMassege);
// });

// Remove.addEventListener("click", () => {
//   check_result.removeEventListener("click", showMassege);
// });

// Q5
// Ek hi button par click aur mouseover dono listeners lagao.

// Ans
// let btn=document.querySelector("#start");

// btn.addEventListener("click",()=>{
//     alert("hey")
// })
// btn.addEventListener("mouseover",()=>{
//     alert("hover")
// })

// Q6
// Button click hone par count increase karo.
// let btn = document.querySelector("#start");
// let count = 0;
// let div = document.createElement("div");
// let body = document.querySelector("body");
// body.append(div);
// btn.addEventListener("click", () => {
//   count++;
//  div.innerHTML = `<h1>${count}</h1>`;
// });

// Q7
// Ek function banao aur use event listener me pass karo.
// function pass(){
//     alert("pass ho gaya");
// }
// let btn=document.querySelector("button");
// btn.addEventListener("click",pass)

// Q8
// Button ko double click karne par alert dikhao.
// let btn=document.querySelector("button");
// btn.addEventListener("dblclick",()=>{
//     alert("pass ho gaya");
// })

// Q9
// Button click hone par image hide karo.

// let btn=document.querySelector("button");
// let img=document.querySelector("img");
// btn.addEventListener("click",()=>{
//     img.src="hidden"
// })

// Q10
// Ek toggle button banao jo event listener add/remove kare.

// let toggleBtn = document.getElementById("toggle");
// let target = document.getElementById("target");
// let isActive = false;
// function showMessage() {
//   alert("Event Active Hai!");
// }
// toggleBtn.addEventListener("click", () => {
//   if (!isActive) {
//     target.addEventListener("click", showMessage);
//     toggleBtn.textContent = "Disable event";
//     isActive = true;
//   } else {
//     target.removeEventListener("click", showMessage);
//     toggleBtn.textContent = "Enable event";
//     isActive = false;
//   }
// });

