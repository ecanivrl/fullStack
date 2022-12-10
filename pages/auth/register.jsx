import React from 'react'
import Title from '../../components/ui/Title'
import Input from "../../components/form/Input"
import { useFormik } from "formik"
import { registerSchema } from '../../schema/register'
import Link from 'next/link'
import axios from 'axios'
import { toast } from "react-toastify";
import { useRouter } from 'next/router'

const Register = () => {
    const { push } = useRouter()
    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
                values
            );
            if (res.status === 200) {
                toast.success("User Created Successfully")
                push("/auth/login");
            } 
        } catch (err) {
            toast.error(err.response.data.message)
            console.log(err);
        }
        actions.resetForm()
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            initialValues: {
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""

            },
            onSubmit,
            validationSchema: registerSchema,
        });


    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Your Password Again",
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword,
        },
    ];


    return (
        <div className='container mx-auto px-3'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center my-20 md:w-1/2 w-full mx-auto'>
                <Title className="text-center mb-6">Register</Title>
                <div className='flex flex-col gap-y-4 w-full'>
                    {inputs.map((input) => (
                        <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur} />
                    ))}
                </div>
                <div className='flex flex-col w-full gap-y-2 mt-6'>
                    <button type="submit" className='btn-primary'><i className='fa fa-sign-in mr-3'></i> REGISTER</button>
                    <button className='btn-github'> <i className='fa fa-github mr-3'></i> GITHUB</button>
                    <Link href="/auth/login">
                        <span className='text-sm text-gray-500 underline   cursor-pointer'>Do you  have a account ?</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register