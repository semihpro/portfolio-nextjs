import {useRouter} from "next/router";

const navbar = ({data})=>{
    const router = useRouter();
    const activeTab = router.pathname
    console.log(activeTab);
    return <>
        <nav className="navbar">

            <ul className="navbar-list">

                <li className="navbar-item">
                    <button onClick={()=>router.push('/')} className={"navbar-link"+(activeTab==="/"?" active":"") } data-nav-link="">About</button>
                </li>

                <li className="navbar-item">
                    <button onClick={()=>router.push('/resume')} className={"navbar-link"+(activeTab==="/resume"?" active":"") } data-nav-link="">Resume</button>
                </li>

                <li className="navbar-item">
                    <button  onClick={()=>router.push('/portfolio')} className={"navbar-link"+(activeTab==="/portfolio"?" active":"") } data-nav-link="">Portfolio</button>
                </li>
{/*
                <li className="navbar-item">
                    <button  onClick={()=>router.push('/blog')} className={"navbar-link"+(activeTab==="/blog"?" active":"") } data-nav-link="">Blog</button>
                </li>*/}

                <li className="navbar-item">
                    <button  onClick={()=>router.push('/contact')} className={"navbar-link"+(activeTab==="/contact"?" active":"") } data-nav-link="">Contact</button>
                </li>

            </ul>

        </nav>
    </>
}
export default navbar;