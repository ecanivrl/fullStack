import axios from 'axios';
import Image from 'next/image'

const Index = ({ order }) => {
    return (
        <div className="">
            <div className='flex justify-center items-center flex-col p-10 min-h-[calc(100vh_-_373px)] min-w-[1000px]z'>
                <div className='flex flex-1 items-center  w-full p-2 overflow-x-auto custom-vertical-scrollbar'>
                    <table className='w-full text-sm text-center text-white'>
                        <thead className='text-xs text-white bg-gray-700 uppercase border-white border-b-8'>
                            <tr>
                                <th scope='col' className='py-3 px-6 hover:text-white'>ORDER ID</th>
                                <th scope='col' className='py-3 px-6 hover:text-white'>CUSTOMER</th>
                                <th scope='col' className='py-3 px-6 hover:text-white'>ADDRESS</th>
                                <th scope='col' className='py-3 px-6 hover:text-white'>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-primary border-gray-700 hover:bg-secondary transition-all'>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                    {order?._id.substring(0, 5)}...
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{order?.customer}</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{order?.address}</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>${order?.total}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex sm:justify-between justify-center items-center w-full bg-primary  p-3 mt-10 flex-wrap gap-x-3 gap-y-10 mx-auto'>
                    <div className='bg-secondary w-36 h-36 border-2 border-primary flex flex-col justify-center items-center '>
                        <Image src="/images/paid.png" alt="paid" width={30} height={30} objectFit="contain" />
                        <span>PAYMENT</span>
                    </div>
                    <div className='bg-secondary w-36 h-36 border-2 border-primary flex flex-col justify-center items-center '>
                        <Image src="/images/bake.png" alt="paid" width={30} height={30} objectFit="contain" />
                        <span>PREPARİNG</span>
                    </div>
                    <div className='bg-secondary w-36 h-36 border-2 border-primary flex flex-col justify-center items-center animate-pulse'>
                        <Image src="/images/bike.png" alt="paid" width={30} height={30} objectFit="contain" />
                        <span>ONE THE WAY</span>
                    </div>
                    <div className='bg-secondary w-36 h-36 border-2 border-primary flex flex-col justify-center items-center '>
                        <Image src="/images/delivered.png" alt="paid" width={50} height={90} objectFit="contain" />
                        <span>DELIVERED</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/${params.id}`
    );

    return {
        props: {
            order: res.data ? res.data : null,
        },
    };
};


export default Index