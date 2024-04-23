import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const EstateDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const estate = estates.find((estate) => estate.id == id);
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = estate;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-12 mt-32">
        <div className="bg-[#1313130c] md:h-[500px] rounded-2xl flex justify-center items-center overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={image}
            alt={estate_title}
          />
        </div>
        <div className="w-full">
          <h2 className="text-[40px] font-bold mb-4">{estate_title}</h2>
          <p className="text-[#131313cc]text-xl font-medium pb-4  border-b-2 border-[#13131326]">
            Segment: {segment_name}
          </p>
          <p className="text-base/[26px] text-[#131313b4] py-6">
            <span className="font-bold text-black">Description: </span>
            {description}
          </p>
          <div className="flex gap-4 items-center pb-6 border-b-2 border-[#13131326] mb-6">
            <p className="font-bold">Facilities:</p>
            <div className="flex flex-wrap gap-3">
              {facilities.map((facility, index) => (
                <p
                  key={index}
                  className="bg-[#e0a37a] py-[7px] px-4 rounded-full text-white text-base font-semibold"
                >
                  {facility}
                </p>
              ))}
            </div>
          </div>
          <div className="space-y-3 mb-8">
            <div className="flex gap-10">
              <p className="text-[#131313c0] max-w-[150px] flex-grow">Price:</p>
              <p className="font-bold">{price}</p>
            </div>
            <div className="flex gap-10">
              <p className="text-[#131313c0] max-w-[150px] flex-grow">
                Status:
              </p>
              <p className="font-bold">{status}</p>
            </div>
            <div className="flex gap-10">
              <p className="text-[#131313c0] max-w-[150px] flex-grow">Area:</p>
              <p className="font-bold">{area}</p>
            </div>
            <div className="flex gap-10">
              <p className="text-[#131313c0] max-w-[150px] flex-grow">
                Location:
              </p>
              <p className="font-bold">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
