import { createContext } from "react";

const MuteContext = createContext();

function MuteProvider({ children, mute, updateMute }) {
  return (
    <MuteContext.Provider value={{ mute, updateMute }}>
      {children}
    </MuteContext.Provider>
  );
}

export { MuteContext, MuteProvider };
