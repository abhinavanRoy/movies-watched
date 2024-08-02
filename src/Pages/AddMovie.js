import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function AddMovie(props) {
  var rememberThisText = "Remember This";
  var moviePlaceholderText = "Movie name";
  var genrePlaceholderText = "Genre";
  var watchedOnPlaceHolderText = "Watched On"

  const {movieNameValue,movieGenreValue,watchedOnDateValue} = props


  const [movieName,setMovieName] = useState(movieNameValue ? movieNameValue : '')
  const [movieGenre,setMovieGenre] = useState(movieGenreValue ? movieGenreValue : '')
  const [watchDate, setWatchDate] = useState(watchedOnDateValue ? watchedOnDateValue : null)
  
  function addMovie(action) {
    if(movieName && movieGenre && watchDate) {
    const data = {
      movie: movieName,
      genre: movieGenre,
      watchedOn: watchDate
    }
    console.log(data)

    setMovieName('')
    setMovieGenre('')
    setWatchDate(null)
  }

  }
  
  
  return (
    <>
      <section className=" flex flex-col items-center overflow-auto overflow-x-hidden  gap-3">
        <form className="flex flex-col gap-3  items-center">
          <input
            required
            className="w-60 sm:w-80  outline-none shadow-lg border-none rounded-sm p-2 placeholder:font-poppins placeholder:font-semibold placeholder-[#6D2CAF] placeholder-opacity-60 text-[#6D2CAF] font-poppins font-normal"
            type="text"
            placeholder={moviePlaceholderText}
            value={movieName}
            onChange={(e) => {setMovieName(e.target.value)}}
          />
          <input
            required
            className="w-60 sm:w-80 outline-none shadow-lg border-none rounded-sm p-2 placeholder:font-poppins placeholder:font-semibold placeholder-[#6D2CAF] placeholder-opacity-60 text-[#6D2CAF] font-poppins font-normal"
            type="text"
            placeholder={genrePlaceholderText}
            value={movieGenre}
            onChange={(e) => {setMovieGenre(e.target.value)}}
          />

          <DatePicker maxDate={new Date()} placeholder={watchedOnPlaceHolderText} dateFormat="dd/MM/yyyy" popperPlacement="top" selected={watchDate} onChange={(date) => setWatchDate(date)} className=" w-60 sm:w-80 outline-none shadow-lg border-none rounded-sm p-2 placeholder:font-poppins placeholder:font-semibold placeholder-[#6D2CAF] placeholder-opacity-60 text-[#6D2CAF] font-poppins font-normal"   placeholderText="Watched On" a/>
        </form>
        <button  onClick={() => addMovie()} className="  max-w-52 mt-3 bg-white shadow-slate-700 text-md sm:text-xl pl-5 pr-5 pt-2 pb-2 font-poppins font-semibold text-[#671FAF] rounded-md shadow-md ">
          {rememberThisText}
        </button>
      </section>
    </>
  );
}

export default AddMovie;
