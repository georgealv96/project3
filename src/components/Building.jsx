import HeightBar from './HeightBar'
import Architect from './Architect'
import Location from './Location'

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

  return (
    <a
      href={props.building.website}
      className="building"
      style={{ backgroundColor: buildingColor }}
    >
      <img src={props.building.picture} alt={props.building.name}></img>
      <Location location={props.building} />
      <h2>{props.building.name}</h2>
      <HeightBar heightBar={props.building} />
      <div>
        {props.building.architects.map((architect) => (
          <Architect architect={architect} color={buildingColor} />
        ))}
      </div>
    </a>
  )
}

export default Building
