import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must have an Uppercase character");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must have a Lowercase character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("profile updated");
            toast.success("Registered Successfully!");
          })
          .catch();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
        <Helmet>
            <title>GrandLuxe | Register</title>
        </Helmet>
      <Navbar />
      <div className="md:w-1/2 lg:w-1/3 mx-auto mt-28 shadow-lg px-5 py-8 rounded-xl border-2 border-[#3282b857]">
        <h2 className="text-2xl font-medium mb-8 text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister}>
          <div className="form-control mb-2">
            <label className="label">
              <span className="">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control mb-2">
            <label className="label">
              <span className="">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="photo url"
              name="photo"
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
              Register
            </button>
          </div>
        </form>
        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-[#3282B8] font-semibold">
            Login
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

export default Register;
