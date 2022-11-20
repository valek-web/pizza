import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const globalAPI = {
  getMenuTable: (typeId: any) => {
    return instance.get(typeId).then((res) => {
      return {
        name: res.data.name,
        items: res.data.items,
      };
    });
  },
};
