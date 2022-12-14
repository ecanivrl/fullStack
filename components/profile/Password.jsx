import React, { useEffect } from "react";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { useFormik } from "formik";
import { newPasswordSchema } from "../../schema/newPassword";
import { useRouter } from "next/router"
import axios from "axios";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";


const Password = ({ user }) => {
    const { data: session } = useSession()
    const { push } = useRouter()

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values);
            if (res.status === 200) {
                toast.success("Şifre güncellendi")
            }
        actions.resetForm();
        } catch (err) {
            console.log(err);
        }
    };




    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            enableReinitialize: true,
            initialValues: {
                password: "",
                confirmPassword: "",
            },
            onSubmit,
            validationSchema: newPasswordSchema,
        });
    const inputs = [
        {
            id: 1,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
        {
            id: 2,
            name: "confirmPassword",
            type: "password",
            placeholder: "Your Confirm Password",
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword,
        },
    ];

    return (
        <form
            onSubmit={handleSubmit}
            className="sm:p-5 p-0 flex-1 mb-5">
            <Title className="text-center sm:mt-2 mx-auto mt-5">Password</Title>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
                {inputs.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                ))}
            </div>
            <div className="w-full mt-10 flex  justify-center">
                <button type="submit" className="cursor-pointer w-full flex items-center
                 justify-center gap-x-3 border-2 text-primary bg-white hover:text-white hover:bg-secondary border-secondary
        px-2 py-1 rounded-2xl transition-all duration-300 ease-in font-bold">
                    Update
                    <i className="fa fa-cogs" aria-hidden="true"></i>

                </button>
            </div>
        </form>
    )
}

export default Password