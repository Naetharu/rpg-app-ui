import {
  Box,
  createStyles,
  Grid,
  Group,
  Image,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useMatch } from "@tanstack/react-location";
import React from "react";
import { StatTable } from "../../components/organisms/StatTable";
import { View } from "../../components/organisms/View";

// TEMP DATA TO BE REPLACED BY API CALL
import { dummyCharacters } from "../../dummyData/characters";

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

  const { stats } = dummyCharacters[Number(params.id)];

  return (
    <View>
      {/* CHARACTER HEADING SECTION */}
      <Title className={classes.titleMargin}>
        {dummyCharacters[Number(params.id)].name}
      </Title>
      <Grid>
        <Grid.Col xs={12} sm={4}>
          <Image
            className={classes.characterImage}
            src={dummyCharacters[Number(params.id)].imageURL}
          />
        </Grid.Col>
        <Grid.Col xs={12} sm={8}>
          <Text className={classes.descriptionText}>
            {dummyCharacters[Number(params.id)].description}
          </Text>
        </Grid.Col>
      </Grid>

      {/* CHARACTER STATS SECTION */}
      <Title className={classes.titleMargin} order={2}>
        Character Stats
      </Title>
      <Grid>
        {/* TOP LEVEL STATS */}

        <Grid.Col xs={12} sm={4}>
          <StatTable title={"Phyiscal"} stats={stats.physical} />
        </Grid.Col>
        <Grid.Col xs={12} sm={4}>
          <StatTable title={"Mental"} stats={stats.mental} />
        </Grid.Col>
        <Grid.Col xs={12} sm={4}>
          <StatTable title={"Social"} stats={stats.social} />
        </Grid.Col>

        {/* ABILITIES */}
        <Grid.Col xs={12} sm={4}>
          <StatTable title={"Physical Skills"} stats={stats.skillPhy} />
        </Grid.Col>
        <Grid.Col xs={12} sm={4}>
          <StatTable title={"Mental Skills"} stats={stats.skillMen} />
        </Grid.Col>
        <Grid.Col xs={12} sm={4}>
          <StatTable title={"Social Skills"} stats={stats.skillSoc} />
        </Grid.Col>
      </Grid>
    </View>
  );
};
