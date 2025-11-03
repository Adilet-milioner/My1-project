import Create from "@/pages/Create";
import Current from "@/pages/Current";
import Eror from "@/pages/Eror";
import Main from "@/pages/Main";
import Togoout from "@/pages/Togoout";
import { Route, Routes } from "react-router-dom";



const AppRoutes = () => {
      return (
    <Routes>
      <Route path="/" element={<Togoout />} />  {/* Биринчи барак */}
      <Route path="/cars" element={<Main />} /> {/* Экинчи барак */}
      <Route path="/create" element={<Create />} />
      <Route path="/edit" element={<Current />} />
      <Route path="/erer" element={<Eror />} />
    </Routes>
  );
};
export default AppRoutes;
//   const navigationRoutes = [
//     { path: "/", element: <Togoout /> },
//     { path: "/cars", element: <Main /> },
//     { path: "/eror-page", element: <Change /> },
//     { path: "/create", element: <Create /> },
//     { path: "/edit", element: <Current /> },
//   ];
//   return (
//     <Routes>
//       {" "}
//       {navigationRoutes.map((router) => (
//         <Route key={router.path} path={router.path} element={router.element} />
//       ))}{" "}
//     </Routes>
//   );

//   return (
//     <Router>
//       <Routes>
//         {/* Киргенде автоматтык түрдө регистрация бетине жөнөтөт */}
//         <Route path="/" element={<Navigate to="/register" />} />
//         <Route path="/register" element={<Togoout />} />
//         <Route path="/main" element={<Main />} />
//         <Route path="/login" element={<Change />} />
//         <Route path="/login" element={<Current />} />
//         <Route path="/login" element={<Create/>} />
//       </Routes>
//     </Router>
//   );


