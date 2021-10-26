import { useState, useEffect } from "react";
import axios from "axios";

export const useResource = (resourceUrl) => {
    const [ resource, setResource ] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const response = await axios.get(resourceUrl);
            setResource(response.data);
        };
        loadData();    
    }, [ resourceUrl ]);

    return resource;
};