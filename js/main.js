function getEle (id) {
    return document.getElementById(id);
}
//staff list
let staff_list = new StaffList ();
//get data from local store
getData ()
//validate
let validate = new Validate ();
//Add new staff function
getEle('btnThemNV').onclick = () => {
    let staff_id = getEle('tknv').value;
    let staff_name = getEle('name').value;
    let staff_email = getEle('email').value;
    let staff_password = getEle('password').value;
    let staff_date = getEle('datepicker').value;
    let staff_basic_salary = getEle('luongCB').value;
    let staff_position = getEle('chucvu').value;
    let staff_work_time = getEle('gioLam').value;
    let staff = new Staff (staff_id,staff_name,staff_email,staff_date,staff_position);
    staff.staff_basic_salary = staff_basic_salary;
    staff.staff_password = staff_password;
    staff.staff_password = staff_password;
    staff.work_time = staff_work_time;
    staff.CalcTotalSalary();
    staff.Classfication();
    if(CheckValidDate (staff_id,staff_name,staff_email,staff_password,
        staff_date,staff_basic_salary,staff_position,staff_work_time)){
        staff_list.AddNewStaff(staff);
        reset ();
        saveData ();
        render(staff_list.STAFF_LIST)
    }
    else {
        return;
    }
}

//check validate function
function CheckValidDate (id,name,email,password,date,salary,position,time) {
    //pass,date,salary,position,time
    let error = 0;
    //validate id
    if(validate.CheckIdLength(id) && isAvalible(id)) {
        correct ('tbTKNV')
    }
    else if (validate.CheckIdLength(id) && !isAvalible(id)) {
        warning('tbTKNV','ID đã tồn tại')
        error++;
    }
    else {
        warning('tbTKNV','ID là số từ 4-6 ký tự')
        error++;
    }
    //validate name
    if(validate.Regex(name,/^[A-Za-z\s]+$/)) {
        correct ('tbTen')
    }
    else{
        warning('tbTen','Tên viết không dấu')
        error++;
    }
    //validate email
    if(validate.Regex(email,/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        correct ('tbEmail')
    }
    else{
        warning('tbEmail','Email không hợp lệ')
        error++;
    }
    //Validate pass
    if(validate.CheckValidPassword(password)) {
        correct ('tbMatKhau')
    }
    else{
        warning('tbMatKhau','Độ dài mật khẩu từ 6-10 ký tự bao gồm số,chữ hoa và ký tự đặc biêt')
        error++;
    }
    //validate date
    if(validate.Regex(date,/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/)) {
        correct ('tbNgay')
    }
    else{
        warning('tbNgay','Ngày bắt đầu phải đúng định dạng mm/dd/yyyy')
        error++;
    }
    //validate salary
    if(validate.CheckSalary(salary)) {
        correct ('tbLuongCB')
    }
    else{
        warning('tbLuongCB','Lương cơ bản tối thiểu 1.000.000 và tối đa 20.000.000 VNĐ')
        error++;
    }
    //validate position
    if(validate.CheckPosition(position)) {
        correct ('tbChucVu')
    }
    else{
        warning('tbChucVu','Chức vụ không được để rỗng')
        error++;
    }
    //validate work time 
    if(validate.CheckTime(time)) {
        correct ('tbGiolam')
    }
    else{
        warning('tbGiolam','Giờ làm tối thiểu 80 và tối đa 200 giờ')
        error++;
    }
    if(error != 0) {
        return false;
    }
    else {
        return true;
    }
}
//check validate update
function CheckValidDateUpdate (name,email,password,date,salary,position,time) {
    //pass,date,salary,position,time
    let error = 0;
    //validate name
    if(validate.Regex(name,/^[A-Za-z\s]+$/)) {
        correct ('tbTen')
    }
    else{
        warning('tbTen','Tên viết không dấu')
        error++;
    }
    //validate email
    if(validate.Regex(email,/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        correct ('tbEmail')
    }
    else{
        warning('tbEmail','Email không hợp lệ')
        error++;
    }
    //Validate pass
    if(validate.CheckValidPassword(password)) {
        correct ('tbMatKhau')
    }
    else{
        warning('tbMatKhau','Độ dài mật khẩu từ 6-10 ký tự bao gồm số,chữ hoa và ký tự đặc biêt')
        error++;
    }
    //validate date
    if(validate.Regex(date,/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/)) {
        correct ('tbNgay')
    }
    else{
        warning('tbNgay','Ngày bắt đầu phải đúng định dạng mm/dd/yyyy')
        error++;
    }
    //validate salary
    if(validate.CheckSalary(salary)) {
        correct ('tbLuongCB')
    }
    else{
        warning('tbLuongCB','Lương cơ bản tối thiểu 1.000.000 và tối đa 20.000.000 VNĐ')
        error++;
    }
    //validate position
    if(validate.CheckPosition(position)) {
        correct ('tbChucVu')
    }
    else{
        warning('tbChucVu','Chức vụ không được để rỗng')
        error++;
    }
    //validate work time 
    if(validate.CheckTime(time)) {
        correct ('tbGiolam')
    }
    else{
        warning('tbGiolam','Giờ làm tối thiểu 80 và tối đa 200 giờ')
        error++;
    }
    if(error != 0) {
        return false;
    }
    else {
        return true;
    }
}
//check available id 
function isAvalible (id) {
    let result = false;
    if (localStorage.length === 0) {
        console.log(1)
        result = true;
    }
    else if(localStorage.length != 0) {
        staff_list.STAFF_LIST.forEach((staff) => {
            if(Number(staff.staff_id) === Number(id)) {
                result = false;
            }
            if(Number(staff.staff_id) != Number(id)) {
                result = true;
            }
            else {
                result = false;
            }
        })
    }
    else {
        result = false;
    }
    return result
}
//correct
function correct (id) {
    getEle(id).style.display = 'block';
    getEle(id).style.color = 'green';
    getEle(id).innerHTML = 'Correct';
}
//warning function 
function warning (id,note) {
    getEle(id).style.display = 'block';
    getEle(id).style.color = 'red';
    getEle(id).innerHTML = note;
}
//Render list 
function render (list) {
    let table = getEle('tableDanhSach');
    table.innerHTML = '';
    list.forEach((staff,index) => {
        let tr = document.createElement('tr');
        let content = 
        `
            <td>${staff.staff_id}</td>
            <td>${staff.staff_name}</td>
            <td>${staff.staff_email}</td>
            <td>${staff.staff_date}</td>
            <td>${staff.staff_postition}</td>
            <td>${staff.total_salary} VNĐ</td>
            <td>${staff.type}</td>
            <td>
                <button class = "btn" onclick = "getEditStaff(${index})">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class = "btn btn-danger" onclick = "deleteStaff(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `
        tr.innerHTML = content;
        table.appendChild(tr)
    });
}
//deleted staff from staff list 
function deleteStaff (index) {
    if(confirm('Bạn có chắc muốn xóa nhân viên này ?')) {
        staff_list.DeleteStaff(index);
        saveData ()
        render(staff_list.STAFF_LIST) 
    }

}
//Finding staff by type function
getEle('searchName').oninput = (e) => {
    let keyword = e.target.value;
    let new_list =  staff_list.FindStaffByType(keyword)
    render(new_list) 
}
//tắt disable id 
getEle('btnThem').onclick = () => {
    getEle('tknv').disabled = false;
    getEle('btnCapNhat').disabled = true;
}
//get staff want to update
function getEditStaff (index) {
    let staff = staff_list.STAFF_LIST[index];
    getEle('tknv').value = staff.staff_id;
    getEle('name').value = staff.staff_name;
    getEle('email').value = staff.staff_email;
    getEle('password').value = staff.staff_password;
    getEle('datepicker').value = staff.staff_date;
    getEle('luongCB').value = staff.staff_basic_salary;
    getEle('chucvu').value = staff.staff_postition;
    getEle('gioLam').value = staff.work_time;
    getEle('btnThem').click();
    getEle('tknv').disabled = true;
    getEle('btnCapNhat').disabled = false;
}

//Update staff after edit
getEle('btnCapNhat').onclick = function () {
    let staff_id = getEle('tknv').value;
    let staff_name = getEle('name').value;
    let staff_email = getEle('email').value;
    let staff_password = getEle('password').value;
    let staff_date = getEle('datepicker').value;
    let staff_basic_salary = getEle('luongCB').value;
    let staff_position = getEle('chucvu').value;
    let staff_work_time = getEle('gioLam').value;
    let update_staff = new Staff (staff_id,staff_name,staff_email,staff_date,staff_position);
    update_staff.staff_basic_salary = staff_basic_salary;
    update_staff.staff_password = staff_password;
    update_staff.staff_password = staff_password;
    update_staff.work_time = staff_work_time;
    update_staff.CalcTotalSalary();
    update_staff.Classfication();
    if(CheckValidDateUpdate(staff_name,staff_email,staff_password,
        staff_date,staff_basic_salary,staff_position,staff_work_time)){
        console.log(123)
        let staff_list_updated = staff_list.GetStaffUpdate(update_staff);
        reset ();
        saveData ();
        render(staff_list_updated);
    }
    else {
        return;
    }
}

//Save data to localStorage
function saveData () {
    let json = JSON.stringify(staff_list.STAFF_LIST);
    localStorage.setItem('staff_list',json);
}

//get data from local storage
function getData () {
    let json = localStorage.getItem('staff_list');
    let data = JSON.parse(json)
    if(data === '' || data === null) {
        staff_list.STAFF_LIST = []
    }
    else {
        staff_list.STAFF_LIST = data
    }
}
//reset value 
function reset () {
    getEle('tknv').value = '';
    getEle('name').value = '';
    getEle('email').value = '';
    getEle('password').value = '';
    getEle('datepicker').value = '';
    getEle('luongCB').value = '';
    getEle('chucvu').value = '';
    getEle('gioLam').value = '';
    let nofi = document.querySelectorAll('.sp-thongbao')
    nofi.forEach((item) => {
        item.style.display = 'none';
    })
}