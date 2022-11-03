import coloredLogo from "./logo1.png"
import whiteLogo from "./logo2.png"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import "./Header.css"
import { useMediaQuery } from 'react-responsive'

const Header = () => {
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }

    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    window.addEventListener("scroll", function () {
        let nav = document.querySelector("nav")
        let windowposition = window.scrollY > 120;
        nav.classList.toggle("navbar-scroll", windowposition)

    })
    window.addEventListener("scroll", function () {
        let button = document.querySelector("button")
        let windowposition = window.scrollY > 120;
        button.classList.toggle("button-scroll", windowposition)

    })

    const listenScrollEvent = () => setIsScrolled(window.scrollY > 120);
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    }, []);
    return (
        <>
            <section className="page-title parallax-section about"  >
                <nav className="navbar navbar-expand-lg fixed-top stroke " >
                    {/* <img src={isScrolled ? whiteLogo : coloredLogo}
                        className="logo"
                        alt={isScrolled ? "SmartLogger white logo" : "SmartLogger colored logo"}
                    /> */}<h2 className="text-light">Azcreative</h2>
                    <input type="checkbox" id="click" />
                    <label for="click" onClick={() => setOpen(!open)} className="menu-btn navbar-toggler bg-warning menu-btn">
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </label>
                    <ul className="navbar-nav ms-auto  py-5 mb-lg-0 fs-5 my-2 mx-5" style={{ cursor: "pointer" }}>
                        <li className="nav-item active">
                            <a className="nav-link " aria-current="page" href="/">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="/about">About </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="/services">Services </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="/client">Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="/blog">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link   " href="/portfolio">Portfolio</a>
                        </li>

                        <li className="nav-items">
                            <a className="nav-link nav-button  btn btn-outline-warning  d-inline-block" href="/contact">Contact</a>
                        </li>
                        <Mobile>
                            <div className="row">
                                <div className="col-lg-12 d-flex my-3 ">

                                    <li className="social-item-facebook  "><a target="_blank" href=""  ><i class="fab fa-facebook face fs-2 my-3"></i></a> </li>
                                    <li className="social-item-twitter fs-2 "><a target="_blank" href=""><i className="fab fa-twitter twitter fs-2 my-3"></i></a></li>
                                    <li className="social-item-linkedin fs-2 "><a target="_blank" href=""><i className="fab fa-linkedin  link fs-2 my-3"></i></a></li>
                                    <li className="social-item-instagram fs-2 "><a target="_blank" href=""><i className="fab fa-instagram  insta fs-2 my-3"></i></a></li>
                                    <li className="social-item-dribbble fs-2 " ><a target="_blank" href=""><i className="fab fa-dribbble  drib fs-2 my-3"></i></a></li>
                                    <li className="social-item-youtube fs-2 "><a target="_blank" href=""><i className="fab fa-youtube  youtube fs-2 my-3"></i></a></li>

                                </div>
                            </div>
                        </Mobile>
                    </ul>
                </nav>
            </section>

        </>
    )
}

export default Header