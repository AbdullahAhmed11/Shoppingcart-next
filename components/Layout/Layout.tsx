import React from "react";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";


interface StandardLayoutProps {
    children: React.ReactNode;
}

function Layout(props: StandardLayoutProps) {
    return (
        <>
            <div>
                <NavBar />
                <div className="">
                    {props.children}
                </div>
                <Footer />

            </div>
        </>
    )
}
export default Layout;