import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ selected }) => {
  return (
    <div className="my-10">
      <p className="text-center text-primary font-bold">
        Available Appointments on {format(selected, "PP")}
      </p>
    </div>
  );
};

export default AvailableAppointment;
