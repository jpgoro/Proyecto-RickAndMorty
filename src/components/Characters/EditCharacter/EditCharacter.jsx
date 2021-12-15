import {useState} from 'react'
import Modal from './presentantional/Modal'


const EditCharacter = () => {
    const [showModal,setShowModal] = useState(true)
    return (
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
    )
}

export default EditCharacter
