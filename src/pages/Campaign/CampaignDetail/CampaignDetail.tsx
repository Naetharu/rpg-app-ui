import { createStyles } from "@mantine/core";
import { useMatch } from "@tanstack/react-location";
import React from "react";

const useStyles = createStyles((theme) => ({}));

export const CampaignDetail = () => {
  const params = useMatch().params;
  const { classes } = useStyles();

  return <div>CampaignDetail</div>;
};
