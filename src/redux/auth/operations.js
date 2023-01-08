import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL =
  'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
Register
 */
export const register = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      const res = await axios.post(
        '/users/signup',
        credentials
      );

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const codeError = error.response.status;
      if (codeError === 400) {
        toast.error(`You are already registered`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
      } else if (codeError === 500) {
        toast.error(`Server Error`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
      } else {
        toast.error(`Something went wrong`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
      }
    }
  }
);

/*
Log In
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async credentials => {
    try {
      const res = await axios.post(
        '/users/login',
        credentials
      );

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const codeError = error.response.status;
      if (codeError === 400) {
        toast.error(`Invalid email and/or password`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
      }
    }
  }
);

/*
Log Out
 */
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');

      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
Refresh User
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(
        'Unable to fetch user'
      );
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      clearAuthHeader();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
