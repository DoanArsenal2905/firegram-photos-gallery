import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { projectFirestore } from '../firebase/config'
import { motion } from 'framer-motion'
import { FiTrash2, FiDownload } from 'react-icons/fi'

const ImageGrid = ({setSelectedImg}) => {
  const { docs } = useFirestore('images')
  
  const onClickDownloadImage = url => {
    window.open(url, '_blank')
  }

  const onClickDeleteImage = (id, collection) => {
    if ((window.confirm('Are you sure to delete this photo?'))) projectFirestore.collection(collection).doc(id).delete()
  }

  return (
    <div className='img-grid'>
      {docs && docs.map(doc => (
        <div className='img-show'>
          <motion.div
          className='img-wrap' key={doc.id}
          whileHover={{ opacity: 0.8 }}
          layout
          onClick={() => setSelectedImg(doc.url)}
        >
            <motion.img src={doc.url} alt='upload-pic'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
          <label className='download'>
            <input className='button' onClick={() => onClickDownloadImage(doc.url)}></input>
            <FiDownload />
          </label>
          <label className='delete'>
            <input className='button' onClick={() => onClickDeleteImage(doc.id, 'images')}></input>
            <FiTrash2 />
          </label>
        </div>
      ))}
    </div>
  )
}

export default ImageGrid