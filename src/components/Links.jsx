import React from 'react';

import {NavLink} from "react-router-dom";

const Links = ({route, name}) => {
    const getActiveLinkStyle = ({ isActive }) => {
        if (isActive) return { color: "orange" };
    };

    return (
    <NavLink style={getActiveLinkStyle} to={route}>
        {name}
    </NavLink>
    );
}


export default Links;