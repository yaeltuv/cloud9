import * as React from 'react';
import {ReactComponent as Logo} from "../images/Logo.svg";

const headerStyles = {
    width: "100%",
    height: 70,
    minHeight: 70,
    backgroundColor: "#565656"
}

export default function Header() {

    return (
        <div style={headerStyles}>
            <div className="header-content">
                <Logo className="logo"/>
                <div className="header-title">Simplify your AD creation process</div>
            </div>
        </div>
    );
}
