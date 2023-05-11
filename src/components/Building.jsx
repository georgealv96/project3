const Building = (props) => {
  return (
    <div className="building">
      <h2>{props.building.name}</h2>
      <img src={props.building.picture} alt={props.building.name}></img>
      <h3>
        {props.building.city} - {props.building.state_abbreviation}
      </h3>
    </div>
  )
}

export default Building
