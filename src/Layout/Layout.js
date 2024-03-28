import { NavLink, Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const PageLayout = () => {

    return (<><Navigation />
        <Outlet />
    </>);
}
export default PageLayout;