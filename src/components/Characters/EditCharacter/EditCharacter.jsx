import { useContext } from "react";
import CharContext from "../../../contexts/charContext/charContext";
import { FaWindowClose } from "react-icons/fa";
import FormEdit from "./presentantional/FormEdit";

const EditCharacter = () => {
  const { charsId, setCharsId, charsData, setCharsData } =
    useContext(CharContext);
  return (
    <>
      {charsId && (
        <div className="backdrop">
          <div className="card-edit">
            {/* Form */}
            <FormEdit />

            {/* Image */}
            <img
              className="card-image-back-edit"
              src={charsData.image}
              alt=""
            />

            {/* Close Button */}
            <div
              className="btn-close"
              onClick={(e) => {
                e.stopPropagation();
                setCharsId(null);
                setCharsData({});
              }}
            >
              <FaWindowClose />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditCharacter;
