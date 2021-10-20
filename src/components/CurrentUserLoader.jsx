import React, { useState, useEffect } from "react";
import axios from 'axios';

export const CurrentUserLoader = ({ children }) => {

    const [ user, setUser ] = useState(undefined);

    useEffect(() => {
        const loadUser = async () => {
            const response = await axios.get('/current-user');
            const currentUser = response.data;
            setUser(currentUser);
        };
        loadUser();
    }, []);

    return (
        <>
        {React.Children.map(children, child => {
            if(React.isValidElement(child))
                return React.cloneElement(child, { user });
            return child;
        })}
        </>
    )
};