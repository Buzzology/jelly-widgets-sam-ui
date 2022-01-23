import React from 'react';
import ContactForm from '../../components/contact/ContactForm';
import LayoutDefault from '../../layouts/LayoutDefault';


export default function ViewAustralianCompanyNumberGenerator() {
    return (
        <LayoutDefault loading={false}>
            <div className="grid grid-cols-12">
                <div className="col-span-6 flex justify-center items-center">
                    <div className="max-w-lg">
                        <div className="p-2 pb-5 text-center">
                            <h1 className="text-4xl font-bold text-gray-900 mt-3">
                                Contact us
                            </h1>
                            <p className="text-medium font-light mt-3">
                                You can reach us at any time using the form below. We will get back to you as soon as possible.
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
                <div className="col-span-6 split-background bg-sky-500"></div>
            </div>
        </LayoutDefault>
    )
}