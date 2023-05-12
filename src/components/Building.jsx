import HeightBar from './HeightBar'
import Architect from './Architect'

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
    <div className="building" style={{ backgroundColor: buildingColor }}>
      <img src={props.building.picture} alt={props.building.name}></img>
      <h2>{props.building.name}</h2>
      <h3>{props.building.city},</h3>
      <h3>{props.building.state}</h3>
      <HeightBar heightBar={props.building} />
      <div>
        {props.building.architects.map((architect) => (
          <Architect architect={architect} />
        ))}
      </div>
    </div>
  )
}

export default Building
