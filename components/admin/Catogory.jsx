import React, { useState } from 'react'
import Input from '../form/Input'
import Title from '../ui/Title'
import { BsTrash2 } from "react-icons/bs"
import { IoIosAdd } from "react-icons/io"
import { toast } from 'react-toastify'


const Catogory = () => {

    const [inputText, setInputText] = useState("")
    const [categories, setCategories] = useState(["pizza"])



    return (
        <div className='flex-1 sm:pl-5 pl-0'>
            <Title className="text-center mt-2 mx-auto mb-2">Category</Title>
            <div>
                <div className='flex gap-4 flex-1 items-center'>
                    <Input placeholder="Add a new category..." onChange={(e) => setInputText(e.target.value)} value={inputText} />
                    <button className="btn-primary max-w-[115px] min-w-[115px] flex items-center justify-center" onClick={() => {
                        setCategories([...categories, inputText])
                        setInputText("")
                    }}>Add
                        <IoIosAdd className='w-10 h-10' />
                    </button>
                </div>
                {categories.length > 0 ? (
                    <div className='mt-10  max-h-[29vh] overflow-y-auto'>
                        {categories.map((category, index) => (
                            <div key={index} className='flex items-center justify-between mt-4 px-2'>
                                <span className='text-xl text-black
                                font-semibold  max-w-[1140px] text-justify
                                '>{category}</span>
                                <button
                                    className="btn-primary hover:text-white !bg-red-500 hover:bg-red-300 flex items-center gap-x-2"
                                    onClick={() =>
                                        setCategories(categories.filter((cat) => cat !== category))
                                    }
                                >
                                    Delete
                                    <BsTrash2 className='text-white ' />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='text-2xl font-dancing mt-10 text-danger text-center font-bold '>Ürün ekleyin</p>
                )}
            </div>
        </div >
    )
}

export default Catogory