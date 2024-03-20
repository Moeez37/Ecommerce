import { useState } from "react";
const useInput = () => {
    const [input, setInput] = useState("");
    let timeoutId = null;
    const onChangeHandler = (event) => {
        clearTimeout(timeoutId);
        setInput(event.target.value)
        timeoutId = setTimeout(() => { setInput(event.target.value) }, 100);
    }
    return {
        value: input,
        setInput,
        onChange: onChangeHandler
    };
}
export default useInput