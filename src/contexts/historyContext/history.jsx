import { useEffect, useState, createContext, useRef } from "react";
import { useLocation,useNavigate } from "react-router-dom";

const RouterContext = createContext();

const PrevProvider = ({ children }) => {
  const location = useLocation();
  let [route, setRoute] = useState({
    to: location.pathname,
    from: location.pathname, 
  });



  useEffect(() => {
    setRoute((prev)=> ({to: location.pathname, from: prev.to}) );
  }, [location]);


  return (
    <RouterContext.Provider value={route}>{children}</RouterContext.Provider>
  );
};


export {PrevProvider}
export default RouterContext