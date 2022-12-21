import  React, { useState } from 'react';
import data from "./ListData.json";

function List(props) {
    const filteredData = data.filter((i) => {
        //if no input the return the original
        if (props.input === '') {
            return i;
        }
        //return the item which contains the user input
        else {
            return i.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List