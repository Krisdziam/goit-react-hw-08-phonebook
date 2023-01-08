import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Card,
  CardContent,
  Box,
  TextField,
  Button,
} from '@mui/material';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
              Username
              <TextField
                sx={{
                  marginTop: '10px',
                }}
                id="outlined-basic"
                label="Enter Username"
                variant="outlined"
                size="small"
                type="text"
                name="name"
                required
              />
            </label>
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
              Register
            </Button>
          </form>
        </CardContent>{' '}
      </Card>
    </Box>
  );
}
