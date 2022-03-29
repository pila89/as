const isEmpty = require ('./isEmpty');
const validator = require ('validator')

module.exports = function ValidateRegister(data){
   let errors = { };

   
    data.email = !isEmpty(data.email)? data.email : ""
    data.password = !isEmpty(data.password)? data.password : ""
    data.confirm = !isEmpty(data.confirm)? data.confirm : ""
    data.name = !isEmpty(data.name)? data.name : ""

    if (validator.isEmpty(data.name)){
        errors.name = "Required name";
    }
    if (validator.isEmpty(data.name)){
        errors.name = "Required email";
    }
    if (validator.isEmpty(data.name)){
        errors.name = "Required password";
    }
    if (validator.isEmpty(data.name)){
        errors.name = "Required confirm";
    }
    if (validator.isEmpty(data.name)){
        errors.name = "Required name";
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)

    }
}