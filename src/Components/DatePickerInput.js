import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CONSTANTS from "../Constants/Constants";
function DatePickerInput(props) {
  const {
    maxDate = new Date(),
    dateFormat = CONSTANTS.ddMMyyyy,
    popperPlacement = CONSTANTS.top,
    selected = null,
    placeholderText = "",
    setWatchDate,
  } = props;

  return (
    <>
      <DatePicker
        maxDate={maxDate}
        placeholderText={placeholderText}
        dateFormat={dateFormat}
        popperPlacement={popperPlacement}
        selected={selected}
        onChange={(date) => {
          setWatchDate(date);
        }}
        className= { ` w-60 sm:w-80 outline-none shadow-lg border-none rounded-sm p-2 placeholder:font-poppins placeholder:font-semibold placeholder-[${CONSTANTS.colors.purple}] placeholder-opacity-60 text-[${CONSTANTS.colors.purple}] font-poppins font-normal `}
      />
    </>
  );
}
export default DatePickerInput;
