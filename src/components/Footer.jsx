import React from 'react'

import useFirestore from '../hooks/useFirestore'

const Footer = () => {
  const { docs } = useFirestore('images')

  return (
    docs.length > 0 ? (
      <div className='footer'>
        <p>Made by Ngo Quoc Doan <span role='img' aria-label='smile-tear'>😎😎</span></p>
      </div>
    ) : null
  )
}

export default Footer