import React, { useState, useEffect } from "react";

export const DataSource = ({ getDataFunc = () => {}, resourceName, children }) => {

    const [ state, setState ] = useState(undefined);

    useEffect(() => {
        const loadData = async () => {
            const data = await getDataFunc();
            setState(data);
        };
        loadData();
    }, [ getDataFunc ]);

    return (
        <>
            {React.Children.map(children, child => {
                if(React.isValidElement(child))
                    return React.cloneElement(child, { [resourceName]: state });
                return child;
            })}
        </>
    )
};