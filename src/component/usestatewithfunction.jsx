import React,{useState} from 'react';

export default function UseStateFun(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count+1)}>
                Click Me
            </button>
           
        </div>
    )
}

