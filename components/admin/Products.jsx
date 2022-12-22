import Image from 'next/image'
import Title from '../ui/Title'
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Products = () => {

    const [products, setProducts] = useState([]);

    const handleDelete = async (id) => {
        try {
            if (confirm("Are you sure you want to delete this product?")) {
                const res = await axios.delete(
                    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
                );
                if (res.status === 200) {
                    toast.success(`${res.data.title} deleted`);
                    getProducts();
                    // setTimeout(() => {
                    //     window.location.reload()
                    // }, 1300)
                }
            }
        } catch (err) {
            console.log(err);
        }
    };

    const getProducts = async () => {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/products`
            );
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className='mx-auto w-full overflow-auto custom-vertical-scrollbar'>
            <Title className="text-center mt-2 mx-auto mb-2">Products</Title>
            <div className='w-full max-h-[360px] overflow-auto custom-vertical-scrollbar px-2'>
                <table className=' text-sm text-center text-gray-500 mx-auto rounded-t-2xl w-[97%] m-5'>
                    <thead className='sticky top-0 z-10 text-xs text-primary bg-secondary uppercase border-white border-b-8 '>
                    <tr>
                        <th scope='col' className='py-3 px-6 hover:text-white'>IMAGE</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>ID</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>TİTLE</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>PRİCE</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                        {products.length > 0 && products.map((product) => (
                            <tr key={product._id} className='bg-primary hover:bg-secondary transition-all border-b-white border-b-2'>
                                <td className='py-4 px-6 font-medium whitespace-nowrap relative hover:text-white flex items-center gap-x-1 justify-center'>
                                    <Image src={product.img} alt={product.title} height={50} width={50} />
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{product._id.substring(0, 6)}...</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{product.title}</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>${product.prices[0]}</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    <button className='btn-primary !bg-danger'
                                        onClick={() => handleDelete(product._id)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Products