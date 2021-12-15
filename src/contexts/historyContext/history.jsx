import { useEffect, useState, createContext } from "react";
import { useLocation } from "react-router-dom";

const RouterContext = createContext();


const PrevProvider = ({ children }) => {
  const location = useLocation();
  let [route, setRoute] = useState({
    to: location.pathname,
    from: location.pathname, 
  });

  useEffect(() => {
    console.log(location.pathname)
    setRoute((prev)=> ({to: location.pathname, from: prev.to}) );
    console.log(route)
  }, [location]);

  return (
    <RouterContext.Provider value={route}>{children}</RouterContext.Provider>
  );
};


export {PrevProvider}
export default RouterContext