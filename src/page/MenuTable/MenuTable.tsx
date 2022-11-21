import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Params, useParams } from "react-router-dom";
import { globalAPI } from "../../api/global_api";
import { Button } from "../../components/different/Button/Button";
import { IitemsRes, Irespons } from "../../interfaces/state";
import { addMenu } from "../../store/reducers/menuTable";
import { RootState } from "../../store/store";
import "./MenuTable.css";

export const MenuTable: React.FC = () => {
  const { id }: Readonly<Params<any>> = useParams();

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => {
    return {
      ...state.menuTable,
    };
  });

  useEffect(() => {
    globalAPI.getMenuTable(id).then((res: Irespons) => {
      dispatch(addMenu(res));
    });
  }, [id]);

  console.log(state);

  const mapItem = () => {
    if (Array.isArray(state.items)) {
      return state.items.map((item: IitemsRes) => {
        return (
          <div className="dish" key={item.id}>
            <div className="dish_img">
              <img
                src={`https://eda.yandex/${item.picture.uri
                  .replace("{w}", "300")
                  .replace("{h}", "300")}`}
                alt=""
              />
            </div>
            <h2 className="dish_title">{item.name}</h2>
            <div className="dish_descr">{item.description}</div>
            <div className="dish_footer">
              <NavLink to={`/${id}/${item.id}`}>
                <Button value={"В корзину"} />
              </NavLink>
              <div className="dish_price">{item.decimalPrice}руб</div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="menuTable">
      <div className="container">
        <h1 className="title">{state.name}</h1>
        <div className="container_menuTable">{mapItem()}</div>
      </div>
    </div>
  );
};
