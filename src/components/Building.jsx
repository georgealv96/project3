const Building = (props) => {
  return (
    <div className="building">
      <img src={props.building.picture} alt={props.building.name}></img>
      <h2>{props.building.name}</h2>
      <h3>{props.building.city},</h3>
      <h4>{props.building.state_abbreviation}</h4>
    </div>
  )
}

export default Building
