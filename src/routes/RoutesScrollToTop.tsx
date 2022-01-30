import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// https://stackoverflow.com/a/64363845/522859
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {        
        window.scrollTo(0, 0);

        (window as any).gtag('event', 'page_view', {
            page_title: document.title,
            // page_location: '<Page Location>',
            page_path: pathname,
            send_to: 'G-FEE62SDTH9'
          })
    }, [pathname]);

    return null;
}