import React from "react";
import axios from "axios";

export const withEdiableUser = (Component, userId) => {
    return props => {
        const [ originalUser, setOriginalUser ] = React.useState(null);
        const [ user, setUser ] = React.useState(null);

        React.useEffect(() => {
            const loadUser = async () => {
                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
                setOriginalUser(response.data);
            };
            loadUser();
        }, []);

        const onChangeUser = changes => {
            setUser({ ...user, ...changes });
        };

        const onSaveUser = async () => {
            const response = await axios.post(`/users/${userId}`, { user });
            setOriginalUser(response.data);
            setUser(response.data);
        };

        const onResetUser = () => {
            setUser(originalUser);
        };

        return <Component {...props} 
            user={user} 
            onChangeUser={onChangeUser}
            onSaveUser={onSaveUser}
            onResetUser={onResetUser}
        />;
    };
};