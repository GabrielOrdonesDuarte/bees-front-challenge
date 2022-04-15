import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BreweryList from "templates/BreweryList";
import Home from "templates/Home";

import { useUser } from "contexts/user";

const Router = () => {
   const { isAuthenticated } = useUser();

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="/list"
               element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                     <BreweryList />
                  </ProtectedRoute>
               }
            />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;

type ProtectedRouteProps = {
   isAuthenticated: boolean;
   children: React.ReactNode;
};

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedRouteProps): any => {
   if (!isAuthenticated) {
      return <Navigate to="/" />;
   }

   return children;
};
