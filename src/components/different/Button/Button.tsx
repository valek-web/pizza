import React from 'react'
import './Button.css'

type PropsType = {
    value: string
}



export const Button: React.FC<PropsType> = ({value}, props) => {
    return (
        <button className='button' {...props}>
            {value}
        </button>
    )
}
