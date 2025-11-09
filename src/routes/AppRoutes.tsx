import { Routes, Route } from "react-router-dom";
import Layout from "@/layouts/Layout";
import Create from "@/pages/Create";
import Current from "@/pages/Current";
import Eror from "@/pages/Eror";
import Main from "@/pages/Main";
import Togoout from "@/pages/Togoout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Togoout />} /> 
        <Route path="cars" element={<Main />} />
        <Route path="create" element={<Create />} />
        <Route path="edit/:id" element={<Current />} />
        <Route path="*" element={<Eror />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
