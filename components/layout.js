import SideBar from "./sidebar";
import NavBar from "./navbar";
export default function Layout({children}){
    return (
        <>
            <SideBar/>
            <div className={"main-content"}>
                <main>{children}</main>
                <NavBar/>
            </div>
        </>
    )
}