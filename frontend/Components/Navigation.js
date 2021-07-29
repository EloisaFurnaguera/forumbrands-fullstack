import React from "react";
import NavigationLink from "./NavigationLink";

const Navigation = () => {
    return (
        <div className="ui secondary pointing menu">
            <NavigationLink className="item" href="/">
                Home
            </NavigationLink>
            <NavigationLink className="item" href="/add">
                Add Pet
            </NavigationLink>
            <NavigationLink className="item" href="/animals">
                View Pets
            </NavigationLink>
        </div>
    );
};

export default Navigation;
