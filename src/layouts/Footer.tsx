import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
    const [submitting, setSubmitting] = useState(false);

    return (
        <footer className="flex justify-center px-4 text-gray-100 bg-gray-800">
            <div className="container py-6">
                <h1 className="text-center text-lg font-bold lg:text-2xl">
                    Join the feed to get the latest on <br />
                    widgest, updates and news.
                </h1>

                <div className="flex justify-center mt-6">
                    <div className="bg-white rounded-lg">
                        <div className="flex flex-wrap justify-between md:flex-row">
                            <input
                                type="email"
                                className="
                                    m-1
                                    p-2
                                    appearance-none
                                    text-gray-700 text-sm
                                    border-none
                                    focus:outline-none
                                "
                                v-model="email"
                                placeholder="Enter your email"
                            />
                            <button
                                className="
                                    w-full
                                    m-1
                                    p-2
                                    text-sm
                                    rounded-lg
                                    font-semibold
                                    lg:w-auto
                                    bg-gray-800
                                    text-white
                                "
                            >
                                {submitting ? (
                                    <i
                                        className="
                                        animate-spin
                                        material-icons
                                        text-sm text-white
                                        pr-6
                                        pl-6
                                    "
                                    >
                                        autorenew
                                    </i>
                                ) : "Subscribe"}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-px mt-6" />

                <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
                    <Logo color="#FFF" />
                    <div className="flex mt-4 md:m-0">
                        <div className="-mx-4">
                            <Link to="/" className="px-4 text-sm text-link" style={{ color: "#FFF" }}>Home</Link>
                            <Link to="/widgets" className="px-4 text-sm text-link" style={{ color: "#FFF" }}>Widgets</Link>
                            <Link to="/contact" className="px-4 text-sm text-link" style={{ color: "#FFF" }}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
}