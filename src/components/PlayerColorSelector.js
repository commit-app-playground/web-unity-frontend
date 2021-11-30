import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PlayerColorSelector({ setPlayerColour }) {
  const [color, setColor] = React.useState("");

  const handleChange = (event) => {
    setColor(event.target.value);
    setPlayerColour(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="player-color-select-label">Player Colour</InputLabel>
      <Select
        labelId="player-color-select-label"
        id="player-color-select"
        value={color}
        label="Player Colour"
        onChange={handleChange}
      >
        <MenuItem value={"white"}>Default</MenuItem>
        {/* Sending yellow ends up looking green */}
        <MenuItem value={"yellow"}>Green</MenuItem>
        <MenuItem value={"blue"}>Blue</MenuItem>
      </Select>
    </FormControl>
  );
}
