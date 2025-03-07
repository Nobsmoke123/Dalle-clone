import { FormFieldProps } from "./formfield.types";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe = false,
  handleSurpriseMe,
}: FormFieldProps) => {
  return (
    <div>
      <div className="flex flex-col items-start gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm  font-medium text-gray-900"
        >
          {labelName}
        </label>

        <>
          {isSurpriseMe && (
            <button
              type="button"
              onClick={handleSurpriseMe}
              className="font-semibold text-xs bg-[#ececf1] py-2 px-4 rounded-[5px] text-black"
            >
              Surprise me
            </button>
          )}
        </>

        <input
          type={type}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          required
          className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 border"
        />
      </div>
    </div>
  );
};

export default FormField;
