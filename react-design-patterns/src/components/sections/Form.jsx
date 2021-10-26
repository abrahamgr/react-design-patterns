import React from "react";


export const UncontrolledForm = () => {
    const nameRef = React.createRef();
    const ageRef = React.createRef();
    const hairColorRef = React.createRef();

    const handleSubmit = (e) => {
        const user = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            hairColor: hairColorRef.current.value,
        };
        console.log("User", user);
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" ref={nameRef} />
            <br/>
            <input name="age" type="text" placeholder="Age" ref={ageRef} />
            <br/>
            <input name="hairColor" type="text" placeholder="Hair Color" ref={hairColorRef} />
            <br/>
            <input type="submit" value="Submit" />
        </form>
    );
};

export const ControlledForm = () => {
    
    const [ name, setName ] = React.useState("");
    const [ age, setAge ] = React.useState("");
    const [ hairColor, setHairColor ] = React.useState("");

    React.useEffect(() => {

    }, [ name ])

    const handleChange = (e) => {
        const value = e.target.value;
        switch(e.target.name) {
            case "name":
                setName(value);
                break;
            case "age":
                setAge(value);
                break;
            case "hairColor":
                setHairColor(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = (e) => {
        const user = {
            name,
            age,
            hairColor,
        };
        console.log("User", user);
        e.preventDefault();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" onChange={handleChange} />
            <br/>
            <input name="age" type="text" placeholder="Age" onChange={handleChange}/>
            <br/>
            <input name="hairColor" type="text" placeholder="Hair Color" onChange={handleChange} />
            <br/>
            <input type="submit" value="Submit" />
        </form>
    );
};

export const Form = () => {

    return (
        <>
            <p>Uncontrolled</p>
            <UncontrolledForm />
            <p>Controlled</p>
            <ControlledForm />
        </>
    );
};