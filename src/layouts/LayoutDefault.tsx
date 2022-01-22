import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './logo.css';

const LayoutDefault = ({ children, loading }: { children: React.ReactNode, loading: boolean }) => {
    return (
        <>
            <Header />
            <main className="pb-10 min-h-screen">
                {!loading && (
                    children
                )}
            </main>
            <div style={{ position: "fixed", bottom: 0, right: 0, height: "75px" }}>
                {/* <MessagesList /> */}
            </div>
            <Footer />
        </>
    )
}

export default LayoutDefault;