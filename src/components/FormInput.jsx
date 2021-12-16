import React from 'react'
import "./formInput.css"

const FormInput = (props) => {
    return (
        <div className="formInput">

            {/* <label>Username</label> */}
            <input name={props.name} placeholder= {props.placeholder} >

            </input>
            
        </div>
    )
}

export default FormInput
