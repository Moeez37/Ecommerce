import useInput from "../../Custom/customHook/use-input";
import Input from "../../Custom/customComponents/input";
import { render } from "react-dom";
import {useSelector,useDispatch} from "react-redux";
const dispatch=useDispatch();
const islogin = useSelector(state=>state.islogin)
const SignUp = () => {
    const firstName=useInput();
    const lastName=useInput();
    const password = useInput();
    const confirmPassword = useInput();
    const email = useInput();
   
    
    const onSubmitHandler =(event)=>{
        event.preventDefault();
        console.log("submtited")
        if (firstName.input && lastName.input && password.input === confirmPassword.input && email.input){
            const user = {
                name: firstName.input + " " +lastName.input,
                email:email.input 
            };
            const action= {value:user,type:"setUserDetail"}
            dispatch(action);
    }
}        
    islogin ? null:render("/")
    return (<div className="flex justify-center mt-10">
        <div className="flex flex-col flex-wrap  h-80 border-black px-6 py-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-center text-2xl font-bold mb-4">Welcome Back</h1>
            <form onSubmit={onSubmitHandler} className="flex flex-col">
            <div className="flex flex-row">
                    <Input
                        id="FirstName"
                        type="text"
                        placeholder="FirstName"
                        className="mx-1 mb-4 px-4 py-2 w-35 rounded-lg border focus:outline-none focus:border-blue-500"
                        {...firstName}
                    />
                    <Input
                        id="LastName"
                        type="text"
                        placeholder="LastName"
                        className="mx-1 mb-4 px-4 py-2 w-35 rounded-lg border focus:outline-none focus:border-blue-500"
                        {...lastName}
                    />
                </div>
                <Input
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    className="mb-4 px-4 py-2 w-full rounded-lg border focus:outline-none focus:border-blue-500"
                    {...email}
                />
                <div className="flex flex-row">
                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="mx-1 mb-4 px-4 py-2 w-35 rounded-lg border focus:outline-none focus:border-blue-500"
                        {...password}
                    />
                    <Input
                        id="confirmPassword"
                        type="password"
                        placeholder=" confirm Password"
                        className="mx-1 mb-4 px-4 py-2 w-35 rounded-lg border focus:outline-none focus:border-blue-500"
                        {...confirmPassword}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 w-full text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    SignUp
                </button>
            </form>
        </div>
    </div>
    );
}
export default SignUp;