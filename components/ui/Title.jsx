import React from "react";

const Title = ({ children, className }) => {
    return (
        <div className={`${className} font-dancing text-[40px] `}>{children}</div>
    );
};

export default Title;
