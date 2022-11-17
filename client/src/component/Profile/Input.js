const Input = ({ label, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <label className="flex w-full">
      <p className="w-[150px] text-blue font-bold">{label}</p>
      <input
        type="text"
        name="name"
        className="bg-[#FEE6B4] border-2 rounded-lg border-[#6A6A6A] px-4 text-[#6A6A6A]"
        value={value}
        placeholder={value}
        onChange={handleChange}
      />
    </label>
  );
};
export default Input;
