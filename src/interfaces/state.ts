import { initialState } from "../store/reducers/menuTable";

export interface Irespons {
  name: string | null;
  items: IitemsRes | Array<any>;
}

export interface stateRes extends Irespons {
  pageCount: number;
}

export interface IitemsRes {
  adult: boolean;
  available: boolean;
  decimalPrice: string;
  description: string;
  id: number;
  inStock: any;
  measure: IMeasureItemRes;
  name: string;
  optionsGroups: Array<optionsGroupsItemRes | []>;
  picture: IPictureItemRes;
  price: number;
  promoTypes: Array<any>;
  shippingType: string;
  weight: string;
}

interface IMeasureItemRes {
  measure_unit?: string;
  value?: string;
}

interface IPictureItemRes {
  ratio: number;
  scale: string;
  uri: string;
}

interface optionsGroupsItemRes {
  id: number;
  maxSelected: number;
  minSelected: number;
  name: string;
  options: Array<optionsItemRes>;
  required: boolean;
}

interface optionsItemRes {
  decimalPrice: string;
  id: number;
  multiplier: number;
  name: string;
  price: number;
}
