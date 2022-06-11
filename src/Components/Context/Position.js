import { reducer } from "../Reducer/Reducer";
import { createContext, useContext, useReducer } from "react";

const Position = createContext();
const usePosition = () => useContext(Position);
const PositionProvider = ({ children }) => {
  const [positionState, positionPost] = useReducer(reducer, {
    nameOfPosition: "",
    styles: {},
  });
  return (
    <Position.Provider value={{ positionState, positionPost }}>
      {children}
    </Position.Provider>
  );
};

export { usePosition, PositionProvider };
