import React from "react";
import axios from "axios";

const capitalize = value => value.charAt(0).toUpperCase() + value.slice(1);

export const withEditableResource = (Component, resourcePath, resourceName) => {
    return props => {
        const [ originalData, setOriginalData ] = React.useState(null);
        const [ data, setData ] = React.useState(null);

        React.useEffect(() => {
            const loadData = async () => {
                const response = await axios.get(resourcePath);
                setData(response.data);
                setOriginalData(response.data);
            };
            loadData();
        }, []);

        const onChange = changes => {
            setData({ ...data, ...changes });
        };

        const onSave = async () => {
            const response = await axios.post(resourcePath, { [resourceName]: data });
            setOriginalData(response.data);
            setData(response.data);
        };

        const onReset = () => {
            setData(originalData);
        };

        const cap = capitalize(resourceName);

        const resourceProps = {
            [resourceName]: data,
            [`onChange${cap}`]: onChange,
            [`onSave${cap}`]: onSave,
            [`onReset${cap}`]: onReset
        };

        return <Component {...props} {...resourceProps}/>;
    };
};