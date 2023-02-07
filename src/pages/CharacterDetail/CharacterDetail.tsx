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

  const { stats, contacts, equipiment, notes } =
    dummyCharacters[Number(params.id)];

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

        {/* ADDITIONAL */}

        <Grid.Col xs={12} sm={4}>
          <StatTable title={"Merits"} stats={stats.merits} />
        </Grid.Col>
        <Grid.Col xs={12} sm={4}>
          <StatTable title={"Flaws"} stats={stats.flaws} />
        </Grid.Col>
        <Grid.Col xs={12} sm={4}>
          <StatTable title={"Aspects"} stats={stats.aspects} />
        </Grid.Col>

        {/* Conditions */}
        <Grid.Col xs={12} sm={12}>
          <StatTable title={"Conditions"} stats={stats.conditions} />
        </Grid.Col>

        {/* Contacts & Equipment - display if either contacts or equipment have members */}

        {(contacts.length > 0 || equipiment.length > 0) && (
          <>
            <Grid.Col xs={12} sm={6}>
              <Title className={classes.titleMargin} order={4}>
                Equipment
              </Title>
              <ul>
                {contacts.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </Grid.Col>
            <Grid.Col xs={12} sm={6}>
              <Title className={classes.titleMargin} order={4}>
                Contacts
              </Title>
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.name}>{contact.name}</li>
                ))}
              </ul>
            </Grid.Col>
          </>
        )}

        {/* NOTES - display only if at least one note exists */}
        {notes.length > 0 && (
          <Grid.Col xs={12} sm={12}>
            <Title className={classes.titleMargin} order={4}>
              Notes
            </Title>

            {notes.map((note) => (
              <React.Fragment key={note.title}>
                <Title order={5}>{note.title}</Title>
                <Text>{note.contents}</Text>
              </React.Fragment>
            ))}
          </Grid.Col>
        )}
      </Grid>
    </View>
  );
};
