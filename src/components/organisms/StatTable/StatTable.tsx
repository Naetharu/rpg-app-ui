import { createStyles, Table, Title } from "@mantine/core";
import React from "react";
import { Statbox } from "../../atoms/Statbox";

const useStyles = createStyles((theme) => ({
  titleMargin: {
    marginTop: 20,
    marginBottom: 10,
    textTransform: "capitalize",
  },

  wideCol: {
    width: "100%",
  },
}));

interface StatTableProps {
  title: string;
  stats: { name: string; stat: number }[];
  showNumbers?: boolean;
}

export const StatTable = ({ title, stats, showNumbers }: StatTableProps) => {
  const { classes } = useStyles();

  console.log("showNumbers", showNumbers);

  return (
    <>
      <Title order={4} className={classes.titleMargin}>
        {title}
      </Title>
      <Table striped highlightOnHover verticalSpacing="xs" withColumnBorders>
        <tbody>
          {stats.map((stat) => (
            <tr key={stat.name}>
              <td>
                <Statbox
                  showNumbers={showNumbers ? showNumbers : false}
                  statName={stat.name}
                  statValue={stat.stat}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
