const Picture = (props) => {
  return (
    <div id="picture-box">
      <img
        src={props.picture.picture}
        alt={props.picture.name}
        style={{
          opacity: props.isHover ? null : '0.75'
        }}
      ></img>
    </div>
  )
}

export default Picture
