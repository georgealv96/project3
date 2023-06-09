const HeightBar = (props) => {
  return (
    <div className="heightBar">
      <h4>
        {props.heightBar.height.feet} ft. ({props.heightBar.height.meters} m.)
      </h4>
      <h4>{props.heightBar.floors} floors</h4>
    </div>
  )
}

export default HeightBar
