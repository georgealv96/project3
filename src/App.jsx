import './App.css'
import buildingArray from './buildings.json'
import Building from './components/Building'

const App = () => {
  return (
    <div>
      <h1>Tallest Buildings by State</h1>
      <main>
        {buildingArray.map((building) => (
          <Building building={building} />
        ))}
      </main>
    </div>
  )
}

export default App
