import React from "react";
import './logo.css';

export default function({color }: { color: string}) {
    return (
        <header className="header">
            <div className="container logo" style={{color: color || "#333"}}>
                <span className="tracking-tight">JellyWidgets</span>
            </div>
        </header>
    );
}