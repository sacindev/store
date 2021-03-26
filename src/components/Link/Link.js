import React from 'react'
import { Link } from "@reach/router";
import "./Link.css"
function Links({name, symbol, to, onClick}) {
    return (
        <Link className="link" onClick={onClick} to={`${to}`}>
            <span className="material-icons symbol">{symbol || "person"}</span>
            <span className="name">{name || "user"}</span>
        </Link>
    )
}

export default Links
