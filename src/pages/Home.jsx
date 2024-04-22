import Navbar from "../components/Navbar";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";
import EstateCard from "../components/EstateCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const estates = useLoaderData();

  return (
    <div className="">
      <Navbar />
      <h2 className="my-24">home</h2>
      {/* estate section */}
      <div className="my-24">
        <h2 className="text-center text-3xl font-semibold mb-4">
          Luxury Living Awaits
        </h2>
        <p className="text-center max-w-[700px] mx-auto mb-10">
          From magnificent beachfront villas to majestic mountain retreats,
          immerse yourself in refined living spaces crafted for the discerning
          connoisseur of luxury living.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            estates.map(estate => <EstateCard key={estate.id} estate={estate} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
