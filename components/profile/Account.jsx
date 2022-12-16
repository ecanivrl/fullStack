import React, { useEffect } from 'react'
import Input from '../form/Input'
import Title from '../ui/Title'
import { useFormik } from "formik";
import { profileSchema } from "../../schema/profile";
import axios from 'axios';
import { toast } from "react-toastify";
import { useRouter } from "next/router";


const Account = ({ user }) => {
    const { push } = useRouter()

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values)
            toast.success("Hesap Bilgileri güncelleniyor")
            const refresh = setTimeout(ref, 1000)
            function ref(
            ) {
                window.location.reload()
            }
        } catch (err) {
            console.log(err)
        }
        actions.resetForm();
    };



    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            enableReinitialize: true,
            initialValues: {
                fullName: user?.fullName,
                phoneNumber: user?.phoneNumber,
                email: user?.email,
                address: user?.address,
                job: user?.job,
                bio: user?.bio,
            },
            onSubmit,
            validationSchema: profileSchema,
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
            name: "phoneNumber",
            type: "number",
            placeholder: "Your Phone Number",
            value: values.phoneNumber,
            errorMessage: errors.phoneNumber,
            touched: touched.phoneNumber,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 4,
            name: "address",
            type: "text",
            placeholder: "Your Address",
            value: values.address,
            errorMessage: errors.address,
            touched: touched.address,
        },
        {
            id: 5,
            name: "job",
            type: "text",
            placeholder: "Your Job",
            value: values.job,
            errorMessage: errors.job,
            touched: touched.job,
        },
        {
            id: 6,
            name: "bio",
            type: "text",
            placeholder: "Your Bio",
            value: values.bio,
            errorMessage: errors.bio,
            touched: touched.bio,
        },
    ];


    return (
        <form
            onSubmit={handleSubmit}
            className="sm:p-5 p-0 flex-1 mb-5">
            <Title className="text-center mt-2 mx-auto">Account Settings</Title>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
                {inputs.map((input) => (
                    <Input key={input.id} {...input} onBlur={handleBlur} onChange={handleChange}
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

export default Account