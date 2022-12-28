import Image from "next/image";
import React from "react";

const CustomerItem = ({ imgSrc }) => {
    return (
        <div className="mt-5 mx-4">
            <div className="p-6 bg-primary text-white rounded-md">
                <div>
                    <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab
                        culpa necessitatibus vitae recusandae. Delectus, laborum sunt.
                        Aspernatur nulla, labore eveniet ea, nisi fugiat deserunt, error cum
                        velit nam laboriosam?
                    </p>
                    <div className="flex flex-col mt-4">
                        <span className="text-lg font-semibold">Moana Michel</span>
                        <span className="text-[15px]">magna aliqua</span>
                    </div>
                </div>
            </div>
            <div className="toolTip hover:scale-105">
                <Image
                    src={imgSrc}
                    alt="user"
                    className="rounded-full"
                    objectFit="contain"
                    layout="fill"
                />
            </div>
        </div>
    );
};

export default CustomerItem;
