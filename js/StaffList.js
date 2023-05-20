function StaffList () {
    this.STAFF_LIST = [];
    this.AddNewStaff = function (staff) {
        this.STAFF_LIST.push(staff);
    }
    this.DeleteStaff = function (index) {
        this.STAFF_LIST.splice(index,1)
    }
    this.FindStaffByType = function (keyword) {
        let key = keyword.toLowerCase().trim();
        this.match_list = [];
        this.STAFF_LIST.forEach(staff => {
            if(staff.type.toLowerCase().search(key) != -1 && key.length > 0) {
                this.match_list.push(staff);
            }
        });
        return this.match_list;
    }
    this.GetStaffUpdate = function (update_staff) {
        this.STAFF_LIST.forEach((staff) => {
            if(Number(update_staff.staff_id) === Number(staff.staff_id)) {
                staff.staff_id = update_staff.staff_id;
                staff.staff_name = update_staff.staff_name;
                staff.staff_email = update_staff.staff_email;
                staff.staff_date = update_staff.staff_date;
                staff.staff_postition = update_staff.staff_postition;
                staff.staff_password = update_staff.staff_password;
                staff.staff_basic_salary = update_staff.staff_basic_salary;
                staff.work_time = update_staff.work_time;
                staff.total_salary = update_staff.total_salary;
                staff.type = update_staff.type;
            }
        })
        return this.STAFF_LIST;
    }
}