import React,{ useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FaWindowClose } from "react-icons/fa";
import LocationContext from '../../../contexts/locationContext/locationContext';
import { motion } from 'framer-motion'
import Reel from './Reel/Reel';

const EditLocations = () => {
    const {locationData,setLocationData,locationId,setLocationId} = useContext(LocationContext) /* setKicatuibs ki vit a ysar en el form */
    return (
        <AnimatePresence exitBeforeEnter>
        {locationId && (
            <motion.div  className="backdrop">
              <motion.div className="modal--edit" layoutId={locationId}>
                <motion.img className="modal--edit__img"></motion.img>
                <Reel></Reel>
                <motion.div
                  className="modal--edit__close"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLocationId(null);
                    setLocationData({});
                  }}
                >
                  <FaWindowClose/>
                </motion.div>
              </motion.div>
              </motion.div>
        )}
      </AnimatePresence>
    )
}

export default EditLocations
