// Array (Mang)
// let student1= "Dinh Vu"
// let student2= "Xuan Tien"
// console.log(studen1);
// console.log(studen1);
// La danh sach cac phan tu co tinh chat tuong dong nhau. Cac phan tu co the khac kieu du lieu
// let students = ["Dinh Vu", "Xuan Tien", "Le Thu", "Tran Thach"]
// console.log(students);
// let mixed =["hello", true, 1, null, undefined, [1,2,3]]
// console.log(mixed);
// Element(Phan tu) - Index(Chi so bat dau 0) - Length (Do dai= so luong phan tu)

// Create-Read-Update-Delete
// Read 
// let students = ["Dinh Vu", "Xuan Tien", "Le Thu", "Tran Thach"]
// Read one(Syntax: Array[index])
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// Read all
// for (let index = 0; index < students.length; index++) {
//   console.log(students[index]);
// }

// for (const element of students) {
//     console.log(element);
// }

// for (const key in students) {
//     console.log(students[key])
// }

// Create(Tao moi) - push(), unshift(), splice(), 
// let numbers =[1,2,3,4,5] // length = 5; index= 4
// numbers.push(10)
// console.log("Su dung phuong thuc push de them vao cuoi mang", numbers);
// numbers.unshift(-10)
// console.log("Su dung phuong thuc unshift de them vao dau mang", numbers);
// numbers[numbers.length]= 20;
// console.log(numbers[5]);
// numbers.splice(2,0,10)
// console.log(numbers);

// Update (Sua gia tri cua phan tu)
// Sua phan tu co gia tri 3 thanh 30 
// B1: Tim kiem vi tri phan tu trong mang
// B2: Thay doi gia tri phu thuoc vao vi tri index
// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index]===3){
//         numbers[index]=30
//     }
// }

// numbers.splice(2,1,30)
// console.log(numbers);

// Delete(Xoa)- pop(), shift(), splice()
// numbers.pop()
// console.log("Su dung phuong thuc pop de xoa vao cuoi mang", numbers);
// numbers.shift()
// console.log("Su dung phuong thuc shift de xoa vao dau mang", numbers);
// numbers.splice(1,1)
// console.log(numbers);
// ES6:map(), filter(), find(), findIndex(), forEach(), reduce()
// Bài toán yêu cầu khai báo mảng số nguyên 10 đến 20 phần tử ngẫu nhiên. 
// Thực hiện nhập vào một số nguyên để kiểm tra (k), thực hiện đếm số lần xuất hiện của
// k trong mảng. và hiển thị ra màn hình
// Input: Mang rong 
// Output: Hien thi so lan xuat cua so k trong mang do 
// Process: 
// B1: Khai bao mang rong 
// let numbers=[]
// // B2: Them 10-20 phan tu vao trong mang 
// let minLength = 10 
// let maxLength = 20
// let arrLength = Math.floor(Math.random() * (maxLength - minLength)) + minLength
// for (let i = 0; i < arrLength; i++) {
//     //Them tung phan tu ngau nhien vao trong mang numbers
//     randomNumber= Math.floor((Math.random() * 301) - 200)
//     numbers.push(randomNumber)
// }
// console.log(numbers);
// // B3: Cho nguoi dung nhap vao so nguyen bat ky 
// // let inputValue = Number(prompt("Nhap so nguyen bat ky"))
// let inputValue = 68
// // B4: Khai bao bien dem count
// let count = 0 
// // B5: Duyet qua tung phan tu trong mang va kiem tra so nguyen co xuat hien khong
// for (let i = 0; i < numbers.length; i++) {
//     // Neu xuat hien thi tang count len 1
//     // Neu khong xuat hien thi bo qua
//     if(numbers[i]=== inputValue){
//         count++
//     }
// }
// console.log(`So lan xuat hien cua so ${inputValue} la: ${count} lan`);

// Object (Doi tuong)(key:value)
// let student = {
//     id: 1,
//     name: "Pham Minh Tri",
//     age: 18, 
//     phone: "0904662012",
// }

// CRUD
// Read One - Truy van mot thuoc tinh 
// Syntax: Object.key
// console.log(student.name);
// Read All 
// for (const key in student) {
//     console.log(student[key]);
// }

// Create (Them mot thuoc tinh moi vao Object)'
// student.email = "tri@gmail.com" // undefined => tri@gmail.com
// console.log(student);

// Update 
// student.age = 30 
// console.log(student);

// Delete 
// Syntax: delete Object.key
// delete student.phone
// console.log(student);

