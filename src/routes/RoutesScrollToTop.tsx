import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// https://stackoverflow.com/a/64363845/522859
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}