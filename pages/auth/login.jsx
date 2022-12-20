import Title from '../../components/ui/Title'
import Input from "../../components/form/Input"
import { useFormik } from "formik"
import { loginSchema } from '../../schema/login'
import Link from 'next/link'
import { signIn, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Login = ({ user }) => {

    const { data: session } = useSession()
    const { push } = useRouter();
    const [currentUser, setCurrentUser] = useState()

    const onSubmit = async (values, actions) => {
        const { email, password } = values;
        let options = { redirect: false, email, password };
        try {
            const res = await signIn("credentials", options)
            actions.resetForm()
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
                setCurrentUser(
                    res.data?.find((user) => user.email === session?.user?.email)
                );
                setTimeout(() => {
                    session && push("/profile/" + currentUser?._id);
                }, 1500)
            } catch (err) {
                console.log(err); 
            }
        };
        getUser();
    }, [session, push, currentUser]);

    useEffect(() => {
        if (session) {
            toast.success("Giriş yapılıyor")
        }
    }, [session])

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
                    <button type='submit' className='btn-primary'><i className='fa fa-sign-in mr-3'></i> LOGIN</button>
                    <button type="button" className='btn-github'
                        onClick={() => signIn("github")}
                    > <i className='fa fa-github mr-3' ></i> GITHUB</button>
                    <Link href="/auth/register">
                        <span className='text-sm text-gray-500 underline cursor-pointer'>Do you no have a account ?</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export async function getServerSideProps({ req }) {

    const session = await getSession({ req })

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
    const user = res.data?.find((user) => user.email === session?.user.email);
    if (session && user) {
        return {
            redirect: {
                destination: "/profile/" + user._id,
                permanent: false
            }

        }
    }

    return {
        props: {
            user: user ? user : null
        }
    }
}


export default Login