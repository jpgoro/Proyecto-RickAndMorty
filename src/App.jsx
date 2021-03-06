import "./scss/app.scss";

import HomePage from "./components/Home/home";
import { Routes, Route } from "react-router-dom";

import "./fonts/get_schwifty.ttf";
import "./fonts/RoadRage-Regular.ttf";
import { PrevProvider } from "./contexts/historyContext/history";
import { CharProvider } from "./contexts/charContext/charContext";
import { UserProvider } from "./contexts/userContext/UserContext";
// Components
import GetAll from "./components/Characters/GetAll/GetAll";
import Navbar from "./components/Home/navbar/navbar";
import AddChar from "./components/Characters/AddCharacters/AddChar";
import { LocationProvider } from "./contexts/locationContext/locationContext";
import Characters from "./components/Characters/Characters";
import Locations from "./components/Locations/Locations";
import AddLocation from "./components/Locations/AddLocations/AddLocation";
import GetAllLocations from "./components/Locations/GetAll/GetAllLocations";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import EditUser from "./components/Users/EditUser/EditUser";
function App() {
  return (
    <div className="App">
      <UserProvider>
      <Navbar />
      <PrevProvider>
        <LocationProvider>
          <CharProvider>
            <Routes>
              <Route path="/" index element={<HomePage />} />
              <Route path="/Characters" element={<Characters />}>
                <Route path="getAllChars" element={<GetAll />} />
                <Route path="addChar" element={<AddChar />} />
              </Route>
              <Route path="/Locations" element={<Locations />}>
                <Route path="getAllLocations" element={<GetAllLocations />} />
                <Route path="addLocation" element={<AddLocation />} />
              </Route>/editUser
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/editUser" element={<EditUser/>} />
            </Routes>
          </CharProvider>
        </LocationProvider>
      </PrevProvider>
      </UserProvider>
    </div>
  );
}

export default App;
