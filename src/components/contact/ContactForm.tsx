import React, { useState } from "react"
import { Link } from "react-router-dom"
import PrimaryButton from "../form/PrimaryButton"
import { Contact } from "./contactApi";

export default function ContactForm() {
    const [sent, setSent] = useState(false);

    return (
        <div className="grid w-full justify-items-center pt-9">
            {sent ? <ContactFormSent /> : (
            <ContactFormNotSent
                onSent={() => setSent(true)}
            />
            )}
        </div>
    )
}

function ContactFormSent() {
    return (
        <div className="rounded-xl border overflow-hidden w-96">
            <div className="bg-green-500 text-white text-center">
                <i className="material-icons text-8xl">check_circle</i>
            </div>
            <div className="text-center pt-6 pb-6">
                <span className="text-lg font-light">Thanks for the message</span><br />
                <span className="text-sm text-gray-500 font-light"
                >We'll get back to you shortly. Click <Link to="/" className="text-sky-600 font-medium hover:underline">here</Link> to go back.</span><br />
            </div>
        </div>
    );
}

function ContactFormNotSent({
    onSent,
}: {
    onSent: () => void;
}) {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    // Sent the contact request to the api.
    const sendContactRequest = async (e: any) => {
        e.preventDefault();

        setSubmitting(true);
        try {
            if (await Contact({
                email,
                message,
                subscribe: false,
            })) {
                onSent();
            } else {
                // An error occured
                console.error("An error occurred submitting the contact request.")
            }
        } catch(e) {
            console.error(e);
            setSubmitting(false);
        }
    }

    return (
        <div className="w-full max-w-lg">
            <div className="flex flex-wrap mb-6">
                <div className="w-full px-3 pt-6">
                    <label
                        className="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700 text-xs
                  font-bold
                  mb-2
                "
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="
                  appearance-none
                  block
                  w-full
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none
                  focus:bg-white
                  focus:border-gray-500
                "
                        id="email"
                        type="text"
                        placeholder="Your email."
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                </div>
                <div className="w-full px-3 pt-6">
                    <label
                        className="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700 text-xs
                  font-bold
                  mb-2
                "
                        htmlFor="comment"
                    >
                        Message
                    </label>
                    <textarea
                        className="
                  appearance-none
                  block
                  w-full
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  leading-tight
                  focus:outline-none
                  focus:bg-white
                  focus:border-gray-500
                "
                        id="comment"
                        rows={5}
                        onChange={(e: any) => setMessage(e.target.value)}
                        placeholder="Let us know how we can help."
                    ></textarea>
                </div>
                <div className="grid w-full justify-items-end p-3 mt-3">
                    <PrimaryButton
                        loading={submitting}
                        label="Send"
                        onClick={sendContactRequest}
                        additionalClasses="rounded-full w-full"
                    />
                    <Link to="/" className="w-full text-gray-400 text-xs text-center mt-3 font-bold">
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    )
}