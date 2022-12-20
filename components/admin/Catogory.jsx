import axios from "axios";
import { useEffect, useState } from "react";
import Input from '../form/Input'
import Title from '../ui/Title'
import { BsTrash2 } from "react-icons/bs"
import { IoIosAdd } from "react-icons/io"
import { toast } from 'react-toastify'


const Catogory = () => {

    const [inputText, setInputText] = useState("")
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/categories`
                );
                setCategories(res?.data);
            } catch (err) {
                console.log(err);
            }
        };
        getCategories();
    }, []);

    const handleCreate = async (e) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/categories`,
                { title: inputText }
            );
            setCategories([...categories, res.data]);
            setInputText("");
            toast.success(`${inputText} eklendi`)
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            if (confirm("Are you sure you want to delete this category?")) {
                const result = await axios.delete(
                    `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`,);
                    console.log(result)
                toast.success(`${result.data.title} silindi`)
                setCategories(categories.filter((cat) => cat._id !== id));
            }

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='flex-1 sm:pl-5 pl-0'>
            <Title className="text-center mt-2 mx-auto mb-2">Category</Title>
            <div>
                <div className='flex gap-4 flex-1 items-center'>
                    <Input placeholder="Add a new category..." onChange={(e) => setInputText(e.target.value)} value={inputText} />
                    <button className="btn-primary max-w-[115px] min-w-[115px] flex items-center justify-center" onClick={handleCreate}>Add
                        <IoIosAdd className='w-10 h-10' />
                    </button>
                </div>
                {categories.length > 0 ? (
                    <div className='mt-10  max-h-[38vh] overflow-y-auto custom-vertical-scrollbar'>
                        {categories.map((category) => (
                            <div key={category._id} className='flex items-center justify-between mt-4 px-2'>
                                <span className='text-xl text-black
                                font-semibold  max-w-[1140px] text-justify
                                '>{category.title}</span>
                                <button
                                    className="btn-primary hover:text-white !bg-red-500 hover:bg-red-300 flex items-center gap-x-2"
                                    onClick={(e) => handleDelete(e, category._id)}
                                >
                                    Delete
                                    <BsTrash2 className='text-white ' />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                        <p className='text-2xl font-dancing mt-10 text-danger text-center font-bold '>Kategori ekleyin</p>
                )}
            </div>
        </div >
    )
}

export default Catogory
