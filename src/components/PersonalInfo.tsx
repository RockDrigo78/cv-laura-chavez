import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import { personalInfo } from "./cvData";

const PersonalInfo: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: { xs: "flex-start", sm: "center" },
      gap: { xs: 2, sm: 3 },
      mb: 3,
    }}
  >
    <Avatar
      src={personalInfo.photo}
      alt={personalInfo.name}
      sx={{
        width: { xs: 80, sm: 100 },
        height: { xs: 80, sm: 100 },
        boxShadow: 3,
        alignSelf: { xs: "center", sm: "flex-start" },
      }}
    />
    <Box>
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, fontSize: { xs: "1.3rem", sm: "2rem" } }}
      >
        {personalInfo.name}
      </Typography>
      <Stack spacing={0.5} sx={{ mt: 1 }}>
        <Typography variant="body1">{personalInfo.address}</Typography>
        <Typography variant="body1">{personalInfo.phone}</Typography>
        <Typography variant="body1">{personalInfo.email}</Typography>
        {personalInfo.dob.length > 0 && (
          <Typography variant="body2" color="text.secondary">
            Fecha de nacimiento: {personalInfo.dob}
          </Typography>
        )}
        {personalInfo.nationality && (
          <Typography variant="body2" color="text.secondary">
            Nacionalidad: {personalInfo.nationality}
          </Typography>
        )}
      </Stack>
    </Box>
  </Box>
);

export default PersonalInfo;
