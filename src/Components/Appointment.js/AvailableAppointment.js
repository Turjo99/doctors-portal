import { format } from "date-fns";
import { da } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import AppointmentModal from "./AppointmentModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selected }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState("");
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <div className="my-10">
      {console.log(appointmentOptions)}
      <p className="text-center text-primary font-bold my-10">
        Available Appointments on {format(selected, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>

      <AppointmentModal treatment={treatment}></AppointmentModal>
    </div>
  );
};

export default AvailableAppointment;
