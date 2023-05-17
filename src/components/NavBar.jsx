import { useState } from 'react'

const NavBar = (props) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: hover ? props.navBar.color : 'white',
        color: hover ? 'white' : 'black',
        borderBottom: hover ? 'solid 0.15em' : ' solid 0.15em'
      }}
    >
      {props.navBar.button}
    </div>
  )
}

export default NavBar
