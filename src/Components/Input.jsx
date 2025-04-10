/* eslint-disable react/prop-types */
const Input = ({ handleChange, hint, value }) => {
  return (
    <div className="relative m-auto my-5 w-[250px]">
      {hint && (
        <label
          htmlFor="input"
          className="absolute left-[7px] top-0 bottom-0 z-1 opacity-75 flex items-center select-none text-red-200"
        >
          {hint}
        </label>
      )}
      <input
        type="text"
        id="input"
        onChange={handleChange}
        value={value}
        placeholder="Search City"
        className="border pl-[6px] z-2 w-full rounded outline-0 text-gray-800"
      />
    </div>
  );
};

export default Input;
