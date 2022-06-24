import React, {useState, useEffect} from 'react';
import ShowUser from './ShowUser';
import { User } from './type-defs';

type Props = {
    name?: string;
}

const HelloWorld6: React.FC<Props> = (props) => {
//const [state, setState] = useState(initialState);
    const [user, setUser] = useState<User | null>(null);
    const fetchData = async () => {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/2`);
            let data = await response.json()
            setUser(data);
        } catch (error) {
            setUser(null);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const showUser = () => {
        if (user !== null){
            return <ShowUser user={user}/>
        }else {
            return `No user to display`;
        }
    }

    return(
        <div>
            <p>Hello {props.name}. Greetings from HelloWorld6. in TS</p>
            <p>
                {showUser()}
            </p>
        </div>
    )
}

HelloWorld6.defaultProps = {
    name: "Hans"
}

export default HelloWorld6;
