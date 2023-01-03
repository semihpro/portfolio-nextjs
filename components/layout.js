import SideBar from "./sidebar";
import NavBar from "./navbar";
export default function Layout({children}){
    return (
        <>
            <SideBar/>
            <div className={"main-content"}>
                <NavBar/>
                <main>{children}</main>
            </div>
        </>
    )
}