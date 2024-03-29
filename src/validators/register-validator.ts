import { checkSchema } from 'express-validator'

export default checkSchema({
    email: {
        errorMessage: 'Email is required !',
        notEmpty: true,
        trim: true,
        isEmail: {
            errorMessage: 'Email should be a valid email !',
        },
    },
    firstName: {
        errorMessage: 'First Name is required!',
        notEmpty: true,
        trim: true,
    },
    lastName: {
        errorMessage: 'Last Name is required!',
        notEmpty: true,
        trim: true,
    },
    password: {
        errorMessage: 'Password is required!',
        notEmpty: true,
        trim: true,
        isLength: {
            errorMessage: 'Password should be at least 8 characters long!',
            options: { min: 8 },
        },
    },
})

// export default [body('email').notEmpty().withMessage('Email is required !')]
