import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function Root() {
  var isLogged = true;
  return (
<div className="bg-[#671FAF] h-screen flex flex-col justify-between">
    <Header isAddMovie={isLogged}/>
    {/* <Signup/> */}
    <Dashboard/>
    <Footer/>
</div>
  );
}
export default Root;