import MovieCard from "../Components/MovieCard";
import CONSTANTS from "../Constants/Constants";
function Dashboard() {
  var movieList = [{
    id: 123321,
    movieName:
      "Mission immposible dasdasdasijdoasihjdfioashjdfoaipshjfaiopshjfiopashfjoaishfaosihfoaisfhaoisfhadosihfosdihfo;disfhodisfhjoiwshfjioewhjfioedshou ",
    genre: "Thriller",
    watchedOn: "09-02-2023",
    canEdit: true,
    canDelete: true,
  }];
  var notWatchedText = CONSTANTS.noMovies;

  return (
    <section className=" flex flex-col items-center   overflow-auto overflow-x-hidden gap-3">
      {movieList && movieList.length ? 
        movieList.map((movieData) => (
          <MovieCard key={movieData.id} movieData={movieData} />
        ))
       : 
        <h1 className="font-poppins text-white text-wrap p-6 text-xl md:text-2xl">
          {notWatchedText}
        </h1>
      }
    </section>
  );
}
export default Dashboard;
