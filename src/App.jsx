

import HomePage from "./components/Home/home"
import { Routes, Route } from 'react-router-dom'

import "./fonts/get_schwifty.ttf"
import "./fonts/RoadRage-Regular.ttf"

import { CharProvider } from "./contexts/charContext/charContext"
// Components
import GetAll from "./components/Characters/GetAll/GetAll"
import Navbar from "./components/Home/navbar/navbar"
import AddChar from "./components/Characters/AddCharacters/AddChar"
import GetChar from "./components/Characters/getChar/GetChar"
import { LocationProvider } from "./contexts/locationContext/locationContext"
import Characters from "./components/Characters/Characters"
import Locations from "./components/Locations/Locations"
import AddLocation from "./components/Locations/AddLocations/AddLocation"
import GetAllLocations from "./components/Locations/GetAll/GetAllLocations"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
function App() {

  return (

    <div className="App">
      <Navbar />
      <LocationProvider>
        <CharProvider>
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/Characters" element={<Characters />}>
              <Route path="getAllChars" element={<GetAll />} />
              <Route path="addChar" element={<AddChar />} />
              <Route path="getChar" element={<GetChar />} />
            </Route>
            <Route path="/Locations" element={<Locations />}>
              <Route path="getAllLocations" element={<GetAllLocations />} />
              <Route path="addLocation" element={<AddLocation />} />
              {/* <Route path="getChar" element={<GetLocation />} /> */}
            </Route>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </CharProvider>
      </LocationProvider>
    </div>
  )
}

export default App
