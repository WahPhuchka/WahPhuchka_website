import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
    return (
        <header id="home" className="cursor-light">
            <div className="inner-header nav-icon">
                <div className="main-navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <Link className="navbar-brand link" to="/">
                                    <img src="food-delivery/img/logo.png" className alt="logo" />
                                    {/*                            <img src="food-delivery/img/logo-white-small.png" class="logo-fixed" alt="logo">*/}
                                </Link>
                            </div>
                            <div className="col-lg-6 simple-navbar d-none d-lg-flex align-items-center justify-content-center">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <div className="navbar-nav ml-auto mr-auto">
                                            <a className="nav-link scroll link" href="#gallery-sec">Browse Food</a>
                                            <a className="nav-link scroll link" href="#app-sec">Download App</a>
                                            <a className="nav-link scroll link" href="#about-sec">About Us</a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-6 col-lg-3 d-flex align-items-center justify-content-end">
                                {/* <ul className="user-links">
                                    <li className="header-shop-cart"><a href="javascript:void(0);" className="line-icon position-relative link"><i className="las la-shopping-bag" /><span className="badge rounded-circle">4</span></a>
                                        <div className="minicart link">
                                            <div className="minicart-content">
                                                <div className="row">
                                                    <div className="cart-img col-5">
                                                        <a href="#">
                                                            <img src="food-delivery/img/item1.png" alt />
                                                        </a>
                                                    </div>
                                                    <div className="cart-content col-6">
                                                        <h4>
                                                            <a href="#">Lamp Chops Handi</a>
                                                        </h4>
                                                        <div className="cart-price">
                                                            <span className="new">$229.9</span>
                                                            <span><del>$229.9</del></span>
                                                        </div>
                                                        <div className="number">
                                                            <span className="minus">-</span>
                                                            <input type="text" defaultValue={1} />
                                                            <span className="plus">+</span>
                                                        </div>
                                                        <div className="del-icon">
                                                            <a href="#">
                                                                <i className="far fa-trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="cart-img col-5">
                                                        <a href="#">
                                                            <img src="food-delivery/img/item6.png" alt />
                                                        </a>
                                                    </div>
                                                    <div className="cart-content col-6">
                                                        <h4>
                                                            <a href="#">Double Stack Pizza</a>
                                                        </h4>
                                                        <div className="cart-price">
                                                            <span className="new">$229.9</span>
                                                            <span><del>$229.9</del></span>
                                                        </div>
                                                        <div className="number">
                                                            <span className="minus">-</span>
                                                            <input type="text" defaultValue={3} />
                                                            <span className="plus">+</span>
                                                        </div>
                                                        <div className="del-icon">
                                                            <a href="#">
                                                                <i className="far fa-trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="cart-img col-5">
                                                        <a href="#">
                                                            <img src="food-delivery/img/item5.png" alt />
                                                        </a>
                                                    </div>
                                                    <div className="cart-content col-6">
                                                        <h4>
                                                            <a href="#">Double Stack Pizza</a>
                                                        </h4>
                                                        <div className="cart-price">
                                                            <span className="new">$229.9</span>
                                                            <span><del>$229.9</del></span>
                                                        </div>
                                                        <div className="number">
                                                            <span className="minus">-</span>
                                                            <input type="text" defaultValue={2} />
                                                            <span className="plus">+</span>
                                                        </div>
                                                        <div className="del-icon">
                                                            <a href="#">
                                                                <i className="far fa-trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="ml-0">
                                                <li>
                                                    <div className="total-price">
  
                                                        <span className="f-right">$239.9</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="checkout-link">
                                                        <a href="#" className="main-btn rounded-pill" id="checkout-btn">Checkout</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="user-menu-cart"><a href="javascript:void(0);" className="fa-icon link"><i className="far fa-user" /><span><i className="las la-angle-down ml-1" /></span></a>
                                        <div className="menu-links link">
                                            <ul>
                                                <li>
                                                    <div className="overlay-link" />
                                                    <a href="food-delivery/login.html"><i className="lni lni-key" />Login</a>
                                                </li>
                                                <li>
                                                    <div className="overlay-link" />
                                                    <a href="food-delivery/registeration.html"><i className="lni lni-pointer-right" />Register</a></li>
                                                <li>
                                                    <div className="overlay-link" />
                                                    <a href="food-delivery/accounts.html"><i className="lni lni-user" />Account</a></li>
                                                <li>
                                                    <div className="overlay-link" />
                                                    <a href="#"><i className="lni lni-lock" />Logout</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/*toggle btn*/}
                <a href="javascript:void(0)" className="sidemenu_btn link d-lg-none" id="sidemenu_toggle">
                    <span />
                    <span />
                    <span />
                </a>
            </div>
            {/*Side Nav*/}
            <div className="side-menu hidden side-menu-opacity">
                <div className="bg-overlay" />
                <div className="inner-wrapper">
                    <span className="btn-close" id="btn_sideNavClose"><i /><i /></span>
                    <div className="container">
                        <div className="row w-100 side-menu-inner-content">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <a href="index-food-delivery.html" className="navbar-brand"><img src="food-delivery/img/logo-white-small.png" alt="logo" /></a>
                            </div>
                            <div className="col-12 col-lg-8">
                                <nav className="side-nav w-100">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link scroll" href="#gallery-sec">Browse Food</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link scroll" href="#app-sec">Download App</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link scroll" href="#about-sec">About Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-12 col-lg-4 d-flex align-items-center">
                                <div className="side-footer text-white w-100">
                                    <div className="menu-company-details">
                                        <span>+1 631 123 4567</span>
                                        <span>email@website.com</span>
                                    </div>
                                    <ul className="social-icons-simple">
                                        <li><a className="facebook-text-hvr" href="https://www.facebook.com/wahphuchka/" target="_blank"><i className="fab fa-facebook-f" /> </a> </li>
                                        
                                        <li><a className="instagram-text-hvr" href="https://www.instagram.com/wahphuchka/" target="_blank"><i className="fab fa-instagram" /> </a> </li>
                                        <li><a className="instagram-text-hvr" href="https://in.linkedin.com/company/wah-phuchka" target="_blank"><i className="fab fa-linkedin-in" /> </a> </li>
                                    </ul>
                                    <p className="text-white">Copyright © 2022 Wah Phuchka. Made With Love By Ashish</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a id="close_side_menu" href="javascript:void(0);" />
        </header>
    )
}
