export interface Irespons {
  name: string;
  items: IitemsRes | null;
}

interface IitemsRes {
  adult: boolean;
  available: true;
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
  measure_unit: string;
  value: string;
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
