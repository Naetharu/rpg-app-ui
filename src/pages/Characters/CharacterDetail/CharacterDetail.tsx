import { Box, createStyles, Grid, Image, Title } from "@mantine/core";
import { useMatch } from "@tanstack/react-location";
import React from "react";

import { StatTable } from "../../../components/organisms/StatTable";
import { View } from "../../../components/organisms/View";

// TEMP DATA TO BE REPLACED BY API CALL
import { dummyCharacters } from "../../../dummyData/characters";

const useStyles = createStyles((theme) => ({
  characterImage: {
    overflow: "hidden",
    aspectRatio: "1/1",
  },

  descriptionText: {
    textAlign: "justify",
  },

  titleMargin: {
    marginTop: 20,
    marginBottom: 10,
  },
}));

export const CharacterDetail = () => {
  const params = useMatch().params;
  const { classes } = useStyles();
  const { stats, imageURL } = dummyCharacters[Number(params.id)];

  return (
    <View>
      <Title className={classes.titleMargin}>
        {dummyCharacters[Number(params.id)].name}
      </Title>

      <Image src={imageURL} alt="Character Portrait" height={400} />

      <Grid>
        {Object.entries(stats).map(([category, items]) => (
          <Grid.Col
            xs={12}
            sm={category === "conditions" ? 12 : 4}
            key={category}
          >
            <StatTable title={category} stats={items} showNumbers={false} />
          </Grid.Col>
        ))}
      </Grid>
    </View>
  );
};
