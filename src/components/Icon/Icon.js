import React from "react";
import { Link } from "@reach/router";

const Icon = ({path, name}) => {

    return(
        <div>
            <Link to={path}>
                <span className="material-icons">{name}</span>
            </Link>
        </div>
    )
}

export default Icon;