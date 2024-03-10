import React from "react";
import Input from "../../Custom/customComponents/input.js";
import useInput from "../../Custom/customHook/use-input.js";

const SignIn = () => {

    const email=useInput();
    const password = useInput();
    const onSubmitHandler = (event)=>{
          event.preventDefault();
          console.log(email,password);
    } 
   

    return (<div className="flex justify-center mt-10">
    <div className="flex flex-col  h-80 border-black px-6 py-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-center text-2xl font-bold mb-2">Sign Up </h1>
      <form  onSubmit={onSubmitHandler} className="flex flex-col mb-4">
        <Input
        id="email"
        type="email"
        placeholder="Enter Email"
        className="mb-4 px-4 py-2 w-full rounded-lg border focus:outline-none focus:border-blue-500"
        {...email}
        />
        
        <Input
          id="password"
          type="password"
          placeholder="Password"
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

// function Reducer(state,{value,type}){
//     switch(type){
//         case "email":
//             return{...state,email:value};
//         case "password":
//             return{...state,password:value};
//         default:
//             break;
//     }
// }
// const intialSigninState={
//     email:"",
//     password:"",
// };
// const useUserInputForm=()=>{
//     const [state,dispatcher]=useReducer(Reducer,intialSigninState);
//     let timeoutId=null;
//     function OnChangeHandler(changeState) {
        
//         clearTimeout(timeoutId);
    
        
//         timeoutId  = setTimeout(() => {
//             dispatcher(changeState);
//         }, 500);
//     }
//     return{
//         state,
//         OnChangeHandler:OnChangeHandler
//     }

// }