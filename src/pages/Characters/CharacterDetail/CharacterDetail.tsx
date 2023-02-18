import { Box, createStyles, Grid, Image, Text, Title } from "@mantine/core";
import { useMatch } from "@tanstack/react-location";
import React from "react";

import { StatTable } from "../../../components/organisms/StatTable";
import { View } from "../../../components/organisms/View";

// TEMP DATA TO BE REPLACED BY API CALL
import { dummyCharacters } from "../../../dummyData/characters";
import { useLayoutChecker } from "../../../hooks/useLayoutChecker";
import { ScreenWidths } from "../../../lib/enums";

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
    marginBottom: 20,
  },
}));

export const CharacterDetail = () => {
  const params = useMatch().params;
  const { classes } = useStyles();
  const { stats, imageURL, description } = dummyCharacters[Number(params.id)];
  const isMobileView = useLayoutChecker(ScreenWidths.mobile);

  return (
    <View>
      <Box sx={{ marginBottom: 60 }}>
        <Title className={classes.titleMargin}>
          {dummyCharacters[Number(params.id)].name}
        </Title>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobileView ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={imageURL}
            alt="Character Portrait"
            height={300}
            width={300}
          />
          <Text
            sx={{
              textAlign: "justify",
              margin: isMobileView ? 20 : 0,
              marginLeft: isMobileView ? 20 : 100,
            }}
          >
            {description}
          </Text>
        </Box>
      </Box>

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
