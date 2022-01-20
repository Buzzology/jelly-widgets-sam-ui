import React from 'react';

const LayoutDefault = ({ children, loading }: { children: React.ReactNode, loading: boolean }) => {
    return (
        <>
            <div>
                {/* <ToolBar/>
            <Sides/>
            <Backdrop/> */}
            </div>
            <main
                className="min-h-screen flex justify-center"
            >
                {!loading && (
                    <div className="max-w-md md:max-w-5xl flex-grow pt-10">
                        {children}
                    </div>
                )}
            </main>
            <div style={{ position: "fixed", bottom: 0, right: 0, height: "75px" }}>
                {/* <MessagesList /> */}
            </div>
        </>
    )
}

export default LayoutDefault;