const Input = ({ placeHodler, input, value, onChange, defaultValue }) => {
  return (
    <input
      placeholder={placeHodler}
      autoFocus
      className="input"
      ref={input}
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};

export default Input;
