export const reducer = (state, { payload, type }) => {
  switch (type) {
    case "CENTER":
      return {
        ...state,
        nameOfPosition: "Center",
        styles: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          ...payload,
        },
      };
    case "LOWER_RIGHT":
      return {
        ...state,
        nameOfPosition: "Lower Right",
        styles: { bottom: "50px", right: "0" },
      };
    case "DRAG_POSITIONS":
      return {
        ...state,
        nameOfPosition: "Floating...",
        styles: { top: `${payload.y}px`, left: `${payload.x}px` },
      };
    default:
      return state;
  }
};
