import { useState, useEffect } from "react";

const Router = ({ path, children }) => {
    const [currentPath, setcurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setcurrentPath(window.location.pathname);
        };

        window.addEventListener("popstate", onLocationChange);
        return () => {
            window.removeEventListener("popstate", onLocationChange);
        };
    }, []);

    const pathMatch = currentPath.split("/")[1] === path.split("/")[1];
    return pathMatch ? children : null;
};

export default Router;
