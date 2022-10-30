import React from "react";

const Input = (props) => {
    const {
        type,
        placeholder,
        errorMessage,
        className,
        maxlength,
        ...inputProps
    } = props;
    return (
        <div className="w-full">
            <label className="relative block cursor-text w-full  ">
                <input
                    // value={"bg-white"}
                    type={type}
                  className={`focus:bg-white bg-white h-14 w-full border outline-none px-4 peer pt-3 ${errorMessage ? "border-red-500" : "border-secondary"
                      } ${className}`}
                  required
                  {...inputProps}
              />
              {type === "datetime-local" ? (
                  <span
                      className="absolute -top-2.5 left-0 px-4 text-xs h-full flex items-center peer-focus:h-7 peer-focus:pl-6
        peer-focus:text-xs peer-focus:-top-1 peer-valid:h-7 peer-valid:xs transition-all duration-500 peer-focus:text-gray-400"
                  >
                      {placeholder}
                  </span>
              ) : (
                  <span
                      className="absolute -top-1 left-0 px-4 text-xs h-full flex items-center peer-focus:h-7 peer-focus:pl-6
                peer-focus:text-xs peer-focus:-top-1 peer-valid:h-7 peer-valid:xs transition-all duration-500 peer-focus:text-gray-400"
                  >
                      {placeholder}
                  </span>
              )}
              {<span className="text-xs text-danger">{errorMessage}</span>}
          </label>
      </div>
  );
};

export default Input;
