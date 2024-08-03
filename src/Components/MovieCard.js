import RowItem from "./RowItem";
import CONSTANTS from "../Constants/Constants";

function MovieCard(props) {
  var movieText = CONSTANTS.movie;
  var genreText = CONSTANTS.genre;
  var watchedOnText = CONSTANTS.watchedOn;
  var editText = CONSTANTS.edit;
  var deleteText = CONSTANTS.delete;

  return (
    <>
      <div className="  w-[770px] gap-10  bg-white  md:px-5 hidden md:flex md:justify-between md:py-4 shadow-md rounded-md ">
        <RowItem titleText={movieText} value={props.movieData.movieName} />
        <RowItem titleText={genreText} value={props.movieData.genre} />
        <RowItem titleText={watchedOnText} value={props.movieData.watchedOn} />
        <RowItem titleText={editText} value={props.movieData.canEdit} />
        <RowItem titleText={deleteText} value={props.movieData.canDelete} />
      </div>

      <div className=" flex md:hidden flex-col gap-2  bg-white p-4 justify-center  shadow-md rounded-md w-max ">
        <div className="max-w-xs">
          <h1 className="overflow-hidden text-ellipsis whitespace-nowrap font-poppins font-semibold text-black">
            {movieText} <span>:</span>{" "}
            <span className= { ` text-[${CONSTANTS.colors.purple}] font-medium `}>
              {props.movieData.movieName}
            </span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold text-black">
          {" "}
          {genreText} <span>:</span>{" "}
          <span className={` text-[${CONSTANTS.colors.purple}] font-medium `}>
            {props.movieData.genre}
          </span>{" "}
        </h1>
        <h1 className="font-poppins font-semibold text-black">
          {watchedOnText} <span>:</span>{" "}
          <span className={ ` text-[${CONSTANTS.colors.purple}] font-medium ` }>
            {props.movieData.watchedOn}
          </span>{" "}
        </h1>
        <div className="flex gap-5 justify-center">
          <button className= { ` rounded-md shadow-md bg-[${CONSTANTS.colors.purple}] text-white font-poppins font-semibold py-1 px-3 `}>
            {editText}
          </button>
          <button className= { ` rounded-md shadow-md bg-[${CONSTANTS.colors.purple}] text-white font-poppins font-semibold py-1 px-3 ` }>
            {deleteText}
          </button>
        </div>
      </div>
    </>
  );
}
export default MovieCard;
