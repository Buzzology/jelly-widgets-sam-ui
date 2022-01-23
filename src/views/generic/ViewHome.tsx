import React from 'react';
import { Link } from 'react-router-dom';
import LayoutDefault from '../../layouts/LayoutDefault';
import HomeContentRow from './HomeContentRow';


export default function ViewAustralianCompanyNumberGenerator() {
    return (
        <LayoutDefault loading={false}>
            <div className="bg-sky-600">
                <div className="flex justify-center">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-5">
                            <div
                                className="
                                    px-4
                                    py-12
                                    flex flex-col
                                    justify-center
                                    items-center
                                    h-full
                                "
                            >
                                <div>
                                    <h1 className="text-2xl font-bold text-white">
                                        <span className="text-2xl">
                                            Tools for all your Testing Needs.
                                        </span><br />
                                        <span className="text-xl">
                                            Valid generators for TFN, ACN, IRD and more!
                                        </span>
                                    </h1>
                                    <div className="mt-6 text-right align-right">
                                        <Link to="/widgets">
                                            <button
                                                className="
                                                    font-bold
                                                    py-2
                                                    px-4
                                                    rounded-full
                                                    border-white border
                                                    text-white
                                                    bg-sky-600
                                                    transition
                                                    duration-200
                                                    ease-in-out
                                                    hover:bg-sky-500
                                                "
                                            >
                                                Get Started
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            <div className="relative" style={{ maxWidth: "100%", overflow: "hidden" }}>
                                <img
                                    src="/img/laptop-landing.svg"
                                    alt="Support a local business with a friend."
                                    id="main-logo-img"
                                    style={{maxHeight: 500}}
                                />
                                {/* <img
                                    src="avatar2"
                                    alt="Other Avatar #1"
                                    className="rounded-full bg-blue-300 w-20 h-20 other-avatars"
                                    id="other-avatar-1"
                                />
                                <img
                                    src="avatar3"
                                    alt="Other Avatar #2"
                                    className="rounded-full bg-green-300 w-20 h-20 other-avatars"
                                    id="other-avatar-2"
                                />
                                <img
                                    src="avatar4"
                                    alt="Other Avatar #3"
                                    className="rounded-full bg-indigo-300 w-20 h-20 other-avatars"
                                    id="other-avatar-3"
                                />
                                <img
                                    src="avatar1"
                                    alt="Avatar #1."
                                    className="rounded-full bg-red-300 w-20 h-20"
                                    id="across-1-avatar"
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
                    <path
                        fill="#0284c7"
                        fill-opacity="1"
                        d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,133.3C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    ></path>
                </svg>
            </div>
            <div className="flex justify-center">
                <div className="max-w-md md:max-w-5xl">
                    <HomeContentRow
                        imagePath="/img/test-number-generator.jpg"
                        title="Valid Test Data"
                        text="
                            Use our widgets to generate accurate samples. These
                            tools are designed to produce values with valid 
                            check digits that are perfect for 
                            testing your applications.
                            "
                        buttonText="Generate"
                        link="/widgets"
                    />

                    <HomeContentRow
                        imagePath="/img/tax-file-number.jpg"
                        title="Check a Number"
                        text="
                            Do you have a tax file number you need to double check? Use our validators to
                            ensure that you've been given a valid one."
                        buttonText="Validate"
                        link="/widgets"
                        reverseImageOrder={true}
                    />

                    <HomeContentRow
                        imagePath="/img/contact-us.jpg"
                        title="Request Tools"
                        text="Looking for a widgets or features that we don't have yet? Let us know and we'll see if we can build it for you!"
                        buttonText="Contact"
                        link="/contact"
                    />
                </div>
            </div>
        </LayoutDefault>
    )
}