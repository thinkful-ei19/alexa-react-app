import React from 'react';

export default function List(props) {
    console.log(props)
    const names = props.users.map((name, index) => (
        <li key={index}>
           {name} 
        </li>
    ))

    const addresses = props.items.map((address, index) => (
        <li key={index}>
            {address}
        </li>
    ))

    return (
            <ul>
                {names}
                {addresses}
            </ul>
    );
}