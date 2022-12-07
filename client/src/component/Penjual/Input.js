const Input = ({ label, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <label className="flex w-full mt-8  ">
      {label !== "Details" && (
        <input
          type="text"
          name="name"
          className="bg-[#FEE6B4] border-2 rounded-lg border-[#BEB5B5] p-4 text-[#6A6A6A] bg-[#E2E2E2] w-full"
          value={value}
          onChange={handleChange}
          placeholder={label}
        />
      )}
      {label == "Details" && (
        <textarea
        type="text"
        name="name"
        className="bg-[#FEE6B4] border-2 rounded-lg border-[#BEB5B5] p-4 text-[#6A6A6A] bg-[#E2E2E2] w-full"
        value={value}
        onChange={handleChange}
        placeholder={label}
      />
      )}
    </label>
  );
};
export default Input;
