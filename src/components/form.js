import React from 'react';

export default function Form() {
    return (
        <div>
            <form>
                <label>Name</label>
                <input type="text" name="nameInput"></input>
                <label>Address</label>
                <input type="text" name="addressInput"></input>
                <button>Submit</button>
            </form>
        </div>
    );
}