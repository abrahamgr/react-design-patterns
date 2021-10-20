export const SmallProductListItem = ({ product }) => {
    const { name, price } = product;
    return (
        <>
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
        </>
    );
};