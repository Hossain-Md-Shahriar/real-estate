import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("profile updated");
        toast.success("Profile Updated Successfully!");
      })
      .catch();
  };
  return (
    <div>
      <Navbar />
      <div className="md:w-1/2 lg:w-1/3 mx-auto mt-36 shadow-lg px-5 py-8 rounded-xl border-2 border-[#3282b857]">
        <h2 className="text-2xl font-medium mb-8 text-center">
          Update Your Profile
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="form-control mb-2">
            <label className="label">
              <span className="">Name</span>
            </label>
            <input
              type="text"
              placeholder={user.displayName}
              name="name"
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
              placeholder={user.photoURL}
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-2">
            <label className="label">
              <span className="">Email</span>
            </label>
            <p className="p-3 border rounded-lg border-[#c4c3c3ba]">
              {user.email}
            </p>
          </div>
          <div className="form-control mt-7">
            <button className="btn btn-neutral bg-[#0F4C75] hover:bg-[#0a3049] text-white">
              Save Changes
            </button>
          </div>
        </form>
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

export default UpdateProfile;
