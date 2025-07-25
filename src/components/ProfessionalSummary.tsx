import React from "react";
import { Box, Typography } from "@mui/material";
import { professionalSummary } from "./cvData";

const ProfessionalSummary: React.FC = () => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
      Perfil profesional
    </Typography>
    <Typography variant="body1">{professionalSummary}</Typography>
  </Box>
);

export default ProfessionalSummary;
