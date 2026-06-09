// Thêm sinh viên mới: Nhập thông tin sinh viên (tên, tuổi, lớp) vào một biểu mẫu và thêm vào danh sách.
// Hiển thị danh sách sinh viên: Thông tin sinh viên sẽ được hiển thị dưới dạng bảng.
// Xóa sinh viên: Mỗi dòng trong bảng có một nút xóa để xóa sinh viên khỏi danh sách.
// Sửa thông tin sinh viên: Khi bấm nút "Sửa", cho phép chỉnh sửa thông tin sinh viên.
// Tìm kiếm sinh viên: Tìm kiếm sinh viên theo tên.

// B1: Tao du lieu mau 
let students = [
    {
        id: 1,
        name: "Tran Linh",
        age: 18,
        class: "1A"
    },
    {
        id: 2,
        name: "Xuan Tien",
        age: 21,
        class: "1B"
    },
]

// CRUDS
// R - Hien thi du lieu mau ra man hinh 
function renderStudent() {
    let tBody = document.getElementById("table-body")
    tBody.innerHTML=''
    // Tao ra 2 tr tuong ung voi 2 du lieu mau ban 
    students.forEach((element) => {
        let tr = document.createElement('tr')
        // B2: Them du lieu cho cac tr duoc khoi tao 
        tr.innerHTML = `<td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.class}</td>
            <td>
              <div class="action-buttons">
                <button class="btn-edit">Sửa</button>
                <button class="btn-delete">Xóa</button>
              </div>
            </td>`
        // B3 : Dua the tr vua duoc khoi tao vao ben trong tBody
        tBody.appendChild(tr)
        console.log(tBody.textContent);
    })
}

renderStudent()

// C - Them sinh vien moi 
// Truy van the button add 
let btnAdd = document.getElementById('btn-add')
// console.log(btnAdd);
btnAdd.addEventListener("click", function (e) {
    e.preventDefault() // Ngan chan mac dinh cua the form 
    // console.log("kiem tra");
    // Lay du lieu trong input 
    let inputName = document.getElementById("name").value
    let inputAge = document.getElementById("age").value
    let inputClass = document.getElementById("class").value
    // console.log(inputAge,inputClass,inputName);
    // Validate: Nguoi dung khong nhap gia tri
    if(inputName ==="" || inputAge ==="" || inputClass===""){
        console.log("Yeu cau nhap day du thong tin");
        return;
    }else{
        // Tao ra 1 bien de luu toan bo thong tin ma nguoi dung nhap 
        let newStudent ={
        id: Date.now(),
        name: inputName,
        age: inputAge,
        class: inputClass
        }
        // console.log(newStudent);
        // Them du lieu moi vao trong mang Students
        students.push(newStudent)
        // In lại du lieu (render lai trang)
        renderStudent()
        // Gap van de: 
        // 1. Lap lai du lieu => in du lieu => renderStudent()
        // 2. Khong xoa du lieu ma nguoi dung vua nhap => them sinh vien
        // inputName = ""
        // inputAge = ""
        // inputClass =""
        document.getElementById("name").value =""
        document.getElementById("age").value =""
        document.getElementById("class").value =""
        // Tai sao su dung ten bien ="" khong xoa duoc du lieu da nhap ma duoi lai duoc?????
    }
})
