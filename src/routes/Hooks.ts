import { useEffect, useState } from "react";

// Used to change the document's title via a hoook.
const useDocTitle = (title: string) => {
    const [doctitle, setDocTitle] = useState(title);

    useEffect(() => {
        document.title = doctitle;
    }, [doctitle]);

    return [doctitle, setDocTitle];
};

export { useDocTitle };