import React from "react";
import { Box, Typography, Stack, Chip } from "@mui/material";
import { languages, techSkills } from "../data/cvData";

const Skills: React.FC = () => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
      Habilidades
    </Typography>
    <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
      Idiomas
    </Typography>
    <Stack
      direction="row"
      spacing={1}
      sx={{ mb: 2, flexWrap: "wrap", rowGap: 1 }}
    >
      {languages.map((lang, idx) => (
        <Chip
          key={idx}
          label={`${lang.name} (${lang.level})`}
          color="primary"
          variant="outlined"
          sx={{ mb: { xs: 1, sm: 0 } }}
        />
      ))}
    </Stack>
    <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
      Tecnologías
    </Typography>
    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1 }}>
      {techSkills.map((skill, idx) => (
        <Chip key={idx} label={skill} sx={{ mb: { xs: 1, sm: 0 } }} />
      ))}
    </Stack>
  </Box>
);

export default Skills;
