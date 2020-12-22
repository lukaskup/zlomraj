import * as React from "react"

import '../css/navbar.scss';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "gatsby"

const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    return <div className={"navbar"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="167" height="24" viewBox="0 0 167 24" className={"logo"}>
            <g id="Group_5" data-name="Group 5" transform="translate(-6 -16)">
                <text id="ZŁOMRAJ" transform="translate(63 18)" fill="#dcdcdc" font-size="18" font-family="LibreBaskerville-Regular, Libre Baskerville"><tspan x="0" y="17">ZŁOMRAJ</tspan></text>
                <rect id="Rectangle_1" data-name="Rectangle 1" width="48" height="24" transform="translate(6 16)" fill="#dcdcdc"/>
                <text id="PHU" transform="translate(8 18)" fill="#242424" font-size="18" font-family="LibreBaskerville-Regular, Libre Baskerville"><tspan x="0" y="17">PHU</tspan></text>
                <line id="Line_1" data-name="Line 1" x2="78" transform="translate(70.5 39.5)" fill="none" stroke="#707070" stroke-width="0.5"/>
            </g>
        </svg>
        {isDrawerOpen ? <CloseIcon className={"menu-icon"} onClick={() => {setIsDrawerOpen(false)}}/>  : <MenuIcon className={"menu-icon"} onClick={() => {setIsDrawerOpen(true)}}/>}
        <div className={"drawer"} hidden={!isDrawerOpen}>
            <Link to="/">Strona główna</Link>
            <Link to="/">Cennik</Link>
            <Link to="/">Ogłoszenia</Link>
            <Link to="/">Galeria</Link>
            <Link to="/">O nas</Link>
            <Link to="/">Do pobrania</Link>
            <Link to="/">Kontakt</Link>
        </div>
    </div>
}

export default Navbar


