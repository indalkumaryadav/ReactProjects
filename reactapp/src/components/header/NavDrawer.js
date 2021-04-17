import React, { useState } from "react";
import { Button, Drawer, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  drawer: {
    width: 240,
  },
});

const NavDrawer = ({ open, onClose }) => {
  const classes = useStyles();
  const [data] = useState([
    {
      title: "this is the title",
    },
    {
      title: "this is the title",
    },
    {
      title: "this is the title",
    },
  ]);

  return (
    <Drawer open={open} onClose={onClose}>
      {data.map((item) => (
        <Button className={classes.drawer}>{item.title}</Button>
      ))}
    </Drawer>
  );
};

export default NavDrawer;
