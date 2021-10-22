import { UserInfo, UserInfoHook } from "..";
import { useCurrentUser, useDataResource } from '../hooks';
import axios from "axios";

const serverResource = async resourceUrl => {
    const data = await axios.get(resourceUrl);
    return data.data;
};

export const Hooks = () => {

    const user = useCurrentUser();
    const userData = useDataResource(() => serverResource(`/users/${3}`));

    return (
        <>
            <p>UserInfo</p>
            <UserInfo user={user} />
            <p>UserInfoHook</p>
            <UserInfoHook userId={2} />
            <p>UserDataSource</p>
            <UserInfo user={userData} />
        </>
    );
};