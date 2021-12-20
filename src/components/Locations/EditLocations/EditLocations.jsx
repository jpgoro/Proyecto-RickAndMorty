import { useContext } from 'react'
import LocationContext from '../../../contexts/locationContext/locationContext';
import { FaWindowClose } from "react-icons/fa";
import FormEdit from './presentational/FormEdit';

const EditLocations = () => {
  const { setLocationData, locationId, setLocationId } = useContext(LocationContext) /* setKicatuibs ki vit a ysar en el form */
  return (
    <>
      {locationId && (
        <div className="backdrop">
          <div className="card-edit">

            {/* Form */}
            <FormEdit />
            {/* Image */}
            <img className="card-image-back-edit" src="https://i.ytimg.com/vi/BSymgfwoAmI/maxresdefault.jpg"></img>
            {/* Close Button */}
            <div
              className="btn-close"
              onClick={(e) => {
                e.stopPropagation();
                setLocationId(null);
                setLocationData({});
              }}
            >
              <FaWindowClose />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditLocations
