import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { education } from "./cvData";

const Education: React.FC = () => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
      Formación académica
    </Typography>
    <Stack spacing={1.5}>
      {education.map((edu, idx) => (
        <Box key={idx}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            {edu.degree}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {edu.institution}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {edu.dates}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);

export default Education;
