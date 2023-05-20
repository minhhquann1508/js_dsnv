function Staff (id,name,email,date,position) {
    this.staff_id = id;
    this.staff_name = name;
    this.staff_email= email;
    this.staff_date = date;
    this.staff_postition = position;
}
Staff.prototype.staff_password = '';
Staff.prototype.staff_basic_salary = '';
Staff.prototype.work_time = '';
Staff.prototype.total_salary = 0;
Staff.prototype.type = '';
Staff.prototype.CalcTotalSalary = function () {
    let exchange = new Intl.NumberFormat('vn-VN')
    switch(this.staff_postition) {
        case '0': 
            this.total_salary = 0;
            break;
        case 'Sếp': 
            this.total_salary = exchange.format(this.staff_basic_salary * 3);
            break;
        case 'Trưởng phòng': 
            this.total_salary = exchange.format(this.staff_basic_salary * 2);
            break;
        case 'Nhân viên': 
            this.total_salary = exchange.format(this.staff_basic_salary * 1);
            break;
    }
}
Staff.prototype.Classfication = function () {
    let time = Number(this.work_time);
    if(time >= 192) {
        this.type = 'NV xuất sắc';
    }
    else if (time < 192 && time >= 176) {
        this.type = 'NV giỏi';
    }
    else if (time < 176 && time >= 160) {
        this.type = 'NV khá';
    }
    else {
        this.type = 'NV trung bình';
    }
}