// BTTH
// Viết một chương trình quản lý danh sách sách với các chức năng sau:
// C:Thêm sách mới
// Nhập ID, Tên sách, Tác giả, Năm xuất bản.
// Thêm sách vào danh sách.
// R: Hiển thị danh sách sách
// Duyệt qua danh sách và in thông tin của từng sách ra màn hình.
// Search: Tìm kiếm sách theo tên
// Nhập từ khóa tìm kiếm.
// Tìm và hiển thị sách có tên chứa từ khóa đó (không phân biệt hoa thường).
// Nếu không tìm thấy, thông báo cho người dùng.
// Delete: Xóa sách theo ID
// Nhập ID của sách cần xóa.
// Nếu sách tồn tại, xóa khỏi danh sách.
// Nếu sách không tồn tại, thông báo lỗi.
// Exit: Thoát chương trình
// Dừng chương trình khi người dùng chọn thoát.

let books = [{
    id: 1,
    bookName: "Doraemon",
    author: "Nguyen Xuan Bach",
    year: 1991,
}, {
    id: 2,
    bookName: "Hoa moc lan",
    author: "Tran Linh",
    year: 1970,
}, {
    id: 3,
    bookName: "Tôi thấy hoa vàng trên cỏ xanh",
    author: "Nguyễn Nhật Ánh",
    year: 2000
}]

// B1: Hien thi menu chuc nang cho nguoi dung lua chon 
console.log("=====MENU=====");
console.log("1. C- Them moi sach");
console.log("2. R- Them moi sach");
console.log("3. S- Tim kiem sach");
console.log("4. D- Xoa sach");
console.log("5. E- Thoat chuong trinh");
// B2: Khai bao bien choi luu gia tri nguoi dung nhap vao cac chuc nang (C/R/S/D/E)
let choice = prompt("Nhap vao cac chu cai C/R/S/D/E").toUpperCase()
// Validate du lieu: kiem tra du lieu nguoi dung - regex
// B3: Su dung switch-case de tao menu 
switch (choice) {
    case "C":
        //ID, Tên sách, Tác giả, Năm xuất bản
        //B5: Tao doi tuong moi giong cac doi tuong dang co trong cau truc du lieu 
        // 5.1 Cho nguoi dung nhap thong tin sach muon them
        let inputBookName = prompt("Nhap ten sach moi").trim()
        let inputAuthor = prompt("Nhap ten tac gia").trim()
        let inputYear = Number(prompt("Nhap ten nam phat hanh"))
        // Validate: ca 3 khong trung, bookName de trong 
        if (inputBookName === "") {
            console.log("Du lieu nhap vao khong hop le");
        } else {
            let newBook = {
                id: Math.floor(Math.random() * 1000000),// duy nhat
                // id: Date.now(), // thoi gian hien tai - 1/1/1970 => ms
                // id: uuid v4 // reactjs => unique
                bookName: inputBookName,//
                author: inputAuthor,
                year: inputYear
            }
            console.log(newBook);
            //B6: Them vao trong mang books ban dau 
            books.push(newBook)
            //B7: Hien thi du lieu sau khi them 
            console.log("===Thong tin sach===");
            for (let i = 0; i < books.length; i++) {
                console.log(`${i + 1}. ${books[i].bookName}- ${books[i].author} - ${books[i].year}`);
            }
        }
        break;
    case "R":
        // B4: Hien thi thong tin toan bo sach 
        console.log("===Thong tin sach===");
        for (let i = 0; i < books.length; i++) {
            console.log(`${i + 1}. ${books[i].bookName}- ${books[i].author} - ${books[i].year}`);
        }
        break;
    case "S":
        // Nhập từ khóa tìm kiếm.
        let inputSearch = prompt("Nhap tu khoa can tim kiem").toLowerCase()// hoa - string.include(inputSearch) = true/fale
        // let inputSearch = "Hoa moc lan"
        // // Tìm và hiển thị toan bo thong tin sách có tên chứa từ khóa đó (không phân biệt hoa thường).
        // let flag = -1; // do index cua mang luon >=0
        // for (let i = 0; i < books.length; i++) {
        //     if(books[i].bookName=== inputSearch){
        //         flag = i
        //     }
        // }
        // // Nếu không tìm thấy, thông báo cho người dùng.
        // if(flag===-1){
        //     console.log("Khong tim thay sach ban can");
        // }else{
        //     console.log(`${flag + 1}. ${books[flag].bookName}- ${books[flag].author} - ${books[flag].year}`);
        // }
        let flag=-1
        for (let i = 0; i < books.length; i++) {
          if(books[i].bookName.toLowerCase().includes(inputSearch)){
            console.log(`${i + 1}. ${books[i].bookName}- ${books[i].author} - ${books[i].year}`);
            flag = i //i = 2
          }
        }
        if (flag ===-1) {
            console.log("Khong tim thay sach ban can");
        }
        break;
    case "D":
        console.log("D");
        break;
    case "E":
        console.log("E");
        break;
    default:
        console.log("Yeu cau nhap lai");
        break;
}

