export const LargeProductListItem = ({ product }) => {
    const { name, price, description, rating } = product;
    return (
        <>
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <p>Average rating: {rating}</p>
        </>
    );
};