import React from "react";
import { useForm } from "@mantine/form";
import {
  Box,
  Button,
  Grid,
  Group,
  NativeSelect,
  NumberInput,
  TextInput,
  Title,
} from "@mantine/core";

import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";

export const CharacterCreator = () => {
  const form = useForm({
    initialValues: {
      basics: {
        name: "",
        age: 18,
        vice: "Envy",
        virtue: "Charity",
      },
      attributes: {
        mental: {
          int: 1,
          wit: 1,
          res: 1,
        },
        physical: {
          str: 1,
          dex: 1,
          sta: 1,
        },
        social: {
          pre: 1,
          man: 1,
          com: 1,
        },
      },
      skills: {
        mental: {
          academics: 0,
          computer: 0,
          crafts: 0,
          investigation: 0,
          medicine: 0,
          occult: 0,
          politics: 0,
          science: 0,
        },
        physical: {
          athletics: 0,
          brawl: 0,
          drive: 0,
          firearms: 0,
          larceny: 0,
          stealth: 0,
          survival: 0,
          weaponry: 0,
        },
        social: {
          animalken: 0,
          empathy: 0,
          expression: 0,
          intimidation: 0,
          persuasion: 0,
          socialise: 0,
          streetwise: 0,
          subterfuge: 0,
        },
      },
    },
  });

  return (
    <div>
      <Dropzone
        onDrop={(files) => console.log("accepted files", files)}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
      >
        <Group>
          <Dropzone.Accept>
            <Box sx={{ width: 200, height: 200, background: "blue" }} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <Box sx={{ width: 200, height: 200, background: "red" }} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <Box sx={{ width: 200, height: 200, background: "yellow" }} />
          </Dropzone.Idle>
        </Group>
      </Dropzone>

      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        {/* GENERAL INFO */}
        {/* SECTION 01 */}
        <Title order={2}>General Information</Title>

        <TextInput
          withAsterisk
          label="Name"
          placeholder="Character Name"
          {...form.getInputProps("basics.name")}
        />
        <NumberInput
          label="Age"
          defaultValue={18}
          placeholder="Character's age"
          {...form.getInputProps("basics.age")}
        />
        <NativeSelect
          data={[
            "Envy",
            "Gluttony",
            "Greed",
            "Lust",
            "Pride",
            "Sloth",
            "Wrath",
          ]}
          label="Vice"
          withAsterisk
          {...form.getInputProps("basics.vice")}
        />
        <NativeSelect
          data={[
            "Charity",
            "Faith",
            "Fortitude",
            "Hope",
            "Justice",
            "Prudance",
            "Temperance",
          ]}
          label="Vice"
          withAsterisk
          {...form.getInputProps("basics.virtue")}
        />

        {/* SECTION 02 - ATTRIBUTES */}
        <Title order={3}>ATTRIBUTES</Title>
        <Grid>
          <Grid.Col xs={12} sm={4}>
            <Title order={4}>Mental</Title>
            <NumberInput
              label="Intelligence"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("attributes.mental.int")}
            />
            <NumberInput
              label="Wits"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("attributes.mental.wit")}
            />
            <NumberInput
              label="Resolve"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("attributes.mental.res")}
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={4}>
            {" "}
            <Title order={4}>Physical</Title>
            <NumberInput
              label="Strength"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("attributes.phyiscal.str")}
            />
            <NumberInput
              label="Dexterity"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("attributes.phyiscal.dex")}
            />
            <NumberInput
              label="Stamina"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("attributes.phyiscal.sta")}
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={4}>
            <Title order={4}>Social</Title>
            <NumberInput
              label="Presence"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("attributes.social.pre")}
            />
            <NumberInput
              label="Manipulation"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("attributes.social.man")}
            />
            <NumberInput
              label="Composure"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("attributes.social.com")}
            />
          </Grid.Col>
        </Grid>

        {/* SECTION 03 - SKILLS */}
        <Title order={3}>SKILLS</Title>

        <Grid>
          <Grid.Col xs={12} sm={4}>
            <Title order={4}>Mental Skills</Title>
            <NumberInput
              label="academics"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.mental.academics")}
            />
            <NumberInput
              label="computer"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.mental.computer")}
            />
            <NumberInput
              label="crafts"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.mental.crafts")}
            />
            <NumberInput
              label="investigation"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.mental.investigation")}
            />
            <NumberInput
              label="medicine"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.mental.medicine")}
            />
            <NumberInput
              label="occult"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.mental.occult")}
            />
            <NumberInput
              label="politics"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.mental.politics")}
            />
            <NumberInput
              label="science"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.mental.science")}
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={4}>
            <Title order={4}>Physical Skills</Title>
            <NumberInput
              label="athletics"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.physical.athletics")}
            />
            <NumberInput
              label="brawl"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.physical.brawl")}
            />
            <NumberInput
              label="drive"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.physical.drive")}
            />
            <NumberInput
              label="firearms"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.physical.firearms")}
            />
            <NumberInput
              label="larceny"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.physical.larceny")}
            />
            <NumberInput
              label="stealth"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.physical.stealth")}
            />
            <NumberInput
              label="survival"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.physical.survival")}
            />
            <NumberInput
              label="weaponry"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.physical.weaponry")}
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={4}>
            {" "}
            <Title order={4}>Social Skills</Title>
            <NumberInput
              label="animalken"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.social.animalken")}
            />
            <NumberInput
              label="empathy"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.social.empathy")}
            />
            <NumberInput
              label="expression"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.social.expression")}
            />
            <NumberInput
              label="intimidation"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.social.intimidation")}
            />
            <NumberInput
              label="persuasion"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.social.persuasion")}
            />
            <NumberInput
              label="socialise"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.social.socialise")}
            />
            <NumberInput
              label="empathy"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.social.streetwise")}
            />
            <NumberInput
              label="empathy"
              defaultValue={1}
              min={1}
              max={10}
              {...form.getInputProps("skills.social.subterfuge")}
            />
          </Grid.Col>
        </Grid>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
