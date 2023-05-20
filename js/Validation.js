function Validate () {
    this.Regex = function (input,regex) {
        let result = false;
        if(regex.test(input) && input != '') {
            result = true;
         }
         else {
             result= false;
         }
         return result;
    }
    //Check ID 
    this.CheckIdLength = function (id) {
        let result = false;
        let format =  /^[0-9]+$/;
        let length = (id.length >= 4 && id.length <= 6)
        if(format.test(id) && length === true) {
           result = true;
        }
        else {
            result= false;
        }
        return result;
    }
    //Check name
    // this.CheckValidName = function (name) {
    //     let result = false;
    //     let format = /^[A-Za-z\s]+$/;
    //     if(format.test(name) && name != '') {
    //        result = true;
    //     }
    //     else {
    //         result= false;
    //     }
    //     return result;
    // }
    // //Check email
    // this.CheckValidEmail = function (email) {
    //     let result = false;
    //     let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if(format.test(email) && email != '') {
    //        result = true;
    //     }
    //     else {
    //         result= false;
    //     }
    //     return result;
    // }
    //Check password
    this.CheckValidPassword = function (password) {
        let result = false;
        let format = /^(?=.*\d)(?=.*[A-Z])(?=.*[\W_]).*$/;
        if(format.test(password) && (password.length >= 6 && password.length <= 10)) {
           result = true;
        }
        else {
            result= false;
        }
        return result;
    }
    //Check valid Date
    // this.CheckValidDate = function (date) {
    //     let result = false;
    //     let format = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    //     if(format.test(date)) {
    //        result = true;
    //     }
    //     else {
    //         result= false;
    //     }
    //     return result;
    // } 
    this.CheckSalary = function (salary) {
        let result = false;
        if(Number(salary) >= 1000000 && Number(salary) <= 20000000) {
           result = true;
        }
        else {
            result= false;
        }
        return result;
    }
    this.CheckPosition = function (position) {
        let result = false;
        if(position != "0") {
           result = true;
        }
        else {
            result= false;
        }
        return result;
    }
    this.CheckTime = function (time) {
        let result = false;
        if(Number(time) >= 80 && Number(time) <= 200) {
           result = true;
        }
        else {
            result= false;
        }
        return result;
    }
}