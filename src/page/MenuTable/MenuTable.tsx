import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Params, useParams } from "react-router-dom";
import { globalAPI } from "../../api/global_api";
import { IitemsRes, Irespons } from "../../interfaces/state";
import { addMenu } from "../../store/reducers/menuTable";
import { RootState } from "../../store/store";

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
          <div className="dish">
            <h2>{item.name}</h2>
          </div>
        );
      });
    }
  };

  return (
    <div className="menuTable">
      <div className="container">
        <h1>{state.name}</h1>
        <div className="container_menuTable">{mapItem()}</div>
      </div>
    </div>
  );
};
