import { Link } from "react-router-dom";
import Input from "../Custom/customComponents/input";
import useInput from "../Custom/customHook/use-input";
import {Person,Person2} from "@mui/icons-material"
const Navigation = () => {
    const searchInput=useInput();
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        console.log("search");
    }
    return (
        <div className="flex flex-row justify-between items-center px-4 py-2 bg-gray-800 text-white">
            <div className="flex flex-row items-center">
                <div className="text-xl font-bold"><Link to="/">Brand</Link></div>
            </div>
            <form onSubmit={onSubmitHandler} className="flex flex-row items-center">
                <Input className="px-2 py-1 w-80 mr-2 rounded bg-gray-700 text-white" type="text" placeholder="Search" {...searchInput}/>
                <button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600" type="submit">Submit</button>
            </form>
            <div className="flex flex-row items-center">
                <div className="mr-4"><Link to="/signin" >SignIn</Link></div>
                <div className="mr-4"><Link to="/person"><Person/></Link></div>
                <div><Link to={"/signup"}><Person2/></Link></div>
            </div>
        </div>
    );
}

export default Navigation;
