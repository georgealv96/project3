import { useState } from 'react'
import HeightBar from './HeightBar'
import Architect from './Architect'
import Location from './Location'
import Picture from './Picture'

const Building = (props) => {
  const heightRanking = props.building.ranking
  let buildingColor
  if (heightRanking <= 10) {
    buildingColor = 'red'
  } else if (heightRanking > 10 && heightRanking <= 20) {
    buildingColor = 'orange'
  } else if (heightRanking > 20 && heightRanking <= 30) {
    buildingColor = 'green'
  } else if (heightRanking > 30 && heightRanking <= 40) {
    buildingColor = 'blue'
  } else if (heightRanking > 40) {
    buildingColor = 'purple'
  }

  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <a
      href={props.building.website}
      className="building"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: hover ? 'black' : buildingColor
      }}
      target="_blank"
    >
      <Picture picture={props.building} isHover={hover} />
      <Location location={props.building} />
      <h2>{props.building.name}</h2>
      <HeightBar heightBar={props.building} />
      <div>
        {props.building.architects.map((architect) => (
          <Architect
            architect={architect}
            color={buildingColor}
            isHover={hover}
          />
        ))}
      </div>
    </a>
  )
}

export default Building
