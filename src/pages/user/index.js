// 'use client'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Grid, TextField, Button, Box } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react"

function createData(id, name, email, phone) {
  return { id, name, email, phone };
}

const rows = [
  { name: 'Anh1', email: 'anh1@gmail.com', phone: '321231321' },
  { name: 'Anh2', email: 'anh2@gmail.com', phone: '654564654' },
  { name: 'Anh3', email: 'anh3@gmail.com', phone: '987987987' },
];


export default function ListUser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(rows);
  }, []);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');

  const handleAdd = () => {
    const newData = [...data, { name: inputName, email: inputEmail, phone: inputPhone }];
    if (inputName && inputEmail && inputPhone !== '') {
      return setData(newData);
    }
  };

  return (
    <>
      <Typography variant='h6' paragraph>
        <b>ListUser</b>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField label='Name' fullWidth size="small" onChange={e => setInputName(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <TextField label='Email' fullWidth size="small" onChange={e => setInputEmail(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <TextField label='Phone' fullWidth type='number' size="small" onChange={e => setInputPhone(e.target.value)} />
        </Grid>
        <Grid item xs>
          <Box align='right'>
            <Button variant='contained' onClick={handleAdd}>Add</Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper} variant='outlined'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  const dataRender = createData(index + 1, row.name, row.email, row.phone)
                  return (
                    <TableRow
                      key={key}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {dataRender.id}
                      </TableCell>
                      <TableCell>
                        <Typography
                          color='primary'
                          component={Link}
                          href={`/user/id:${dataRender.id}`}
                          sx={{
                            cursor: 'pointer',
                            textDecoration: 'none',
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          {dataRender.name}
                        </Typography>
                      </TableCell>
                      <TableCell>{dataRender.email}</TableCell>
                      <TableCell align="right">{dataRender.phone}</TableCell>
                      <TableCell align="right">
                        <Button variant='outlined' color='error'>
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