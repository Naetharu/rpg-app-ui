import { Box, createStyles, Text } from "@mantine/core";
import React from "react";

// Styles
const useStyles = createStyles((theme) => ({
  statboxContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },

  statboxText: {
    textTransform: "capitalize",
  },

  pipsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  pip: {
    width: 8,
    height: 8,
    background: "black",
    margin: 10,
    borderRadius: "100%",
    border: "2px solid black",
  },
}));

interface StatBoxProps {
  statName: string;
  statValue: number;
  showNumbers: boolean;
}

export const Statbox = ({ statName, statValue, showNumbers }: StatBoxProps) => {
  const { classes } = useStyles();

  // Clamp the value to between 0 and 10 - the allowed stat ranges.
  const clampedValue = Math.min(Math.max(statValue, 0), 10);

  return (
    <Box className={classes.statboxContainer}>
      <Text className={classes.statboxText}>{statName}</Text>
      <Box className={classes.pipsContainer}>
        {showNumbers ? (
          <Text>{statValue}</Text>
        ) : (
          Array.from({ length: clampedValue }).map((_, index) => (
            <Box key={index} className={classes.pip} />
          ))
        )}
      </Box>
    </Box>
  );
};
