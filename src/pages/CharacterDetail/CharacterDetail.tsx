import { Text, Title } from "@mantine/core";
import { useMatch } from "@tanstack/react-location";
import React from "react";

export const CharacterDetail = () => {
  const params = useMatch().params;

  return (
    <>
      <Title>Character Detail Page</Title>
      <Text>{JSON.stringify(params)}</Text>
    </>
  );
};
