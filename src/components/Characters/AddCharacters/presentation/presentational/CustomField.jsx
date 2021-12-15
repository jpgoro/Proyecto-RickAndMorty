import React from 'react'
import "./CustomField.scss"


const CustomField = ({form,cond,setCond}) => {
    

    const chgStatus = () => {
        if (cond == "Alive"){
            setCond("Dead")
            form.setFieldValue("status","Dead")
        } else{
            setCond("Alive")
            form.setFieldValue("status","Alive")
        }
    }   


    return (
        <div className="form--editCharacter__status">
            <button id='alive' className={cond == "Alive" ? "alive" : "" }  type="button" onClick={()=> chgStatus()}>Alive</button>
            <button id='dead' className={cond == "Dead" ? "dead" : "" } type="button" onClick={()=> chgStatus()}>Dead</button>
        </div>
    )
}

export default CustomField
