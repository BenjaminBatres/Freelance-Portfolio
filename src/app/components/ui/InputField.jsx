import React from "react";

export default function InputField({ fieldValues, field, handleInputChange, errorMessage }) {
  return (
    <div className="md:w-[50%]">
      <label htmlFor="" className="text-gray-500">
        {field.label}
      </label>
      <input
        type="text"
        value={fieldValues[field.stateKey] || ""}
        onChange={(e) => handleInputChange(field.stateKey, e.target.value)}
        placeholder={field.placeholder}
        className={`placeholder:text-[#08070e] placeholder:font-light placeholder:text-lg font-sans outline-0 text-lg pt-2 pb-3 border-b-2 w-full focus:border-[#8e83ed] ${errorMessage && 'border-pink-500'}`}
      />
    </div>
  );
}
