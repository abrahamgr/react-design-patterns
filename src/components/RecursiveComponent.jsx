
const isObject = x => typeof x === "object" && x !== null;

export const RecursiveComponent = ({ data }) => {
    if(!isObject(data))
        return <span>{data}</span>;

    const pairs = Object.entries(data);
    return (
        <>
        <ul>
            {pairs.map(([ key, value]) => {
                return <li key={`${key}_${value}`}>
                    {key}:
                    <RecursiveComponent data={value} />
                </li>;
            })}
        </ul>
        </>
    );
};