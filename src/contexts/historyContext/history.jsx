import { useEffect, useState, createContext, useRef } from "react";
import { useLocation,useNavigate } from "react-router-dom";

const RouterContext = createContext();

const PrevProvider = ({ children }) => {
 /*  const location = useLocation();
  let [route, setRoute] = useState({
    to: location.pathname,
    from: location.pathname, 
  }); */
  const [page,setPage] = useState(false)
/*   let [realroute, setRealRoute] = useState({}); */

 /*  useEffect(() => {
    console.log(route)
    setRoute((prev)=> ({to: location.pathname, from: prev.to}) );
    console.log(route)
  }, [location]); */

/*   useEffect(() => {
    setRealRoute(realroute)
  }, [route]) */


  return (
    <RouterContext.Provider value={{page,setPage}}>{children}</RouterContext.Provider>
  );
};


export {PrevProvider}
export default RouterContext