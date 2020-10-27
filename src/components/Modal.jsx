import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({selectedImg, setSelectedImg}) => {
  const handleClick = e => {
    if (e.target.classList.contains('back-drop')) {
      setSelectedImg(null)
    }
  }

  return (
    <motion.div
      className='back-drop'
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt='larged-pic'
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}

export default Modal