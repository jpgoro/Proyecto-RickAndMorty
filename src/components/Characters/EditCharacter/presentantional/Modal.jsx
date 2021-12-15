import { AnimatePresence, motion } from "framer-motion";
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
            <motion.div  className="backdrop">
              <motion.div className="card" layoutId={charsId}>
                <motion.img className="card-img" src={charsData.image}></motion.img>
                <FormEdit/>
                <motion.div
                  className="modal--edit__close"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCharsId(null);
                    setCharsData({});
                  }}
                >
                  <FaWindowClose className="card__close"/>
                </motion.div>
              </motion.div>
              </motion.div>
        )}
      </AnimatePresence>
  );
};

export default Modal;
