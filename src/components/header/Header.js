import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../assets/afg-logo.png"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }));
        document.body.classList.toggle('active');
    }

    handleClose() {
        document.body.classList.remove('active');
    }

    render() {
        return (
            <header className="afg-header">
                <nav className="afg-header__nav l-content-container">
                    <div className="afg-header__logo">
                        <Link to="/" aria-label="Almost Famous GTA homepage">
                            <img src={Logo} alt="Almost Famous GTA band logo" />
                        </Link>
                    </div>
                    <button onClick={this.handleClick} id="afg-menuBtn" type="button" className={"afg-header__menu-btn" + (this.state.menuOpen ? ' active' : '')} aria-expanded="false">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <path className="line line1"
                                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
                            <path className="line line2" d="M 20,50 H 80"/>
                            <path className="line line3"
                                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
                        </svg>
                        <span className="sr-only">Menu</span>
                    </button>
                    <div className={"afg-header__list" + (this.state.menuOpen ? ' active' : '')}>
                        <ul className="">
                            <li>
                                <Link to="/" onClick={this.handleClose}>HOME</Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={this.handleClose}>ABOUT/BAND BIO</Link>
                            </li>
                            <li>
                                <Link to="/gallery" onClick={this.handleClose}>GALLERY</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header