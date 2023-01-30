import * as React from 'react';
import {ReactComponent as Logo} from "../images/Logo.svg";

const headerStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 70,
    minHeight: 70,
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    backgroundColor: "#565656"
}

export default function Header() {

    return (
        <div style={headerStyles}>
            <Logo className="logo"/>
        </div>
    );
}
