
export const NumberedList = ({ items, resourceName, itemComponent: ItemComponent }) => {
    return (
        <>
            {items.map((item, idx) => (
                <>
                    <h3>{ idx + 1 }</h3>
                    <ItemComponent key={idx} {...{ [resourceName]: item }} />
                </>
            ))}
        </>
    );
};