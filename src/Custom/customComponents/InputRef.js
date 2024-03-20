import React, { useImperativeHandle, useRef } from 'react'

const Input = React.forwardRef((props, ref) => {
    const Inputref = useRef("");
    const getValue = () => {
        return Inputref.current.value;
    }
    const Focus = () => {
        Inputref.current.focus();
    }
    useImperativeHandle(ref, () => {
        return {
            getValue,
            Focus
        }
    })

    return (
        <input
            ref={Inputref}
            {...props}
        />
    )
})

export default Input; 