// 1. Bien (Variable)
// Syntax: Tu khoa khai bao bien(let/var/const) + Ten bien = gia tri khoi tao ban dau 
// VD: let a = 1
// Camel Case let firstNumber = 6 (kebap case:first-number, snake case:first_number)
// Phan biet var let const
// Var: co the gan lai, co the khai bao lai
// Let: Co the gan lai, khong the khai bao lai
// const: khong the gan lai, khong the khai bao lai
// Hoisting: dua moi khai bao len tren cung 
// debugger
// console.log(a);
// var a =5
// console.log(a);

// Ket luan: Nen su dung tu khoa let - de quan ly

// Quy tac ten bien: nen su dung tieng Anh, co nghia, camelCase

// 2. Cac kieu du lieu trong JS 
// Kieu du lieu nguyen thuy (7): number, string, boolean(true,falee), undefined, symbol,null, BigInt(7437437438n)
// Kieu du lieu phuc tap (tham chieu): Array(Mang), Object(Doi tuong)

// 3. Nhap xuat (Prompt,alert,console.log())
// let fullName = prompt("Xin moi nhap ten")
// Ep kieu string => number: +, Number, parseInt
// let age = +prompt("Xin moi nhap tuoi")
// let age = Number(prompt("Xin moi nhap tuoi"))
// let age = parseInt((prompt("Xin moi nhap tuoi")))
// console.log("Kieu du lieu cua bien fullName la:", typeof(fullName));
// ES6-Template string - Literal String
// console.log(`Kieu du lieu cua bien fullName la: ${typeof(fullName)}`);
// console.log(`Kieu du lieu cua bien age la: ${typeof(age)}`);

// Control Statement (Cac cau lenh dieu khien)
// Cau lenh re nhanh 
// let a = 10 
// let b = "10"
// console.log("Su dung 3 dau =", a===b); //false - nen su dung
// console.log("Su dung 2 dau =", a==b); // True

// console.log("Su dung toan tu &&", 5 > 3 && 2 > 4); //False
// console.log("Su dung toan tu ||", 5 < 3 || 2 > 4); //False

// Menh de if
// Syntax: if(condition){....}
// let age = 19
// if(age > 18){
//     console.log("Ban du tuoi ket hon");
// }

// Menh de if else
// Syntax: 
// if(condition){
// }else{
// }
// let age = "linh"
// if(age > 18){
//     console.log("Ban du tuoi ket hon");
// }else{
//     console.log("Ban khong du tuoi ket hon");
// }

// Menh de if...else if... else
// let score = 5.6
// Neu duoi 5 diem va tren 0 - trung binh 
// Neu duoi 8 diem va tren 5- kha 
// Neu duoi 10 diem va tren 8- gioi 

// Toan tu 3 ngoi 
// Syntax: condition ? statement(true): statement(false)
// let age = 18
// // if(age > 18){
// //     console.log("Ban du tuoi ket hon");
// // }else{
// //     console.log("Ban khong du tuoi ket hon");
// // }
// age > 18 ?  console.log("Ban du tuoi ket hon") : console.log("Ban khong du tuoi ket hon")


// Menh de switch case
// Nguoi dung nhap vao thang => hien thi ra mua tuong ung 
// let month = 9
// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Day la mua xuan");
//         break;
//     case 4:
//     case 5:
//     case 6:
//        console.log("Day la mua ha");
//         break;
//     case 7:
//     case 8:
//     case 9:
//        console.log("Day la mua thu");
//        break;
//     default:
//         console.log("yeu cau nhap lai");
//         break;
// }
// Khi nao su dung if.. else, khi nao su dung switch case
// Vong lap (Loop)
// For 
// Syntax for(khoi tao bien dem;dieu kien dung vong lap;tang gia tri bien dem){...}
// for(let i = 0; i < 10; i++){
//     console.log(`Lan in thu ${i+1}: ${i}`);
// }

// let i = 2
// // Tien to va hau to: i++ va ++i
// console.log(i++ + ++i + i++);// 2 +  4 + 4

// WHile: kiem tra dieu kien truoc khi lap va khong can biet truoc so lan lap
// while (condition) {
// }
// VD: Cho 1 so ngau nhien. Viet chuong trinh cho nguoi dung nhap 
// Neu so do lon hon thi hien thi ra lon hon 
// Neu so do nho hon thi hien thi ra nho hon 
// Neu so do trung voi so he thong cung cap thi hien thi Bingo 

// IPO - Input - Process - Output 
// Input: So ngau nhien, nguoi dung nhap vao 
// Output: Hien thi ket qua cho nguoi dung 
// Process 
// // Buoc 1: Nhap so can doan 
// let number = 68
// // Buoc 2: Tao ra bien dieu kien de kiem tra vong lap 
// let check = true
// // Buoc 3: Su dung vong lap while 
// while (check) {
//     // Buoc 3.1: Cho nguoi nhap so muon doan
//     let inputNumber = +prompt("Moi ban nhap so muon doan") 
//     // Buoc 3.2: So sanh ket qua nguoi dung voi so can doan => hien thi ket qua
//     if(inputNumber > number){
//         console.log("So ban doan lon hon");
//     }else if(inputNumber < number){
//         console.log("so ban doan nho hon");
//     }else{
//         console.log("BINGOOO");
//         check = false
//     }
// }

// do while(): vong lap voi so lan khong biet truoc, kiem tra dieu kien sau khi lap
// chay code it nhat 1 lan 
// // Buoc 1: Nhap so can doan 
// let number = 68
// // Buoc 2: Tao ra bien dieu kien de kiem tra vong lap 
// let check = true
// do {
//     let inputNumber = +prompt("Moi ban nhap so muon doan") 
//     // Buoc 3.2: So sanh ket qua nguoi dung voi so can doan => hien thi ket qua
//     if(inputNumber > number){
//         console.log("So ban doan lon hon");
//     }else if(inputNumber < number){
//         console.log("so ban doan nho hon");
//     }else{
//         console.log("BINGOOO");
//         check = false
//     }
// } while (check);