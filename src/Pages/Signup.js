import Turnstile from "react-turnstile";

function Signup() {
  var isLogged = true;
  var welcomeText = "Welcome";
  var googleSignUp = "Google Signup";
  var googleSignIn = "Google Signin";

  return (
    <>
      <section className="flex flex-col items-center gap-10 md:gap-20">
        <h1 className=" text-2xl  md:text-3xl text-white font-poppins">
          {welcomeText}
        </h1>
        <div className="flex flex-col gap-5">
          <button className="text-[#671FAF] rounded-md shadow-md bg-[#FFF] px-6 py-2 text-sm md:text-lg ">
            {googleSignUp}
          </button>
          <button className="text-[#671FAF] rounded-md shadow-md bg-[#FFF] px-6 py-2 text-sm md:text-lg ">
            {googleSignIn}
          </button>
          <Turnstile/>
        </div>
      </section>
    </>
  );
}
export default Signup;
