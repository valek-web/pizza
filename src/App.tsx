import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./page/Layout";
import { MenuTable } from "./page/MenuTable/MenuTable";
import { InfoDish } from "./page/InfoDish/InfoDish";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>12</p>} />
        <Route path="/:id/:idDish" element={<InfoDish />} />
        <Route path="menu" element={<MenuTable />} />
        <Route path="menu/:id" element={<MenuTable />} />
      </Route>
      <Route path="*" element={<p>Not found 404</p>} />
    </Routes>
  );
};

export default App;
