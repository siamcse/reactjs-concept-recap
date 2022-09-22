import React from 'react';

const Books = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Books List</h2>
            <p>Name: {props.name}</p>
            <p>class: {props.class}</p>
        </div>
    );
};

export default Books;