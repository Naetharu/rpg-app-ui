import { createStyles, Table, Title } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  titleMargin: {
    marginTop: 20,
    marginBottom: 10,
  },

  wideCol: {
    width: "100%",
  },
}));

interface StatTableProps {
  title: string;
  stats: { name: string; stat: number }[];
}

export const StatTable = ({ title, stats }: StatTableProps) => {
  const { classes } = useStyles();

  console.log(stats);

  return (
    <>
      <Title order={4} className={classes.titleMargin}>
        {title}
      </Title>
      <Table striped highlightOnHover verticalSpacing="xs" withColumnBorders>
        <tbody>
          {stats.map((stat) => (
            <tr key={stat.name}>
              <td className={classes.wideCol}>{stat.name}</td>
              <td>{stat.stat}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
