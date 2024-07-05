import * as React from "react";
import { Link, useLocation } from "react-router-dom";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const { pathname } = useLocation();

  return (
    <nav className="flex flex-row mt-10 justify-center items-center w-screen max-h-sm">
      <div className="flex gap-[120px] flex-none cursor-pointer"> 
        <Link to="/appoinment" className="flex items-center justify-center w-[155px] h-[40px] rounded-md bg-[#F78CA2] shadow hover:shadow-lg border border-solid border-7 border-black">
          Appointments
        </Link>
        <Link to="/staff" className="flex items-center justify-center w-[155px] h-[40px] rounded-md bg-[#B5CB99] shadow hover:shadow-lg border border-solid border-7 border-black">
          Staff Members
        </Link>
        <Link to="/service" className="flex items-center justify-center w-[155px] h-[40px] rounded-md bg-[#6DC5D1] shadow hover:shadow-lg border border-solid border-7 border-black">
          Services
        </Link>
        <Link to="/bussiness" className="flex items-center justify-center w-[155px] h-[40px] rounded-md bg-[#FFEEA9] shadow hover:shadow-lg border border-solid border-7 border-black">
          Bussiness
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;