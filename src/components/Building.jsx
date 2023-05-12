import HeightBar from './HeightBar'
import Architect from './Architect'

const Building = (props) => {
  console.log(props.building.architects)
  return (
    <div className="building">
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
