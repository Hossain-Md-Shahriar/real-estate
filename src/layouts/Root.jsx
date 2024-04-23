import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto font-poppins">
        <div className="mx-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
