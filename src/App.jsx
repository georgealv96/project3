import './App.css'
import buildingArray from './buildings.json'
import Building from './components/Building'
import BarItem from './components/BarItem'

const App = () => {
  const navigationBar = ['HOME', 'BY STATE', 'BY HEIGHT', 'ABOUT']

  return (
    <div>
      <nav>
        {navigationBar.map((navigationBar) => (
          <BarItem item={navigationBar} />
        ))}
      </nav>
      <h1>Tallest Buildings by U.S. State</h1>
      <main>
        {buildingArray.map((building) => (
          <Building building={building} />
        ))}
      </main>
    </div>
  )
}

export default App
