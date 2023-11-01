import { useState } from "react";
// datepicker
import DatePicker from "react-datepicker";
// datepicker css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
// icons
import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);
  return (
    <div className="relative flex items-center justify-end h-full font-semibold">
      {/* icon */}
      <div className="absolute z-10 pr-8">
        <BsCalendar className="text-accent text-base" />
      </div>
      <DatePicker
        className="w-full h-full"
        selected={startDate}
        placeholderText="Check in"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
 