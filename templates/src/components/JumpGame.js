import React, { useState, useEffect, useContext } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import LinearProgress from "@mui/material/LinearProgress";
import ToggleSoundButton from "./ToggleSoundButton";
import PlayerColorSelector from "./PlayerColorSelector";
import { MuteContext } from "../contexts/muteContext";

const unityContext = new UnityContext({
  loaderUrl: "builds/jumpGame/jumpGame.loader.js",
  dataUrl: "builds/jumpGame/jumpGame.data",
  frameworkUrl: "builds/jumpGame/jumpGame.framework.js",
  codeUrl: "builds/jumpGame/jumpGame.wasm",
});

function JumpGame() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [score, setScore] = useState(0);
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

    unityContext.on("ScoreUp", function () {
      setScore((s) => s + 1);
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

  function setPlayerColour(colour) {
    unityContext.send("GameController", "SetPlayerColour", colour);
  }

  function toggleAudio() {
    unityContext.send("GameController", "ToggleAudio");
  }

  return (
    <div>
      <ToggleSoundButton toggleSoundFunction={toggleAudio} />
      <PlayerColorSelector setPlayerColour={setPlayerColour} />

      <p>{`Score ${score} points`}</p>
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

export default JumpGame;
