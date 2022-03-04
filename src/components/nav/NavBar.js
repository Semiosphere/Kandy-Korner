import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <div className="navbar">
            <p className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
                <Link className="navbar__link" to="/products">Products</Link>
                <Link className="navbar__link" to="/employees/create">Hire Employee</Link>
            </p>
        </div>
    )
}