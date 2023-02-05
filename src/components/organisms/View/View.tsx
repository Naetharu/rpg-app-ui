import { Box, createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: 1200,
    margin: "auto",
  },
}));

interface viewProps {
  children: React.ReactNode;
}

export const View = ({ children }: viewProps) => {
  const { classes } = useStyles();

  return <Box className={classes.container}>{children}</Box>;
};
