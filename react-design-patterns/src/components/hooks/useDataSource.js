import { useState, useEffect } from "react";

export const useDataResource = getResourceFunc => {
    const [ resource, setResource ] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const data = await getResourceFunc();
            setResource(data);
        };
        loadData();    
    }, [ getResourceFunc ]);

    return resource;
};