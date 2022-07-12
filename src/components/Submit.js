import React, { useEffect, useState } from 'react';
import Item from './Item';

function Submit(props){

    const numbers = ["1","2","3","4","5"];
    const [rating, setRating] = useState(numbers.map(number=>{
        return number = new Item(number);
    }));

    useEffect(()=>{
        console.log(rating)
    },[rating])

    return(
        <div className="submit">
            <ul>
                {rating.map(item => <li>{item.value}</li>)}
            </ul>
            <button className="submittButton">
                SUBMIT
            </button>
        </div>
    )
}

export default Submit;