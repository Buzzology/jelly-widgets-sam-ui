import React from 'react';

const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
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

export default LayoutDefault;
