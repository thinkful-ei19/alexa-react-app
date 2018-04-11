import React from 'react';

export default function Form(props) {
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                
                let nameInputValue= event.target.nameInput.value
                let addressInputValue = event.target.addressInput.value
                props.add(nameInputValue)
                props.addAddress(addressInputValue)
                event.target.nameInput.value = ''
                event.target.addressInput.value = ''

            }}>
                <label>Name</label>
                <input type="text" name="nameInput" />
                
                <label>Address</label>
                <input type="text" name="addressInput" />

                <button>Submit</button>
            </form>
        </div>
    );
}