import {
  Card,
  CardContent,
  Box,
  TextField,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '15px',
      }}
    >
      <Card
        sx={{
          width: 500,
          margin: '0 auto',
          padding: '10px 30px',
          borderRadius: '10px',
          color: 'rgb(0, 0, 0)',
          backgroundColor: 'rgba(244, 244, 246, 0.4)',
          boxShadow: 'rgb(0 0 0 / 20%) 5px 5px 23px 9px',
        }}
        variant="outlined"
      >
        <CardContent
          sx={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <label className={styles.label}>
              Email
              <TextField
                sx={{
                  marginTop: '10px',
                }}
                id="outlined-basic"
                label="Enter Email"
                variant="outlined"
                size="small"
                type="email"
                name="email"
                required
              />
            </label>
            <label className={styles.label}>
              Password
              <TextField
                sx={{
                  marginTop: '10px',
                }}
                id="outlined-basic"
                label="Enter Password"
                variant="outlined"
                size="small"
                type="password"
                name="password"
                required
              />
            </label>
            <Button variant="contained" type="submit">
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
