import { Card, createStyles, Group, Image, Text, Title } from "@mantine/core";
import { Link } from "@tanstack/react-location";
import React from "react";

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: "none",
  },

  card: {
    background:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  headerText: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.cyan[7],

    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));

interface CardProps {
  id: string;
  imageURL: string;
  title: string;
  description: string;
}

export const SnapshotCard = ({
  id,
  imageURL,
  title,
  description,
}: CardProps) => {
  const { classes } = useStyles();

  return (
    <Link to={`${id}`} className={classes.link}>
      <Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={imageURL} alt={title} height={400} />
        </Card.Section>

        <Group position="apart" grow className={classes.headerText}>
          <Title order={3}>{title}</Title>
        </Group>

        <Text lineClamp={3} align="justify" size="sm" color="dimmed">
          {description}
        </Text>
      </Card>
    </Link>
  );
};
