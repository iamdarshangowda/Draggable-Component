import { reducer } from "../Reducer/Reducer";
import { createContext, useContext, useReducer } from "react";

const Position = createContext();
const usePosition = () => useContext(Position);
const PositionProvider = ({ children }) => {
  const [positionState, positionDispatch] = useReducer(reducer, {
    nameOfPosition: "",
    styles: {},
  });
  return (
    <Position.Provider value={{ positionState, positionDispatch }}>
      {children}
    </Position.Provider>
  );
};

export { usePosition, PositionProvider };
