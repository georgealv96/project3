import './App.css'
import buildingArray from './buildings.json'

const App = () => {
  return (
    <div>
      <img src={buildingArray[14].picture} alt="picture" />
    </div>
  )
}

export default App
