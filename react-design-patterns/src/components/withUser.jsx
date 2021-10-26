import React from "react";
import axios from "axios";

export const withUser = (Component, userId) => {
    return props => {
        const [ user, setUser ] = React.useState(null);
        
        React.useEffect(() => {
            const loadUser = async () => {
                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
            };
            loadUser();
        }, [ ]);

        return <Component {...props} user={user} />;
    };
};