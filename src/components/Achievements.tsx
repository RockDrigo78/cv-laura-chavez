import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { achievements } from "../data/cvData";

const Achievements: React.FC = () => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
      Logros
    </Typography>
    <Stack spacing={1.5}>
      {achievements.map((edu, idx) => (
        <Box key={idx}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            {edu.title}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);

export default Achievements;
