import React, { useImperativeHandle, useRef } from 'react'

const Input = React.forwardRef((props, ref) => {
    const Inputref = useRef("");
    const getValue = () => {
        return Inputref.current.value;
    }
    useImperativeHandle(ref, () => {
        return {
            getValue
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