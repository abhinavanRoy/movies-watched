import CONSTANTS from "../Constants/Constants";
function FormInput(props) {
  var textType = CONSTANTS.text;
  const {
    inputType = CONSTANTS.text,
    isRequired = false,
    placeHolderValue = "",
    value = "",
    setInputName
  } = props;

  return (
    <>
      {inputType === textType && (
        <input
          required={isRequired}
          className="w-60 sm:w-80  outline-none shadow-lg border-none rounded-sm p-2 placeholder:font-poppins placeholder:font-semibold placeholder-[#6D2CAF] placeholder-opacity-60 text-[#6D2CAF] font-poppins font-normal"
          type={inputType}
          placeholder={placeHolderValue}
          value={value}
          onChange={(e) => {setInputName(e.target.value)}}
        />
      )}
    </>
  );
}

export default FormInput;
