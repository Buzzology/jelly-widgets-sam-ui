import React from 'react';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div>
                {/* <ToolBar/>
            <Sides/>
            <Backdrop/> */}
            </div>
            <main>{children}</main>
        </>
    )
}

export default DefaultLayout;
