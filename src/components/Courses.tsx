import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { courses } from "../data/cvData";

const Courses: React.FC = () => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
      Cursos de especialización
    </Typography>
    <Stack spacing={1.5}>
      {courses.map((edu, idx) => (
        <Box key={idx}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 500, textTransform: "uppercase" }}
          >
            {edu.title}
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

export default Courses;
