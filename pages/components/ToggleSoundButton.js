import React, { useContext } from "react";
import { MuteContext } from "../contexts/muteContext";

import ToggleButton from "@mui/material/ToggleButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export default function ToggleSoundButton({ toggleSoundFunction }) {
  const { mute, updateMute } = useContext(MuteContext);

  return (
    <ToggleButton
      sx={{ m: 1 }}
      value="toggle-sound"
      color="primary"
      selected={!mute}
      onChange={() => {
        toggleSoundFunction();
        updateMute(mute);
      }}
    >
      {mute ? <VolumeOffIcon /> : <VolumeUpIcon />}
    </ToggleButton>
  );
}
