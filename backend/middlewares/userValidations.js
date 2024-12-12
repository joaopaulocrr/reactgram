const { body } = require("express-validator")

const userCreateValidation = () => {
    return [
        body("name")
            .isString().withMessage("O nome é obrigatório.")
            .isLength({ min: 3 }).withMessage("O nome precisa ter  mínimo três caracteres."),

        body("email")
            .isString().withMessage("O e-mail é obrigatório.")
            .isEmail().withMessage("Insira um e-mail válido."),

        body("password")
            .isString().withMessage("A senha é obrigatório.")
            .isLength({ min: 5 }).withMessage("A senha precisa ter  mínimo cinco caracteres."),

        body("confirmPassword")
            .isString().withMessage("A confirmação de senha é obrigatório.")
            .custom((value, {req}) => {
                if(value !== req.body.password) {
                    throw new Error("As senhas não são iguais.")
                    
                }
                return 
            })
    ]
}

module.exports = {
    userCreateValidation,
}