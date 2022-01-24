import React from "react";
import { Link } from "react-router-dom";
import './logo.css';

export default function Logo({color }: { color: string}) {
    return (
        <header className="header">
            <div className="container logo pointer" style={{color: color || "#333"}}>
                <Link to="/"><span className="tracking-tight">TesterWidgets</span></Link>
            </div>
        </header>
    );
}