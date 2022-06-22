import React, {useEffect, useState} from 'react'

const HelloWorld5 = (props) => {
    const [name, setName] = useState(props.name);
    const [count, setCount] = useState(0);

    const changeNameToGreet = (event) => {
        setName(event.target.value);
    };

    useEffect(() => {
        document.title = `Hello ${name} with click count ${count}`;
    });

    useEffect(() => {
        window.alert(`Hello ${name}, be aware that you have clicked ${count} times.`);
    }, [count]);


    return(
       <div>
            <p>Hello {name}. Greeting from React written in TypeScript</p>
            <p>
                <input type="text" placeholder="Write a name here..." name="name_to_greet" onInput={changeNameToGreet}/>
            </p>
            <p>You clicked {count} times</p>
            <p>
                <button onClick={() => setCount(count+1)} >Click me</button>
            </p>
        </div>
    )
}

HelloWorld5.defaultProps = {
    name: "George"
};

export default HelloWorld5;