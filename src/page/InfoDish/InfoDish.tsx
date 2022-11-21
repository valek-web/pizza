import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { globalAPI } from "../../api/global_api";
import { IitemsRes, Irespons } from "../../interfaces/state";
import { addMenu } from "../../store/reducers/menuTable";
import { RootState } from "../../store/store";

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

  const infoDish = () => {
    if (!!state) {
      return state.name;
    }
  };

  return (
    <div className="dish_info">
      <div className="container">{infoDish()}</div>
    </div>
  );
};
