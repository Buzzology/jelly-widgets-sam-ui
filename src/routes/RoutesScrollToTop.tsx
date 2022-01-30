import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from 'react-ga';

// https://stackoverflow.com/a/64363845/522859
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        ReactGA.pageview(pathname);
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}