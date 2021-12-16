<<<<<<< HEAD
const CustomField = ({ form, status, setStatus }) => {
=======
import React from 'react'
import '../../../../../scss/app.scss'


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

>>>>>>> 5f2ba838e66fe8a4b376a8f4046a9e9aafa9b237

    const handleAlive = () => {
        setStatus("Alive")
        form.setFieldValue("status", "Alive")
    }
    const handleDead = () => {
        setStatus("Dead")
        form.setFieldValue("status", "Dead")
    }
    return (
        <div className="status">
            <button id='status' className={status == "Alive" ? "alive" : ""} type="button" onClick={handleAlive}>Alive</button>
            <button id='status' className={status == "Dead" ? "dead" : ""} type="button" onClick={handleDead}>Dead</button>
        </div>
    )
}

export default CustomField
