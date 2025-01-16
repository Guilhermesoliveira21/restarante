import { BrowserRouter, Route, Routes } from "react-router-dom";


import { LayautHeader, LayoutSemHeader } from "./Layouts";
import { DashboardPage } from "../pages/Dashboard";
import { LoginPage } from "../pages/Login";
import { useContext } from "react";
import { LocalStorageContext } from "../contexts/localStorage";
import { LoadingPage } from "../pages/Loading";

export const AppRouter = () => {

  const {session, loading} = useContext(LocalStorageContext);
  return (
   <>
   
    {loading  ? <LoadingPage /> : (
       <BrowserRouter>
       <Routes>
         <Route path="/" element={<LayoutSemHeader />}>
           <Route index element={<LoginPage />} />
         </Route>
 
 
         <Route path="/dashboard" element={<LayautHeader />}>
           <Route index element={<DashboardPage />} />
         </Route>
       </Routes>
     </BrowserRouter>
    )}

   </>
  );
};
