const RadioButton = ({ name, type, value, handleChange, checked }) => {
  return (
    <>
      <label className={`radio-button ${checked ? "radio-active" : ""}`}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          checked={checked}
        />
        {value}
      </label>
    </>
  );
};

export default RadioButton;
