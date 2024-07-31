function Header(props) {
  const movieWatched = "Movie Watched";
  const addMovie = "Add a Movie";

  return (
    <header className=" flex p-4 md:p-5 justify-between items-center ">
      <h1 className=" text-xl  md:text-2xl text-white font-poppins">
        {movieWatched}
      </h1>
      {props.isAddMovie && (
        <button className="text-[#671FAF] rounded-md shadow-md bg-[#FFF] p-2 text-sm md:text-lg font-poppins font-medium ">
          {addMovie}
        </button>
      )}
    </header>
  );
}
export default Header;
