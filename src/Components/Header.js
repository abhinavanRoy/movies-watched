import CONSTANTS from "../Constants/Constants";
function Header(props) {
  const movieWatched = CONSTANTS.movieWatched;
  const addMovie = CONSTANTS.addAMovie;

  return (
    <header className=" flex p-4 pb-8 md:p-4 justify-between items-center ">
      <h1 className=" text-2xl  md:text-2xl text-white font-poppins">
        {movieWatched}
      </h1>
      {props.isAddMovie && (
        <button className={ `text-[${CONSTANTS.colors.purple}] rounded-md shadow-md bg-[#FFF] p-2 text-md md:text-lg font-poppins font-medium `}>
          {addMovie}
        </button>
      )}
    </header>
  );
}
export default Header;
