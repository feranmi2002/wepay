import React from "react";
interface CustomInputProps {
  label: string;
  hint: string;
  type: string;
  name: string;
  onChange?: (e:any) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  hint,
  name,
  onChange,
  type,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 text-sm font-normal">
      <label className="w-full text-left text-grey ">{label}</label>
      <input
        className="w-full focus:outline-none border-b-[0.5px] border-grey2 focus:border-purple px-3 py-1 text-dark placeholder-grey"
        type={type}
        name={name}
        onChange={onChange}
        placeholder={hint}
      />
    </div>
  );
};

export default CustomInput;
