const CustomField = ({ form, status, setStatus }) => {

    const chgStatus = () => {
        if (cond == "Alive") {
            setCond("Dead")
            form.setFieldValue("status", "Dead")
        } else {
            setCond("Alive")
            form.setFieldValue("status", "Alive")
        }
    }
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
