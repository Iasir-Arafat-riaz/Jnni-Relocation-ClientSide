import React from 'react';
import { Outlet } from "react-router-dom";
const DashboardMain = () => {
    return (
        <div>
            <h3>This is dashboard</h3>
            <Outlet/>
        </div>
    );
};

export default DashboardMain;