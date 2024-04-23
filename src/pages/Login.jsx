import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        toast.success("Logged In Successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Email or Password Doesn't Match");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged In Successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged In Successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>GrandLuxe | Login</title>
      </Helmet>
      <Navbar />
      <div className="md:w-1/2 lg:w-1/3 mx-auto mt-32 shadow-lg px-5 py-8 rounded-xl border-2 border-[#3282b857]">
        <h2 className="text-2xl font-medium mb-8 text-center">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin}>
          <div className="form-control mb-2">
            <label className="label">
              <span className="">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-7">
            <button className="btn btn-neutral bg-[#0F4C75] hover:bg-[#0a3049] text-white">
              Login
            </button>
          </div>
        </form>
        <p className="py-3 text-center text-sm text-[#797979]">
          Or continue with,
        </p>
        <div className="flex justify-center gap-5">
          <div
            onClick={handleGoogleSignIn}
            className="cursor-pointer rounded-full border-2 flex justify-center items-center size-10 hover:shadow-lg transition-all duration-150"
          >
            <img className="w-7" src={google} alt="" />
          </div>
          <div
            onClick={handleGithubSignIn}
            className="cursor-pointer rounded-full border-2 flex justify-center items-center size-10 hover:shadow-lg transition-all duration-150"
          >
            <img className="w-7" src={github} alt="" />
          </div>
        </div>
        <p className="text-center pt-3 border-t mt-5">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#3282B8] font-semibold">
            Register
          </Link>
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default Login;
