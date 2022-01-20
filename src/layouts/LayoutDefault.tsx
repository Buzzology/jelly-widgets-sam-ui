import React from 'react';
import Header from './Header';
import './logo.css';

const LayoutDefault = ({ children, loading }: { children: React.ReactNode, loading: boolean }) => {
    return (
        <>
            <Header />
            <main>
                {!loading && (
                    children
                )}
            </main>
            <div style={{ position: "fixed", bottom: 0, right: 0, height: "75px" }}>
                {/* <MessagesList /> */}
            </div>
        </>
    )
}

export default LayoutDefault;