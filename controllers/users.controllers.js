
const ValidateRegister = require ('../validation/Register')
const usersModels = require('../models/users.models')

const Register = async(req,res)=>{
    const {errors,isValid}= ValidateRegister(req.body)

    try {
        if (!isValid) {
            res.status(404).json(errors)
            
        } else {
        req.body.role="USER"
        await usersModels.create(req.body)
        res.status(200).json({message:"success"})}

    } catch (error) {

       
        res.status(404).json(error.message)


    }



    module.exports= Register
    

}



