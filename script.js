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

// Event bubbling


// let nav=document.querySelector("#nav");

// nav.addEventListener("click",function(){
//     alert("you clicked on nav")
// })


let ul=document.querySelector("ul");
console.log(ul);
ul.addEventListener("click",function(li){
li.target.style.textDecoration="underline"
})