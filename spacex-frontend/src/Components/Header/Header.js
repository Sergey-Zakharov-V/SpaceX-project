import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";

const Header = ({ nav_list }) => {
    return (
        <section className="header-section">
            <header className="header">
                <div className="container header-container">
                    <Link to="" className="logo-link">
                        <img src="/logo.png" alt="Logo" className="logo-img"/>
                    </Link>
                    <nav className="nav">
                        <ul className="nav-list">
                            {nav_list.map((item, index) => (
                                <li key={index} className="nav-item"><Link to={item.link} className="nav-link">{item.title}</Link></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </section>
    )
}

export default Header;