import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const style = {
  width: "100%",
  maxWidth: "100%",
  bgcolor: "purple"
};

const avatar = {
  color: "white"
};

const text = {
  color: "white"
};

export default function MenuTest() {
  return (
    <List sx={style}>
      <ListItem button>
        <CompareArrowsOutlinedIcon sx={avatar} />
        <ListItemText sx={text} primary="Transaction" />
      </ListItem>
    </List>
  );
}
