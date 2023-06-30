'use client'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Grid, TextField, Button, Box } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react"

const createArray = (max = 10) => {
  const arr = [];
  for (let index = 0; index < max; index += 1) {
    arr[index] = index;
  }
  return arr;
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRows = (length = 10) =>
  createArray(length).map(item => {

    return {
      name: `Anh${item + 1}`,
      email: `anh${item + 1}@gmail.com`,
      phone: randomNumber(1000000000, 9999999999),
    };
  });


export default function ListUser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getRows(30));
  }, []);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');

  const handleAdd = () => {
    if (inputName && inputEmail && inputPhone !== '') {
      setInputName('');
      setInputEmail('');
      setInputPhone('');
      const newData = [...data, { name: inputName, email: inputEmail, phone: inputPhone }];
      return setData(newData);
    }
  };

  const handleClear = () => {
    setInputName('');
    setInputEmail('');
    setInputPhone('');
  };

  const handleDelete = index => {
    const arrResult = [...data];

    if (index > -1) {
      arrResult.splice(index, 1);
    }

    setData(arrResult);
  };

  return (
    <>
      <Typography variant='h6' paragraph>
        <b>ListUser</b>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <TextField
            label='Name'
            focused
            fullWidth size="small"
            value={inputName}
            onChange={e => setInputName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label='Email'
            focused
            fullWidth size="small"
            value={inputEmail}
            onChange={e => setInputEmail(e.target.value)} />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label='Phone'
            focused
            fullWidth type='number'
            value={inputPhone} size="small"
            onChange={e => setInputPhone(e.target.value)} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Box align='right'>
            <Button variant='outlined' onClick={handleClear}>Clear</Button>{' '}
            <Button variant='contained' onClick={handleAdd}>Add</Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper} variant='outlined'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell><b>Id</b></TableCell>
                  <TableCell><b>Name</b></TableCell>
                  <TableCell><b>Email</b></TableCell>
                  <TableCell align="right"><b>Phone</b></TableCell>
                  <TableCell align="right"><b>Action</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => {
                  const key = index;
                  return (
                    <TableRow
                      key={key}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant='body2'
                          color='primary'
                          component={Link}
                          href={`/user/id:${row.name}`}
                          sx={{
                            cursor: 'pointer',
                            textDecoration: 'none',
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell align="right">{row.phone}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant='outlined'
                          color='error'
                          size="small"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer></Grid>
      </Grid>
    </>
  );
}