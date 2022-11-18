import React, {useEffect} from 'react'
import {globalAPI} from '../../api/global_api'

export const Menu: React.FC = () => {
    useEffect(() => {
        globalAPI.getPopularDishes().then((res) => {
            console.log(res)
        })
        globalAPI.getHotAppetizers().then((res) => {
            console.log(res)
        })
        globalAPI.getSalads().then((res) => {
            console.log(res)
        })
        globalAPI.getSauces().then((res) => {
            console.log(res)
        })
        globalAPI.getSoups().then((res) => {
            console.log(res)
        })
        globalAPI.getPizza().then((res) => {
            console.log(res)
        })
        globalAPI.getPaste().then((res) => {
            console.log(res)
        })
        globalAPI.getDesserts().then((res) => {
            console.log(res)
        })
        globalAPI.getDeverages().then((res) => {
            console.log(res)
        })
    })

    return (
        <div className='section'>
            <div className='container'>Menu</div>
        </div>
    )
}
