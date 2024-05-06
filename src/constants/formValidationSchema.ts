import * as yup from 'yup';

export const authValidationSchema = (isSignUp: boolean) => {
    return yup.object({
        username: yup
            .string()
            .min(3, 'Username should be of minimum 3 characters length')
            .required('Username is required'),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        confirmPassword: isSignUp
            ? yup
                  .string()
                  .oneOf([yup.ref('password')], 'Passwords must match')
                  .required('Confirm password is required')
            : yup.string().notRequired(),
    });
};
