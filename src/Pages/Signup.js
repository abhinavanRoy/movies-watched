import Turnstile from "react-turnstile";
import CONSTANTS from "../Constants/Constants";

function Signup() {
  var isLogged = true;
  var welcomeText = CONSTANTS.wlecome;
  var googleSignUp = CONSTANTS.googleSignUp;
  var googleSignIn = CONSTANTS.googleSignIn;

  return (
    <>
      <section className="flex flex-col items-center gap-10 md:gap-20">
        <h1 className=" text-3xl  md:text-3xl text-white font-poppins">
          {welcomeText}
        </h1>
        <div className="flex flex-col gap-5">
          <button className={ `text-[${CONSTANTS.colors.purple}] font-poppins font-medium rounded-md shadow-md bg-[#FFF] px-6 py-2 text-md md:text-xl`}>
            {googleSignUp}
          </button>
          <button className={` text-[${CONSTANTS.colors.purple}] font-poppins font-medium rounded-md shadow-md bg-[#FFF] px-6 py-2 text-md md:text-xl `}>
            {googleSignIn}
          </button>
          {/* <Turnstile/> */}
        </div>
      </section>
    </>
  );
}
export default Signup;
