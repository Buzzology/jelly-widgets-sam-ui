import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Used to change the document's title via a hoook.
const useDocTitle = (title: string) => {
    const [doctitle, setDocTitle] = useState(title);
    const { pathname } = useLocation();    

    useEffect(() => {
        // Change the document title.
        setDocTitle(doctitle);

        // Report a page change to ga.
        (window as any).gtag('event', 'page_view', {
            page_title: doctitle,
            page_path: pathname,
            send_to: 'G-FEE62SDTH9'
          });
    }, [doctitle, pathname]);

    return [doctitle, setDocTitle];
};

export { useDocTitle };