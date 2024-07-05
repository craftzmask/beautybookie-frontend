import * as React from "react";
import Navbar from "@/components/navbar";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Navbar />
            <div className="m-[5px]">
                {children}
            </div>
        </div>
    );
};

export default Layout;