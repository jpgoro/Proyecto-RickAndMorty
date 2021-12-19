import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import CharContext from "../../../../contexts/charContext/charContext";
import "./Modal.scss";
import { FaWindowClose } from "react-icons/fa";
import FormEdit from "./FormEdit";

const Modal = () => {
  const { charsId, setCharsId, charsData, setCharsData} = useContext(CharContext)
  return (
      <AnimatePresence exitBeforeEnter>
        {charsId && (
            <div className="backdrop">
              <div className="card-back" >
                <FormEdit/>
                <div
                  className="modal--edit__close"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCharsId(null);
                    setCharsData({});
                  }}
                >
                  <FaWindowClose className="card__close"/>
                </div>
              </div>
              </div>
        )}
      </AnimatePresence>
  );
};

export default Modal;
