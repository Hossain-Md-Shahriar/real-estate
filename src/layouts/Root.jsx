import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto font-poppins">
      <div className="mx-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
