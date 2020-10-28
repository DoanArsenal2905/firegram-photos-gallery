import React from 'react'
import { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) setShowScroll(true)
    else if (showScroll && window.pageYOffset < 400) setShowScroll(false)
  }

  const crollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  window.addEventListener('scroll', checScrollTop)

  return (
    <FaArrowCircleUp className='scroll-top' onClick={crollTop} style={{ display: showScroll ? 'flex' : 'none' }} />
  )
}

export default ScrollToTop