import { useState, useEffect } from "react";

function useMute() {
  const [mute, setMute] = useState(false);

  useEffect(function () {
    const savedMuteString = localStorage.getItem("mute") || "false";
    const savedMute = savedMuteString.toLowerCase() === "true";
    setMute(savedMute);
  }, []);

  function updateMute(mute) {
    const newMute = !mute;
    setMute(newMute);
    localStorage.setItem("mute", newMute);
  }

  return {
    mute,
    updateMute,
  };
}

export default useMute;
