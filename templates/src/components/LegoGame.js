import React, { useState, useEffect, useContext } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import LinearProgress from "@mui/material/LinearProgress";
import ToggleSoundButton from "./ToggleSoundButton";
import { MuteContext } from "../contexts/muteContext";

const unityContext = new UnityContext({
  loaderUrl: "builds/LEGOgame/LEGOgame.loader.js",
  dataUrl: "builds/LEGOgame/LEGOgame.data",
  frameworkUrl: "builds/LEGOgame/LEGOgame.framework.js",
  codeUrl: "builds/LEGOgame/LEGOgame.wasm",
});

function LegoGame() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { mute } = useContext(MuteContext);

  useEffect(function () {
    unityContext.on("progress", function (progress) {
      setProgress(progress);
    });
    unityContext.on("loaded", function () {
      setIsLoaded(true);
    });
    unityContext.on("MuteStatus", function (muteStatus) {
      console.log(`MUTE STATUS: ${muteStatus}`);
    });
    return function () {
      unityContext.removeAllEventListeners();
    };
  }, []);

  useEffect(
    function () {
      unityContext.on("ReadyToMute", function () {
        mute && toggleAudio();
      });
      return function () {
        unityContext.removeEventListener("ReadyToMute");
      };
    },
    [mute]
  );

  function toggleAudio() {
    unityContext.send("Game Manager", "ToggleAudio");
  }

  return (
    <div>
      <ToggleSoundButton toggleSoundFunction={toggleAudio} />

      <LinearProgress
        style={{
          visibility: isLoaded ? "hidden" : "visable",
        }}
        variant="determinate"
        value={progress * 100}
      />

      <Unity
        style={{
          height: "100%",
          width: 950,
          border: "2px solid black",
          background: "grey",
          visibility: isLoaded ? "visible" : "hidden",
        }}
        unityContext={unityContext}
      />
    </div>
  );
}

export default LegoGame;
