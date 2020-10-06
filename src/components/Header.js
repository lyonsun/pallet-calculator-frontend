import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Header = () => {
    const location = useLocation();

    const homeClass = location.pathname === "/" ? "active" : "";
    const reportClass = location.pathname === "/report" ? "active" : "";

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top pl-4">
            <span className="navbar-brand mb-0 h1">Pallet Calculator</span>

            <ul className="navbar-nav">
                <li className={`nav-item ${homeClass}`}>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className={`nav-item ${reportClass}`}>
                    <Link className="nav-link" to="/report">Report</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header