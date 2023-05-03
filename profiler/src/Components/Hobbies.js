import React, {useState} from 'react';
import data from '../index';

export default function Hobbies () {

    const [hobbies, setHobbies] = useState([]);
    let hobbyId = 0;  
    // setHobbies([
    //     ...hobbies,
    //     {id: hobbyId++, hobby: "Reading"},
    // ]) //This is to make it scalable, so that we can add more hobbies later on

    return (
        <div class="hobbies">
            <h3> My Hobbies: </h3>
            <div class='hlist'> 
                <ul>
                    {data.hobbyList.map(hobby => (
                        <li key={hobby.id}> {hobby} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}