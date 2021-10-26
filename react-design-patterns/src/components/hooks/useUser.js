import { useState, useEffect } from "react";
import axios from "axios";

export const useUser = ({ userId }) => {
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            const response = await axios.get(`/users${userId}`);
            const currentUser = response.data;
            setUser(currentUser);
        };
        loadUser();
    }, [ userId ]);

    return user;
};