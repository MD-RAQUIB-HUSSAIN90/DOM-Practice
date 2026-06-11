// let body=document.querySelector("body");
// let btn=document.createElement("button");
// btn.innerText="Change theme"
// body.prepend(btn);
// btn.addEventListener("click",()=>{
// body.classList.toggle("active")
// })

// function dblclick(){
// document.querySelector("h2").style.color="red";
// }
// document.querySelector("h2").addEventListener("click",dblclick)

// // document.querySelector("h2").removeEventListener("click",dblclick);

// let inp=document.createElement("input");
// document.body.append(inp);

// inp.addEventListener("input",(e)=>{
//     console.log("you typed :", e.target.value );

// })

// let p=document.querySelector("p");

// p.addEventListener("click",()=>{
//     p.style.color="red"
// })
// p.addEventListener("dblclick",()=>{
//     p.style.color="blue"
// })

// let inp=document.querySelector("input");
// inp.addEventListener("input",(e)=>{
//     if(e.data!==null){
//     console.log(e.data)
// }
// })

// let sel=document.querySelector("select");
// sel.addEventListener("change",(e)=>{
// let brnd=e.target.value;
// document.querySelector("h3").textContent=`${brnd}
// Device Selected`
// })

// let h1=document.querySelector("h1")
// window.addEventListener("keydown",(e)=>{
// h1.textContent=e.key;
// if(e.key===" "){
//     h1.textContent="SPC"
// }
// else{
//     h1.textContent=e.key
// }
// })

// let btn=document.querySelector("#btn")
// let input=document.querySelector("input");
// btn.addEventListener("click",()=>{
// input.click();

// })

// input.addEventListener("change",(e)=>{
//     btn.textContent=e.target.files[0].name

// })

// form handling

// function red(){
//     return function dbl(){h1.style.color="red"
// }
// }

// let double=red();
// double();

// let h1=document.createElement("h1");
// let btn=document.createElement("button")
// btn.textContent="clik here"
// document.body.append(btn)

// btn.addEventListener("click",function(){
// h1.textContent="hello everyone how are you??"
// document.body.prepend(h1)

// })

// let div=document.createElement("div");
// div.style.backgroundColor="red";
// div.style.cursor="pointer";
// div.style.width="100px";
// div.style.height="100px";
// div.style.borderRadius="50%";
// document.body.append(div);
// div.style.position="absolute";
// div.classList.add("move");

// window.addEventListener("mousemove", function (events){

//     div.style.top=events.clientY+"px";
//     div.style.left=events.clientX+"px";
// });

// let abcd=document.createElement("div");
// abcd.classList.add("abcd");
// document.body.append(abcd);

// abcd.addEventListener("click",function(dets){
//   console.log(dets);
// })

// let form=document.querySelector("form");
// form.addEventListener("submit",function(e){
//     e.preventDefault();

// })

// Event bubbling..................

// let nav=document.querySelector("#nav");

// nav.addEventListener("click",function(){
//     alert("you clicked on nav")
// })

// let ul=document.querySelector("ul");
// console.log(ul);

// ul.addEventListener("click",function(li){
// li.target.classList.toggle("lt")
// })

// Event Bubbling...............

// let a=document.querySelector(".a");
// let b=document.querySelector(".b");
// let c=document.querySelector(".c");
// let btn=document.querySelector("button");

//  btn.addEventListener("click",function(){
// console.log("you clicked on button");
//     })

//

// Event Capturing..................
// let a=document.querySelector(".a");
// let b=document.querySelector(".b");
// let c=document.querySelector(".c");
// let btn=document.querySelector("button");

//  btn.addEventListener("click",function(){
// console.log("you clicked on button");})

//   c.addEventListener("click",function(){
//         console.log("you clicked on c");
//     },true)
//     b.addEventListener("click",function(){
//         console.log("you clicked on b");
//     })
//     a.addEventListener("click",function(){
//         console.log("you clicked on a");
//     },true)

// Live character counter.....................

// let inp = document.querySelector("input");

// inp.addEventListener("input", () => {
//   let lft = 20 - inp.value.length;
//   if (lft >= 0) {
//     document.querySelector("h1 span").textContent = lft;
//     document.querySelector("h1 span").style.color = "black";
//   } else {
//     document.querySelector("h1 span").textContent = lft;
//     document.querySelector("h1 span").style.color = "red";
//   }
// });


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
