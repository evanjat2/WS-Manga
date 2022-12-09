const Select = ({ label, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <label className="flex w-full">
      <p className="w-[150px] text-blue font-bold">{label}</p>
      <select
        name="dropdown"
        className="bg-[#FEE6B4] border-2 rounded-lg border-[#6A6A6A] px-4 text-[#6A6A6A]"
        onChange={handleChange}
      >
        <option value={value} selected>
          {value}
        </option>
        <option value="Male">
          Male
        </option>
        <option value="Female">
          Female
        </option>
      </select>
    </label>
  );
};
export default Select;
