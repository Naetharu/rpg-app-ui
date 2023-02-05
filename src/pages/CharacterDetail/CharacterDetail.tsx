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
        <Grid.Col xs={12} sm={4}>
          <Title className={classes.titleMargin} order={4}>
            Physical
          </Title>
          <Table
            striped
            highlightOnHover
            verticalSpacing="xs"
            withColumnBorders
          >
            <tbody>
              <tr>
                <td>Strength</td>
                <td>{stats.physical.str}</td>
              </tr>
              <tr>
                <td>Dexterity</td>
                <td>{stats.physical.dex}</td>
              </tr>
              <tr>
                <td>Stamina</td>
                <td>{stats.physical.sta}</td>
              </tr>
            </tbody>
          </Table>
        </Grid.Col>
        <Grid.Col xs={12} sm={4}>
          <Title className={classes.titleMargin} order={4}>
            Mental
          </Title>
          <Table
            striped
            highlightOnHover
            verticalSpacing="xs"
            withColumnBorders
          >
            <tbody>
              <tr>
                <td>Intelligence</td>
                <td>{stats.mental.int}</td>
              </tr>
              <tr>
                <td>Wisdom</td>
                <td>{stats.mental.wis}</td>
              </tr>
              <tr>
                <td>Wits</td>
                <td>{stats.mental.wit}</td>
              </tr>
            </tbody>
          </Table>
        </Grid.Col>
        <Grid.Col xs={12} sm={4}>
          <Title className={classes.titleMargin} order={4}>
            Physical
          </Title>
          <Table
            striped
            highlightOnHover
            verticalSpacing="xs"
            withColumnBorders
          >
            <tbody>
              <tr>
                <td>Composure</td>
                <td>{stats.social.com}</td>
              </tr>
              <tr>
                <td>Manipulation</td>
                <td>{stats.social.man}</td>
              </tr>
              <tr>
                <td>Presence</td>
                <td>{stats.social.pre}</td>
              </tr>
            </tbody>
          </Table>
        </Grid.Col>
      </Grid>
    </View>
  );
};
