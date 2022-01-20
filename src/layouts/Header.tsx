import React from "react";
import Logo from "./Logo";

export default function() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-sky-600 p-6">
            <div className="container">
                <Logo color="#FFF"/>
            </div>
        </nav>
    );
}