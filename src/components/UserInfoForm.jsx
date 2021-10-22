
import { SplitScreen, withEdiableUser, withEditableResource } from ".";

export const UserInfoForm = withEdiableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

	return user ? (
		<>
            <label>
                Name
                <input type="text" value={name} onChange={e => onChangeUser({ name: e.target.value })} />
            </label>
            <label>            
                Age
                <input type="text" value={age} onChange={e => onChangeUser({ age: e.target.value })} />
            </label>
            <label>            
                Hair Color
                <input type="text" value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })} />
            </label>
            <br/>
            <SplitScreen>
                <button onClick={onResetUser}>Reset</button>
                <button onClick={onSaveUser}>Save</button>
            </SplitScreen>
		</>
	) : <p>Loading...</p>;
}, 1);


// export const UserInfoFormGeneric = () => {
//     console.log("withEditableResource", withEditableResource);
//     return <p>Hola</p>;
// };

/**
 * Using generic wrapper
 */
export const UserInfoFormGeneric = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

	return user ? (
		<>
            <label>
                Name
                <input type="text" value={name} onChange={e => onChangeUser({ name: e.target.value })} />
            </label>
            <label>            
                Age
                <input type="text" value={age} onChange={e => onChangeUser({ age: e.target.value })} />
            </label>
            <label>            
                Hair Color
                <input type="text" value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })} />
            </label>
            <br/>
            <SplitScreen>
                <button onClick={onResetUser}>Reset</button>
                <button onClick={onSaveUser}>Save</button>
            </SplitScreen>
		</>
	) : <p>Loading...</p>;
}, '/users/1', 'user');