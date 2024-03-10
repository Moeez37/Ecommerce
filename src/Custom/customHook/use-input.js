import { useState } from "react";
 const useInput = ()=>
{   const [input,setInput] = useState("");
    let timeoutId=null;
    const onChangeHandler = (event)=>{
        clearTimeout(timeoutId);
        setTimeout(()=>{setInput(event.target.value)},500);
    }
    return{
        input,
        setInput,
        onChange:onChangeHandler
    };
}
export default useInput