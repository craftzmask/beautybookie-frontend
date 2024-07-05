import * as React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface IProtectedRoutesProps {}

const ProtectedRoutes: React.FunctionComponent<IProtectedRoutesProps> = () => {
    // const auth = getAuth();
    // const [user, loading] = useAuthState(auth);
    // const location = useLocation();
  
    // if (loading) {
    //   return <div>...Loading</div>;
    // }
  
    // return user ? (
    //   <Outlet />
    // ) : (
    //   <Navigate to="/login" state={{ from: location }} />
    // );

  const location = useLocation();
  
  return (
    <Outlet />
  )
};

export default ProtectedRoutes;