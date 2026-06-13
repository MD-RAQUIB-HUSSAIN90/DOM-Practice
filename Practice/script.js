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

// 2 Common Events Practice(10)
// Q1 Input field me jo type ho raha hai use live <p> me show karo.

// let input=document.querySelector("input");
// let p=document.querySelector("p")
// input.addEventListener("input",(e)=>{
//   p.textContent=  e.target.value;
// })

// Q2
// Input me Enter press karne par alert dikhao.

// let input=document.querySelector("input");

// input.addEventListener("keydown",(e)=>{
//     if(e.key==="Enter"){
//         alert("sale Enter mat daba khali dibbe me")
//         return
//     }
//     console.log(e);
// })

// Q3
// Form submit hone par console me "Submitted" print karo.

// Ans
// let form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
// e.preventDefault();
//   console.log("Submitted");
// });

// Q4
// Mouse element ke upar jaye to color green ho jaye.

// Ans
// let h2=document.querySelector("h2");
// h2.addEventListener("mouseover",()=>{
//     h2.style.color="green"
// })

// Q5
// Mouse bahar nikle to color white ho jaye./ let h2=document.querySelector("h2");

// Ans
// let h2=document.querySelector("h2");
// h2.addEventListener("mouseout",()=>{
//     h2.style.color="white"
// })

// Q6
// Checkbox tick hote hi message show karo.

// Ans
// let input=document.querySelector("input");
// input.addEventListener('change',(e)=>{
//     if(input.checked){
//         console.log("hii");
//     }
// })

// Q7
// Dropdown change hone par selected value print karo.

// Ans

// let select = document.querySelector("select");
// let p= document.querySelector("p");
// select.addEventListener("change",()=>{
//     p.textContent=select.value
//     console.log(select.value);

//   })

// Q9
// Input empty ho to warning dikhao.

// Ans
// let input=document.querySelector("input");
// input.addEventListener("click",()=>{
// if(input.value===""){
//     console.warn("input val empty")
// }
// else{
//     alert('fill input');
// }
// })

// Q10
// Textarea me character count show karo.

// let textArea = document.querySelector("#text");
// let count = 1;
// let span=document.querySelector("span")

// textArea.addEventListener("keydown", () => {
//   span.textContent =count++;

// });

// let input=document.querySelector("input");
// input.addEventListener("focus", () => {
//   console.log("Focus hat gaya");
// });

// 3. Event Object Practice (10)
// Q1
// Clicked button ka text console me print karo.

// Ans
// let btn=document.querySelector("button")
// btn.addEventListener("click",()=>{
//   console.log(btn.textContent);
// })

// Q2
// Clicked element ka tag name print karo.
// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log(btn.tagName);
// });

// Q3

// Event type print karo.

// let btn=document.querySelector("button")
// btn.addEventListener("click",(e)=>{
//   console.log(e.type);//click
// })

// Q4
// Input ki value event.target.value se print karo.
// let input = document.querySelector("input");
// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// Q5
// Form submit hone se roko.
// event.preventDefault();//isse form submit se ruke ga

// Q6
// Clicked element ka id print karo.

// let btn=document.querySelector("button");
// btn.addEventListener("click",()=>{
// console.log(btn.getAttribute("id"));
// })

// Q7
// Clicked element ka className print karo.

// let btn=document.querySelector("button");
// btn.addEventListener("click",()=>{
// console.log(btn.className);
// })

// Q8
// Image par click karne par image source print karo.

// let img = document.querySelector("img");
// img.addEventListener("click", () => {
//   console.log(img.getAttribute("src"));
// });

// Q9
// Mouse coordinates print karo.

// window.addEventListener("mousemove",(e)=>{
//   console.log(e.clientX, e.clientY);
// })

// Q10
// Keyboard se press hui key print karo.

// let p=document.querySelector('p');
// window.addEventListener("keypress",(e)=>{
// console.log(e.key);
// })

// 5. Event Delegation Practice (10)
// Q1
// ul ke andar 5 li banao. Kisi bhi li par click karo aur uska text print karo.

// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// ul.addEventListener("click", () => {

// });

// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");

// parent.addEventListener("click",() => {
//     console.log("Parent Clicked");
//   },

// );

// child.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("button clicked");
//   },

// );

// 4. Event Bubbling & Capturing Practice (10)
// Q1
// Parent aur child div banao. Dono par click listener lagao.

// let parent=document.querySelector("#parent");
// let child=document.querySelector("#child");

