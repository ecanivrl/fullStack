import React, { useState, useEffect } from 'react'
import Input from '../form/Input'
import Title from '../ui/Title'
import { useFormik } from "formik";
import { footerSchema } from '../../schema/footer';
import axios from 'axios';
import { toast } from 'react-toastify';


const Footer = () => {  

    const [iconName, setIconName] = useState("fa fa-");
    const [linkAddress, setLinkAddress] = useState("https://");
    const [footerData, setFooterData] = useState([]);
    const [socialMediaLinks, setSocialMediaLinks] = useState([]);

    useEffect(() => {
        const getFooterData = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/footer`
                );
                setFooterData(res.data[0]);
                setSocialMediaLinks(res.data[0].socialMedia);
            } catch (err) {
                console.log(err);
            }
        };
        getFooterData();
    }, []);

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.put(
                `${process.env.NEXT_PUBLIC_API_URL}/footer/${footerData._id}`,
                {
                    location: values.location,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                    desc: values.desc,
                    openingHours: {
                        day: values.day,
                        hour: values.time,
                    },
                    socialMedia: socialMediaLinks,
                }
            );
            if (res.status === 200) {
                toast.success("Footer Güncellendi", {
                    autoClose: 1200
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            enableReinitialize: true,
            initialValues: {
                location: footerData?.location,
                email: footerData?.email,
                phoneNumber: footerData?.phoneNumber,
                desc: footerData?.desc,
                day: footerData?.openingHours?.day,
                time: footerData?.openingHours?.hour,
            },
            onSubmit,
            validationSchema: footerSchema,
        });
    const inputs = [
        {
            id: 1,
            name: "location",
            type: "text",
            placeholder: "Your Location",
            value: values.location,
            errorMessage: errors.location,
            touched: touched.location,
        },
        {
            id: 2,
            name: "email",
            type: "text",
            placeholder: "Your Email",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 3,
            name: "phoneNumber",
            type: "number",
            placeholder: "Your Phone Number",
            value: values.phoneNumber,
            errorMessage: errors.phoneNumber,
            touched: touched.phoneNumber,
        },
        {
            id: 4,
            name: "desc",
            type: "text",
            placeholder: "Your Description",
            value: values.desc,
            errorMessage: errors.desc,
            touched: touched.desc,
        },
        {
            id: 5,
            name: "day",
            type: "text",
            placeholder: "Update Day",
            value: values.day,
            errorMessage: errors.day,
            touched: touched.day,
        },
        {
            id: 6,
            name: "time",
            type: "text",
            placeholder: "Update Time",
            value: values.time,
            errorMessage: errors.time,
            touched: touched.time,
        },
    ];

    const handleCreate = (e) => {
        setSocialMediaLinks([
            ...footerData?.socialMedia,
            {
                icon: iconName,
                link: linkAddress,
            },
        ]);
        setLinkAddress("https://");
        setIconName("fa fa-");
    };

    const Relo = () => {
        setTimeout(() => {
            window.location.reload()
        }, 2000)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className=" flex-1 mb-20 md:-mt-[68px] mt-0">
            <Title className="text-center -mt-2 mx-auto">Account Settings</Title>
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
            <div className="mt-4 gap-4">
                <div className="flex items-center gap-4 mb-4">
                    <Input
                        placeholder="Link Address"
                        onChange={(e) => setLinkAddress(e.target.value)}
                        value={linkAddress}
                    />
                    <Input
                        placeholder="Icon Name fa fa-"
                        defaultValue="fa fa-"
                        onChange={(e) => setIconName(e.target.value)}
                        value={iconName}
                    />

                </div>
                <div className='flex justify-between mt-10 gap-2'>
                    <button
                        className="btn-primary w-[50%]"
                        type="button" onClick={handleCreate}
                    >
                        Add
                    </button>
                    <ul className="flex items-center gap-6">
                        {socialMediaLinks?.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <i className={`${item.icon} text-2xl`}></i>
                                <button
                                    className="text-danger"
                                    onClick={() => {
                                        setIcons((prev) => prev.filter((item, i) => i !== index));
                                    }}
                                    type="button"
                                >
                                    <i className="fa fa-trash text-xl ml-2"></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-full mt-10 flex  justify-center">
                <button onClick={Relo} type="submit" className="cursor-pointer w-full flex items-center
                 justify-center gap-x-3 border-2 text-primary bg-white hover:text-white hover:bg-secondary border-secondary
        px-2 py-1 rounded-2xl transition-all duration-300 ease-in font-bold">
                    Update
                    <i className="fa fa-cogs" aria-hidden="true"></i>
                </button>
            </div>
        </form>
    )
}

export default Footer