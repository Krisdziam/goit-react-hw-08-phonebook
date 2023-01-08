import {
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filter,
  getContactFilter,
} from 'redux/contactsSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getContactFilter);

  const onChange = e => {
    dispatch(
      filter(
        e.currentTarget.value.toLocaleLowerCase().trim()
      )
    );
  };
  return (
    <div className={styles.filterContainer}>
      <Card
        sx={{
          width: 500,
          margin: '0 auto',
          padding: ' 0  30px',
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
          <Typography
            sx={{
              paddingBottom: '10px',
            }}
            variant="h5"
          >
            Find contact by name
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter contact name"
            variant="outlined"
            size="small"
            onChange={onChange}
            name="filter"
            type="text"
            value={value}
            autoComplete="off"
            required
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Filter;
