import React, {useEffect} from 'react'
import {globalAPI} from '../../api/global_api'

export const Menu: React.FC = () => {
    useEffect(() => {
        globalAPI.getPopularDishes().then((res) => {
            console.log(res)
        })
    })

    return (
        <div className='section'>
            <div className='container'>Menu</div>
        </div>
    )
}
