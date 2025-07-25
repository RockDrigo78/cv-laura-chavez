import React from "react";
import { Box, Paper } from "@mui/material";
import PersonalInfo from "./PersonalInfo";
import ProfessionalSummary from "./ProfessionalSummary";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

const CV: React.FC = () => (
  <Box
    sx={{
      p: { xs: 1, sm: 2, md: 4 },
      maxWidth: 1400,
      mx: "auto",
    }}
  >
    <Paper
      elevation={6}
      sx={{
        p: { xs: 1.5, sm: 2, md: 4 },
        borderRadius: { xs: 2, sm: 3, md: 4 },
        boxShadow: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <PersonalInfo />
      <ProfessionalSummary />
      <WorkExperience />
      <Education />
      <Skills />
    </Paper>
  </Box>
);

export default CV;
