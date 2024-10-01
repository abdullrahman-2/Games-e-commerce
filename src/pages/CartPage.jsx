import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Button, Typography } from '@mui/material';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("SelectedGame"));
    setCartItems(storedItems || []);
  }, []);

  function getTotal() {
    return cartItems.reduce((acc, curr) => acc + curr.attributes.Price * curr.quantity, 0);
  }

  function handleDelete(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    localStorage.setItem("SelectedGame", JSON.stringify(cartItems.filter(item => item.id !== id)));
  }

  return (
    <Container sx={{ mt: 10, padding: 2 }}>
      <TableContainer component={Paper}>
        <Table sx={{ overflowX: 'auto' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "20px" }}>Game</TableCell>
              <TableCell sx={{ fontSize: "20px" }} align="right">Price</TableCell>
              <TableCell sx={{ fontSize: "20px" }} align="right">Quantity</TableCell>
              <TableCell sx={{ fontSize: "20px" }} align="right">Image</TableCell>
              <TableCell sx={{ fontSize: "20px" }} align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((row) => (
              <TableRow id={row.id} key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell sx={{ fontSize: { lg: "30px", sm: "20px" } }} component="th" scope="row">
                  {row.attributes.ProductTitle}
                </TableCell>
                <TableCell sx={{ fontSize: { lg: "30px", sm: "20px" }}} align="right">
                  {row.attributes.Price}$
                </TableCell>
                <TableCell sx={{ fontSize: { lg: "30px", sm: "20px" }}} align="right">
                  {row.quantity}
                </TableCell>
                <TableCell align="right">
                  <img
                    style={{ maxWidth: '100%', height: 'auto' }}
                    src={row.attributes.image.data[0].attributes.url}
                    alt="Game"
                  />
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleDelete(row.id)}
                    sx={{ fontSize: { lg: "30px", sm: "20px" }}}
                    color= "error" >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
                    ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography textAlign={"center"} variant="h5">Total price {getTotal()}$</Typography>
      <Button variant="text" sx={{ width: '100%', marginTop: 2 }}>Buy Now</Button>
    </Container>
  );
}

export default Cart;