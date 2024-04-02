import { NavLink, Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Footer } from "../Footer/footer";

const PageLayout = () => {

    return (<div className="flex flex-col min-h-screen">
        <Navigation />
        <Outlet />
        <div className="flex-grow"></div> {/* This div will push the footer to the bottom */}
        <div className="flex content-end">
            <Footer />
        </div>
    </div>

    )
}
export default PageLayout;