import * as React from "react";
import { Link } from "react-router-dom";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import ToysIcon from "@mui/icons-material/Toys";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export const gameList = (
  <div>
    <ListItem component={Link} to="/jumpGame" button>
      <ListItemIcon>
        <SportsHandballIcon />
      </ListItemIcon>
      <ListItemText primary="Jump Game" />
    </ListItem>
    <ListItem component={Link} to="/legoGame" button>
      <ListItemIcon>
        <ToysIcon />
      </ListItemIcon>
      <ListItemText primary="LEGO Game" />
    </ListItem>
    <ListItem component={Link} to="/fpsGame" button>
      <ListItemIcon>
        <SportsEsportsIcon />
      </ListItemIcon>
      <ListItemText primary="FPS Game" />
    </ListItem>
  </div>
);
