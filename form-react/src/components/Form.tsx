import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";


interface IFormInput {
  userName: string;
  userEmail: string;
  userPassword: string;
}

const FormMod: React.FC = () => {
 
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
} = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  console.log(errors)

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 m-auto mt-5 border-cyan-500 border border-4 bg-slate-700 max-w-96 grid grid-cols-1 gap-2"
    >
      <h2 className="text-center text-white my-2 text-2xl font-bold capitalize">
        Login
      </h2>

      <label className="text-white font-bold " htmlFor="name">
        Name:
      </label>
      <input
        className={`p-2 rounded bg-slate-500 text-white ${errors?.userName && "border border-2 border-red-600"}`}

        {...register("userName", {required: true})}
        type="text"
        name="userName"
        placeholder="Exemplo: Mario Aquino"
        required
      />

      <label className="text-white font-bold" htmlFor="email">
        E-mail
      </label>
      <input
        className={`p-2 rounded bg-slate-500 text-white ${errors?.userName && "border border-2 border-red-600"}`}
        {...register("userEmail", {required: true})}
        type="email"
        name="userEmail"
        placeholder="Exemplo: mario@gmds.com"
        required
      />

      <label className="text-white font-bold" htmlFor="password">
        Password:
      </label>
      <input
        className={`p-2 rounded bg-slate-500 text-white ${errors?.userName && "border border-2 border-red-600"}`}
        {...register("userPassword", {required: true})}
        type="password"
        name="userPassword"
        placeholder="@fj48&$RS"
        required
      />

      <input
        className="bg-blue-700 p-1 font-bold rounded active:scale-105 mt-6 text-white"
        type="submit"
        value="Enter"
      />
    </form>
  );
};

export default FormMod;
