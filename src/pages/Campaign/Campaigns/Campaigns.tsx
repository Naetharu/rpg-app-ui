import { Box, Grid, Title } from "@mantine/core";
import React from "react";
import { dummyCampaigns } from "../../../dummyData/characters";

export const Campaigns = () => {
  return (
    <div>
      <Title order={2}>Choose a Campaign</Title>
      <Grid gutter={20}>
        {dummyCampaigns.map((camp) => (
          <Grid.Col xs={12} sm={6} md={3}>
            <Title order={3}>{camp.name}</Title>
            <Box sx={{ width: 200, height: 200, background: "#DDD" }} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};
