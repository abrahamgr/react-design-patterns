
/**
 * Wrap a component and pass properties, add functionality to existing components
 * @param {*} printProps 
 * @returns Wrapped component
 */

export const printProps = Component => {
    return (props) => {
        return <Component {...props} />
    };
};