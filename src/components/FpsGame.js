import React, { useState, useEffect, useContext } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import LinearProgress from "@mui/material/LinearProgress";
import ToggleSoundButton from "./ToggleSoundButton";
import { MuteContext } from "../contexts/muteContext";

const unityContext = new UnityContext({
  loaderUrl: "builds/fpsGame/fpsGame.loader.js",
  dataUrl: "builds/fpsGame/fpsGame.data",
  frameworkUrl: "builds/fpsGame/fpsGame.framework.js",
  codeUrl: "builds/fpsGame/fpsGame.wasm",
});

function FpsGame() {
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
    unityContext.send("GameManager", "ToggleAudio");
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

export default FpsGame;
