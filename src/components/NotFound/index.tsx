import { Container, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
        >
          Go to Home Page
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
