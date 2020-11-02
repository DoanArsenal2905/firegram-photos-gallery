import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import { FiSun, FiMoon } from 'react-icons/fi'

const Button = styled.button`
  background: white;
  cursor: pointer;
  border-radius: 20px;
  font-size: 0.8rem;
  margin: 15px 0px 15px 10px;
  &:focus {
    outline: none;
  }
`
const Sun = styled(FiSun)`
  color: #333333;
  background: #ffffff;
`
const Moon = styled(FiMoon)`
  color: #0881a3;
  background: #ffffff; 
`

const Toggle = ({theme, toggleTheme}) => {
  const btnSwitch = theme === 'light' ? <Moon /> : <Sun />

  return (
    <Button style={ theme === 'light' ? { border: '0.3px solid #0881a3' } : { border: '0.3px solid #ffffff' } } onClick={toggleTheme}>
      {btnSwitch}
    </Button>
  )
}
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default Toggle
