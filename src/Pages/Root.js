import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import AddMovie from "./AddMovie";

function Root() {
  var isLogged = true;
  return (
<div className="bg-[#671FAF] fixed top-0 left-0 w-full h-full flex flex-col justify-between">
    <Header isAddMovie={isLogged}/>
    {/* <Signup/> */}
    {/* <Dashboard/> */}
    <AddMovie />
    <Footer/>
</div>
  );
}
export default Root;