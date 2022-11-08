import React from 'react'
import Title from '../../components/ui/Title'
import Input from "../../components/form/Input"
import { useFormik } from "formik"
import { loginSchema } from '../../schema/login'
import Link from 'next/link'

const Login = () => {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1100));
        actions.resetForm();
    };
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            onSubmit,
            validationSchema: loginSchema,
        });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
    ];


    return (
        <div className='container mx-auto px-3'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center my-20 md:w-1/2 w-full mx-auto'>
                <Title className="text-center mb-6">LOGIN</Title>
                <div className='flex flex-col gap-y-4 w-full'>
                    {inputs.map((input) => (
                        <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}
                        />
                    ))}
                </div>
                <div className='flex flex-col w-full gap-y-2 mt-6'>
                    <button className='btn-primary'><i className='fa fa-sign-in mr-3'></i> LOGIN</button>
                    <button className='btn-github'> <i className='fa fa-github mr-3'></i> GITHUB</button>
                    <Link href="/auth/register">
                        <span className='text-sm text-gray-500 underline cursor-pointer'>Do you no have a account ?</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login