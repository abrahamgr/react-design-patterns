import { UserInfo, ProductInfo, DataSource } from ".";
import axios from 'axios';


const loadData = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

const getLocalStorageData = key => {
    return localStorage.getItem(key);
};

const Text = ({ text }) => <h3>{text}</h3>

export const UserComponent = () => {
    return (
        <>
            {/* <UserLoader userId={1}>
                <UserInfo />
            </UserLoader> */}
            {/* <ResourceLoader resourceUrl="/users/1" resourceName="user" >
                <UserInfo />
            </ResourceLoader>
            <ResourceLoader resourceUrl="/products/1" resourceName="product" >
                <ProductInfo />
            </ResourceLoader> */}
            <DataSource  getDataFunc={() => loadData("/users/1")} resourceName="user">
                <UserInfo />
            </DataSource>
            <DataSource  getDataFunc={() => loadData("/products/1")} resourceName="product">
                <ProductInfo />
            </DataSource>
            <DataSource  getDataFunc={() => getLocalStorageData("message")} resourceName="text">
                <Text />
            </DataSource>
        </>
    );
};