import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

import React, { useEffect, useState } from "react";
import AppointmentModal from "./AppointmentModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selected }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentOption"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentOption`);
      const data = await res.json();
      return data;
    },
  });
  console.log(selected);
  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOption")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
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
      {treatment && (
        <AppointmentModal
          selected={selected}
          treatment={treatment}
          setTreatment={setTreatment}
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
