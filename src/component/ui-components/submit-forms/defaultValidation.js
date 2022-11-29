import * as yup from 'yup';


export const singleFileSubmit = yup.object({
    file: yup.mixed().required('File is required')
});
export const single_id = yup.object({
    id: yup.number('Enter ID').required('ID is required')
});
export const single_date = yup.object({
    date: yup.date('Enter Date').required('Date is required')
});
export const single_name = yup.object({
    name: yup.string('Enter Name').required('Name is required')
});
export const default_opt = yup.object({
    name: yup.string('Enter Name'),
});

export const id_name_val = yup.object({
    id: yup.number('Enter ID').required('ID is required'),
    name: yup.string('Enter name').required('name is required')
});



export const user = yup.object({
    name: yup.string('Enter name').required('name is required'),
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: yup.string('Enter password').required('password is required')
});

export const user_add = yup.object({
    name: yup.string('Enter name').required('name is required'),
    password: yup.string('Enter password').required('password is required')
});
