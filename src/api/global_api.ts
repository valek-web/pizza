import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const globalAPI = {
  getPopularDishes: () => {
    return instance.get("popular_dishes").then((res) => {
      return {
        name: res.data.name,
        items: res.data.items,
      };
    });
  },
  getHotAppetizers: () => {
    return instance.get("hot_appetizers").then((res) => {
      return {
        name: res.data.name,
        items: res.data.items,
      };
    });
  },
  getSalads: () => {
    return instance.get("salads").then((res) => {
      return {
        name: res.data.name,
        items: res.data.items,
      };
    });
  },
  getSoups: () => {
    return instance.get("soups").then((res) => {
      return {
        name: res.data.name,
        items: res.data.items,
      };
    });
  },
  getPizza: () => {
    return instance.get("pizza").then((res) => {
      return {
        name: res.data.name,
        items: res.data.items,
      };
    });
  },
  getPaste: () => {
    return instance.get("paste").then((res) => {
      return {
        name: res.data.name,
        items: res.data.items,
      };
    });
  },
  getDesserts: () => {
    return instance.get("desserts").then((res) => {
      return {
        name: res.data.name,
        items: res.data.items,
      };
    });
  },
  getSauces: () => {
    return instance.get("sauces").then((res) => {
      return {
        name: res.data.name,
        items: res.data.items,
      };
    });
  },
  getDeverages: () => {
    return instance.get("beverages").then((res) => {
      return {
        name: res.data.name,
        items: res.data.items,
      };
    });
  },
};
