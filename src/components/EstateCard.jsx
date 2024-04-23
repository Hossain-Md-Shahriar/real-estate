import { SlSizeFullscreen } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const {
    id,
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
    <div className="p-[14px] border-2 border-[#3282b857] rounded-2xl shadow-lg">
      <div className="relative w-full h-[230px] rounded-xl overflow-hidden">
        <img
          className="size-full object-cover object-center"
          src={image}
          alt={estate_title}
        />
        <p className="bg-[#db9160e3] text-base text-white rounded-md px-2 font-medium z-10 absolute top-2 right-2">
          {status}
        </p>
      </div>
      <h3 className="text-[22px] font-semibold my-2">{estate_title}</h3>
      <p className="my-2 text-2xl font-bold">{price}</p>
      <p className="text-sm mb-2 text-gray-500">Segment: {segment_name}</p>
      <p className="truncate">{description}</p>
      <div className="py-3 my-3 border-t-2 border-b-2">
        <h3 className="text-lg font-semibold">Facilities:</h3>
        <ul className="list-disc list-inside text-gray-600 pl-3">
          {facilities.map((facility) => (
            <li>{facility}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-around gap-3">
        <div className="flex gap-2 items-center">
          <SlSizeFullscreen />
          <p>{area}</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaMapMarkerAlt />
          <p>{location}</p>
        </div>
      </div>
      <Link to={`/estate/${id}`}>
        <button className="bg-[#2c76a8] hover:bg-[#1c5276] transition-all duration-150 text-white font-medium text-lg w-full rounded-xl p-3 mt-4">
          View Property
        </button>
      </Link>
    </div>
  );
};

export default EstateCard;
