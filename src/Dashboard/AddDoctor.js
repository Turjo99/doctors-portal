import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../Components/Shared/Loading";

const AddDoctor = () => {
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddDoctor = (data) => {
    console.log(data);
  };
  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-3xl">Add a doctor</h3>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === "required" && (
            <p className=" text-red-600" role="alert">
              name is required
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <span className="text-red-600">Email is required</span>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select input-bordered w-full max-w-xs"
          >
            {specialties?.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <input
          className="btn btn-accent w-full mt-10"
          value="Signup"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
