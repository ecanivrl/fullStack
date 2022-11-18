import React from "react";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";
import { useFormik } from "formik";
import { adminSchema } from "../../schema/admin";
import Link from "next/link";


// ADMİN LOGİN
const Login = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1100));
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            initialValues: {
                username: "",
                password: "",
            },
            onSubmit,
            validationSchema: adminSchema,
        });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Your username",
            value: values.username,
            errorMessage: errors.username,
            touched: touched.username,
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
        <div className="container mx-auto px-3">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
            >
                <Title className="text-center mb-6">Admin Login</Title>
                <div className="flex flex-col gap-y-4 w-full">
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    ))}
                </div>
                <div className="flex flex-col w-full gap-y-2 mt-6">
                    <button className="btn-primary bg-secondary  !text-white">
                        <i className="fa fa-sign-in mr-3 hover:-rotate-90 text-xl"></i>{" "}
                        LOGIN
                    </button>
                    <Link href="/">
                        <span className="text-sm text-gray-500 underline cursor-pointer">
                            Go to Home Page
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
