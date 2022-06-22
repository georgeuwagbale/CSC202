import React from "react";

type Props = {
    name: string;
    other?:string;
}

const HelloWorld2: React.FC<Props> = (props) => {
    return(
        <div>
            <p>Hello {props.name}. Greeting from React using TS</p>
        </div>
    );
}

export default HelloWorld2;