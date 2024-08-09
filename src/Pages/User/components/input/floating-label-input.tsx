import React from 'react';


const Input = ({ name, label, type, id, value , onChange, onBlur , htmlFor, errorstyle }) => {
  return (
    
    <div className="relative w-full h-fit p-0  ">
      <input
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        
        className=" peer p-3 w-full border-b-[0.5px] border-dark outline-none focus:border-purple text-sm text-grey hover:border-purple/30 transition"
        placeholder=" "
      />
      
      <label
        htmlFor={htmlFor}
        className="absolute left-0 text-light_dark peer-placeholder-shown:text-grey peer-placeholder-shown:left-3 peer-placeholder-shown:text-sm text-xs transform -translate-y-2 peer-placeholder-shown:translate-y-4 peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:left-0  peer-focus:text-purple transition-all duration-200 ease-in-out"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
