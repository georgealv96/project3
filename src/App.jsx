import './App.css'
import buildingArray from './buildings.json'
import Building from './components/Building'
import NavBar from './components/NavBar'

const App = () => {
  const navigationBar = [
    { button: 'HOME', color: 'red' },
    { button: 'BY YEAR', color: 'orange' },
    { button: 'BY HEIGHT', color: 'green' },
    { button: 'FACTS', color: 'blue' },
    { button: 'ABOUT', color: 'purple' }
  ]

  return (
    <div>
      <nav>
        {navigationBar.map((navigationBar) => (
          <NavBar key={navigationBar} navBar={navigationBar} />
        ))}
      </nav>
      <h1>Tallest Buildings by U.S. State</h1>
      <main>
        {buildingArray.map((building) => (
          <Building key={building.address.zip_code} building={building} />
        ))}
      </main>
    </div>
  )
}

export default App
