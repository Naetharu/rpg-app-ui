import { Box, Button, Grid, Table } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { SnapshotCard } from "../../components/organisms/SnapshotCard";

import { dummyCharacters } from "../../dummyData/characters";
import { useLayoutChecker } from "../../hooks/useLayoutChecker";

export const CharacterViewer = () => {
  const [showTable, setShowTable] = useState(false);

  // Custom hook that returns true iff screen width < props number.
  // 576 is the xs size for mantine breakpoint.
  const isMobileView = useLayoutChecker(576);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", margin: 20 }}>
        {!isMobileView && (
          <Button onClick={() => setShowTable(!showTable)}>Toggle View</Button>
        )}
      </Box>
      {showTable || isMobileView ? (
        <Grid gutter={40}>
          {dummyCharacters.map((character) => (
            <Grid.Col xs={12} sm={6} lg={3}>
              <Box>
                <SnapshotCard
                  imageURL={character.imageURL}
                  title={character.name}
                  description={character.description}
                  id={character.id}
                />
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      ) : (
        <Table
          striped
          highlightOnHover
          verticalSpacing="lg"
          withBorder
          withColumnBorders
        >
          <thead>
            <tr>
              <th>Character Name</th>
              <th>Age</th>
              <th>Locatiuon </th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {dummyCharacters.map((character) => (
              <tr key={character.name}>
                <td>{character.name}</td>
                <td>{character.age}</td>
                <td>{character.location}</td>
                <td>{character.profession}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

/* 
  This should be: 

  1: Thumb nail gallery of characters
  2: List view of all characters

  Each character should list their: 
    - name
    - species (human, vampire, mage etc)
  
  Filter list based on: 
    - name
    - species
    - group afilliations (in game group memberships?)
    - campaign presence (which games are they part of)

    https://d2folr83karyot.cloudfront.net/character/22298/1.jpg
    https://i.pinimg.com/originals/66/58/71/665871363fd206438c91e5d7e39c7b89.jpg
    https://images.fineartamerica.com/images-medium-large-5/the-mystery-of-faith-simeon-solomon.jpg
*/
