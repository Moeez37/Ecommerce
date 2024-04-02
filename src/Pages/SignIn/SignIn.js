import React from "react";
import { useNavigate } from "react-router";
import { userAuthInfo } from "../../store/index.js";
import Input from "../../Custom/customComponents/input.js";
import useInput from "../../Custom/customHook/use-input.js";
import { useSelector, useDispatch } from "react-redux";
import { useSubmit, redirect, json } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const userAuth = useSelector(state => state.Auth);
  const dispatch = useDispatch();
  const email = useInput();
  const password = useInput();
  const submit = useSubmit();

  const user = localStorage.getItem("user")
  if (user) redirect("/");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    submit(event.currentTarget, { method: "post", action: "/signin" })
  }


  return (<div className="flex justify-center mt-10">
    <div className="flex flex-col  h-80 border-black px-6 py-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-center text-2xl font-bold mb-2">Sign Up </h1>
      <form onSubmit={onSubmitHandler} className="flex flex-col mb-4">
        <Input
          id="email"
          type="email"
          placeholder="Enter Email"
          value={email.input}
          className="mb-4 px-4 py-2 w-full rounded-lg border focus:outline-none focus:border-blue-500"
          {...email}
        />

        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password.input}
          className="mb-4 px-4 py-2 w-full rounded-lg border focus:outline-none focus:border-blue-500"
          {...password}
        />
        <button
          type="submit"
          className="bg-blue-500 w-80 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  );
};

export default SignIn;
export async function action({ request, params }) {
  console.log(request)
  const data = await request.formData();
  console.log(data)
  const email = data.get("email");
  const password = data.get("password")
  console.log(email, password, "Moeez")
  const response = await fetch("https://fakestoreapi.com/users/1")
  const user = await response.json();
  console.log(user, "Moeez");
  if (user.email === email && user.password === password) {
    localStorage.setItem("user", JSON.stringify(user))
    return json({ message: "signIn succesfully" }, { status: 200 })
  }
  return json({}, { status: 500 });
}