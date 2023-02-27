import Joi from "joi";

export const signUpValidator= {
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .messages({
          "string.pattern.base": `Password should be between 3 to 30 characters and contain letters or numbers only`,
          "string.empty": `Password cannot be empty`,
          "any.required": `Password is required`,
        }),
        
        cpass: Joi.string().required().valid(Joi.ref('password')).messages({ 'any.only': 'passwords do not match' }),
        age: Joi.number().optional().min(12).max(100),
    })
}

export const loginValidator= {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })
}

export const getOwnerProfileValidator= {
    headers: Joi.object({
        token: Joi.string().required(),
    })
}
