import MovieCard from "../Components/MovieCard";
function Dashboard() {
  var mockData = [
    {
      id: 123321,
      movieName:
        "Mission immposible dasdasdasijdoasihjdfioashjdfoaipshjfaiopshjfiopashfjoaishfaosihfoaisfhaoisfhadosihfosdihfo;disfhodisfhjoiwshfjioewhjfioedshou ",
      genre: "Thriller",
      watchedOn: "09-02-2023",
      canEdit: true,
      canDelete: true,
    }
  ];
  var notWatchedText = "You haven't watched any movies yet!";
  return (
    <section className=" flex flex-col items-center   overflow-auto overflow-x-hidden gap-3">
      {/* <h1 className="font-poppins text-white text-wrap p-6 text-xl md:text-2xl">{notWatchedText}</h1>  */}
      {mockData &&
        mockData.length &&
        mockData.map((movieData) => (
          <MovieCard key={movieData.id} movieData={movieData} />
        ))}
    </section>
  );
}
export default Dashboard;