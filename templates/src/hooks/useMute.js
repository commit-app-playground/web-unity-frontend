import { useState, useEffect } from "react";

function useMute() {
  const [mute, setMute] = useState(false);

  useEffect(function () {
    const savedMute = localStorage.getItem("mute").toLowerCase() === "true";
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
