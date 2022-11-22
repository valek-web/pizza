import logo from "./../logo.svg";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "../components/different/Button/Button";
import "./Layout.css";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__logo">
              <img src={logo} alt="Logo" />
            </div>
            <nav>
              <ul className="menu">
                <li className="menu__element">
                  <NavLink to="menu/popular_dishes">Популярные блюда</NavLink>
                </li>
                <li className="menu__element">
                  <NavLink to="menu/hot_appetizers">Горячие закуски</NavLink>
                </li>
                <li className="menu__element">
                  <NavLink to="menu/salads">Салаты</NavLink>
                </li>
                <li className="menu__element">
                  <NavLink to="menu/soups">Супы</NavLink>
                </li>
                <li className="menu__element">
                  <NavLink to="menu/pizza">Пицца</NavLink>
                </li>
                <li className="menu__element">
                  <NavLink to="menu/paste">Паста</NavLink>
                </li>
                <li className="menu__element">
                  <NavLink to="menu/beverages">Напитки</NavLink>
                </li>
                <li className="menu__element">
                  <NavLink to="menu/sauces">Соусы</NavLink>
                </li>
              </ul>
            </nav>
            <div>
              <NavLink to="/pizza">
                <Button value="Корзина" />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container">
          <div className="footer_wraper">
            <div className="header__logo">
              <img src={logo} alt="Logo" />
            </div>
            <ul className="list">
              <li className="list_h">Куда пицца</li>
              <li className="list_items">О компании</li>
              <li className="list_items">Пользовательское соглашение</li>
              <li className="list_items">Условия гарантии</li>
            </ul>
            <ul className="list">
              <li className="list_h">Помощь</li>
              <li className="list_items">Ресторан</li>
              <li className="list_items">Поддержка</li>
              <li className="list_items">Отследить заказ</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
