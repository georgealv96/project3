const Location = (props) => {
  return (
    <div className="location">
      <h3>{props.location.city},</h3>
      <h3>{props.location.state}</h3>
    </div>
  )
}

export default Location
