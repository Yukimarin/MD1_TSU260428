// Function: giam thieu cac tac vu lap di lap lai => code de doc va de maintaince
// 1. Built-in Function 
// prompt(), console.log(), alert(),Number(),Math.random(), pop(), push()
// 2. Definde Function (Hàm tự định nghĩa- do mọi người tự xây)
// let arr= [1,2,3,4]
// let sum = 0 
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }

// Cac loại function 
// 1. Declaration Function: co the goi truoc khoi tao (hoisting)
// // Dinh nghia 
// function sayHi() {
//     console.log("Xin chao lop TSU260428");
// } 
// //Thuc thi ham - Goi ham 
// sayHi()
// // 2. Expression Function 
// let sayHello = function () {
//     console.log("Xin chao lop TSU260428");
// }
// sayHello()
// // 3. Arrow function (ES6)- tim hieu them 
// // let sum = function (a,b) {
// //     return {a,b}
// // }
// // // let sum = (a,b) => a+b
// // console.log(sum(2,3));

// //  Tham so (Parameter) và Doi so (Argument)
// //  Tham so: la bien tham gia vao qua trinh khoi tao ham 
// let sum = function (a,b) {
//     return a + b
// }
// // Doi so la gia tri truyen vao khi thuc thi ham 
// console.log(sum(2,3));

// Callback FUnction(bat dong bo), HOF - tim hieu them 

// Cac ham lam viec voi Mang 
// let arr = [1,2,3,4]
// Output: [1,4,9,16]
// Phan biet map() và forEach()
// for (let i = 0; i < arr.length; i++) {
//    arr[i]= arr[i]*arr[i]
// }
// console.log(arr);
//  Map: trả ve mang moi, khong thuc thi voi cac phan tu rong, khong thay doi mang goc,
// let resultMap = arr.map(function (element) {
//     return element* element
// })
// console.log(resultMap);
// // forEach: tra ve undefined
// let resultForEach= arr.forEach(function (element) {
//     return element
// })
// console.log(resultForEach);

//find(), findIndex(), filter(), indexOf()

// DOM: Document Object Model (Mo hinh doi tuong tai lieu)
// 1 Lay cac the HTML sang JS de lam viec (5 cach)
// let divE = document.getElementById("container")
// console.log(divE);
// let divEByClass = document.getElementsByClassName("container")
// console.log(divEByClass);

// 2. Content (3 cach)
// console.log(divE.innerHTML);
// divE.innerHTML=`<ol class="list-item">
//             <li class="item">Item 1</li>
//             <li class="item">Item 2</li>
//             <li class="item">Item 3</li>
//         </ol>`

// console.log(divE.innerText);
// console.log(divE.textContent);

//3. Attribute (camelCase)
// divE.style.color = "red"

//4. Dom Travelsal 
// console.log(divE.parentElement.parentElement);
// console.log(divE.children[0].children[0]);

// 5. Create Element va append Child
// let p = document.createElement('p')
// p.textContent='Day la the p'
// divE.appendChild(p)

// 6. Event 
// let btn = document.getElementById("btn")
// console.log(btn);

// btn.addEventListener("click", function () {
//     console.log("I luv u chiu chiu");
// })

// btn.onclick = function () {
//     console.log("Chia tay di");
// }



