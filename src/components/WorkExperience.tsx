import React from "react";
import { Box, Typography, Avatar, Paper, Stack } from "@mui/material";
import { experiences } from "./cvData";

const WorkExperience: React.FC = () => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
      Experiencia profesional
    </Typography>
    <Stack spacing={2}>
      {experiences.map((exp, idx) => (
        <Paper
          key={idx}
          elevation={2}
          sx={{
            p: { xs: 1.5, sm: 2 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 2, sm: 2 },
            borderRadius: 2,
          }}
        >
          <Avatar
            src={exp.logo}
            alt={exp.company}
            sx={{
              width: { xs: 56, sm: 64 },
              height: { xs: 56, sm: 64 },
              flexShrink: 0,
              alignSelf: { xs: "center", sm: "flex-start" },
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {exp.role}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {exp.company} — {exp.location}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              {exp.dates}
            </Typography>
            <Typography variant="body2">{exp.description}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  </Box>
);

export default WorkExperience;
