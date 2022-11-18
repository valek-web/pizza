import React from 'react'
import logo from './../logo.svg'
import {NavLink, Outlet} from 'react-router-dom'
import {Button} from '../components/different/Button/Button'
import './Layout.css'

export const Layout = () => {
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header__wrapper'>
                        <div className='header__logo'>
                            <img src={logo} alt='Logo' />
                        </div>
                        <nav>
                            <ul className='menu'>
                                <li className='menu__element'>
                                    <NavLink to='menu/popular_dishes'>Популярные блюда</NavLink>
                                </li>
                                <li className='menu__element'>
                                    <NavLink to='menu/hot_appetizers'>Горячие закуски</NavLink>
                                </li>
                                <li className='menu__element'>
                                    <NavLink to='menu/salads'>Салаты</NavLink>
                                </li>
                                <li className='menu__element'>
                                    <NavLink to='menu/soups'>Супы</NavLink>
                                </li>
                                <li className='menu__element'>
                                    <NavLink to='menu/paste'>Пицца</NavLink>
                                </li>
                                <li className='menu__element'>
                                    <NavLink to='menu/desserts'>Паста</NavLink>
                                </li>
                                <li className='menu__element'>
                                    <NavLink to='menu/beverages'>Напитки</NavLink>
                                </li>
                                <li className='menu__element'>
                                    <NavLink to='menu/sauces'>Соусы</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <NavLink to='/pizza'>
                                <Button value='Корзина'/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className='container'> Footer</div>
            </footer>
        </>
    )
}
