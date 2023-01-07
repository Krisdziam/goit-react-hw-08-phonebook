import { Box, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center ',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: '700',
        }}
      >
        Phonebook... The best solution to save your
        contacts! Just try, and you can not stop!!!
      </Typography>
    </Box>
  );
}
