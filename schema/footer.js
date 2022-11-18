import * as Yup from "yup";

export const footerSchema = Yup.object({
    location: Yup.string().required(" location is required and keyfaxeye."),
    phoneNumber: Yup.string().required("Phone Number is required.")
        .min(10, "Phone number must be at least 10 characters."),
    email: Yup.string().required("Email is required.").email("Email is invalid."),
    desc: Yup.string().required(" Description is required and keyfaxeye."),
    day: Yup.string().required("Day is required."),
    time: Yup.string().required("time is required."),
});