const Architect = (props) => {
  return (
    <div
      id="architect"
      style={{
        color: props.color,
        backgroundColor: props.architect && 'white'
      }}
    >
      {props.architect}
    </div>
  )
}

export default Architect
