import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { globalAPI } from "../../api/global_api";
import { Button } from "../../components/different/Button/Button";
import { IitemsRes, Irespons } from "../../interfaces/state";
import { addMenu } from "../../store/reducers/menuTable";
import { RootState } from "../../store/store";
import "./InfoDish.css";

export const InfoDish: React.FC = () => {
  let { id, idDish } = useParams();

  let state = useSelector((state: RootState) => {
    let dish: IitemsRes | undefined;
    if (!!state.menuTable.items && Array.isArray(state.menuTable.items)) {
      state.menuTable.items.map((i) => {
        i.id === Number(idDish) && (dish = i);
      });
      return dish;
    }
    return state.menuTable.items;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!Array.isArray(state)) {
      globalAPI.getMenuTable(id).then((res: Irespons) => {
        dispatch(addMenu(res));
      });
    }
  }, []);
  console.log(state);

  function isEmpty(obj: any) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }

  // console.log(isEmpty(state?.measure));

  // const measure = () => {
  //   if (!!state) {
  //     return JSON.stringify() === '{}' ?
  //   }
  // }

  return (
    <section className="dishInfo">
      <div className="container">
        {!!state ? (
          <div className="dishInfo_wrapper">
            <div className="dishInfo_img">
              <img
                src={`https://eda.yandex/${state.picture.uri
                  .replace("{w}", "300")
                  .replace("{h}", "300")}`}
                alt=""
              />
            </div>
            <div className="dishInfo_text">
              <h3 className="dishInfo_title">{state.name}</h3>
              <div className="dishInfo_desc">
                {state.description}{" "}
                <span className="dishInfo_measure">
                  <br />
                  Вес:{" "}
                  <span className="dishInfo_measureValue">
                    {" "}
                    {!state.measure.value ? "---" : state.measure.value}
                    {!state.measure.measure_unit
                      ? "---"
                      : state.measure.measure_unit}
                  </span>
                </span>
              </div>
              <div className="dishInfo_footer">
                <div className="dishInfo_price">
                  Цена: {state.price}{" "}
                  <span>
                    {state.measure.value}
                    {state.measure.measure_unit}
                  </span>
                </div>
                <Button value="В корзину" />
              </div>
            </div>
          </div>
        ) : (
          "Download"
        )}
      </div>
    </section>
  );
};
