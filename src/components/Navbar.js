import * as React from "react"

import '../css/navbar.scss';
import '../css/global.scss';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "gatsby"

const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const disablePageScroll = (disable) => {
        if(disable){
            document.body.classList.add("disable-scroll");
            document.getElementsByTagName("html")[0].classList.add("disable-scroll")
        }else{
            document.body.classList.remove("disable-scroll");
            document.getElementsByTagName("html")[0].classList.remove("disable-scroll")
        }
    }

    return <div className={"navbar"}>
        <div className={"container"}>
            <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="143" height="24" viewBox="0 0 167 24" className={"logo"}>
                    <g id="Group_5" data-name="Group 5" transform="translate(-6 -16)">
                        <text id="ZŁOMRAJ" transform="translate(63 18)" fill="#dcdcdc" font-size="18" font-family="LibreBaskerville-Regular, Libre Baskerville"><tspan x="0" y="17">ZŁOMRAJ</tspan></text>
                        <rect id="Rectangle_1" data-name="Rectangle 1" width="48" height="24" transform="translate(6 16)" fill="#dcdcdc"/>
                        <text id="PHU" transform="translate(8 18)" fill="#242424" font-size="18" font-family="LibreBaskerville-Regular, Libre Baskerville"><tspan x="4" y="16   ">PHU</tspan></text>
                        <line id="Line_1" data-name="Line 1" x2="78" transform="translate(70.5 39.5)" fill="none" stroke="#707070" stroke-width="0.5"/>
                    </g>
                </svg>
            </Link>
            {isDrawerOpen ? <CloseIcon className={"menu-icon"} onClick={() => {
                setIsDrawerOpen(false)
                disablePageScroll(false)
            }}/>  : <MenuIcon className={"menu-icon"} onClick={() => {
                setIsDrawerOpen(true)
                disablePageScroll(true)
            }}/>}
            <div className={"drawer"} hidden={!isDrawerOpen}>
                <div className={"container"}>
                    <Link to="/">Strona główna</Link>
                    <Link to="/cennik">Cennik</Link>
                    <Link to="/ogloszenia">Ogłoszenia</Link>
                    <Link to="/galeria">Galeria</Link>
                    <Link to="/onas">O nas</Link>
                    <Link to="/dopobrania">Do pobrania</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </div>
            </div>
        </div>
    </div>
}

export default Navbar


