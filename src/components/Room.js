// link
import { Link } from "react-router-dom";
// icons
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = ({ room }) => {
  // destructure room
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className="bg-white drop-shadow-xl group">
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-300 w-full"
          src={image}
          alt=""
        />
      </div>
      <div className="bg-white drop-shadow-md max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base px-3 sm:px-6">
        <div className="grid justify-center gap-1 justify-items-center sm:flex sm:justify-between w-full">
          {/* size */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>
            <div className="flex gap-x-1">
              <div className="text-gray-800">Size</div>
              <div className="text-gray-800">{size}m2</div>
            </div>
          </div>
          {/* room capacity */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsPeople className="text-[18px]" />
            </div>
            <div className="flex gap-x-1">
              <div className="text-gray-800">Max People</div>
              <div className="text-gray-800">{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
      {/* name & description */}
      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="max-w-[269px] mx-auto mb-6 font-medium text-gray-500">{description.slice(0, 54)}</p>
      </div>
      {/* btn */}
      <Link
        to={`/room/${id}`}
        className="rounded-bl-2xl rounded-tr-2xl btn btn-secondary btn-md w-4/5 sm:w-full mx-auto max-w-[240px] mb-[12%] text-center px-3"
      >
        Book now from ${price}
      </Link>
    </div>
  );
};

export default Room;
