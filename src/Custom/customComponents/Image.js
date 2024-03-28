import { ClassNames } from '@emotion/react'
import React from 'react'

function Image({ src, className, alt }) {
    return (
        <img src={src} className={className} alt={alt} />
    )
}

export default Image