// parent.addEventListener("click",()=>{
//   console.log("parent button clicked");
// })
// child.addEventListener("click",()=>{
//   console.log("child button clicked");
// })

// Q2
// Child click karne par bubbling observe karo.
//  observe karne par dikha ki parent par jab click kiya to parent wala hi srf chala or jab child par click kiya to child pehle uske baad parent bhi chala dono chala
//

// Q3
// stopPropagation() use karke bubbling roko.

// let parent=document.querySelector("#parent");
// let child=document.querySelector("#child");

// parent.addEventListener("click",()=>{
//   console.log("parent button clicked");
// })
// child.addEventListener("click",(e)=>{
//   e.stopPropagation();
//   console.log("child button clicked");
// })

// Q4
// Parent → Child → Button structure banao aur event order dekho.

// let parent=document.querySelector("#parent");
// let child=document.querySelector("#child");
// let btn=document.querySelector("button");

// parent.addEventListener("click",()=>{
//   console.log("parent button clicked");
// })
// child.addEventListener("click",(e)=>{
//
//   console.log("child button clicked");
// })
// btn.addEventListener("click",(e)=>{
//
//   console.log("button clicked ");

// })

//  <div id="parent">parents
//       <div id="child">child
//            <button>click</button>
//       </div>
//   </div>

// Q5
// Capturing mode enable karo.
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent button clicked");
//   },true

// );
// child.addEventListener("click", () => {
//   console.log("child button clicked");
// } ,true);

// Q6
// Bubbling aur capturing ke output compare karo.
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent button clicked to capturing");
//   },
//   true,
// );
// child.addEventListener(
//   "click",
//   () => {
//     console.log("child button clicked to capturing");
//   },
//   true,
// );
// parent.addEventListener("click", () => {
//   console.log("parent button clicked to bubbling");
// });
// child.addEventListener("click", () => {
//   console.log("child button clicked to bubbling");
// });

// parent button clicked to capturing
// parent button clicked to bubbling
//  parent button clicked to capturing
//  child button clicked to capturing
//  child button clicked to bubbling
//  parent button clicked to bubbling

// Q7
// Nested 3 div banao aur click order note karo.
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// let baby = document.querySelector("#baby");

// parent.addEventListener("click", () => {
//   console.log("parent clicked");
// });

// child.addEventListener("click", () => {
//   console.log("child clicked");
// });

// baby.addEventListener("click", () => {
//   console.log("baby click");
// });

// baby par click krne se ye aya
// {
// baby click
// child clicked
// parent clicked
// }

// Q8
//Parent listener ko capture mode me lagao
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   true,
// );

// child.addEventListener("click", () => {
//   console.log("child clicked");
// });

// Q9

// Child click par parent event rok do.
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");

// parent.addEventListener(
//   "click",
//   (e) => {
//
//     console.log("parent clicked");
//   },
//   true,
// );

// child.addEventListener("click", (e) => {
// e.stopPropagation();
//   console.log("child clicked");
// });

// Q10
// Console me har event ka target print karo.

// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// let baby = document.querySelector("#baby");

// parent.addEventListener("click", (c) => {
//   console.log(c.target);
// });

// child.addEventListener("click", (d) => {
//   console.log(d.target);
// });

// baby.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// parent par click
// {<div id="parent">…</div>}
// //child par click
// {<div id="child">…</div>
// <div id="child">…</div>}

// baby par click
{
  /* <div id="baby">baby</div>
<div id="baby">baby</div>
<div id="baby">baby</div> */
}

// let list = document.getElementById("list");
// list.addEventListener("click", (e) => {
//   console.log(e.target.textContent);
// });

// 5. Event Delegation Practice (10)
// Q1
// ul ke andar 5 li banao. Kisi bhi li par click karo aur uska text print karo.

// Ans
// let list = document.querySelector("ul");
// list.addEventListener("click", (e) => {
//   console.log(e.target.textContent);
// });

// Q2
// Dynamic li add karo aur click event kaam karna chahiye.
// let list = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "React.js";
// list.append(li);
// list.addEventListener("click", (e) => {
//   console.log(e.target.textContent);
// });

// Q3
// Todo list banao aur item delete karo.

// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");

// function add() {
//   if (input.value) {
//     let li = document.createElement("li");
//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "delete items";
//     li.textContent = input.value;
//     ul.append(li, deleteBtn);
//     deleteBtn.addEventListener("click",()=>{
//         li.remove();
//         deleteBtn.remove();
//     })
//   }
// }
// btn.addEventListener("click", add);
