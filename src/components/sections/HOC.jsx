import { printProps, UserInfo, UserInfoForm, UserInfoFormGeneric, withUser } from "..";

export const HOC = () => {

    const UserInfoWrap = printProps(UserInfo);

    const WrappedUser = withUser(UserInfo, 1);

    return (
        <>
            <p>Basic wrapped component</p>
            <UserInfoWrap user={{
                name: "Abraham",
                age: 30,
                hairColor: "Brown",
                hobbies: [
                    "Listen music",
                    "Watch Netflix"
                ]
            }}
            />
            <p>Wrapped with get data</p>
            <WrappedUser />
            <p>Wrapped with get data</p>
            <UserInfoForm />
            <p>Wrapped with get data, with generic component</p>
            <UserInfoFormGeneric />
        </>
    );
};