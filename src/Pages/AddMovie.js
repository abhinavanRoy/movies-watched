import { useState } from "react";
import FormInput from "../Components/FormInput";
import DatePickerInput from "../Components/DatePickerInput";
import CONSTANTS from "../Constants/Constants";

function AddMovie(props) {
  var rememberThisText = CONSTANTS.rememberThis;
  var moviePlaceholderText = CONSTANTS.movieName;
  var genrePlaceholderText = CONSTANTS.genre;
  var watchedOnPlaceHolderText = CONSTANTS.watchedOn;
  var dateFormat = CONSTANTS.ddMMyyyy;
  var datePickerpopperPos = CONSTANTS.top;
  var purple = CONSTANTS.colors.purple;

  const { movieNameValue, movieGenreValue, watchedOnDateValue } = props;

  const [movieName, setMovieName] = useState(
    movieNameValue ? movieNameValue : ""
  );
  const [movieGenre, setMovieGenre] = useState(
    movieGenreValue ? movieGenreValue : ""
  );
  const [watchDate, setWatchDate] = useState(
    watchedOnDateValue ? watchedOnDateValue : null
  );

  const inputList = [
    {
      inputType: CONSTANTS.text,
      isRequired: true,
      placeHolderValue: moviePlaceholderText,
      inputValue: movieName,
      setInputName: setMovieName,
    },
    {
      inputType: CONSTANTS.text,
      isRequired: true,
      placeHolderValue: genrePlaceholderText,
      inputValue: movieGenre,
      setInputName: setMovieGenre,
    },
  ];

  function addMovie(action) {
    if (movieName && movieGenre && watchDate) {
      const data = {
        movie: movieName,
        genre: movieGenre,
        watchedOn: watchDate,
      };
      console.log(data);

      setMovieName("");
      setMovieGenre("");
      setWatchDate(null);
    }
  }

  return (
    <>
      <section className=" flex flex-col items-center  overflow-auto overflow-x-hidden  gap-3">
        <form className="flex flex-col gap-3 max-h-36  items-center">
          {inputList.length &&
            inputList.map((inputFormData, index) => (
              <FormInput
                key={index}
                inputType={inputFormData.inputType}
                isRequired={inputFormData.isRequired}
                placeHolderValue={inputFormData.placeHolderValue}
                type={inputFormData.inputType}
                value={inputFormData.inputValue}
                setInputName={inputFormData.setInputName}
              />
            ))}

          <DatePickerInput
            maxDate={new Date()}
            placeholderText={watchedOnPlaceHolderText}
            dateFormat={dateFormat}
            popperPlacement={datePickerpopperPos}
            selected={watchDate}
            setWatchDate={setWatchDate}
          />
        </form>
        <button
          onClick={() => addMovie()}
          className={` max-w-52 mt-3 bg-white shadow-slate-700 text-md sm:text-xl pl-5 pr-5 pt-2 pb-2 font-poppins font-semibold text-[${purple}] rounded-md shadow-md `}
        >
          {rememberThisText}
        </button>
      </section>
    </>
  );
}

export default AddMovie;
