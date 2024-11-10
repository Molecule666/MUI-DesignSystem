import React from "react";
import { ListItem, ListItemText, ListItemIcon, useTheme } from "@mui/material";

interface IListItem {
  text: string;
  leftIcon?: null | React.ReactElement;
  rightIcon?: null | React.ReactElement;
}

const ListItemComponent = ({
  text,
  leftIcon = null,
  rightIcon = null,
}: IListItem) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <ListItem>
      {leftIcon && <ListItemIcon>{leftIcon}</ListItemIcon>}
      <ListItemText primary={text} />
      {rightIcon && <ListItemIcon>{rightIcon}</ListItemIcon>}
    </ListItem>
  );
};

export default ListItemComponent;
